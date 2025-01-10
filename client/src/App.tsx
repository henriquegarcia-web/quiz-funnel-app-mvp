import { useMemo } from 'react'

import { ConfigProvider, theme } from 'antd'

import AppRoutes from '@/Routes'
import { UserAuthProvider, useUserAuth } from '@/contexts/UserAuthProvider'
import { UserProvider } from '@/contexts/UserProvider'
import { EditorV1Provider } from '@/contexts/EditorV1Provider'
import { themeTokens } from '@/utils/styles/theme'

function App() {
  return (
    <UserAuthProvider>
      <UserProvider>
        <EditorV1Provider>
          <AppThemed />
        </EditorV1Provider>
      </UserProvider>
    </UserAuthProvider>
  )
}

export default App

const AppThemed = () => {
  const { userAccountData } = useUserAuth()

  const themeSelected = useMemo(() => {
    return userAccountData?.preferences.theme === 'light'
      ? theme.defaultAlgorithm
      : theme.darkAlgorithm
  }, [userAccountData])

  const themeTokenSelected = useMemo(() => {
    return userAccountData?.preferences.theme === 'light'
      ? themeTokens.light
      : themeTokens.dark
  }, [userAccountData])

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
