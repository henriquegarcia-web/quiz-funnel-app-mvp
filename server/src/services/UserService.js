// services/UserService.js

import User from '../models/User.js'

class AuthError extends Error {
  constructor(code, message) {
    super(message)
    this.code = code
  }
}

export const handleGetUserProfile = async (userId) => {
  const user = await User.findById(userId).select('-password')
  if (!user) {
    throw new Error('User not found')
  }
  return user
}

export const handleGetAllUsers = async () => {
  try {
    const users = await User.find().select('-password')
    if (users.length === 0) return []
    return users
  } catch (error) {
    console.error('Error fetching users:', error)
    throw new Error('Failed to fetch users')
  }
}

export const handleRegisterUserAccess = async (userData) => {
  try {
    const existingUser = await User.findOne({ email: userData.email })
    if (existingUser) {
      throw new AuthError('USER_EXISTS', 'Email já está em uso.')
    }

    const user = new User({ ...userData })
    await user.save()

    return { user }
  } catch (error) {
    if (error.code === 11000) {
      throw new AuthError('USER_EXISTS', 'Email já está em uso.')
    }
    throw new AuthError('REGISTRATION_ERROR', 'Erro ao registrar usuário')
  }
}

export const handleDeleteUser = async (userId) => {
  try {
    const deletedUser = await User.findByIdAndDelete(userId)
    console.log(deletedUser)
    if (!deletedUser) {
      throw new Error('User not found')
    }
    return deletedUser
  } catch (error) {
    console.error('Error deleting user:', error)
    throw new Error('Failed to delete user')
  }
}

export const handleToggleUserBlock = async (userId, blockStatus) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { blocked: blockStatus },
      { new: true }
    ).select('-password')
    if (!updatedUser) {
      throw new Error('User not found')
    }
    return updatedUser
  } catch (error) {
    console.error('Error toggling user block status:', error)
    throw new Error('Failed to toggle user block status')
  }
}
