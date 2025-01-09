import styled from 'styled-components'
import { Typography } from 'antd'

import Fonts from '@/utils/styles/fonts'

const { Paragraph, Text, Link } = Typography

export const ChangeAuthMode = styled(Text)`
  margin: 6px 0 10px 0;

  font-size: ${Fonts.xxxs};
  line-height: ${Fonts.xxxs};
  font-weight: 400;
`
