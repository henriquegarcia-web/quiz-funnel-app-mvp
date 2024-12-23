import * as S from './styles'

import { Button } from 'antd'
import { BETA_COMPONENTS_LIS, IComponent } from '@/data/mock'

interface IComponentsMenu {}

const ComponentsMenu = ({}: IComponentsMenu) => {
  return (
    <S.ComponentsMenu>
      <S.ComponentsMenuWrapper>
        {BETA_COMPONENTS_LIS.map((component: IComponent) => (
          <Button key={component.componentId}>
            {component.componentIcon}
            {component.componentName}
          </Button>
        ))}
      </S.ComponentsMenuWrapper>
    </S.ComponentsMenu>
  )
}

export default ComponentsMenu
