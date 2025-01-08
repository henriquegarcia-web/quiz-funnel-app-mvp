import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { toast } from 'react-toastify'
import { useQueryClient } from '@tanstack/react-query'

import { useRegisterAccess } from '@/hooks/data/useAuth'
import {
  useAdminProfile,
  useAllAdminsProfile,
  useDeleteAdmin,
  useToggleAdminBlock
} from '@/hooks/data/useAdmin'
import { useAdminAuth } from '@/contexts/AdminAuthProvider'
import { ADMIN_SIDE_MENU_ITEMS, ADMIN_MENU_ITEMS, IMenu } from '@/data/admin'

// ------------------------------------------------------------------------

export type ThemeType = 'dark' | 'light'

interface IAdminContextData {
  isOperationsLoading: boolean
  activeMenu: IMenu | null
  handleRegisterAccess: (userData: {
    email: string
    role: string
  }) => Promise<boolean>
  handleDeleteAdmin: (userId: string) => Promise<void>
  handleToggleAdminBlock: (
    userId: string,
    blockStatus: boolean
  ) => Promise<void>
  handleMenuClick: (menu: IMenu | null) => void
}

// ------------------------------------------------------------------------

export const AdminContext = createContext<IAdminContextData>(
  {} as IAdminContextData
)

const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================
  const { adminAccountData } = useAdminAuth()
  const queryClient = useQueryClient()

  const [isOperationsLoading, setOperationsLoading] = useState<boolean>(false)
  const [activeMenu, setActiveMenu] = useState<IMenu | null>(
    ADMIN_SIDE_MENU_ITEMS[0]
  )

  const { mutateAsync: registerAccess } = useRegisterAccess()
  const { mutateAsync: deleteAdmin } = useDeleteAdmin()
  const { mutateAsync: toggleAdminBlock } = useToggleAdminBlock()

  // ============================================= SIDE MENU FUNCTIONS

  const handleMenuClick = (menu: IMenu | null) => {
    setActiveMenu(menu || null)
  }

  // ============================================= USER ACCESS FUNCTIONS

  const handleRegisterAccess = async (adminData: {
    email: string
    role: string
  }) => {
    try {
      await registerAccess(adminData)
      queryClient.invalidateQueries({ queryKey: ['adminsProfiles'] })
      toast('Sucesso! Novo acesso registrado')
      return true
    } catch (error: any) {
      console.error('Falha ao registrar novo acesso', error)
      toast(error.message)
      return false
    }
  }

  const handleDeleteAdmin = async (adminId: string) => {
    if (adminId === adminAccountData?.id) {
      toast('Você não pode deletar sua própria conta')
      return
    }

    try {
      setOperationsLoading(true)
      await deleteAdmin({ adminId })
      queryClient.invalidateQueries({ queryKey: ['adminsProfiles'] })
      toast('Usuário deletado com sucesso')
    } catch (error: any) {
      console.error('Falha ao deletar usuário', error)
      toast(error.message || 'Erro ao deletar usuário')
    } finally {
      setOperationsLoading(false)
    }
  }

  const handleToggleAdminBlock = async (
    adminId: string,
    blockStatus: boolean
  ) => {
    if (adminId === adminAccountData?.id) {
      toast('Você não pode alterar o status de bloqueio da sua própria conta')
      return
    }

    try {
      setOperationsLoading(true)
      await toggleAdminBlock({ adminId, blockStatus })
      queryClient.invalidateQueries({ queryKey: ['adminsProfiles'] })
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

  const AdminContextData: IAdminContextData = useMemo(() => {
    return {
      isOperationsLoading,
      activeMenu,
      handleRegisterAccess,
      handleDeleteAdmin,
      handleToggleAdminBlock,
      handleMenuClick // Agora o tipo está consistente com IAdminContextData
    }
  }, [isOperationsLoading, activeMenu])

  return (
    <AdminContext.Provider value={AdminContextData}>
      {children}
    </AdminContext.Provider>
  )
}

function useAdmin(): IAdminContextData {
  const context = useContext(AdminContext)

  if (!context) throw new Error('useAuth must be used within a AdminProvider')

  return context
}

export { AdminProvider, useAdmin }
