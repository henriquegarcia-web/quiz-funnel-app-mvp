import { useParams } from 'react-router-dom'
import * as S from './styles'

import { Button, Splitter } from 'antd'

import { EditorV1Header, SideMenu } from '@/components'
import { BETA_COMPONENTS_LIS, IComponent } from '@/data/mock'

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
          <S.ComponentsMenu>
            {/* <S.EditorPanelHeader>Componentes</S.EditorPanelHeader> */}
            <S.ComponentsMenuWrapper>
              {BETA_COMPONENTS_LIS.map((component: IComponent) => (
                <Button key={component.componentId}>
                  {component.componentIcon}
                  {component.componentName}
                </Button>
              ))}
            </S.ComponentsMenuWrapper>
          </S.ComponentsMenu>
        </Splitter.Panel>

        <Splitter.Panel></Splitter.Panel>

        <Splitter.Panel defaultSize={300} min={300} max={360}></Splitter.Panel>
      </S.EditorV1Content>
    </S.EditorV1>
  )
}

export default EditorV1
