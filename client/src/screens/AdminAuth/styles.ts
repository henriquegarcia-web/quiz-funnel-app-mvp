import styled from 'styled-components'
import { Screen } from '@/utils/styles/globals'
import { Card } from 'antd'

export const AdminAuthScreen = styled(Screen)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AuthContainer = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
`

export const AuthContainerHeader = styled.div`
  position: absolute;
  bottom: 100%;
  display: flex;

  border: 1px solid red;
`
