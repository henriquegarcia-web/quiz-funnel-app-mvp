import styled from 'styled-components'
import {
  dashboardHeaderHeight,
  dashboardWrapper,
  Screen
} from '@/utils/styles/globals'

export const DashboardScreen = styled(Screen)`
  display: flex;
`

export const DashboardContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - ${dashboardHeaderHeight});
  padding: 20px;
`

export const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${dashboardWrapper};
`
