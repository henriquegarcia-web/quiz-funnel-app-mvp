import * as S from './styles'

export type LogoSizeType = 'sm' | 'md' | 'lg'

interface ILogo {
  size: LogoSizeType
}

const Logo = ({ size }: ILogo) => {
  return (
    <S.Logo size={size}>
      <b>QUIZ</b> Funnel
    </S.Logo>
  )
}

export default Logo
