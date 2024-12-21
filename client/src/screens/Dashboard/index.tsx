import * as S from './styles'

import { useAdminAuth } from '@/contexts/AdminAuthProvider'

interface IDashboardScreen {}

const DashboardScreen = ({}: IDashboardScreen) => {
  const { handleLogout } = useAdminAuth()

  return (
    <S.DashboardScreen>
      <button onClick={handleLogout}>Sair</button>
    </S.DashboardScreen>
  )
}

export default DashboardScreen
