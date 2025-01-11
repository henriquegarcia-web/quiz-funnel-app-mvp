import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button, message, Popconfirm, Tooltip } from 'antd'
import {
  LuPencilRuler,
  LuTrash2,
  LuPlay,
  LuChartNoAxesCombined
} from 'react-icons/lu'
import { IFunnel } from '@/data/mock'
import type { PopconfirmProps } from 'antd'
import { useUser } from '@/contexts/UserProvider'

interface IFunnelItem {
  funnel: IFunnel
}

const FunnelItem = ({ funnel }: IFunnelItem) => {
  const navigate = useNavigate()

  const { isOperationsLoading, handleDeleteQuiz } = useUser()

  const confirm: PopconfirmProps['onConfirm'] = async () => {
    const response = await handleDeleteQuiz(funnel.funnelId)
  }

  return (
    <S.FunnelItem>
      <S.FunnelItemLegends>
        <b>{funnel.funnelSettings.general.funnelName}</b>
        <p>{funnel.createdAt}</p>
      </S.FunnelItemLegends>
      <S.FunnelItemCtas>
        <Tooltip placement="bottomRight" title="Visualizar">
          <Button
            // disabled={!funnel.funnelSettings.general.funnelIsPublished}
            disabled
            icon={<LuPlay />}
            onClick={() => {}}
          />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Editar">
          <Button
            icon={<LuPencilRuler />}
            onClick={() => navigate(`/admin/editor/${funnel.funnelId}`)}
          />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Insights">
          <Button
            disabled
            icon={<LuChartNoAxesCombined />}
            onClick={() => {}}
          />
        </Tooltip>
        <Tooltip placement="bottomRight" title="Deletar">
          <Popconfirm
            title="Deletar?"
            description="Tem certeza que deseja deletar esse quiz? Essa ação não poderá ser desfeita."
            onConfirm={confirm}
            okText="Sim"
            cancelText="Cancelar"
            okButtonProps={{ loading: isOperationsLoading }}
          >
            <Button icon={<LuTrash2 />} />
          </Popconfirm>
        </Tooltip>
      </S.FunnelItemCtas>
    </S.FunnelItem>
  )
}

export default FunnelItem
