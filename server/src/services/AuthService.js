// Atualizando handleRegisterUser em AuthService.js
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import { authConfig } from '../config/auth.js'

class AuthError extends Error {
  constructor(code, message) {
    super(message)
    this.code = code
  }
}

const formatUser = (user) => {
  return {
    id: user._id,
    personalInfo: user.personalInfo,
    contactInfo: user.contactInfo,
    preferences: user.preferences,
    subscription: user.subscription,
    funnels: user.funnels,
    blocked: user.blocked,
    role: user.role
  }
}

export const handleRegisterUser = async (userData) => {
  try {
    const existingUser = await User.findOne({
      'contactInfo.email': userData.email
    })

    if (existingUser) {
      throw new AuthError('USER_EXISTS', 'Usuário já cadastrado.')
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10)

    const newUser = new User({
      personalInfo: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        dateOfBirth: userData.dateOfBirth,
        gender: userData.gender
      },
      contactInfo: {
        email: userData.email,
        phone: userData.phone,
        address: userData.address
      },
      password: hashedPassword,
      role: userData.role
    })

    const savedUser = await newUser.save()

    const token = jwt.sign(
      {
        id: savedUser._id,
        email: savedUser.contactInfo.email,
        name: `${savedUser.personalInfo.firstName} ${savedUser.personalInfo.lastName}`
      },
      authConfig.jwtSecret,
      { expiresIn: authConfig.jwtExpiresIn }
    )

    return { user: formatUser(savedUser), token }
  } catch (error) {
    throw new AuthError(
      'REGISTRATION_ERROR',
      error.message || 'Erro ao cadastrar usuário'
    )
  }
}

export const handleLoginUser = async ({ email, password }) => {
  const user = await User.findOne({ 'contactInfo.email': email })
  if (!user) {
    throw new AuthError('USER_NOT_FOUND', 'Usuário não encontrado')
  }

  if (user.blocked) {
    throw new AuthError('USER_BLOCKED', 'Usuário bloqueado')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new AuthError('INVALID_PASSWORD', 'Senha inválida')
  }

  const formattedUser = formatUser(user)

  const token = jwt.sign(
    {
      id: user._id,
      email: user.contactInfo.email,
      name: `${user.personalInfo.firstName} ${user.personalInfo.lastName}`
    },
    authConfig.jwtSecret,
    { expiresIn: authConfig.jwtExpiresIn }
  )

  return { user: formattedUser, token }
}

export const handleGetUserById = async (userId) => {
  const user = await User.findById(userId).select('-password')
  if (!user) {
    throw new AuthError('USER_NOT_FOUND', 'Usuário não encontrado')
  }
  return formatUser(user)
}
