import styled from 'styled-components'
import { FormattedForm } from '@/utils/styles/common'
import Fonts from '@/utils/styles/fonts'

export const FunnelDesignFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`

export const FunnelDesignForm = styled(FormattedForm)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  row-gap: 10px;
  width: 100%;
`
