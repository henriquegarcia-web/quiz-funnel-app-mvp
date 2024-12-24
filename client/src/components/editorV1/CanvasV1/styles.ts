import styled from 'styled-components'

import { Global } from '@/utils/styles/globals'

export const CanvasV1 = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - ${Global.height.editorV1Header});

  &:active {
    cursor: grab;
  }
`
