import * as S from './styles'

import { Splitter } from 'antd'

import { CanvasV1, FunnelSettingsForm } from '@/components'
import { useEditorV1 } from '@/contexts/EditorV1Provider'

interface ISettingsView {}

const SettingsView = ({}: ISettingsView) => {
  const { activeFunnelData } = useEditorV1()

  return (
    <S.SettingsView>
      <Splitter.Panel style={{ position: 'relative', overflow: 'hidden' }}>
        <CanvasV1 canvasWidth={1000} canvasHeight={800} />
      </Splitter.Panel>

      <Splitter.Panel defaultSize={340} min={340} max={400}>
        {/* <S.EditorPanelHeader>Edições da Etapa</S.EditorPanelHeader> */}
        <FunnelSettingsForm activeFunnel={activeFunnelData} />
      </Splitter.Panel>
    </S.SettingsView>
  )
}

export default SettingsView
