import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as S from './styles'

import { Splitter } from 'antd'

import {
  ComponentsMenu,
  EditorV1Header,
  SideMenu,
  StepEditor
} from '@/components'
import { StepEditorType } from '@/components/editorV1/StepEditor'
import { IFunnel, IFunnelStep, MOCK_FUNNELS_LIST } from '@/data/mock'

interface IEditorV1 {}

const EditorV1 = ({}: IEditorV1) => {
  const { funnelId } = useParams()

  const [funnelData, setFunnelData] = useState<IFunnel | null>(null)
  const [stepEditionType, setStepEditionType] = useState<StepEditorType>('step')
  const [stepActive, setStepActive] = useState<IFunnelStep>()

  const handleToggleComponentEdition = (component: any) => {
    if (stepEditionType === 'component') {
      setStepEditionType('step')
    } else {
      setStepEditionType('component')
    }
  }

  const handleSetActiveView = (view: IFunnelStep) => {
    setStepActive(view)
  }

  useEffect(() => {
    const activeFunnelData =
      MOCK_FUNNELS_LIST.find(
        (funnel: IFunnel) => funnel.funnelId === funnelId
      ) || null

    if (!!activeFunnelData && activeFunnelData.funnelSteps.length > 0) {
      setStepActive(activeFunnelData.funnelSteps[0])
    }

    setFunnelData(activeFunnelData)
  }, [MOCK_FUNNELS_LIST, funnelId])

  return (
    <S.EditorV1>
      <EditorV1Header />
      <S.EditorV1Content>
        <Splitter.Panel defaultSize={180} min={180} max={180}>
          {/* <S.EditorPanelHeader>Etapas</S.EditorPanelHeader> */}
          <SideMenu
            menus={funnelData?.funnelSteps}
            handleSetActiveView={handleSetActiveView}
          />
        </Splitter.Panel>

        <Splitter.Panel defaultSize={160} min={160} max={180}>
          {/* <S.EditorPanelHeader>Componentes</S.EditorPanelHeader> */}
          <ComponentsMenu />
        </Splitter.Panel>

        <Splitter.Panel></Splitter.Panel>

        <Splitter.Panel defaultSize={300} min={300} max={360}>
          {/* <S.EditorPanelHeader>Edições da Etapa</S.EditorPanelHeader> */}
          <StepEditor
            stepEditionType={stepEditionType}
            stepActive={stepActive}
          />
        </Splitter.Panel>
      </S.EditorV1Content>
    </S.EditorV1>
  )
}

export default EditorV1
