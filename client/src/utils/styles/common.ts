import styled from 'styled-components'
import { Form, theme } from 'antd'
import { Global } from './globals'
import Fonts from './fonts'

const { useToken } = theme

export const Screen = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  background-color: ${() => useToken().token.colorBgLayout};
`

export const DashboardHeader = styled.div`
  padding: 0 ${Global.spacing.page};

  background-color: ${() => useToken().token.colorBgSpotlight};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  /* border: 1px solid ${() => useToken().token.colorBorder}; */
`

export const Container = styled.div`
  transition: 0.2s;
  border-radius: ${Global.radius.container};
  padding: ${Global.spacing.container};

  background-color: ${() => useToken().token.colorBgBase};
  /* border: 1px solid ${() => useToken().token.colorBorder}; */
`

export const Card = styled.div`
  transition: 0.2s;
  border-radius: ${Global.radius.card};
  padding: ${Global.spacing.card};

  background-color: ${() => useToken().token.colorBgContainer};
  /* border: 1px solid ${() => useToken().token.colorBorder}; */
`

export const Item = styled.div`
  transition: 0.2s;
  border-radius: ${Global.radius.item};
  padding: ${Global.spacing.item};

  background-color: ${() => useToken().token.colorBgElevated};
  /* border: 1px solid ${() => useToken().token.colorBorder}; */
`

export const FormattedForm = styled(Form)`
  .ant-form-item {
    width: 100%;
    margin-bottom: 0px;

    .ant-form-item-label {
      padding-bottom: 5px !important;

      label {
        font-size: 12px;
      }
    }

    .ant-input-password {
      padding: 0 11px;
      box-shadow: none !important;

      .ant-input {
        padding: 0;
        height: 32.4px;
      }
    }

    .ant-input {
      font-size: ${Fonts.xs};
      height: 34px;
      padding: 0 11px 1px 11px;

      &:focus {
        box-shadow: none !important;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px ${() => useToken().token.colorBgElevated}
          inset !important;
        -webkit-text-fill-color: ${() =>
          useToken().token.colorTextBase} !important;
      }
    }

    .ant-form-item-explain-error {
      margin-top: 5px;

      font-size: 12px;
    }
  }
`
