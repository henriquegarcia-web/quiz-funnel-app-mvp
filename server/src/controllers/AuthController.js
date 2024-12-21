import jwt from 'jsonwebtoken'
import {
  handleRegisterAdmin,
  handleLoginAdmin,
  handleGetAdminById
} from '../services/AuthService.js'
import { authConfig } from '../config/auth.js'

export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body

  try {
    const registerResponse = await handleRegisterAdmin({
      name,
      email,
      password
    })
    res.status(201).json(registerResponse)
  } catch (error) {
    res.status(400).json({
      code: error.code || 'REGISTRATION_FAILED',
      message: error.message || 'Falha no registro do usuário'
    })
  }
}

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body

  try {
    const loginResponse = await handleLoginAdmin({ email, password })
    res.status(200).json(loginResponse)
  } catch (error) {
    res.status(401).json({
      code: error.code || 'LOGIN_FAILED',
      message: error.message || 'Falha no login, email ou senha inválidos'
    })
  }
}

export const verifyToken = async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res
      .status(401)
      .json({ code: 'ACCESS_DENIED', message: 'Token não fornecido' })
  }

  try {
    const decoded = jwt.verify(token, authConfig.jwtSecret)
    const admin = await handleGetAdminById(decoded.id)
    if (!admin) {
      return res
        .status(404)
        .json({ code: 'USER_NOT_FOUND', message: 'Usuário não encontrado' })
    }
    res.status(200).json({
      id: admin._id,
      email: admin.email,
      name: admin.name,
      blocked: admin.blocked,
      firstAccess: admin.firstAccess,
      role: admin.role
    })
  } catch (error) {
    res.status(400).json({ code: 'INVALID_TOKEN', message: 'Token inválido' })
  }
}
