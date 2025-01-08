import * as S from './styles'

import { Logo, UserMenu } from '@/components'

interface IPageBuilder {}

const PageBuilder = ({}: IPageBuilder) => {
  return (
    <S.PageBuilder>
      <S.PageBuilderLogo></S.PageBuilderLogo>
    </S.PageBuilder>
  )
}

export default PageBuilder
