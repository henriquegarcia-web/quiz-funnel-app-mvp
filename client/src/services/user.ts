// services/user.ts

import api from '@/lib/fetch'

const fetchUserProfile = async (userId: string) => {
  try {
    const response = await api.get(`/user/profile/${userId}`)
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

export { fetchUserProfile }
