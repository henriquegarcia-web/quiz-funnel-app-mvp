import * as S from './styles'

import { Avatar, Dropdown, theme } from 'antd'
import type { MenuProps } from 'antd'

import { useAdminAuth } from '@/contexts/AdminAuthProvider'
import { formatUsername } from '@/utils/functions/formatUsername'
import useRoleDetails from '@/hooks/useRole'
import { ADMIN_MENU_ITEMS } from '@/data/admin'

interface IUserMenu {}

const UserMenu = ({}: IUserMenu) => {
  const { token } = theme.useToken()
  const { adminAccountData, handleLogout } = useAdminAuth()
  const roleDetails = useRoleDetails(adminAccountData?.role || '')

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'admin_exit') {
      handleLogout()
    }
  }

  const menuProps = {
    items: ADMIN_MENU_ITEMS || [],
    onClick: handleMenuClick
  }

  return (
    <Dropdown menu={menuProps} placement="bottomRight">
      <S.UserMenu>
        <S.UserMenuInfos>
          <S.UserWelcome>
            {adminAccountData ? (
              <>
                Olá, <b>{adminAccountData.name}</b>
              </>
            ) : (
              <>Carregando...</>
            )}
          </S.UserWelcome>
          {adminAccountData && (
            <S.UserRole color={roleDetails?.color}>
              {roleDetails?.label}
            </S.UserRole>
          )}
        </S.UserMenuInfos>

        <Avatar
          size={40}
          style={{
            paddingTop: 2,
            fontSize: 15,
            backgroundColor: token.colorPrimaryActive,
            color: token.colorPrimaryText
          }}
        >
          {formatUsername(adminAccountData?.name || '')}
        </Avatar>
      </S.UserMenu>
    </Dropdown>
  )
}

export default UserMenu

// {/* <button onClick={handleLogout}>Sair</button> */}
