import styled from 'styled-components'
import { theme } from 'antd'

import Fonts from '@/utils/styles/fonts'
import { dashboardHeaderHeight, dashboardWrapper } from '@/utils/styles/globals'

const { useToken } = theme

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${dashboardHeaderHeight};
  padding: 0 20px;

  background-color: ${() => useToken().token.colorBgElevated};
`

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${dashboardWrapper};
  height: 100%;
`
