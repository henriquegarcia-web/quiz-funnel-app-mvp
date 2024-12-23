import styled from 'styled-components'
import { theme } from 'antd'

import Fonts from '@/utils/styles/fonts'
import { Global } from '@/utils/styles/globals'
import { EditorV1Header, Container } from '@/utils/styles/common'

const { useToken } = theme

export const Header = styled(EditorV1Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${Global.height.editorV1Header};
`

export const HeaderFirst = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  height: 100%;
`

export const GoBackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${Global.height.editorV1Header};
  height: 100%;
  padding-right: 2px;
  margin-right: 10px;
  cursor: pointer;

  svg {
    transition: 0.2s;
    opacity: 0.8;

    font-size: ${Fonts.h3};

    color: ${() => useToken().token.colorText};
  }

  background-color: transparent;
  border-right: 1px solid ${() => useToken().token.colorBorder};
  background-color: ${() => useToken().token.colorBgLayout};

  &:hover {
    svg {
      opacity: 1;
    }
  }
`

export const HeaderSecond = styled.div`
  display: flex;
`

export const HeaderThird = styled.div`
  display: flex;
  align-items: center;
  column-gap: 6px;
  padding-right: ${Global.spacing.card};
`

export const ToggleResponsive = styled(Container)`
  display: flex;
  column-gap: 6px;
  padding: 6px;
  margin: 0 10px;
`
