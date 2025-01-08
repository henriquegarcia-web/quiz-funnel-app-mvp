import styled from 'styled-components'
import { Typography } from 'antd'

import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'

const { Paragraph, Text, Link } = Typography

export const ViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 30px 0;
`

export const ViewHeaderLabels = styled(Text)`
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

export const ViewHeaderCtas = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`
