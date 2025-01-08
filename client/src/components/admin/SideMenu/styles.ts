import styled from 'styled-components'
import { theme } from 'antd'

import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'

const { useToken } = theme

export const SideMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${Global.width.dashboardMenu};
  height: calc(100vh - ${Global.height.dashboardHeader});
  padding: 15px;

  border-right: 1px solid ${() => useToken().token.colorBorder};

  .ant-menu-inline {
    border-inline-end: none !important;
  }
`

export const SideMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
`
