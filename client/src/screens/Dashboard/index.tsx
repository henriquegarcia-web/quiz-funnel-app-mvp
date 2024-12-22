import * as S from './styles'

import { Button, Modal } from 'antd'

import { CreateFunnelForm, DashboardHeader, FunnelItem } from '@/components'
import { MOCK_FUNNELS_LIST } from '@/data/mock'
import { useState } from 'react'

interface IDashboardScreen {}

const DashboardScreen = ({}: IDashboardScreen) => {
  const [isCreateFunnelModalOpen, setIsCreateFunnelModalOpen] = useState(false)

  const handleOpenCreateFunnelModal = () => setIsCreateFunnelModalOpen(true)
  const handleCloseCreateFunnelModal = () => setIsCreateFunnelModalOpen(false)

  return (
    <>
      <S.DashboardScreen>
        <DashboardHeader />
        <S.DashboardContent>
          <S.DashboardWrapper>
            <S.FunnelsListHeader>
              <S.FunnelsListHeaderLabels>
                <b>Dashboard</b>
                <p>Crie, edite e visualize seus funis de venda abaixo</p>
              </S.FunnelsListHeaderLabels>
              <S.FunnelsListHeaderCtas>
                <Button onClick={handleOpenCreateFunnelModal}>Novo Quiz</Button>
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

      <Modal
        title="Criar Funil (QUIZ)"
        open={isCreateFunnelModalOpen}
        footer={null}
        onCancel={handleCloseCreateFunnelModal}
        onClose={handleCloseCreateFunnelModal}
      >
        <CreateFunnelForm />
      </Modal>
    </>
  )
}

export default DashboardScreen
