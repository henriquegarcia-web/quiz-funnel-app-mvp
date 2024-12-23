import * as S from './styles'

import { Segmented } from 'antd'
import { LuMonitor, LuSmartphone } from 'react-icons/lu'

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

export default ToggleResponsive
