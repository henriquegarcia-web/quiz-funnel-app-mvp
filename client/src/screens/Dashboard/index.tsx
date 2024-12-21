import * as S from './styles'

import { DashboardHeader } from '@/components'

interface IDashboardScreen {}

const DashboardScreen = ({}: IDashboardScreen) => {
  return (
    <S.DashboardScreen>
      <DashboardHeader />
      <S.DashboardContent>
        <S.DashboardWrapper></S.DashboardWrapper>
      </S.DashboardContent>
    </S.DashboardScreen>
  )
}

export default DashboardScreen
