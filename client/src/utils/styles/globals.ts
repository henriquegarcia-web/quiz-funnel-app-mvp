import styled, { createGlobalStyle } from 'styled-components'

import Fonts from './fonts'

export const Global = {
  responsive: {
    desktop: '1000px',
    tablet: '760px',
    mobile: '500px'
  },
  wrapper: {
    dashboard: '1000px',
    editorV1: '800px',
    insights: '1100px'
  },
  width: {
    dashboardMenu: '260px'
  },
  height: {
    dashboardHeader: '80px',
    editorV1Header: '65px',
    editorV1PanelHeader: '35px'
  },
  radius: {
    container: '10px',
    card: '8px',
    item: '6px'
  },
  spacing: {
    page: '20px',
    container: '25px',
    card: '20px',
    item: '15px'
  }
}

// export const responsiveDesktop = '1000px'
// export const responsiveTablet = '760px'
// export const responsiveMobile = '500px'

// export const dashboardWrapper = '860px'

// export const dashboardHeaderHeight = '75px'
// export const editorV1HeaderHeight = '70px'

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
    font-family: "Archivo", serif;
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

  .ant-modal-header {
    margin-bottom: 20px !important;

    .ant-modal-title {
      font-size: ${Fonts.xl} !important;
      line-height: ${Fonts.xl} !important;
    }
  }

  .ant-input-number, .ant-input-number-group-wrapper {
    width: 100% !i\mportant;
  }

  .ant-btn {
    box-shadow: none !important;

    &.ant-btn-lg {
      font-size: ${Fonts.xs};
      line-height: ${Fonts.xs};
      
      &.ant-btn-primary {
        height: 38px !important;
        padding-top: 8px;      
      }
    }

    &:disabled {
      background-color: rgba(31, 39, 61, 0.4);
    }
  }


  .ant-segmented {
    height: 41px;
    padding: 5px;
    border: 1px solid #17244d;

    .ant-segmented-group {
      display: flex;
      column-gap: 5px;
      height: 100%;

      .ant-segmented-item-label {
        display: flex;
        align-items: center;
        height: 100%;

        span:not(.ant-segmented-item-icon) {
          font-size: ${Fonts.xxs};
        }

        .ant-segmented-item-icon {
          display: flex;

          svg {
            font-size: ${Fonts.regular} !important;
          }
        }
      }
    }
  }

  .ant-popover-content {
    max-width: 300px;

    svg {
      font-size: ${Fonts.large};
    }

    .ant-popconfirm-title {
      display: flex;
      align-items: center;
      height: 18px;
      font-size: ${Fonts.small};
      line-height:  ${Fonts.small};
    }

    .ant-popconfirm-description {
      font-size: ${Fonts.xs};
      line-height:  ${Fonts.large};
    }
  }
`

export default GlobalStyle
