import { useMemo, useState } from 'react'
import { ConfigProvider, theme } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import AppRoutes from '@/Routes'
import { useAdmin } from '@/contexts/AdminProvider'

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
