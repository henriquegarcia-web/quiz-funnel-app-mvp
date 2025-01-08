import * as S from './styles'

import { theme } from 'antd'

import { AdminSignInForm, Logo } from '@/components'

interface ISignInScreen {}

const SignInScreen = ({}: ISignInScreen) => {
  const { token } = theme.useToken()

  return (
    <S.SignInScreen>
      <S.SignInContainer>
        <S.SignInContainerHeader>
          <Logo size="lg" />
        </S.SignInContainerHeader>
        <AdminSignInForm />
      </S.SignInContainer>
    </S.SignInScreen>
  )
}

export default SignInScreen
