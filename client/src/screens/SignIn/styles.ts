import styled from 'styled-components'
import { Typography } from 'antd'

import { Screen, AuthContainer } from '@/utils/styles/common'
import Fonts from '@/utils/styles/fonts'

const { Paragraph, Text, Link } = Typography

export const SignInScreen = styled(Screen)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
`

export const SignInContainer = styled(AuthContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 25px;
  width: 100%;
  max-width: 340px;
  padding: 25px;
`

export const SignInContainerHeader = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const SignInTitle = styled(Text)`
  font-size: ${Fonts.xxl};
  line-height: ${Fonts.xxl};
  font-weight: 400;
`
