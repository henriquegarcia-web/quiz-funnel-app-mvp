import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button } from 'antd'

interface ICheckoutV1Screen {}

const CheckoutV1Screen = ({}: ICheckoutV1Screen) => {
  const navigate = useNavigate()

  return (
    <S.CheckoutV1Screen>
      <S.CheckoutV1Header>Checkout</S.CheckoutV1Header>
      <S.CheckoutV1Ctas>
        <Button disabled onClick={() => navigate('/admin')}>
          Obter Premium
        </Button>
        <Button type="primary" onClick={() => navigate('/entrar')}>
          Ir para o Dashboard
        </Button>
      </S.CheckoutV1Ctas>
    </S.CheckoutV1Screen>
  )
}

export default CheckoutV1Screen
