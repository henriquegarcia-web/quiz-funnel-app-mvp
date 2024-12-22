import styled from 'styled-components'

import { Global } from '@/utils/styles/globals'
import { Screen } from '@/utils/styles/common'

export const DashboardScreen = styled(Screen)`
  display: flex;
  flex-direction: column;
`

export const DashboardContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - ${Global.height.dashboardHeader});
  padding: 20px;
`

export const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${Global.wrapper.dashboard};
`
