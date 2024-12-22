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
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - ${Global.height.dashboardHeader});
  padding: 20px;
`

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${Global.wrapper.dashboard};
`

export const FunnelsListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 30px 0;
`

export const FunnelsListHeaderLabels = styled(Text)`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  b {
    font-size: ${Fonts.xxl};
    line-height: ${Fonts.xxl};
    font-weight: 600;
  }

  p {
    font-size: ${Fonts.xs};
    line-height: ${Fonts.xs};
    font-weight: 300;

    opacity: 0.75;
  }
`

export const FunnelsListHeaderCtas = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`

export const FunnelsList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`
