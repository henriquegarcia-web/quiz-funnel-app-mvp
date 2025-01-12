// contexts/UserProvider.tsx

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { useQueryClient } from '@tanstack/react-query'

import { useUserAuth } from '@/contexts/UserAuthProvider'
import { ADMIN_SIDE_MENU_ITEMS, ADMIN_MENU_ITEMS, IMenu } from '@/data/admin'
import { useCreateQuiz, useUserQuizzes } from '@/hooks/data/useQuiz'
import { IFunnel, IFunnelService } from '@/data/mock'
import { deleteQuiz } from '@/services/quiz'
import { message } from 'antd'

// ------------------------------------------------------------------------

export type ThemeType = 'dark' | 'light'

interface IUserContextData {
  isOperationsLoading: boolean
  activeMenu: IMenu | null
  quizzesData: {
    data: IFunnel[] | undefined
    isLoading: boolean
    error: Error | null
  }
  handleMenuClick: (menu: IMenu | null) => void
  handleCreateQuiz: (quizData: IFunnelService) => Promise<IFunnel | null>
  handleDeleteQuiz: (quizId: string) => Promise<boolean>
}

// ------------------------------------------------------------------------

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================
  const { isUserLogged, userAccountData } = useUserAuth()
  const queryClient = useQueryClient()

  const [isOperationsLoading, setOperationsLoading] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<IMenu | null>(
    ADMIN_SIDE_MENU_ITEMS[0]
  )

  const quizzesData = useUserQuizzes(isUserLogged)
  const { mutateAsync: createQuiz } = useCreateQuiz()

  // ============================================= SIDE MENU FUNCTIONS

  const handleMenuClick = (menu: IMenu | null) => {
    setActiveMenu(menu || null)
  }

  // ============================================= QUIZ FUNCTIONS

  // Função de Criar Quiz
  const handleCreateQuiz = async (quizData: IFunnelService) => {
    try {
      setOperationsLoading(true)
      const response = await createQuiz(quizData)
      message.success('Quiz criado com sucesso!')
      return response
    } catch (error: any) {
      message.error('Falha ao criar o Quiz, tente novamente.')
      return null
    } finally {
      setOperationsLoading(false)
    }
  }

  // Função de Deletar Quiz
  const handleDeleteQuiz = async (quizId: string) => {
    try {
      setOperationsLoading(true)
      const response = await deleteQuiz(quizId)
      message.success('Quiz deletado com sucesso!')
      return response
    } catch (error: any) {
      message.error('Falha ao deletar o Quiz, tente novamente.')
      return null
    } finally {
      setOperationsLoading(false)
    }
  }

  // useEffect(() => {
  //   console.log(quizzesData.data)
  // }, [quizzesData])

  // ========================================================================

  const UserContextData: IUserContextData = useMemo(() => {
    return {
      isOperationsLoading,
      activeMenu,
      quizzesData: {
        data: quizzesData.data,
        isLoading: quizzesData.isLoading,
        error: quizzesData.error
      },
      handleMenuClick,
      handleCreateQuiz,
      handleDeleteQuiz
    }
  }, [isOperationsLoading, activeMenu, quizzesData])

  return (
    <UserContext.Provider value={UserContextData}>
      {children}
    </UserContext.Provider>
  )
}

function useUser(): IUserContextData {
  const context = useContext(UserContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export { UserProvider, useUser }
