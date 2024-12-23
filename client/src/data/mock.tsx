// ==================================== FUNNELS

import { LuAirplay } from 'react-icons/lu'

export interface IFunnel {
  funnelId: string
  funnelName: string
  funnelSettings: {
    isPublished: boolean
  }
  createdAt: string
  lastEditionAt: string
}

export const MOCK_FUNNELS_LIST: IFunnel[] = [
  {
    funnelId: 'funnel_test',
    funnelName: 'Quiz de Teste',
    funnelSettings: {
      isPublished: true
    },
    createdAt: '22 de outubro de 2024',
    lastEditionAt: '18/12/2024'
  }
]

// ==================================== FUNNELS

export interface IComponent {
  componentId: string
  componentName: string
  componentIcon: React.ReactNode
}

export const BETA_COMPONENTS_LIS: IComponent[] = [
  {
    componentId: 'component_header',
    componentName: 'Cabeçalho',
    componentIcon: <LuAirplay />
  },
  {
    componentId: 'component_slider',
    componentName: 'Slider',
    componentIcon: <LuAirplay />
  },
  {
    componentId: 'component_image',
    componentName: 'Imagem',
    componentIcon: <LuAirplay />
  },
  {
    componentId: 'component_video',
    componentName: 'Vídeo',
    componentIcon: <LuAirplay />
  }
]
