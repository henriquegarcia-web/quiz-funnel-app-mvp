import styled from 'styled-components'
import { Splitter, Typography, theme } from 'antd'

import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

export const EditorView = styled(Splitter)`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - ${Global.height.dashboardHeader});

  .ant-splitter-bar-dragger {
    &::before {
      width: 1px !important;
      background-color: ${() => useToken().token.colorBorder} !important;
    }

    &::after {
      width: 3px !important;
      background-color: ${() => useToken().token.colorBorder} !important;
    }
  }
`
