import * as S from './styles'

import { Menu } from 'antd'
import {} from '@/components'
import { ADMIN_SIDE_MENU_ITEMS, ADMIN_MENU_ITEMS, IMenu } from '@/data/admin'
import { useUser } from '@/contexts/UserProvider'
import type { MenuProps } from 'antd'

interface ISideMenu {}

export const SideMenu = ({}: ISideMenu) => {
  const { activeMenu, handleMenuClick } = useUser()

  const formattedMainMenus: MenuProps['items'] = ADMIN_SIDE_MENU_ITEMS.map(
    (menu) => ({
      key: menu.menuKey,
      label: menu.menuLabel,
      icon: menu.menuIcon,
      disabled: menu.menuDisabled
    })
  )

  const formattedSecondaryMenus: MenuProps['items'] = ADMIN_MENU_ITEMS.map(
    (menu) => ({
      key: menu.menuKey,
      label: menu.menuLabel,
      icon: menu.menuIcon,
      disabled: menu.menuDisabled
    })
  )

  const handleClickMenu: MenuProps['onClick'] = (menu) => {
    const filteredMenu: IMenu | null =
      [...ADMIN_SIDE_MENU_ITEMS, ...ADMIN_MENU_ITEMS].find(
        (m) => m.menuKey === menu.key
      ) || null

    handleMenuClick(filteredMenu)
  }

  return (
    <S.SideMenu>
      <S.SideMenuWrapper>
        <Menu
          onClick={(menu) => handleClickMenu(menu)}
          selectedKeys={[activeMenu?.menuKey || '']}
          mode="inline"
          items={formattedMainMenus}
        />
      </S.SideMenuWrapper>
      <S.SideMenuWrapper>
        <Menu
          onClick={(menu) => handleClickMenu(menu)}
          selectedKeys={[activeMenu?.menuKey || '']}
          mode="inline"
          items={formattedSecondaryMenus}
        />
      </S.SideMenuWrapper>
    </S.SideMenu>
  )
}
