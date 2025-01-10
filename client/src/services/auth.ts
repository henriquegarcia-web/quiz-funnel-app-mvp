import api from '@/lib/fetch'
import { IRegisterService, ILoginService } from '@/types/admin'

// Serviço de Cadastro
const register = async (adminData: IRegisterService) => {
  try {
    const response = await api.post('/auth/register', adminData)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

// Serviço de Login
const login = async (credentials: ILoginService) => {
  try {
    const response = await api.post('/auth/login', credentials)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

// Verificar Token Atual
const verifyToken = async (token: string) => {
  try {
    const response = await api.get('/auth/verify-token', {
      headers: { Authorization: `Bearer ${token}` }
    })
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

export { register, login, verifyToken }
