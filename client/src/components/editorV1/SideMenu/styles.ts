import styled from 'styled-components'
import { Tabs, Typography, theme } from 'antd'

import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

export const SideMenu = styled(Tabs)`
  height: calc(100% - ${Global.height.editorV1PanelHeader});

  .ant-tabs-tab {
    cursor: pointer !important;
    margin: 0 !important;
    padding: 12px 14px 12px 6px !important;

    border-bottom: 1px solid ${() => useToken().token.colorBorder};

    &.ant-tabs-tab-active {
      font-weight: 500;
    }

    .ant-tabs-tab-btn {
      display: flex;
      align-items: center;
      column-gap: 10px;

      font-size: ${Fonts.xxs} !important;

      svg {
        font-size: ${Fonts.regular} !important;
        opacity: 0.4;
        cursor: n-resize !important;
      }
    }
  }

  .ant-tabs-nav {
    width: 100%;
  }

  .ant-tabs-content-holder {
    display: none;
  }
`
