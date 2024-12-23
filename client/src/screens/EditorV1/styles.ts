import styled from 'styled-components'
import { Typography, Splitter, theme } from 'antd'

import { Screen } from '@/utils/styles/common'
import { Global } from '@/utils/styles/globals'
import Fonts from '@/utils/styles/fonts'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

export const EditorV1 = styled(Screen)`
  display: flex;
  flex-direction: column;
`

export const EditorV1Content = styled(Splitter)`
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

export const ComponentsMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const ComponentsMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  width: 100%;
  height: calc(100% - ${Global.height.editorV1PanelHeader});
  padding: 10px;

  .ant-btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 8px 12px !important;
    height: fit-content !important;

    span {
      font-size: ${Fonts.xxxs};
    }

    svg {
      font-size: ${Fonts.small};
    }
  }
`

export const EditorPanelHeader = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${Global.height.editorV1PanelHeader};
  padding-bottom: 2px;
  opacity: 0.6;

  font-size: ${Fonts.xxxs};
  line-height: ${Fonts.xxxs};
  font-weight: 500;

  background-color: ${() => useToken().token.colorBgBase};
  border-bottom: 1px solid ${() => useToken().token.colorBorder};
`
