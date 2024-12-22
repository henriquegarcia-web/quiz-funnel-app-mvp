import styled from 'styled-components'
import { FormattedForm } from '@/utils/styles/common'
import Fonts from '@/utils/styles/fonts'

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
  margin: 5px 0;

  p {
    font-size: ${Fonts.xs};
    line-height: ${Fonts.xs};
    font-weight: 300;
  }
`
