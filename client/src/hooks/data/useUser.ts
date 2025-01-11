import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { fetchUserProfile } from '@/services/user'
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

export { useUserProfile }
