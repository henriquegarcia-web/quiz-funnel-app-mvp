import * as S from './styles'

import { DashboardHeader, DashboardSideMenu } from '@/components'
import { useAdmin } from '@/contexts/AdminProvider'
import { useEffect } from 'react'

interface IDashboardScreen {}

const DashboardScreen = ({}: IDashboardScreen) => {
  const { activeMenu } = useAdmin()

  useEffect(() => {
    console.log(activeMenu)
  }, [activeMenu])

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
