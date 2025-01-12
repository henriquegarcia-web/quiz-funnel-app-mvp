// Routes.tsx

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
import { useUserAuth } from '@/contexts/UserAuthProvider'

const AppRoutes = () => {
  const { isUserLogged } = useUserAuth()

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
            <PublicRoute isAuthenticated={isUserLogged}>
              <SignInScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/cadastro"
          element={
            <PublicRoute isAuthenticated={isUserLogged}>
              <SignUpScreen />
            </PublicRoute>
          }
        />

        <Route
          path="/checkout"
          element={
            <PublicRoute isAuthenticated={isUserLogged}>
              <CheckoutV1Screen />
            </PublicRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <PrivateRoute isAuthenticated={isUserLogged}>
              <DashboardScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/insights/:funnelId"
          element={
            <PrivateRoute isAuthenticated={isUserLogged}>
              <InsightsScreen />
            </PrivateRoute>
          }
        />

        <Route
          path="/admin/editor/:funnelId"
          element={
            <PrivateRoute isAuthenticated={isUserLogged}>
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
