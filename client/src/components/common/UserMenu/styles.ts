import styled from 'styled-components'
import { Card, Tag, Typography } from 'antd'

import Fonts from '@/utils/styles/fonts'

const { Paragraph, Text, Link } = Typography

export const UserMenu = styled(Card)`
  display: flex;
  width: fit-content;
  max-width: fit-content;
  cursor: pointer;

  .ant-card-body {
    display: flex;
    align-items: center;
    padding: 8px 10px;
    width: fit-content;
    max-width: fit-content;
  }
`

export const UserMenuInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  row-gap: 5px;
  margin-right: 10px;
`

export const UserWelcome = styled(Text)`
  font-size: ${Fonts.xxxs};
  line-height: ${Fonts.xxxs};
  font-weight: 300;

  b {
    font-weight: 500;
  }
`

export const UserRole = styled(Tag)`
  height: 16px;
  margin: 0;
  padding: 0 4px;
  border-radius: 3px;

  font-size: 10px;
  line-height: 15px;
`
