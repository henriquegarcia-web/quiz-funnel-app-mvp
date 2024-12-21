import {
  handleRegisterAdminAccess,
  handleGetAdminProfile,
  handleGetAllAdmins,
  handleDeleteAdmin,
  handleToggleAdminBlock
} from '../services/AdminService.js'

export const getAdminProfile = async (req, res) => {
  try {
    const admin = await handleGetAdminProfile(req.params.adminId)

    const formattedAdmin = {
      id: admin._id,
      email: admin.email,
      name: admin.name,
      blocked: admin.blocked,
      firstAccess: admin.firstAccess,
      role: admin.role
    }

    res.status(200).json(formattedAdmin)
  } catch (error) {
    res
      .status(404)
      .json({ code: 'USER_NOT_FOUND', message: 'Usuário não encontrado' })
  }
}

export const getAllAdminsProfile = async (req, res) => {
  try {
    const admins = await handleGetAllAdmins()

    const formattedAdmins = admins.map((admin) => ({
      id: admin._id,
      email: admin.email,
      name: admin.name,
      blocked: admin.blocked,
      firstAccess: admin.firstAccess,
      role: admin.role
    }))

    res.status(200).json(formattedAdmins)
  } catch (error) {
    res
      .status(404)
      .json({ code: 'USER_NOT_FOUND', message: 'Usuário não encontrado' })
  }
}

export const registerAdminAccess = async (req, res) => {
  const { email, role } = req.body

  try {
    const registerResponse = await handleRegisterAdminAccess({
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

export const deleteAdmin = async (req, res) => {
  try {
    const deletedAdmin = await handleDeleteAdmin(req.params.adminId)
    res
      .status(200)
      .json({ message: 'Usuário deletado com sucesso', admin: deletedAdmin })
  } catch (error) {
    console.log(error)
    if (error.message === 'Admin not found') {
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

export const toggleAdminBlock = async (req, res) => {
  try {
    const { adminId } = req.params
    const { blockStatus } = req.body
    const updatedAdmin = await handleToggleAdminBlock(adminId, blockStatus)
    const action = blockStatus ? 'bloqueado' : 'desbloqueado'
    res
      .status(200)
      .json({ message: `Usuário ${action} com sucesso`, admin: updatedAdmin })
  } catch (error) {
    if (error.message === 'Admin not found') {
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
