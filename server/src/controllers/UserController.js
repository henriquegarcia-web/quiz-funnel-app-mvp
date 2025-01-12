// controllers/UserController.js

import {
  handleRegisterUserAccess,
  handleGetUserProfile,
  handleGetAllUsers,
  handleDeleteUser,
  handleToggleUserBlock
} from '../services/UserService.js'

export const getUserProfile = async (req, res) => {
  try {
    const User = await handleGetUserProfile(req.params.UserId)

    const formattedUser = {
      id: User._id,
      email: User.email,
      name: User.name,
      blocked: User.blocked,
      firstAccess: User.firstAccess,
      role: User.role
    }

    res.status(200).json(formattedUser)
  } catch (error) {
    res
      .status(404)
      .json({ code: 'USER_NOT_FOUND', message: 'Usuário não encontrado' })
  }
}

export const getAllUsersProfile = async (req, res) => {
  try {
    const Users = await handleGetAllUsers()

    const formattedUsers = Users.map((User) => ({
      id: User._id,
      email: User.email,
      name: User.name,
      blocked: User.blocked,
      firstAccess: User.firstAccess,
      role: User.role
    }))

    res.status(200).json(formattedUsers)
  } catch (error) {
    res
      .status(404)
      .json({ code: 'USER_NOT_FOUND', message: 'Usuário não encontrado' })
  }
}

export const registerUserAccess = async (req, res) => {
  const { email, role } = req.body

  try {
    const registerResponse = await handleRegisterUserAccess({
      email,
      role
    })
    res.status(201).json(registerResponse)
  } catch (error) {
    res.status(400).json({
      code: error.code || 'REGISTRATION_FAILED',
      message: error.message || 'Falha no registro do usuário'
    })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await handleDeleteUser(req.params.UserId)
    res
      .status(200)
      .json({ message: 'Usuário deletado com sucesso', User: deletedUser })
  } catch (error) {
    console.log(error)
    if (error.message === 'User not found') {
      res
        .status(404)
        .json({ code: 'USER_NOT_FOUND', message: 'Usuário não encontrado' })
    } else {
      res.status(500).json({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Erro ao deletar usuário'
      })
    }
  }
}

export const toggleUserBlock = async (req, res) => {
  try {
    const { UserId } = req.params
    const { blockStatus } = req.body
    const updatedUser = await handleToggleUserBlock(UserId, blockStatus)
    const action = blockStatus ? 'bloqueado' : 'desbloqueado'
    res
      .status(200)
      .json({ message: `Usuário ${action} com sucesso`, User: updatedUser })
  } catch (error) {
    if (error.message === 'User not found') {
      res
        .status(404)
        .json({ code: 'USER_NOT_FOUND', message: 'Usuário não encontrado' })
    } else {
      res.status(500).json({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Erro ao alterar status de bloqueio do usuário'
      })
    }
  }
}
