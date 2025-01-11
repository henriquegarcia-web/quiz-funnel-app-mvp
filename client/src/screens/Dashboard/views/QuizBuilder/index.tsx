import { useState } from 'react'
import * as S from './styles'

import { Button, Modal } from 'antd'
import { CreateFunnelForm, FunnelItem, ViewHeader } from '@/components'
import { useUser } from '@/contexts/UserProvider'

interface IQuizBuilder {}

const QuizBuilder = ({}: IQuizBuilder) => {
  const { quizzesData } = useUser()

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
          {!!quizzesData?.data && quizzesData?.data?.length > 0 ? (
            <>
              {quizzesData?.data?.map((funnel) => (
                <FunnelItem key={funnel.funnelId} funnel={funnel} />
              ))}
            </>
          ) : (
            <S.UserQuizzesListEmpty>
              Você ainda não possui um funil, crie um clicando no botão "Criar
              Quiz" acima.
            </S.UserQuizzesListEmpty>
          )}
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
