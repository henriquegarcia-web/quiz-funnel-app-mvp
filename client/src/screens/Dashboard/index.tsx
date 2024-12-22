import * as S from './styles'

import { Button } from 'antd'

import { DashboardHeader, FunnelItem } from '@/components'
import { MOCK_FUNNELS_LIST } from '@/data/mock'

interface IDashboardScreen {}

const DashboardScreen = ({}: IDashboardScreen) => {
  return (
    <S.DashboardScreen>
      <DashboardHeader />
      <S.DashboardContent>
        <S.DashboardWrapper>
          <S.FunnelsListHeader>
            <S.FunnelsListHeaderLabels>
              <b>Dashboard</b>
              {/* Crie, edite e visualize seus funis de venda abaixo */}
            </S.FunnelsListHeaderLabels>
            <S.FunnelsListHeaderCtas>
              <Button>Novo Quiz</Button>
            </S.FunnelsListHeaderCtas>
          </S.FunnelsListHeader>
          <S.FunnelsList>
            {MOCK_FUNNELS_LIST.map((funnel) => (
              <FunnelItem key={funnel.funnelId} funnel={funnel} />
            ))}
          </S.FunnelsList>
        </S.DashboardWrapper>
      </S.DashboardContent>
    </S.DashboardScreen>
  )
}

export default DashboardScreen
