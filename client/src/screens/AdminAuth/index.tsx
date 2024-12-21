import * as S from './styles'

import { theme } from 'antd'

// import { useGetTemplate } from '@/hooks/data/useGetTemplate'

interface IAdminAuthScreen {}

const AdminAuthScreen = ({}: IAdminAuthScreen) => {
  const { token } = theme.useToken()

  // const {
  //   data: dataTemplate,
  //   error: errorTemplate,
  //   fetchStatus,
  //   isLoading
  // } = useGetTemplate()

  return <S.AdminAuthScreen></S.AdminAuthScreen>
}

export default AdminAuthScreen
