import styled from 'styled-components'

import { Global } from '@/utils/styles/globals'

export const ViewCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - ${Global.height.editorV1Header});

  &:active {
    cursor: grab;
  }

  border: 2px solid red;
`
