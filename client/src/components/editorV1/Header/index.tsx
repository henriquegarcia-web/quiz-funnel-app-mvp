import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button, Tooltip } from 'antd'
import { LuChevronLeft, LuPlay, LuPlus, LuRedo, LuUndo } from 'react-icons/lu'

import { Navigation, ToggleResponsive } from '@/components'

interface IHeader {}

export const Header = ({}: IHeader) => {
  const navigate = useNavigate()

  return (
    <S.Header>
      <S.HeaderFirst>
        <S.GoBackButton onClick={() => navigate('/admin')}>
          <LuChevronLeft />
        </S.GoBackButton>
        <Button size="large" onClick={() => {}}>
          <LuPlus />
          Nova Etapa
        </Button>
        <Tooltip placement="bottomRight" title="Disfazer">
          <Button
            size="large"
            icon={<LuUndo />}
            onClick={() => {}}
            disabled={true}
          />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Refazer">
          <Button
            size="large"
            icon={<LuRedo />}
            onClick={() => {}}
            disabled={true}
          />
        </Tooltip>
      </S.HeaderFirst>
      <S.HeaderSecond>
        <Navigation />
      </S.HeaderSecond>
      <S.HeaderThird>
        <ToggleResponsive />
        <Tooltip placement="bottomRight" title="Vizualizar">
          <Button
            size="large"
            icon={<LuPlay />}
            onClick={() => {}}
            disabled={true}
          />
        </Tooltip>
        <Button size="large" onClick={() => {}}>
          Salvar
        </Button>
        <Button type="primary" size="large" onClick={() => {}}>
          Publicar
        </Button>
      </S.HeaderThird>
    </S.Header>
  )
}
