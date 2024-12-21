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
import { IAdminAccountData } from '@/types/admin'

// ------------------------------------------------------------------------

interface IAdminAuthContextData {
  isAdminLogged: boolean
  adminAccountData: IAdminAccountData | null
  handleLogin: (credentials: {
    email: string
    password: string
  }) => Promise<boolean>
  handleRegister: (adminData: {
    name: string
    email: string
    password: string
  }) => Promise<boolean>
  handleLogout: () => void
}

// ------------------------------------------------------------------------

export const AdminAuthContext = createContext<IAdminAuthContextData>(
  {} as IAdminAuthContextData
)

const AdminAuthProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================

  const [isAdminLogged, setIsAdminLogged] = useState<boolean>(false)
  const [adminAccountData, setAdminAccountData] =
    useState<IAdminAccountData | null>(null)

  const [token, setToken] = useState<string | null>(null)
  const [tokenExpiration, setTokenExpiration] = useState<number | null>(null)

  const { mutateAsync: register } = useRegister()
  const { mutateAsync: login } = useLogin()

  const handleLogin = async (credentials: {
    email: string
    password: string
  }) => {
    try {
      const response = await login(credentials)
      const { token } = response
      const decodedToken: any = jwtDecode(token)
      setTokenExpiration(decodedToken.exp * 1000)

      await verifyCurrentAdmin(token)

      localStorage.setItem('token', token)
      localStorage.setItem(
        'tokenExpiration',
        (decodedToken.exp * 1000).toString()
      )
      setToken(token)
      setIsAdminLogged(true)

      toast('Sucesso! Seja bem-vindo')
      return true
    } catch (error: any) {
      console.error('Falha ao realizar login', error)
      toast(error.message)
      return false
    }
  }

  const handleRegister = async (adminData: {
    name: string
    email: string
    password: string
  }) => {
    try {
      const response = await register(adminData)
      const { token } = response
      const decodedToken: any = jwtDecode(token)
      setTokenExpiration(decodedToken.exp * 1000)

      await verifyCurrentAdmin(token)

      localStorage.setItem('token', token)
      localStorage.setItem(
        'tokenExpiration',
        (decodedToken.exp * 1000).toString()
      )
      setToken(token)
      setIsAdminLogged(true)

      toast('Sucesso! Seja bem-vindo')
      return true
    } catch (error: any) {
      console.error('Falha ao realizar cadastro', error)
      toast(error.message)
      return false
    }
  }

  const handleLogout = () => {
    setToken(null)
    setAdminAccountData(null)
    setTokenExpiration(null)
    localStorage.removeItem('token')
    localStorage.removeItem('tokenExpiration')
    setIsAdminLogged(false)
  }

  const verifyCurrentAdmin = async (token: string) => {
    try {
      const response = await verifyToken(token)
      setAdminAccountData(response)
    } catch (error) {
      console.error('Falha na verificação do Token', error)
      handleLogout()
    }
  }

  const checkTokenValidity = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpiration = localStorage.getItem('tokenExpiration')

    if (storedToken && storedExpiration) {
      const expirationTime = parseInt(storedExpiration)
      const currentTime = Date.now()

      if (currentTime > expirationTime) {
        handleLogout()
      } else {
        setToken(storedToken)
        setTokenExpiration(expirationTime)
        verifyCurrentAdmin(storedToken)
        setIsAdminLogged(true)
      }
    }
  }

  useEffect(() => {
    checkTokenValidity()

    const interval = setInterval(() => {
      const currentTime = Date.now()
      if (tokenExpiration && currentTime > tokenExpiration) {
        handleLogout()
      } else if (token) {
        verifyCurrentAdmin(token)
      }
    }, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [token, tokenExpiration])

  // ========================================================================

  const AdminAuthContextData: IAdminAuthContextData = useMemo(() => {
    return {
      isAdminLogged,
      adminAccountData,
      handleLogin,
      handleRegister,
      handleLogout
    }
  }, [isAdminLogged, adminAccountData])

  return (
    <AdminAuthContext.Provider value={AdminAuthContextData}>
      {children}
    </AdminAuthContext.Provider>
  )
}

function useAdminAuth(): IAdminAuthContextData {
  const context = useContext(AdminAuthContext)

  if (!context) throw new Error('useAuth must be used within a AdminProvider')

  return context
}

export { AdminAuthProvider, useAdminAuth }
