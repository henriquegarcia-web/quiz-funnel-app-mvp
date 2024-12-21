import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Admin from '../models/Admin.js'
import { authConfig } from '../config/auth.js'

class AuthError extends Error {
  constructor(code, message) {
    super(message)
    this.code = code
  }
}

const formatAdmin = (admin) => {
  return {
    id: admin._id,
    email: admin.email,
    name: admin.name,
    blocked: admin.blocked,
    firstAccess: admin.firstAccess,
    role: admin.role,
    theme: admin.theme
  }
}

export const handleRegisterAdmin = async (adminData) => {
  try {
    const existingAdmin = await Admin.findOne({ email: adminData.email })
    if (!existingAdmin) {
      throw new AuthError('USER_NOT_APROVED', 'Email não está aprovado.')
    }

    if (existingAdmin.blocked) {
      throw new AuthError('USER_BLOCKED', 'Usuário bloqueado')
    }

    if (!existingAdmin.firstAccess) {
      throw new AuthError('USER_EXISTS', 'Usuário já cadastrado.')
    }

    const hashedPassword = await bcrypt.hash(adminData.password, 10)

    const updatedAdmin = await Admin.findOneAndUpdate(
      { email: adminData.email },
      {
        ...adminData,
        firstAccess: false,
        password: hashedPassword
      },
      { new: true, runValidators: true }
    )

    if (!updatedAdmin) {
      throw new AuthError('USER_UPDATE_FAILED', 'Falha ao atualizar o usuário.')
    }

    const token = jwt.sign(
      {
        id: updatedAdmin._id,
        email: updatedAdmin.email,
        name: updatedAdmin.name
      },
      authConfig.jwtSecret,
      { expiresIn: authConfig.jwtExpiresIn }
    )

    const formattedAdmin = formatAdmin(updatedAdmin)

    return { admin: formattedAdmin, token }
  } catch (error) {
    if (error instanceof AuthError) {
      throw error
    }
    throw new AuthError('REGISTRATION_ERROR', 'Erro ao registrar usuário')
  }
}

export const handleLoginAdmin = async ({ email, password }) => {
  const admin = await Admin.findOne({ email })
  if (!admin) {
    throw new AuthError('USER_NOT_FOUND', 'Usuário não encontrado')
  }

  if (admin.blocked) {
    throw new AuthError('USER_BLOCKED', 'Usuário bloqueado')
  }

  if (admin.firstAccess) {
    throw new AuthError(
      'USER_FIRST_ACCESS',
      'Esse é seu primeiro acesso, selecione o marcador "Primeiro Acesso"'
    )
  }

  const isPasswordValid = await bcrypt.compare(password, admin.password)
  if (!isPasswordValid) {
    throw new AuthError('INVALID_PASSWORD', 'Senha inválida')
  }

  const formattedAdmin = formatAdmin(admin)

  const token = jwt.sign(
    { id: admin._id, email: admin.email, name: admin.name },
    authConfig.jwtSecret,
    { expiresIn: authConfig.jwtExpiresIn }
  )

  return { admin: formattedAdmin, token }
}

export const handleGetAdminById = async (adminId) => {
  return Admin.findById(adminId).select('-password')
}
