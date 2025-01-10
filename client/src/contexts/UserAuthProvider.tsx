import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { jwtDecode } from 'jwt-decode'
import { toast } from 'react-toastify'

import { useRegister, useLogin } from '@/hooks/data/useAuth'
import { verifyToken } from '@/services/auth'
import { IUserAccountData, IRegisterService } from '@/types/admin'

// ------------------------------------------------------------------------

interface IUserAuthContextData {
  isUserLogged: boolean
  userAccountData: IUserAccountData | null
  handleLogin: (credentials: {
    email: string
    password: string
  }) => Promise<boolean>
  handleRegister: (userData: IRegisterService) => Promise<boolean>
  handleLogout: () => void
}

// ------------------------------------------------------------------------

export const UserAuthContext = createContext<IUserAuthContextData>(
  {} as IUserAuthContextData
)

const UserAuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Estados relacionados ao AuthContext
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false)
  const [userAccountData, setUserAccountData] =
    useState<IUserAccountData | null>(null)

  const [token, setToken] = useState<string | null>(null)
  const [tokenExpiration, setTokenExpiration] = useState<number | null>(null)

  // Obtém as funções de registro e login nos hooks
  const { mutateAsync: register } = useRegister()
  const { mutateAsync: login } = useLogin()

  // Função de login
  const handleLogin = async (credentials: {
    email: string
    password: string
  }) => {
    try {
      const response = await login(credentials)
      const { token } = response
      const decodedToken: any = jwtDecode(token)
      setTokenExpiration(decodedToken.exp * 1000)

      await verifyCurrentUser(token)

      localStorage.setItem('token', token)
      localStorage.setItem(
        'tokenExpiration',
        (decodedToken.exp * 1000).toString()
      )
      setToken(token)
      setIsUserLogged(true)
      return true
    } catch (error: any) {
      toast(error.message)
      return false
    }
  }

  // Função de registro
  const handleRegister = async (userData: IRegisterService) => {
    const defaultPayload = {
      role: 'user'
    }

    try {
      const response = await register({ ...userData, ...defaultPayload })
      const { token } = response
      const decodedToken: any = jwtDecode(token)
      setTokenExpiration(decodedToken.exp * 1000)

      await verifyCurrentUser(token)

      localStorage.setItem('token', token)
      localStorage.setItem(
        'tokenExpiration',
        (decodedToken.exp * 1000).toString()
      )
      setToken(token)
      setIsUserLogged(true)
      toast('Sucesso! Seja bem-vindo')
      return true
    } catch (error: any) {
      toast(error.message)
      return false
    }
  }

  // Função de logout
  const handleLogout = () => {
    setToken(null)
    setUserAccountData(null)
    setIsUserLogged(false)
    setTokenExpiration(null)
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
  }

  // Função para verificar token e recuperar dados de user
  const verifyCurrentUser = async (token: string) => {
    try {
      const response = await verifyToken(token)
      setUserAccountData(response)
    } catch (error) {
      handleLogout()
    }
  }

  // Checar validade do token armazenado
  const checkTokenValidity = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpiration = localStorage.getItem('tokenExpiration')

    if (storedToken && storedExpiration) {
      const expirationTime = parseInt(storedExpiration)
      if (Date.now() > expirationTime) {
        handleLogout()
      } else {
        setToken(storedToken)
        setTokenExpiration(expirationTime)
        verifyCurrentUser(storedToken)
        setIsUserLogged(true)
      }
    }
  }

  // Setup inicial para verificar token
  useEffect(() => {
    checkTokenValidity()

    const interval = setInterval(() => {
      if (Date.now() > (tokenExpiration || 0)) {
        handleLogout()
      }
    }, 1000 * 60 * 5) // A cada 5 minutos

    return () => clearInterval(interval)
  }, [tokenExpiration, token])

  // Memorizar o valor do contexto
  const UserAuthContextData: IUserAuthContextData = useMemo(() => {
    return {
      isUserLogged,
      userAccountData,
      handleLogin,
      handleRegister,
      handleLogout
    }
  }, [isUserLogged, userAccountData])

  return (
    <UserAuthContext.Provider value={UserAuthContextData}>
      {children}
    </UserAuthContext.Provider>
  )
}

function useUserAuth(): IUserAuthContextData {
  const context = useContext(UserAuthContext)
  if (!context)
    throw new Error('useUserAuth deve ser usado dentro de UserAuthProvider')
  return context
}

export { UserAuthProvider, useUserAuth }
