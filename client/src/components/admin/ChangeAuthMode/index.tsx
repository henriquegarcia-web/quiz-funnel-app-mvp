import { Link } from 'react-router-dom'
import * as S from './styles'

interface IChangeAuthMode {
  mode: 'signIn' | 'signUp'
}

const ChangeAuthMode = ({ mode }: IChangeAuthMode) => {
  if (mode === 'signIn')
    return (
      <S.ChangeAuthMode>
        Não possui conta? <Link to="/cadastro">Criar Conta</Link>
      </S.ChangeAuthMode>
    )

  return (
    <S.ChangeAuthMode>
      Já possui conta? <Link to="/entrar">Entrar</Link>
    </S.ChangeAuthMode>
  )
}

export default ChangeAuthMode
