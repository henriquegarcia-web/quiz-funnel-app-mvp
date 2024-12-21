import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import {
  AdminAuthScreen,
  DashboardScreen,
  InsightsScreen,
  EditorV1,
  QuizV1
} from '@/screens'
import { useAdminAuth } from '@/contexts/AdminAuthProvider'

const AppRoutes = () => {
  const { isAdminLogged } = useAdminAuth()

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true
      }}
    >
      <Routes>
        {/* =============================================================== */}

        <Route path="/" element={<Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />

        {/* =============================================================== */}

        <Route path="/" element={<QuizV1 />} />

        <Route
          path="/admin/entrar"
          element={
            <PublicRoute isAuthenticated={isAdminLogged}>
              <AdminAuthScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute isAuthenticated={isAdminLogged}>
              <DashboardScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/insights/:funnelId"
          element={
            <PrivateRoute isAuthenticated={isAdminLogged}>
              <InsightsScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/editor/:funnelId"
          element={
            <PrivateRoute isAuthenticated={isAdminLogged}>
              <EditorV1 />
            </PrivateRoute>
          }
        />

        {/* =============================================================== */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

// =========================================== ROUTES

interface RouteProps {
  isAuthenticated: boolean
  children: React.ReactNode
}

const PrivateRoute = ({ isAuthenticated, children }: RouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/admin/entrar" replace />
  }

  return children
}

const PublicRoute = ({ isAuthenticated, children }: RouteProps) => {
  if (isAuthenticated) {
    return <Navigate to="/admin" />
  }

  return children
}
