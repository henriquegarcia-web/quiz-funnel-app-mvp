import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import {
  fetchUserProfile,
  fetchUsersProfiles,
  deleteUser,
  toggleUserBlock
} from '@/services/user'
import { IUserAccountData } from '@/types/admin'

const useUserProfile = (userId: string) => {
  return useQuery<IUserAccountData>({
    queryKey: ['userProfile', userId],
    queryFn: async () => {
      const user = await fetchUserProfile(userId)
      return user
    },
    enabled: !!userId
  })
}

const useAllUsersProfile = (isUserLogged: boolean) => {
  return useQuery<IUserAccountData[]>({
    queryKey: ['usersProfiles'],
    queryFn: async () => {
      const users = await fetchUsersProfiles()
      return users
    },
    enabled: isUserLogged
  })
}

const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: { userId: string }) => deleteUser(data.userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['usersProfiles'] })
    }
  })
}

const useToggleUserBlock = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: { userId: string; blockStatus: boolean }) =>
      toggleUserBlock(data.userId, data.blockStatus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['usersProfiles'] })
    }
  })
}

export { useUserProfile, useAllUsersProfile, useDeleteUser, useToggleUserBlock }
