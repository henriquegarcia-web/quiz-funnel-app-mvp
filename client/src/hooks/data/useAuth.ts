import { useMutation } from '@tanstack/react-query'

import { queryClient } from '@/lib/react-query'
import { registerAccess, register, login } from '@/services/auth'

const useRegisterAccess = () => {
  return useMutation({
    mutationFn: registerAccess,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['adminsProfiles'] })
    }
  })
}

const useRegister = () => {
  return useMutation({
    mutationFn: register
  })
}

const useLogin = () => {
  return useMutation({
    mutationFn: login
  })
}

export { useRegisterAccess, useRegister, useLogin }
