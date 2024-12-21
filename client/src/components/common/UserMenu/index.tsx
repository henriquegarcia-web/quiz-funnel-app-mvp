import * as S from './styles'

import { useAdminAuth } from '@/contexts/AdminAuthProvider'

interface IUserMenu {}

const UserMenu = ({}: IUserMenu) => {
  const { handleLogout } = useAdminAuth()

  return (
    <S.UserMenu>
      {/* <button onClick={handleLogout}>Sair</button> */}
    </S.UserMenu>
  )
}

export default UserMenu
