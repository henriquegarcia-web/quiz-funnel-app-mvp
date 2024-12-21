import { useMemo } from 'react'

import { ConfigProvider, theme } from 'antd'

import AppRoutes from '@/Routes'
import {
  AdminAuthProvider,
  useAdminAuth
} from '@/contexts/AdminAuthProvider.tsx'
import { AdminProvider } from '@/contexts/AdminProvider.tsx'

function App() {
  return (
    <AdminAuthProvider>
      <AdminProvider>
        <AppThemed />
      </AdminProvider>
    </AdminAuthProvider>
  )
}

export default App

const AppThemed = () => {
  const { adminAccountData } = useAdminAuth()

  const themeSelected = useMemo(() => {
    return adminAccountData?.theme === 'light'
      ? theme.defaultAlgorithm
      : theme.darkAlgorithm
  }, [adminAccountData])

  return (
    <ConfigProvider
      theme={{
        algorithm: themeSelected,
        token: {
          colorPrimary: '#007BFF'
        }
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  )
}
