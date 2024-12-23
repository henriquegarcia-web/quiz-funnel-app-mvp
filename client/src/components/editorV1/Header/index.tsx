import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button, Segmented, Tooltip } from 'antd'
import {
  LuChartNoAxesCombined,
  LuChevronLeft,
  LuMonitor,
  LuPalette,
  LuPencilRuler,
  LuPlay,
  LuRedo,
  LuSettings,
  LuSmartphone,
  LuTablet,
  LuUndo
} from 'react-icons/lu'

interface IHeader {}

export const Header = ({}: IHeader) => {
  const navigate = useNavigate()

  return (
    <S.Header>
      <S.HeaderFirst>
        <S.GoBackButton onClick={() => navigate('/admin')}>
          <LuChevronLeft />
        </S.GoBackButton>
        <Tooltip placement="bottomRight" title="Disfazer">
          <Button size="large" icon={<LuUndo />} onClick={() => {}} />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Refazer">
          <Button size="large" icon={<LuRedo />} onClick={() => {}} />
        </Tooltip>
      </S.HeaderFirst>
      <S.HeaderSecond>
        <Navigation />
      </S.HeaderSecond>
      <S.HeaderThird>
        <ToggleResponsive />
        <Tooltip placement="bottomRight" title="Vizualizar">
          <Button size="large" icon={<LuPlay />} onClick={() => {}} />
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

// ===================================

interface INavigation {}

const Navigation = ({}: INavigation) => {
  return (
    <Segmented
      options={[
        { label: 'Editor', value: 'editor', icon: <LuPencilRuler /> },
        { label: 'Design', value: 'design', icon: <LuPalette /> },
        {
          label: 'Insights',
          value: 'insights',
          icon: <LuChartNoAxesCombined />
        },
        { label: 'Configurações', value: 'settings', icon: <LuSettings /> }
      ]}
    />
  )
}

// ===================================

export type ResponsiveTypes = 'desktop' | 'tablet' | 'mobile'

interface IToggleResponsive {}

const ToggleResponsive = ({}: IToggleResponsive) => {
  return (
    <Segmented
      options={[
        { value: 'desktop', icon: <LuMonitor /> },
        { value: 'mobile', icon: <LuSmartphone /> }
      ]}
    />
  )
}
