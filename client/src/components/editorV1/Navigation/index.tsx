import * as S from './styles'

import { Segmented } from 'antd'
import {
  LuChartNoAxesCombined,
  LuPalette,
  LuPencilRuler,
  LuSettings
} from 'react-icons/lu'

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

export default Navigation
