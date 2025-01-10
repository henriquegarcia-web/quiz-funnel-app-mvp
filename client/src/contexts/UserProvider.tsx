import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { toast } from 'react-toastify'
import { useQueryClient } from '@tanstack/react-query'

import {
  useUserProfile,
  useAllUsersProfile,
  useDeleteUser,
  useToggleUserBlock
} from '@/hooks/data/useUser'
import { useUserAuth } from '@/contexts/UserAuthProvider'
import { ADMIN_SIDE_MENU_ITEMS, ADMIN_MENU_ITEMS, IMenu } from '@/data/admin'

// ------------------------------------------------------------------------

export type ThemeType = 'dark' | 'light'

interface IUserContextData {
  isOperationsLoading: boolean
  activeMenu: IMenu | null
  handleDeleteUser: (userId: string) => Promise<void>
  handleToggleUserBlock: (userId: string, blockStatus: boolean) => Promise<void>
  handleMenuClick: (menu: IMenu | null) => void
}

// ------------------------------------------------------------------------

export const UserContext = createContext<IUserContextData>(
  {} as IUserContextData
)

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================
  const { userAccountData } = useUserAuth()
  const queryClient = useQueryClient()

  const [isOperationsLoading, setOperationsLoading] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<IMenu | null>(
    ADMIN_SIDE_MENU_ITEMS[0]
  )

  const { mutateAsync: deleteUser } = useDeleteUser()
  const { mutateAsync: toggleUserBlock } = useToggleUserBlock()

  // ============================================= SIDE MENU FUNCTIONS

  const handleMenuClick = (menu: IMenu | null) => {
    setActiveMenu(menu || null)
  }

  // ============================================= USER ACCESS FUNCTIONS

  const handleDeleteUser = async (userId: string) => {
    if (userId === userAccountData?.id) {
      toast('Você não pode deletar sua própria conta')
      return
    }

    try {
      setOperationsLoading(true)
      await deleteUser({ userId })
      queryClient.invalidateQueries({ queryKey: ['usersProfiles'] })
      toast('Usuário deletado com sucesso')
    } catch (error: any) {
      console.error('Falha ao deletar usuário', error)
      toast(error.message || 'Erro ao deletar usuário')
    } finally {
      setOperationsLoading(false)
    }
  }

  const handleToggleUserBlock = async (
    userId: string,
    blockStatus: boolean
  ) => {
    if (userId === userAccountData?.id) {
      toast('Você não pode alterar o status de bloqueio da sua própria conta')
      return
    }

    try {
      setOperationsLoading(true)
      await toggleUserBlock({ userId, blockStatus })
      queryClient.invalidateQueries({ queryKey: ['usersProfiles'] })
      const action = blockStatus ? 'bloqueado' : 'desbloqueado'
      toast(`Usuário ${action} com sucesso`)
    } catch (error: any) {
      console.error('Falha ao alterar status de bloqueio do usuário', error)
      toast(error.message || 'Erro ao alterar status de bloqueio do usuário')
    } finally {
      setOperationsLoading(false)
    }
  }

  // ========================================================================

  const UserContextData: IUserContextData = useMemo(() => {
    return {
      isOperationsLoading,
      activeMenu,
      handleDeleteUser,
      handleToggleUserBlock,
      handleMenuClick // Agora o tipo está consistente com IUserContextData
    }
  }, [isOperationsLoading, activeMenu])

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
