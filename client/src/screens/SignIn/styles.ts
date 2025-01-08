import styled from 'styled-components'
import { Screen, AuthContainer } from '@/utils/styles/common'

export const SignInScreen = styled(Screen)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
`

export const SignInContainer = styled(AuthContainer)`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
  max-width: 340px;
  padding: 25px;
`

export const SignInContainerHeader = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`
