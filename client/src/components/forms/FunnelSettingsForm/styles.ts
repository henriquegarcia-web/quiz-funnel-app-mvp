import styled from 'styled-components'
import { theme } from 'antd'

import { FormattedForm } from '@/utils/styles/common'
import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'

const { useToken } = theme

export const FunnelSettingsFormWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - ${Global.height.dashboardHeader});
  overflow: auto;

  .ant-collapse {
    width: 100%;

    border: none !important;

    &,
    .ant-collapse-content,
    .ant-collapse-header {
      border-radius: 0 !important;
    }

    .ant-collapse-header {
      display: flex;
      align-items: center;

      background-color: ${() => useToken().token.colorBgElevated};

      .ant-collapse-expand-icon,
      .ant-collapse-header-text {
        display: flex;
        height: fit-content;
      }

      .ant-collapse-header-text {
        /* opacity: 0.7; */

        font-size: ${Fonts.xxs};
        /* line-height: ${Fonts.xxs}; */
        font-weight: 500;
        text-transform: uppercase;
      }
    }

    .ant-collapse-content {
      background-color: ${() => useToken().token.colorFill};
      border-bottom: 1px solid ${() => useToken().token.colorBorder};
    }

    background-color: ${() => useToken().token.colorFill};
  }

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    z-index: 1000;
  }

  &::-webkit-scrollbar-track {
    background: ${() => useToken().token.colorFill};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${() => useToken().token.colorBgLayout};
  }
`

export const FunnelSettingsForm = styled(FormattedForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 10px;
  width: 100%;
  height: fit-content;
`
