import * as S from './styles'

import { Logo, UserMenu, ViewHeader } from '@/components'

interface IMyAccount {}

const MyAccount = ({}: IMyAccount) => {
  return (
    <S.MyAccount>
      <ViewHeader
        title="Minha Conta"
        legend="Confira seus dados de cadastro abaixo"
      >
        {/* <Button size="large" onClick={handleOpenCreateFunnelModal}>
            Novo Quiz
          </Button> */}
      </ViewHeader>
    </S.MyAccount>
  )
}

export default MyAccount
