import styled from 'styled-components'
import { Typography, theme } from 'antd'

import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

export const ComponentsMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - ${Global.height.editorV1PanelHeader});
`

export const ComponentsMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
  width: 100%;
  height: fit-content;
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

    background-color: ${() => useToken().token.colorFill};

    &:hover {
      background-color: ${() => useToken().token.colorFill} !important;
    }
  }
`
