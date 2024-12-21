import { createElement } from 'react'
import { LuLogOut } from 'react-icons/lu'
import type { MenuProps } from 'antd'

// ============================= ROLES

export interface IRole {
  id: string
  label: string
  description: string
  color: string
}

const ADMIN_ROLES: IRole[] = [
  {
    id: 'super_admin',
    label: 'Super Administrador',
    description: 'Permisão completa',
    color: '#007BFF'
  },
  {
    id: 'admin',
    label: 'Administrador',
    description: 'Permisão completa, abaixo do Super Admin',
    color: 'orangered'
  },
  {
    id: 'member',
    label: 'Membro',
    description: 'Acesso à todas informações mas sem permissão para interações',
    color: 'lightblue'
  },
  {
    id: 'consulter',
    label: 'Consultor',
    description: 'Acesso apenas a seção de Insights',
    color: 'grey'
  }
]

// ============================= ADMIN MENU ITEMS

const adminMenuItems: MenuProps['items'] = [
  {
    key: 'admin_my_account',
    label: 'Minha Conta'
  },
  {
    key: 'admin_settings',
    label: 'Configurações',
    disabled: true
    // extra: '⌘P'
  },
  {
    key: 'admin_billings',
    label: 'Pagamentos',
    disabled: true
    // extra: '⌘B'
  },
  {
    key: 'admin_exit',
    label: 'Sair',
    icon: createElement(LuLogOut)
    // extra: '⌘S',
  }
]

export { ADMIN_ROLES, adminMenuItems }
