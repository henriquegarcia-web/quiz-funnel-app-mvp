import * as S from './styles'

import { Segmented } from 'antd'

import { EDITORV1_NAVIGATION_ITEMS } from '@/data/admin'
import { useEditorV1 } from '@/contexts/EditorV1Provider'

interface INavigation {}

const Navigation = ({}: INavigation) => {
  const { editorActiveView, handleActivateView } = useEditorV1()

  const formattedNavData = EDITORV1_NAVIGATION_ITEMS.map((nav) => ({
    value: nav.navId,
    label: nav.navLabel,
    icon: nav.navIcon
  }))

  const onNavChange = (activeNavKey: string) => {
    const activeView = EDITORV1_NAVIGATION_ITEMS?.find(
      (nav) => nav.navId === activeNavKey
    )
    if (activeView) {
      handleActivateView(activeView)
    }
  }

  return (
    <Segmented
      defaultValue={editorActiveView.navId}
      value={editorActiveView.navId}
      options={formattedNavData}
      onChange={onNavChange}
    />
  )
}

export default Navigation
