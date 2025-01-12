import { useParams } from 'react-router-dom'
import * as S from './styles'

import { EditorV1Header } from '@/components'
import { useEditorView } from '@/hooks/useEditorView'
import { useEditorV1 } from '@/contexts/EditorV1Provider'

interface IEditorV1 {}

const EditorV1 = ({}: IEditorV1) => {
  const { funnelSlug } = useParams()
  const { editorActiveView } = useEditorV1()
  
  useEditorView(funnelSlug)

  // Criar uma função que valida o slug/id no backend se o funil é do usário, 
  // se sim retorna os dados do funil, se não retorna false e redireciona

  return (
    <S.EditorV1>
      <EditorV1Header />
      <S.EditorV1Content>{editorActiveView?.navView}</S.EditorV1Content>
    </S.EditorV1>
  )
}

export default EditorV1
