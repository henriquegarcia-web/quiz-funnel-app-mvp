import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import {
  SignUpScreen,
  DashboardScreen,
  InsightsScreen,
  EditorV1,
  QuizV1,
  LandingPageScreen,
  CheckoutV1Screen,
  SignInScreen
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

        <Route path="*" element={<Navigate to="/" />} />

        {/* =============================================================== */}

        <Route path="/" element={<LandingPageScreen />} />

        <Route path="/quiz/:quizId" element={<QuizV1 />} />

        <Route
          path="/entrar"
          element={
            <PublicRoute isAuthenticated={isAdminLogged}>
              <SignInScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/cadastro"
          element={
            <PublicRoute isAuthenticated={isAdminLogged}>
              <SignUpScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <PublicRoute isAuthenticated={isAdminLogged}>
              <CheckoutV1Screen />
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
          path="/admin/editor/:funnelSlug"
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
