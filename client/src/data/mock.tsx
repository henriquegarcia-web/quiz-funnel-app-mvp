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

export interface IFunnelDesignCard {
  title: IFunnelDesignFont
  legend: IFunnelDesignFont
  backgroundColor: string
  border: IFunnelDesignBorder
}

export interface IFunnelDesignButton {
  label: IFunnelDesignFont
  backgroundColor: string
  backgroundColorHover: string
  backgroundColorActive: string
  border: IFunnelDesignBorder
}

export interface IFunnelSeo {
  pageName: string | null
  pageDescription: string | null
  pageFavicon: string | null
}

export type LeadField = 'field_name' | 'field_email' | 'field_phone'

export interface IFunnelSettings {
  general: {
    funnelName: string
    funnelDescription: string
    funnelSlug: string
    funnelIsPublished: boolean
    funnelFlowType: 'flow_button' | 'flow_direct_click'
  }
  seo: IFunnelSeo
  leadCapture: {
    isRequired: boolean
    fields: LeadField[]
  }
  tracking: {
    pixelFacebook: string
    googleAnalytics: string
  }
  redirectOnComplete: string
  notifications: {
    enabled: boolean
    to: string[]
  }
}

export interface IFunnelVariable {
  variableName: string
  variableValue: string
}

export interface IFunnelDesign {
  globalStyles: {
    borderRadius: number
    pageRowGap: number
    primaryColor: string
    backgroundColor: string
    font: string
    logo: string
    showLogo: boolean
    showProgressBar: boolean
  }
  globalModels: {
    title: IFunnelDesignFont
    subtitle: IFunnelDesignFont
    legend: IFunnelDesignFont
    card: IFunnelDesignCard
    button: IFunnelDesignButton
  }
  globalVariables: IFunnelVariable[]
}

export type FunnelStepType = 'question' | 'leadCapture' | 'custom'
export type FunnelStepQuestionType = 'singleChoice' | 'multipleChoice'

export interface IFunnelStepAnswer {
  answerId: string
  answerIcon: React.ReactNode | string
  answerText: string
}

export interface IFunnelStepBase {
  stepIndex: number
  stepId: string
  stepType: FunnelStepType
  stepSettings: {
    name: string
    active: boolean
    canGoBack: boolean
  }
  stepAddons: {
    before: string | null
    after: string | null
  }
}

export interface IFunnelStepQuestion extends IFunnelStepBase {
  stepType: 'question'
  stepQuestion: {
    type: FunnelStepQuestionType
    text: string
    answers: IFunnelStepAnswer[]
  }
}

export interface IFunnelStepLeadCapture extends IFunnelStepBase {
  stepType: 'leadCapture' 
}

export interface IFunnelStepCustom extends IFunnelStepBase {
  stepType: 'custom'
  customComponents: IComponent[]
}

export type IFunnelStep = IFunnelStepQuestion | IFunnelStepLeadCapture | IFunnelStepCustom


export interface IFunnelAnalytics {
  totalResponses: number
  progressByStep: any
}

export interface IFunnel {
  funnelId: string
  funnelSettings: IFunnelSettings
  funnelDesign: IFunnelDesign
  funnelSteps: IFunnelStep[]
  funnelAnalytics: IFunnelAnalytics
  createdAt: string
  lastEditionAt: string
}

export const MOCK_FUNNELS_LIST: IFunnel[] = [
  {
    funnelId: 'funnel_test_1',
    funnelSettings: {
      general: {
        funnelName: 'Quiz de Personalidade',
        funnelDescription:
          'Descubra qual personalidade combina mais com o seu estilo de vida com este quiz rápido!',
        funnelSlug: 'quiz-personalidade',
        funnelIsPublished: true,
        funnelFlowType: 'flow_button'
      },
      seo: {
        pageName: 'Descubra sua Personalidade',
        pageDescription:
          'Um quiz divertido para descobrir mais sobre você mesmo',
        pageFavicon: '/favicon-quiz.png'
      },
      leadCapture: {
        isRequired: true,
        fields: ['field_name', 'field_email', 'field_phone']
      },
      tracking: {
        pixelFacebook: 'fbPixelIdAqui',
        googleAnalytics: 'gaTrackingIdAqui'
      },
      redirectOnComplete: 'https://seusite.com/pagina-de-obrigado',
      notifications: {
        enabled: true,
        to: ['vendas@seusite.com']
      }
    },
    funnelDesign: {
      globalStyles: {
        borderRadius: 8,
        pageRowGap: 16,
        primaryColor: '#F7941D',
        backgroundColor: '#FFFFFF',
        font: 'Arial',
        logo: 'https://seusite.com/imagens/logo.png',
        showLogo: true,
        showProgressBar: true
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
          backgroundColor: '#ffffff',
          border: {
            borderSize: '1px',
            borderRadius: '8px',
            borderColor: '#e5e7eb'
          }
        },
        button: {
          label: {
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: '400',
            fontColor: '#6b7280'
          },
          backgroundColor: '#ffffff',
          backgroundColorHover: '#ffffff',
          backgroundColorActive: '#ffffff',
          border: {
            borderSize: '1px',
            borderRadius: '8px',
            borderColor: '#e5e7eb'
          }
        }
      },
      globalVariables: []
    },
    funnelSteps: [
      {
        stepIndex: 0,
        stepId: 'step_intro',
        stepType: 'question',
        stepSettings: {
          name: 'Introdução',
          active: true,
          canGoBack: true
        },
        stepAddons: {
          before: null,
          after: null
        },
        stepQuestion: {
          type: 'singleChoice',
          text: 'Pergunta 1',
          answers: [{ answerId: '', answerIcon: <></>, answerText: '' }]
        }
      },
      {
        stepIndex: 0,
        stepId: 'step_questions',
        stepType: 'question',
        stepSettings: {
          name: 'Perguntas',
          active: true,
          canGoBack: true
        },
        stepAddons: {
          before: null,
          after: null
        },
        stepQuestion: {
          type: 'singleChoice',
          text: 'Pergunta 1',
          answers: [{ answerId: '', answerIcon: <></>, answerText: '' }]
        }
      },
      {
        stepIndex: 0,
        stepId: 'step_result',
        stepType: 'question',
        stepSettings: {
          name: 'Resultado',
          active: true,
          canGoBack: true
        },
        stepAddons: {
          before: null,
          after: null
        },
        stepQuestion: {
          type: 'singleChoice',
          text: 'Pergunta 1',
          answers: [{ answerId: '', answerIcon: <></>, answerText: '' }]
        }
      }
    ],
    funnelAnalytics: {
      totalResponses: 0,
      progressByStep: {
        step_intro: true,
        step_questions: true,
        step_result: true
      }
    },
    createdAt: '15 de dezembro de 2024',
    lastEditionAt: '20/12/2024'
  }
]

// ==================================== COMPONENTS

export interface IComponent {
  componentId: string
  componentName: string
  componentIcon: React.ReactNode
  componentRender: React.ReactNode
}

export const BETA_COMPONENTS_LIS: IComponent[] = [
  {
    componentId: 'component_header',
    componentName: 'Cabeçalho',
    componentIcon: <LuAirplay />,
    componentRender: <></>
  },
  {
    componentId: 'component_slider',
    componentName: 'Slider',
    componentIcon: <LuAirplay />,
    componentRender: <></>
  },
  {
    componentId: 'component_image',
    componentName: 'Imagem',
    componentIcon: <LuAirplay />,
    componentRender: <></>
  },
  {
    componentId: 'component_video',
    componentName: 'Vídeo',
    componentIcon: <LuAirplay />,
    componentRender: <></>
  }
]
