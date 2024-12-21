import styled from 'styled-components'
import { FormattedForm } from '@/utils/styles/globals'

export const AdminSignInForm = styled(FormattedForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 10px;
  width: 100%;
`

export const SignInFormFirstAccess = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 8px;
  width: 100%;

  p {
    padding-top: 1px;

    font-size: 13px;
    line-height: 13px;
    font-weight: 300;
  }
`
