import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
  fetchAdminProfile,
  fetchAdminsProfiles,
  deleteAdmin,
  toggleAdminBlock
} from '@/services/admin'
import { IAdminAccountData } from '@/types/admin'

const useAdminProfile = (adminId: string) => {
  return useQuery<IAdminAccountData>({
    queryKey: ['adminProfile', adminId],
    queryFn: async () => {
      const admin = await fetchAdminProfile(adminId)
      return admin
    },
    enabled: !!adminId
  })
}

const useAllAdminsProfile = (isAdminLogged: boolean) => {
  return useQuery<IAdminAccountData[]>({
    queryKey: ['adminsProfiles'],
    queryFn: async () => {
      const admins = await fetchAdminsProfiles()
      return admins
    },
    enabled: isAdminLogged
  })
}

const useDeleteAdmin = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: { adminId: string }) => deleteAdmin(data.adminId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminsProfiles'] })
    }
  })
}

const useToggleAdminBlock = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: { adminId: string; blockStatus: boolean }) =>
      toggleAdminBlock(data.adminId, data.blockStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminsProfiles'] })
    }
  })
}

export {
  useAdminProfile,
  useAllAdminsProfile,
  useDeleteAdmin,
  useToggleAdminBlock
}
