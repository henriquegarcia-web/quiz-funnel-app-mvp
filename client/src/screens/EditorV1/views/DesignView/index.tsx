import * as S from './styles'

import { Splitter } from 'antd'

import { CanvasV1, FunnelDesignForm, ViewCanvas } from '@/components'

interface IDesignView {}

const DesignView = ({}: IDesignView) => {
  return (
    <S.DesignView>
      <Splitter.Panel style={{ position: 'relative', overflow: 'hidden' }}>
        {/* <ViewCanvas canvasWidth={1000} canvasHeight={800} /> */}
        <CanvasV1 canvasWidth={1000} canvasHeight={800} />
      </Splitter.Panel>

      <Splitter.Panel defaultSize={340} min={340} max={400}>
        {/* <S.EditorPanelHeader>Edições da Etapa</S.EditorPanelHeader> */}
        <FunnelDesignForm />
      </Splitter.Panel>
    </S.DesignView>
  )
}

export default DesignView
