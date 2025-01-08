import * as S from './styles'

import { Button } from 'antd'
import { Logo, UserMenu } from '@/components'

interface IViewHeader {
  title: string
  legend: String
  children?: React.ReactNode
}

const ViewHeader = ({ title, legend, children }: IViewHeader) => {
  return (
    <S.ViewHeader>
      <S.ViewHeaderLabels>
        <b>{title}</b>
        <p>{legend}</p>
      </S.ViewHeaderLabels>
      <S.ViewHeaderCtas>{children && children}</S.ViewHeaderCtas>
    </S.ViewHeader>
  )
}

export default ViewHeader
