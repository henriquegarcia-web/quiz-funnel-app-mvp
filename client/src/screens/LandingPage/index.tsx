import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button } from 'antd'

interface ILandingPageScreen {}

const LandingPageScreen = ({}: ILandingPageScreen) => {
  const navigate = useNavigate()

  return (
    <S.LandingPageScreen>
      <S.LandingPageHeader>Landing Page</S.LandingPageHeader>
      <S.LandingPageCtas>
        <Button
          // type="primary"
          onClick={() => navigate('/cadastro')}
        >
          Criar Conta
        </Button>
        <Button type="primary" onClick={() => navigate('/entrar')}>
          Entrar
        </Button>
      </S.LandingPageCtas>
    </S.LandingPageScreen>
  )
}

export default LandingPageScreen
