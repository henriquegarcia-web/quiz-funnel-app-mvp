import styled from 'styled-components'
import { Typography } from 'antd'

import { Global } from '@/utils/styles/globals'
import { Screen } from '@/utils/styles/common'
import Fonts from '@/utils/styles/fonts'

const { Paragraph, Text, Link } = Typography

export const DashboardScreen = styled(Screen)`
  display: flex;
  flex-direction: column;
`

export const DashboardContent = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 15px;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - ${Global.height.dashboardHeader});
`

export const DashboardView = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - ${Global.width.dashboardMenu});
`

export const DashboardViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${Global.wrapper.dashboard};
  padding-top: 15px;
`
