import React, { createContext, useContext, useMemo, useState } from 'react'

// ------------------------------------------------------------------------

export type ThemeType = 'dark' | 'light'

interface IAdminContextData {
  isAdminLogged: boolean
  adminTheme: ThemeType
}

// ------------------------------------------------------------------------

export const AdminContext = createContext<IAdminContextData>(
  {} as IAdminContextData
)

const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================

  const [isAdminLogged, setIsAdminLogged] = useState<boolean>(false)

  const adminTheme = 'dark'

  // ========================================================================

  const AdminContextData: IAdminContextData = useMemo(() => {
    return {
      isAdminLogged,
      adminTheme
    }
  }, [isAdminLogged])

  return (
    <AdminContext.Provider value={AdminContextData}>
      {children}
    </AdminContext.Provider>
  )
}

function useAdmin(): IAdminContextData {
  const context = useContext(AdminContext)

  if (!context) throw new Error('useAuth must be used within a UserProvider')

  return context
}

export { AdminProvider, useAdmin }
