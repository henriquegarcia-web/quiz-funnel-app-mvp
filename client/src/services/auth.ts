import api from '@/lib/fetch'
import {
  ILoginService,
  IRegisterAccessService,
  IRegisterService
} from '@/types/admin'

const registerAccess = async (adminData: IRegisterAccessService) => {
  try {
    const response = await api.post('/auth/register-access', adminData)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const register = async (adminData: IRegisterService) => {
  try {
    const response = await api.post('/auth/register', adminData)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const login = async (credentials: ILoginService) => {
  try {
    const response = await api.post('/auth/login', credentials)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

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

export { registerAccess, register, login, verifyToken }
