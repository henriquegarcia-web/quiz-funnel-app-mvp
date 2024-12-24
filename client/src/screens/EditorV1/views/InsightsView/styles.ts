import styled from 'styled-components'
import { Statistic, Table, Typography, theme } from 'antd'

import { LeadType } from '.'
import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

export const InsightsView = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: fit-content;
  min-height: calc(100vh - ${Global.height.editorV1Header});
  padding: ${Global.spacing.page};
`

export const InsightsViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  width: 100%;
  max-width: ${Global.wrapper.insights};
`

export const InsightsFeedbackWrapper = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  height: fit-content;
`

export const InsightsFeedback = styled(Statistic)`
  width: 20%;
  border-radius: ${Global.radius.card};
  padding: ${Global.spacing.card};

  background-color: ${() => useToken().token.colorFill};
  border: 1px solid ${() => useToken().token.colorBorder};

  .ant-statistic-content {
    display: flex;
    align-items: center;
    column-gap: 4px;

    .ant-statistic-content-prefix {
      margin-bottom: -8px;
    }
  }
`

export const LeadsTable = styled(Table)<{ dataSource: LeadType[] }>`
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  th {
    font-size: ${Fonts.xxs};
    line-height: ${Fonts.xxs};
    font-weight: 500;

    background-color: ${() => useToken().token.colorFill} !important;
  }

  td {
    font-size: ${Fonts.xxxs};
    line-height: ${Fonts.xxxs};
    font-weight: 300;
  }

  .ant-table-cell {
    border-radius: 0 !important;
  }

  border: 1px solid ${() => useToken().token.colorBorder};
`
