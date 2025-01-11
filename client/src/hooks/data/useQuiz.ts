import { useMutation, useQuery } from '@tanstack/react-query'

import { queryClient } from '@/lib/react-query'
import { fetchUserQuizzes, createQuiz, deleteQuiz } from '@/services/quiz'
import { IFunnel } from '@/data/mock'

const useUserQuizzes = (isUserLogged: boolean) => {
  return useQuery<IFunnel[]>({
    queryKey: ['userQuizzes'],
    queryFn: async () => {
      const users = await fetchUserQuizzes()
      return users
    },
    enabled: isUserLogged
  })
}

const useCreateQuiz = () => {
  return useMutation({
    mutationFn: createQuiz,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userQuizzes'] })
    }
  })
}

// const useDeleteQuiz = (quizId: string) => {
//   return useMutation({
//     mutationFn: () => deleteQuiz(quizId),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['userQuizzes'] })
//     },
//     enabled: !!quizId
//   })
// }

export { useUserQuizzes, useCreateQuiz }
