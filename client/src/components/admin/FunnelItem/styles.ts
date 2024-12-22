import styled from 'styled-components'
import { Typography, theme } from 'antd'

import Fonts from '@/utils/styles/fonts'
import { Card } from '@/utils/styles/common'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

export const FunnelItem = styled(Card)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FunnelItemLegends = styled(Text)`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  height: fit-content;

  b {
    font-size: ${Fonts.xl};
    line-height: ${Fonts.xl};
    font-weight: 600;

    color: ${() => useToken().token.colorPrimary};
  }

  p {
    font-size: ${Fonts.xxs};
    line-height: ${Fonts.xxs};
    font-weight: 400;

    margin-bottom: 0;
  }
`

export const FunnelItemCtas = styled.div`
  display: flex;
  column-gap: 8px;
  margin-bottom: auto;
`
