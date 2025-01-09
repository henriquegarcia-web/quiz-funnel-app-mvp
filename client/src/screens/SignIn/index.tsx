import * as S from './styles'

import { theme } from 'antd'

import { SignInForm, Logo } from '@/components'

interface ISignInScreen {}

const SignInScreen = ({}: ISignInScreen) => {
  const { token } = theme.useToken()

  return (
    <S.SignInScreen>
      <S.SignInContainerHeader>
        <Logo size="lg" />
        <S.SignInTitle>Entrar</S.SignInTitle>
      </S.SignInContainerHeader>
      <S.SignInContainer>
        <SignInForm />
      </S.SignInContainer>
    </S.SignInScreen>
  )
}

export default SignInScreen
