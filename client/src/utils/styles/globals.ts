import styled, { createGlobalStyle } from 'styled-components'
import { Form as AntdForm, Layout, theme } from 'antd'

import Fonts from './fonts'

export const responsiveDesktop = '1000px'
export const responsiveTablet = '760px'
export const responsiveMobile = '500px'

export const clientHeaderHeight = '70px'

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 14px;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    /* font-family: "Montserrat", sans-serif; */
    /* font-family: "Baloo Paaji 2", sans-serif; */
    /* font-family: "Barlow", sans-serif; */
    /* font-family: "Open Sans", sans-serif; */
    /* font-family: "Archivo", serif; */
    text-decoration: none;
    user-select: none;

    -webkit-tap-highlight-color: transparent !important;
  }

  /* input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    -webkit-text-fill-color: #000 !important;
  } */

  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    z-index: 1000;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.4);
  }
`

export default GlobalStyle

export const Screen = styled(Layout)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
`

const { useToken } = theme

export const FormattedForm = styled(AntdForm)`
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
        -webkit-box-shadow: 0 0 0 30px ${() => useToken().token.colorFill} inset !important;
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
