import * as S from './styles'

import { theme } from 'antd'

import { AdminSignInForm, Logo } from '@/components'

interface IAdminAuthScreen {}

const AdminAuthScreen = ({}: IAdminAuthScreen) => {
  const { token } = theme.useToken()

  return (
    <S.AdminAuthScreen>
      <S.AuthContainer>
        <S.AuthContainerHeader>
          <Logo size="lg" />
        </S.AuthContainerHeader>
        <AdminSignInForm />
      </S.AuthContainer>
    </S.AdminAuthScreen>
  )
}

export default AdminAuthScreen
