import styled from 'styled-components'
import { Typography, theme } from 'antd'

import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'
import { CustomSplitter } from '@/utils/styles/common'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

export const DesignView = styled(CustomSplitter)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - ${Global.height.dashboardHeader});
`
