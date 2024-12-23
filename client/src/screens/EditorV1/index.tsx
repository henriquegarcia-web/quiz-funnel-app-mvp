import { useParams } from 'react-router-dom'
import * as S from './styles'

import { Splitter } from 'antd'

import { EditorV1Header } from '@/components'

interface IEditorV1 {}

const EditorV1 = ({}: IEditorV1) => {
  const { funnelId } = useParams()

  return (
    <S.EditorV1>
      <EditorV1Header />
      <S.EditorV1Content>
        <Splitter.Panel defaultSize={180} min={180} max={240}>
          {/* {'<Desc text={1} />'} */}
        </Splitter.Panel>

        <Splitter.Panel defaultSize={160} min={160} max={180}>
          {/* {'<Desc text={2} />'} */}
        </Splitter.Panel>

        <Splitter.Panel>{/* {'<Desc text={3} />'} */}</Splitter.Panel>

        <Splitter.Panel defaultSize={300} min={300} max={360}>
          {/* {'<Desc text={4} />'} */}
        </Splitter.Panel>
      </S.EditorV1Content>
    </S.EditorV1>
  )
}

export default EditorV1
