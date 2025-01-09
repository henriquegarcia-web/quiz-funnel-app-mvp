import styled from 'styled-components'
import { Typography } from 'antd'

import { Screen } from '@/utils/styles/common'
import Fonts from '@/utils/styles/fonts'

const { Paragraph, Text, Link } = Typography

export const LandingPageScreen = styled(Screen)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;
`

export const LandingPageHeader = styled(Text)`
  font-size: ${Fonts.h1};
  line-height: ${Fonts.h1};
  font-weight: 500;
`

export const LandingPageCtas = styled.div`
  display: flex;
  column-gap: 10px;
`


