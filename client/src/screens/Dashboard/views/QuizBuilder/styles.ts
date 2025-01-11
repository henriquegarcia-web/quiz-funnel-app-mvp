import styled from 'styled-components'

import { EmptyContainer } from '@/utils/styles/common'
import Fonts from '@/utils/styles/fonts'

export const QuizBuilder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const UserQuizzesList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 100%;
`

export const UserQuizzesListEmpty = styled(EmptyContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: fit-content;

  font-size: ${Fonts.xxs};
  line-height: ${Fonts.xxs};
  font-weight: 300;
`
