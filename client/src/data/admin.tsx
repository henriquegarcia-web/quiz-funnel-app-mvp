import { createElement } from 'react'

import {
  LuLogOut,
  LuChartNoAxesCombined,
  LuPalette,
  LuPencilRuler,
  LuSettings
} from 'react-icons/lu'
import type { MenuProps } from 'antd'

import EditorView from '@/screens/EditorV1/views/EditorView'
import DesignView from '@/screens/EditorV1/views/DesignView'
import InsightsView from '@/screens/EditorV1/views/InsightsView'
import SettingsView from '@/screens/EditorV1/views/SettingsView'

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

const ADMIN_MENU_ITEMS: MenuProps['items'] = [
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

// ============================= EDITOR V1 NAVIGATION ITEMS

export interface IEditorNavItem {
  navId: string
  navLabel: string
  navIcon: React.ReactNode
  navView: React.ReactNode
}

const EDITORV1_NAVIGATION_ITEMS: IEditorNavItem[] = [
  {
    navId: 'nav_editor',
    navLabel: 'Editor',
    navIcon: <LuPencilRuler />,
    navView: <EditorView />
  },
  {
    navId: 'nav_design',
    navLabel: 'Design',
    navIcon: <LuPalette />,
    navView: <DesignView />
  },
  {
    navId: 'nav_insights',
    navLabel: 'Insights',
    navIcon: <LuChartNoAxesCombined />,
    navView: <InsightsView />
  },
  {
    navId: 'nav_settings',
    navLabel: 'Configurações',
    navIcon: <LuSettings />,
    navView: <SettingsView />
  }
]

// ============================= EDITOR V1 NAVIGATION ITEMS

export interface IFunnelFlowType {
  flowId: string
  flowLabel: string
}

const FUNNEL_FLOW_TYPES: IFunnelFlowType[] = [
  {
    flowId: 'flow_button',
    flowLabel: 'Com botão'
  },
  {
    flowId: 'flow_direct_click',
    flowLabel: 'Com clique direto'
  }
]

export {
  ADMIN_ROLES,
  ADMIN_MENU_ITEMS,
  EDITORV1_NAVIGATION_ITEMS,
  FUNNEL_FLOW_TYPES
}
