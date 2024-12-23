import styled from 'styled-components'
import { Typography, theme } from 'antd'

import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

export const StepEditor = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - ${Global.height.editorV1PanelHeader});
`
