import styled from 'styled-components'
import { Form, Splitter, Typography, theme } from 'antd'
import { Global } from './globals'
import Fonts from './fonts'

const { useToken } = theme
const { Paragraph, Text, Link } = Typography

export const Screen = styled.main`
  width: 100%;
  height: fit-content;
  min-height: 100vh;

  background-color: ${() => useToken().token.colorBgLayout};
`

export const DashboardHeader = styled.header`
  padding: 0 ${Global.spacing.page};

  background-color: ${() => useToken().token.colorBgSpotlight};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  /* border: 1px solid ${() => useToken().token.colorBorder}; */
`

export const EditorV1Header = styled.header`
  padding: 0;

  background-color: ${() => useToken().token.colorBgSpotlight};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid ${() => useToken().token.colorBorder};
`

export const AuthContainer = styled.div`
  transition: 0.2s;
  border-radius: ${Global.radius.container};
  padding: ${Global.spacing.container};

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: ${() => useToken().token.colorFill};
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

  background-color: ${() => useToken().token.colorFill};
  /* border: 1px solid ${() => useToken().token.colorBorder}; */
`

export const Item = styled.div`
  transition: 0.2s;
  border-radius: ${Global.radius.item};
  padding: ${Global.spacing.item};

  background-color: ${() => useToken().token.colorBgElevated};
  /* border: 1px solid ${() => useToken().token.colorBorder}; */
`

export const CustomSplitter = styled(Splitter)`
  .ant-splitter-bar-dragger {
    &::before {
      width: 1px !important;
      background-color: ${() => useToken().token.colorBorder} !important;
    }

    &::after {
      width: 3px !important;
      background-color: ${() => useToken().token.colorBorder} !important;
    }
  }
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

// ========================================================

export const StepEditorWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;
  padding: 15px;
  border-radius: ${Global.radius.card};

  border: 1px solid ${() => useToken().token.colorBorder};
`

export const StepEditorWrapperHeader = styled(Text)`
  opacity: 0.7;

  font-size: ${Fonts.xxs};
  line-height: ${Fonts.xxs};
  font-weight: 500;
  text-transform: uppercase;
`

export const StepEditorWrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
