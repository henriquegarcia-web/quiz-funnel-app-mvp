import styled from 'styled-components'
import { Splitter, theme } from 'antd'

import { Screen } from '@/utils/styles/common'
import { Global } from '@/utils/styles/globals'

const { useToken } = theme

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

  /* border: 1px solid ${() => useToken().token.colorBorder};
  border-top: none; */

  /* .ant-splitter-panel {
    padding: 15px;
  } */
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
