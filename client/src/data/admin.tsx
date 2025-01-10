import React, { createElement } from 'react'

import {
  LuLogOut,
  LuChartNoAxesCombined,
  LuPalette,
  LuPencilRuler,
  LuSettings,
  LuCircleUser,
  LuCircleDollarSign,
  LuPanelsTopLeft,
  LuGalleryHorizontalEnd,
  LuGlobe
} from 'react-icons/lu'

import EditorView from '@/screens/EditorV1/views/EditorView'
import DesignView from '@/screens/EditorV1/views/DesignView'
import InsightsView from '@/screens/EditorV1/views/InsightsView'
import SettingsView from '@/screens/EditorV1/views/SettingsView'

import QuizBuilder from '@/screens/Dashboard/views/QuizBuilder'
import PageBuilder from '@/screens/Dashboard/views/PageBuilder'
import MyAccount from '@/screens/Dashboard/views/MyAccount'

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

export interface IMenu {
  menuKey: string
  menuLabel: string
  menuIcon: React.ReactNode
  menuDisabled: boolean
  menuComponent: React.ReactNode
}

const ADMIN_SIDE_MENU_ITEMS: IMenu[] = [
  {
    menuKey: 'menu_quiz_builder',
    menuLabel: 'Quiz Builder',
    menuIcon: <LuGalleryHorizontalEnd />,
    menuDisabled: false,
    menuComponent: <QuizBuilder />
  },
  {
    menuKey: 'menu_page_builder',
    menuLabel: 'Page Builder',
    menuIcon: <LuPanelsTopLeft />,
    menuDisabled: true,
    menuComponent: <PageBuilder />
  },
  {
    menuKey: 'menu_hosting',
    menuLabel: 'Hospedagens e Domínios',
    menuIcon: <LuGlobe />,
    menuDisabled: true,
    menuComponent: <></>
  }
]

const ADMIN_MENU_ITEMS: IMenu[] = [
  {
    menuKey: 'user_my_account',
    menuLabel: 'Minha Conta',
    menuIcon: <LuCircleUser />,
    menuDisabled: false,
    menuComponent: <MyAccount />
  },
  {
    menuKey: 'user_settings',
    menuLabel: 'Configurações',
    menuIcon: <LuSettings />,
    menuDisabled: true,
    menuComponent: <></>
  },
  {
    menuKey: 'user_billings',
    menuLabel: 'Pagamentos',
    menuIcon: <LuCircleDollarSign />,
    menuDisabled: true,
    menuComponent: <></>
  },
  {
    menuKey: 'user_exit',
    menuLabel: 'Sair',
    menuIcon: createElement(LuLogOut),
    menuDisabled: false,
    menuComponent: <></>
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
  ADMIN_SIDE_MENU_ITEMS,
  ADMIN_MENU_ITEMS,
  EDITORV1_NAVIGATION_ITEMS,
  FUNNEL_FLOW_TYPES
}
