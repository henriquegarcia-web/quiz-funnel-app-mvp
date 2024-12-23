import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'

import { EditorV1Header } from '@/components'
import { IFunnel, MOCK_FUNNELS_LIST } from '@/data/mock'
import { useEditorV1 } from '@/contexts/EditorV1Provider'

interface IEditorV1 {}

const EditorV1 = ({}: IEditorV1) => {
  const { funnelSlug } = useParams()
  const { editorActiveView, handleActivateFunnel, handleActivateStep } =
    useEditorV1()

  useEffect(() => {
    const activeFunnelData = MOCK_FUNNELS_LIST.find(
      (funnel: IFunnel) => funnel.funnelSettings.slug === funnelSlug
    )

    if (!!activeFunnelData && activeFunnelData.funnelSteps.length > 0) {
      handleActivateStep(activeFunnelData.funnelSteps[0])
    }

    handleActivateFunnel(activeFunnelData)
  }, [MOCK_FUNNELS_LIST, funnelSlug])

  return (
    <S.EditorV1>
      <EditorV1Header />
      <S.EditorV1Content>{editorActiveView.navView}</S.EditorV1Content>
    </S.EditorV1>
  )
}

export default EditorV1
