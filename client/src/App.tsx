import { useMemo } from 'react'

import { ConfigProvider, theme } from 'antd'

import AppRoutes from '@/Routes'
import {
  AdminAuthProvider,
  useAdminAuth
} from '@/contexts/AdminAuthProvider.tsx'
import { AdminProvider } from '@/contexts/AdminProvider.tsx'
import { themeTokens } from '@/utils/styles/theme'

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

  const themeTokenSelected = useMemo(() => {
    return adminAccountData?.theme === 'light'
      ? themeTokens.light
      : themeTokens.dark
  }, [adminAccountData])

  return (
    <ConfigProvider
      theme={{
        algorithm: themeSelected,
        token: themeTokenSelected
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  )
}
