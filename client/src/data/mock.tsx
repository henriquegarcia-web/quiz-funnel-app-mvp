// ==================================== FUNNELS

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
