// ==================================== FUNNELS

import { LuAirplay } from 'react-icons/lu'

export interface IFunnelSettings {
  name: string
  slug: string
  isPublished: boolean
}

export interface IFunnelStep {
  stepIndex: number
  stepId: string
  stepName: string
  stepActive: boolean
}

export interface IFunnel {
  funnelId: string
  funnelSettings: IFunnelSettings
  funnelSteps: IFunnelStep[]
  createdAt: string
  lastEditionAt: string
}

export const MOCK_FUNNELS_LIST: IFunnel[] = [
  {
    funnelId: 'funnel_test',
    funnelSettings: {
      name: 'Quiz de Teste',
      slug: 'funnel-test',
      isPublished: true
    },
    funnelSteps: [
      {
        stepIndex: 0,
        stepId: 'step_01',
        stepName: 'Etapa 1',
        stepActive: true
      },
      {
        stepIndex: 1,
        stepId: 'step_02',
        stepName: 'Etapa 2',
        stepActive: false
      },
      {
        stepIndex: 2,
        stepId: 'step_03',
        stepName: 'Etapa 3',
        stepActive: true
      }
    ],
    createdAt: '22 de outubro de 2024',
    lastEditionAt: '18/12/2024'
  }
]

// ==================================== COMPONENTS

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
