import * as S from './styles'

import { Splitter } from 'antd'

import { FunnelDesignForm } from '@/components'

interface IDesignView {}

const DesignView = ({}: IDesignView) => {
  return (
    <S.DesignView>
      <Splitter.Panel></Splitter.Panel>

      <Splitter.Panel defaultSize={340} min={340} max={400}>
        {/* <S.EditorPanelHeader>Edições da Etapa</S.EditorPanelHeader> */}
        <FunnelDesignForm />
      </Splitter.Panel>
    </S.DesignView>
  )
}

export default DesignView
