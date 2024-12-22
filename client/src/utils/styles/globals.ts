import styled, { createGlobalStyle } from 'styled-components'

import Fonts from './fonts'

export const Global = {
  responsive: {
    desktop: '1000px',
    tablet: '760px',
    mobile: '500px'
  },
  wrapper: {
    dashboard: '860px'
  },
  height: {
    dashboardHeader: '75px',
    editorV1Header: '70px'
  },
  radius: {
    container: '10px',
    card: '8px',
    item: '6px'
  },
  spacing: {
    page: '25px',
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
