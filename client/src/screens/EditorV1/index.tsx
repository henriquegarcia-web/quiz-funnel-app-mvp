import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import * as S from './styles'

import { message } from 'antd'

import { EditorV1Header } from '@/components'
import { useEditorView } from '@/hooks/useEditorView'
import { useEditorV1 } from '@/contexts/EditorV1Provider'
import { IFunnel } from '@/data/mock'
import { validateFunnelAccess } from '@/services/quiz'

interface IEditorV1 {}

const EditorV1 = ({}: IEditorV1) => {
  const navigate = useNavigate()
  const { funnelId } = useParams()
  const { editorActiveView } = useEditorV1()

  useEditorView(funnelId)

  const [funnel, setFunnel] = useState<IFunnel | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const validateAccess = async () => {
      try {
        setIsLoading(true)
        const funnelData = await validateFunnelAccess(funnelId!)
        setFunnel(funnelData)
      } catch (err: any) {
        console.error(err)
        message.error('Falha ao abrir funil')
        navigate('/')
      } finally {
        setIsLoading(false)
      }
    }

    if (funnelId) {
      validateAccess()
    } else {
      message.error('Falha ao abrir funil')
      navigate('/admin')
    }
  }, [funnelId, navigate])

  if (isLoading) return <p>Validando acesso e carregando...</p>

  return (
    <S.EditorV1>
      <EditorV1Header />
      <S.EditorV1Content>{editorActiveView?.navView}</S.EditorV1Content>
    </S.EditorV1>
  )
}

export default EditorV1
