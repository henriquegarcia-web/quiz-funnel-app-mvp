import styled from 'styled-components'

import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'
import { DashboardHeader } from '@/utils/styles/common'

export const Header = styled(DashboardHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${Global.height.dashboardHeader};
`

export const HeaderLogo = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  max-width: ${Global.width.dashboardMenu};
  height: 100%;
`
