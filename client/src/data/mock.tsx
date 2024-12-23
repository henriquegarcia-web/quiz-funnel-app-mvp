// ==================================== FUNNELS

import { LuAirplay } from 'react-icons/lu'

export interface IFunnelDesignBorder {
  borderSize: string
  borderRadius: string
  borderColor: string
}

export interface IFunnelDesignFont {
  fontFamily: string
  fontSize: string
  fontWeight: string
  fontColor: string
}

export interface IFunnelDesignContainer {
  title: IFunnelDesignFont
  legend: IFunnelDesignFont
  emoji: React.ReactNode | string
  backgroundColor: string
  border: IFunnelDesignBorder
}

export interface IFunnelSeo {
  pageName: string | null
  pageDescription: string | null
  pageFavicon: string | null
}

export interface IFunnelSettings {
  general: {
    funnelName: string
    funnelSlug: string
    funnelIsPublished: boolean
    funnelFlowType: 'flow_button' | 'flow_direct_click'
  }
  seo: IFunnelSeo
}

export interface IFunnelDesign {
  general: {
    funnelShowLogo: boolean
    funnelShowProgress: boolean
  }
  globalStyles: {
    borderRadius: number
    pageRowGap: number
    backgroundColor: string
    colorPrimary: string
  }
  globalModels: {
    title: IFunnelDesignFont
    subtitle: IFunnelDesignFont
    legend: IFunnelDesignFont
    card: IFunnelDesignContainer
  }
  globalVariables: {}
}

export interface IFunnelStep {
  stepIndex: number
  stepId: string
  stepName: string
  stepActive: boolean
  stepCanGoBack: boolean
}

export interface IFunnel {
  funnelId: string
  funnelSettings: IFunnelSettings
  funnelDesign: IFunnelDesign
  funnelSteps: IFunnelStep[]
  createdAt: string
  lastEditionAt: string
}

export const MOCK_FUNNELS_LIST: IFunnel[] = [
  {
    funnelId: 'funnel_test_1',
    funnelSettings: {
      general: {
        funnelName: 'Quiz de Personalidade',
        funnelSlug: 'quiz-personalidade',
        funnelIsPublished: true,
        funnelFlowType: 'flow_button'
      },
      seo: {
        pageName: 'Descubra sua Personalidade',
        pageDescription:
          'Um quiz divertido para descobrir mais sobre você mesmo',
        pageFavicon: '/favicon-quiz.png'
      }
    },
    funnelDesign: {
      general: {
        funnelShowLogo: true,
        funnelShowProgress: true
      },
      globalStyles: {
        borderRadius: 8,
        pageRowGap: 16,
        backgroundColor: '#f5f5f5',
        colorPrimary: '#2563eb'
      },
      globalModels: {
        title: {
          fontFamily: 'Poppins',
          fontSize: '24px',
          fontWeight: '600',
          fontColor: '#1f2937'
        },
        subtitle: {
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: '400',
          fontColor: '#4b5563'
        },
        legend: {
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: '400',
          fontColor: '#6b7280'
        },
        card: {
          title: {
            fontFamily: 'Poppins',
            fontSize: '18px',
            fontWeight: '500',
            fontColor: '#1f2937'
          },
          legend: {
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: '400',
            fontColor: '#6b7280'
          },
          emoji: '🎯',
          backgroundColor: '#ffffff',
          border: {
            borderSize: '1px',
            borderRadius: '8px',
            borderColor: '#e5e7eb'
          }
        }
      },
      globalVariables: {}
    },
    funnelSteps: [
      {
        stepIndex: 0,
        stepId: 'step_intro',
        stepName: 'Introdução',
        stepActive: true,
        stepCanGoBack: false
      },
      {
        stepIndex: 1,
        stepId: 'step_questions',
        stepName: 'Perguntas',
        stepActive: false,
        stepCanGoBack: true
      },
      {
        stepIndex: 2,
        stepId: 'step_result',
        stepName: 'Resultado',
        stepActive: false,
        stepCanGoBack: false
      }
    ],
    createdAt: '15 de dezembro de 2024',
    lastEditionAt: '20/12/2024'
  },
  {
    funnelId: 'funnel_test_2',
    funnelSettings: {
      general: {
        funnelName: 'Diagnóstico Empresarial',
        funnelSlug: 'diagnostico-empresarial',
        funnelIsPublished: false,
        funnelFlowType: 'flow_direct_click'
      },
      seo: {
        pageName: 'Diagnóstico Gratuito',
        pageDescription: 'Faça uma análise completa da sua empresa',
        pageFavicon: '/favicon-business.png'
      }
    },
    funnelDesign: {
      general: {
        funnelShowLogo: true,
        funnelShowProgress: true
      },
      globalStyles: {
        borderRadius: 12,
        pageRowGap: 24,
        backgroundColor: '#ffffff',
        colorPrimary: '#0891b2'
      },
      globalModels: {
        title: {
          fontFamily: 'Montserrat',
          fontSize: '32px',
          fontWeight: '700',
          fontColor: '#0c4a6e'
        },
        subtitle: {
          fontFamily: 'Roboto',
          fontSize: '18px',
          fontWeight: '400',
          fontColor: '#334155'
        },
        legend: {
          fontFamily: 'Roboto',
          fontSize: '14px',
          fontWeight: '400',
          fontColor: '#64748b'
        },
        card: {
          title: {
            fontFamily: 'Montserrat',
            fontSize: '20px',
            fontWeight: '600',
            fontColor: '#0c4a6e'
          },
          legend: {
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: '400',
            fontColor: '#64748b'
          },
          emoji: '📊',
          backgroundColor: '#f8fafc',
          border: {
            borderSize: '2px',
            borderRadius: '12px',
            borderColor: '#e2e8f0'
          }
        }
      },
      globalVariables: {}
    },
    funnelSteps: [
      {
        stepIndex: 0,
        stepId: 'step_welcome',
        stepName: 'Boas-vindas',
        stepActive: true,
        stepCanGoBack: false
      },
      {
        stepIndex: 1,
        stepId: 'step_analysis',
        stepName: 'Análise',
        stepActive: false,
        stepCanGoBack: true
      },
      {
        stepIndex: 2,
        stepId: 'step_report',
        stepName: 'Relatório',
        stepActive: false,
        stepCanGoBack: true
      }
    ],
    createdAt: '10 de dezembro de 2024',
    lastEditionAt: '21/12/2024'
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
