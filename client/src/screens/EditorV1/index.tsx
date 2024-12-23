import { useParams } from 'react-router-dom'
import * as S from './styles'

import { Splitter } from 'antd'

import {
  ComponentsMenu,
  EditorV1Header,
  SideMenu,
  StepEditor
} from '@/components'

interface IEditorV1 {}

const EditorV1 = ({}: IEditorV1) => {
  const { funnelId } = useParams()

  return (
    <S.EditorV1>
      <EditorV1Header />
      <S.EditorV1Content>
        <Splitter.Panel defaultSize={180} min={180} max={180}>
          {/* <S.EditorPanelHeader>Etapas</S.EditorPanelHeader> */}
          <SideMenu />
        </Splitter.Panel>

        <Splitter.Panel defaultSize={160} min={160} max={180}>
          {/* <S.EditorPanelHeader>Componentes</S.EditorPanelHeader> */}
          <ComponentsMenu />
        </Splitter.Panel>

        <Splitter.Panel></Splitter.Panel>

        <Splitter.Panel defaultSize={300} min={300} max={360}>
          {/* <S.EditorPanelHeader>Edições da Etapa</S.EditorPanelHeader> */}
          <StepEditor />
        </Splitter.Panel>
      </S.EditorV1Content>
    </S.EditorV1>
  )
}

export default EditorV1
