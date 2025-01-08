import { useState } from 'react'
import * as S from './styles'

import { Button, Modal } from 'antd'
import { CreateFunnelForm, FunnelItem, ViewHeader } from '@/components'
import { MOCK_FUNNELS_LIST } from '@/data/mock'

interface IQuizBuilder {}

const QuizBuilder = ({}: IQuizBuilder) => {
  const [isCreateFunnelModalOpen, setIsCreateFunnelModalOpen] = useState(false)

  const handleOpenCreateFunnelModal: any = () =>
    setIsCreateFunnelModalOpen(true)
  const handleCloseCreateFunnelModal: any = () =>
    setIsCreateFunnelModalOpen(false)

  return (
    <>
      <S.QuizBuilder>
        <ViewHeader
          title="Quiz Builder"
          legend="Crie, edite e visualize seus funis de venda abaixo"
        >
          <Button size="large" onClick={handleOpenCreateFunnelModal}>
            Novo Quiz
          </Button>
        </ViewHeader>
        <S.UserQuizzesList>
          {MOCK_FUNNELS_LIST.map((funnel) => (
            <FunnelItem key={funnel.funnelId} funnel={funnel} />
          ))}
        </S.UserQuizzesList>
      </S.QuizBuilder>

      <Modal
        centered
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

export default QuizBuilder
