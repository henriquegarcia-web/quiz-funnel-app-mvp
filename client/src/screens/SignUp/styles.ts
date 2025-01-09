import styled from 'styled-components'
import { Typography } from 'antd'

import { Screen, AuthContainer } from '@/utils/styles/common'
import Fonts from '@/utils/styles/fonts'

const { Paragraph, Text, Link } = Typography

export const SignUpScreen = styled(Screen)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
  padding: 0 25px;
`

export const SignUpContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SignUpTitle = styled(Text)`
  font-size: ${Fonts.xxl};
  line-height: ${Fonts.xxl};
  font-weight: 400;
`

export const SignUpContainer = styled(AuthContainer)`
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  max-width: 380px;
  padding: 25px;
`
