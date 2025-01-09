import * as S from './styles'

import { theme } from 'antd'

import { AdminSignUpForm, Logo } from '@/components'

interface ISignUpScreen {}

const SignUpScreen = ({}: ISignUpScreen) => {
  const { token } = theme.useToken()

  return (
    <S.SignUpScreen>
      <S.SignUpContainer>
        <S.SignUpContainerHeader>
          <Logo size="lg" />
        </S.SignUpContainerHeader>
        <S.SignUpTitle>Criar Conta</S.SignUpTitle>
        <AdminSignUpForm />
      </S.SignUpContainer>
    </S.SignUpScreen>
  )
}

export default SignUpScreen
