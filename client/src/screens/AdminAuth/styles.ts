import styled from 'styled-components'
import { Screen } from '@/utils/styles/globals'
import { Card } from 'antd'

export const AdminAuthScreen = styled(Screen)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
`

export const AuthContainer = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  max-width: 340px;
  padding: 25px;

  .ant-card-body {
    width: 100%;
    padding: 0;
  }
`

export const AuthContainerHeader = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
