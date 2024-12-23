import { useEffect, useState } from 'react'

import { IFunnel, MOCK_FUNNELS_LIST } from '@/data/mock'
import { useEditorV1 } from '@/contexts/EditorV1Provider'

export const useEditorView = (funnelSlug: string | undefined) => {
  const { handleActivateFunnel, handleActivateStep } = useEditorV1()
  const [activeFunnelData, setActiveFunnelData] = useState<IFunnel | undefined>(
    undefined
  )

  useEffect(() => {
    const foundFunnel = MOCK_FUNNELS_LIST.find(
      (funnel: IFunnel) => funnel.funnelSettings.slug === funnelSlug
    )

    if (foundFunnel && !!handleActivateFunnel && !!handleActivateStep) {
      setActiveFunnelData(foundFunnel)
      handleActivateFunnel(foundFunnel)

      if (foundFunnel.funnelSteps.length > 0) {
        handleActivateStep(foundFunnel.funnelSteps[0])
      }
    }
  }, [funnelSlug])

  return null
}
