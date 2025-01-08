import * as S from './styles'

import { theme } from 'antd'

import { AdminSignInForm, Logo } from '@/components'

interface ISignUpScreen {}

const SignUpScreen = ({}: ISignUpScreen) => {
  const { token } = theme.useToken()

  return (
    <S.SignUpScreen>
      <S.SignUpContainer>
        <S.SignUpContainerHeader>
          <Logo size="lg" />
        </S.SignUpContainerHeader>
        <AdminSignInForm />
      </S.SignUpContainer>
    </S.SignUpScreen>
  )
}

export default SignUpScreen
