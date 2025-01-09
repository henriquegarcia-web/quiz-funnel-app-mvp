import styled from 'styled-components'

import { FormattedForm } from '@/utils/styles/common'
import Fonts from '@/utils/styles/fonts'

export const SignUpFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding-top: 5px;

  .ant-steps-item {
    width: 25% !important;

    .ant-steps-item-title {
      font-size: ${Fonts.xxs};
    }

    .ant-steps-item-icon {
      margin-inline-start: 25px !important;
    }

    .ant-steps-item-content {
      width: 100% !important;
    }

    .ant-steps-item-tail::after {
      transform: translateX(-9px);
    }
  }
`

export const SignUpForm = styled(FormattedForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 10px;
  width: 100%;

  .ant-picker {
    width: 50%;
  }
`

export const SignUpFormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 8px;
  width: 100%;
`
