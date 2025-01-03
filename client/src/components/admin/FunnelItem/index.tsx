import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button, Tooltip } from 'antd'
import {
  LuPencilRuler,
  LuTrash2,
  LuPlay,
  LuChartNoAxesCombined
} from 'react-icons/lu'

import { IFunnel } from '@/data/mock'

interface IFunnelItem {
  funnel: IFunnel
}

const FunnelItem = ({ funnel }: IFunnelItem) => {
  const navigate = useNavigate()

  return (
    <S.FunnelItem>
      <S.FunnelItemLegends>
        <b>{funnel.funnelSettings.general.funnelName}</b>
        <p>{funnel.createdAt}</p>
      </S.FunnelItemLegends>
      <S.FunnelItemCtas>
        <Tooltip placement="bottomRight" title="Visualizar">
          <Button
            disabled={!funnel.funnelSettings.general.funnelIsPublished}
            icon={<LuPlay />}
            onClick={() => {}}
          />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Editar">
          <Button
            icon={<LuPencilRuler />}
            onClick={() =>
              navigate(
                `/admin/editor/${funnel.funnelSettings.general.funnelSlug}`
              )
            }
          />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Insights">
          <Button icon={<LuChartNoAxesCombined />} onClick={() => {}} />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Deletar">
          <Button icon={<LuTrash2 />} onClick={() => {}} />
        </Tooltip>
      </S.FunnelItemCtas>
    </S.FunnelItem>
  )
}

export default FunnelItem
