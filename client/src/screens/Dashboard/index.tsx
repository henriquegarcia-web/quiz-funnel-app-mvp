import * as S from './styles'

import { DashboardHeader, DashboardSideMenu } from '@/components'
import { useUser } from '@/contexts/UserProvider'
import { useEffect } from 'react'

interface IDashboardScreen {}

const DashboardScreen = ({}: IDashboardScreen) => {
  const { activeMenu } = useUser()

  return (
    <S.DashboardScreen>
      <DashboardHeader />
      <S.DashboardContent>
        <DashboardSideMenu />
        <S.DashboardView>
          <S.DashboardViewWrapper>
            {activeMenu?.menuComponent}
          </S.DashboardViewWrapper>
        </S.DashboardView>
      </S.DashboardContent>
    </S.DashboardScreen>
  )
}

export default DashboardScreen
