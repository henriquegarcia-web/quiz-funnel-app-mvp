import * as S from './styles'

import { Logo, UserMenu } from '@/components'

interface IHeader {}

export const Header = ({}: IHeader) => {
  return (
    <S.Header>
      <S.HeaderLogo>
        <Logo size="sm" />
      </S.HeaderLogo>
      <UserMenu />
    </S.Header>
  )
}
