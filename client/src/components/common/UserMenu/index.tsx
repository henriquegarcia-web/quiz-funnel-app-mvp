import * as S from './styles'

import { Avatar, Dropdown, theme } from 'antd'
import type { MenuProps } from 'antd'

import { useUserAuth } from '@/contexts/UserAuthProvider'
import { formatUsername } from '@/utils/functions/formatUsername'
import useRoleDetails from '@/hooks/useRole'
import { ADMIN_MENU_ITEMS } from '@/data/admin'

interface IUserMenu {}

const UserMenu = ({}: IUserMenu) => {
  const { token } = theme.useToken()
  const { userAccountData, handleLogout } = useUserAuth()
  const roleDetails = useRoleDetails(userAccountData?.role || '')

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'user_exit') {
      handleLogout()
    }
  }

  const formattedMenus: MenuProps['items'] = ADMIN_MENU_ITEMS.map((menu) => ({
    key: menu.menuKey,
    label: menu.menuLabel,
    icon: menu.menuIcon,
    disabled: menu.menuDisabled
  }))

  const menuProps = {
    items: formattedMenus || [],
    onClick: handleMenuClick
  }

  const name = `${userAccountData?.personalInfo.firstName} ${userAccountData?.personalInfo.lastName}`

  return (
    <Dropdown menu={menuProps} placement="bottomRight">
      <S.UserMenu>
        <S.UserMenuInfos>
          <S.UserWelcome>
            {userAccountData ? (
              <>
                Olá, <b>{name}</b>
              </>
            ) : (
              <>Carregando...</>
            )}
          </S.UserWelcome>
          {userAccountData && (
            <S.UserPlan color="#007BFF">
              {userAccountData?.subscription?.planName}
            </S.UserPlan>
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
          {formatUsername(name || '')}
        </Avatar>
      </S.UserMenu>
    </Dropdown>
  )
}

export default UserMenu

// {/* <button onClick={handleLogout}>Sair</button> */}
