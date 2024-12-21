import styled from 'styled-components'
import { Screen } from '@/utils/styles/globals'

export const TemplateScreen = styled(Screen)`
  display: flex;

  background-color: ${(props) => props.theme.colors.background};
`

// export const OtherTemplateScreen = styled.div`
//   display: flex;
// `
