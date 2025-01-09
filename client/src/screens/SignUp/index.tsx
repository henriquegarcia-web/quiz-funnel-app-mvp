import * as S from './styles'

import { theme } from 'antd'

import { SignUpForm, Logo } from '@/components'

interface ISignUpScreen {}

const SignUpScreen = ({}: ISignUpScreen) => {
  const { token } = theme.useToken()

  return (
    <S.SignUpScreen>
      <S.SignUpContainerHeader>
        <Logo size="lg" />
        <S.SignUpTitle>Criar Conta</S.SignUpTitle>
      </S.SignUpContainerHeader>
      <S.SignUpContainer>
        <SignUpForm />
      </S.SignUpContainer>
    </S.SignUpScreen>
  )
}

export default SignUpScreen
