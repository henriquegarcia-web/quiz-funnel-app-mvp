import { useMemo, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import AppRoutes from '@/Routes'
import { useAdmin } from '@/contexts/AdminProvider'
import { ConfigProvider, theme } from 'antd'
import { darkTheme, lightTheme } from './utils/styles/theme'
import { ThemeProvider } from 'styled-components'

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // staleTime: 4 * 1000,
            // refetchInterval: 4 * 1000
          }
        }
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AppThemed />
    </QueryClientProvider>
  )
}

export default App

const AppThemed = () => {
  const { adminTheme } = useAdmin()

  const themeSelected = useMemo(() => {
    return adminTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm
  }, [adminTheme])

  const currentTheme = adminTheme === 'dark' ? darkTheme : lightTheme

  return (
    <ConfigProvider
      theme={{
        algorithm: themeSelected,
        token: {
          colorPrimary: currentTheme.colors.primary
        }
      }}
    >
      <ThemeProvider theme={currentTheme}>
        <AppRoutes />
      </ThemeProvider>
    </ConfigProvider>
  )
}
