import styled from 'styled-components'
import { Typography, theme } from 'antd'

import { Screen } from '@/utils/styles/common'
import { Global } from '@/utils/styles/globals'
import Fonts from '@/utils/styles/fonts'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

export const EditorV1 = styled(Screen)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const EditorV1Content = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - ${Global.height.editorV1Header});
`

export const EditorPanelHeader = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${Global.height.editorV1Header};
  padding-bottom: 2px;
  opacity: 0.6;

  font-size: ${Fonts.xxxs};
  line-height: ${Fonts.xxxs};
  font-weight: 500;

  background-color: ${() => useToken().token.colorBgBase};
  border-bottom: 1px solid ${() => useToken().token.colorBorder};
`
