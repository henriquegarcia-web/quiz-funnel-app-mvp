import * as S from './styles'

import { Splitter } from 'antd'

import { CanvasV1, ComponentsMenu, SideMenu, StepEditor } from '@/components'
import { useEditorV1 } from '@/contexts/EditorV1Provider'

interface IEditorView {}

const EditorView = ({}: IEditorView) => {
  const { activeFunnelData, stepActive, stepEditionType, handleActivateStep } =
    useEditorV1()

  return (
    <S.EditorView>
      <Splitter.Panel defaultSize={180} min={180} max={180}>
        {/* <S.EditorPanelHeader>Etapas</S.EditorPanelHeader> */}
        <SideMenu
          menus={activeFunnelData?.funnelSteps}
          handleActivateStep={handleActivateStep}
        />
      </Splitter.Panel>

      <Splitter.Panel defaultSize={160} min={160} max={180}>
        {/* <S.EditorPanelHeader>Componentes</S.EditorPanelHeader> */}
        <ComponentsMenu />
      </Splitter.Panel>

      <Splitter.Panel style={{ position: 'relative', overflow: 'hidden' }}>
        <CanvasV1 canvasWidth={1000} canvasHeight={800} />
      </Splitter.Panel>

      <Splitter.Panel defaultSize={340} min={340} max={400}>
        {/* <S.EditorPanelHeader>Edições da Etapa</S.EditorPanelHeader> */}
        <StepEditor stepEditionType={stepEditionType} stepActive={stepActive} />
      </Splitter.Panel>
    </S.EditorView>
  )
}

export default EditorView
