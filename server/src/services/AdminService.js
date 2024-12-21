import Admin from '../models/Admin.js'

class AuthError extends Error {
  constructor(code, message) {
    super(message)
    this.code = code
  }
}

export const handleGetAdminProfile = async (adminId) => {
  const admin = await Admin.findById(adminId).select('-password')
  if (!admin) {
    throw new Error('Admin not found')
  }
  return admin
}

export const handleGetAllAdmins = async () => {
  try {
    const admins = await Admin.find().select('-password')
    if (admins.length === 0) return []
    return admins
  } catch (error) {
    console.error('Error fetching admins:', error)
    throw new Error('Failed to fetch admins')
  }
}

export const handleRegisterAdminAccess = async (adminData) => {
  try {
    const existingAdmin = await Admin.findOne({ email: adminData.email })
    if (existingAdmin) {
      throw new AuthError('USER_EXISTS', 'Email já está em uso.')
    }

    const admin = new Admin({ ...adminData })
    await admin.save()

    return { admin }
  } catch (error) {
    if (error.code === 11000) {
      throw new AuthError('USER_EXISTS', 'Email já está em uso.')
    }
    throw new AuthError('REGISTRATION_ERROR', 'Erro ao registrar usuário')
  }
}

export const handleDeleteAdmin = async (adminId) => {
  try {
    const deletedAdmin = await Admin.findByIdAndDelete(adminId)
    console.log(deletedAdmin)
    if (!deletedAdmin) {
      throw new Error('Admin not found')
    }
    return deletedAdmin
  } catch (error) {
    console.error('Error deleting admin:', error)
    throw new Error('Failed to delete admin')
  }
}

export const handleToggleAdminBlock = async (adminId, blockStatus) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(
      adminId,
      { blocked: blockStatus },
      { new: true }
    ).select('-password')
    if (!updatedAdmin) {
      throw new Error('Admin not found')
    }
    return updatedAdmin
  } catch (error) {
    console.error('Error toggling admin block status:', error)
    throw new Error('Failed to toggle admin block status')
  }
}
