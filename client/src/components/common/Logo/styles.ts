import styled from 'styled-components'
import { Typography, theme } from 'antd'

import { LogoSizeType } from '.'
import Fonts from '@/utils/styles/fonts'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

const sizeStyles = {
  sm: {
    fontSize: Fonts.h3
  },
  md: {
    fontSize: Fonts.h2
  },
  lg: {
    fontSize: Fonts.h1
  }
}

export const Logo = styled(Text)<{ size: LogoSizeType }>`
  font-family: 'Archivo', serif;
  font-size: ${({ size }) => sizeStyles[size].fontSize};
  font-weight: 300;
  white-space: nowrap;

  b {
    font-weight: 500;
  }

  /* color: ${() => useToken().token.colorTextBase}; */
`
