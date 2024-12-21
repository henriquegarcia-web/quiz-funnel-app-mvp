import api from '@/lib/fetch'

const fetchAdminProfile = async (adminId: string) => {
  try {
    const response = await api.get(`/admin/profile/${adminId}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const fetchAdminsProfiles = async () => {
  try {
    const response = await api.get('/admin/profiles')
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const deleteAdmin = async (adminId: string) => {
  try {
    const response = await api.delete(`/admin/delete/${adminId}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

const toggleAdminBlock = async (adminId: string, blockStatus: boolean) => {
  try {
    const response = await api.put(`/admin/block/${adminId}`, { blockStatus })
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

export { fetchAdminProfile, fetchAdminsProfiles, deleteAdmin, toggleAdminBlock }
