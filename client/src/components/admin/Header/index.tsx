import * as S from './styles'

import { Logo, UserMenu } from '@/components'

interface IHeader {}

export const Header = ({}: IHeader) => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo size="sm" />
        <UserMenu />
      </S.HeaderWrapper>
    </S.Header>
  )
}
