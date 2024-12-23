import { cloneElement, useEffect, useState } from 'react'
import * as S from './styles'

import type { DragEndEvent } from '@dnd-kit/core'
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor
} from '@dnd-kit/core'
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import type { TabsProps } from 'antd'
import { LuGripVertical } from 'react-icons/lu'
import { IFunnelStep, MOCK_FUNNELS_LIST } from '@/data/mock'

interface DraggableTabPaneProps extends React.HTMLAttributes<HTMLDivElement> {
  'data-node-key': string
}

const DraggableTabNode: React.FC<Readonly<DraggableTabPaneProps>> = ({
  className,
  ...props
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: props['data-node-key']
    })

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Translate.toString(transform),
    transition,
    cursor: 'move'
  }

  return cloneElement(props.children as React.ReactElement, {
    ref: setNodeRef,
    style,
    ...attributes,
    ...listeners
  })
}

interface ISideMenu {
  menus?: IFunnelStep[]
  handleActivateStep: (view: IFunnelStep) => void
}

const SideMenu = ({ menus, handleActivateStep }: ISideMenu) => {
  const [items, setItems] = useState<NonNullable<TabsProps['items']>>([])

  const sensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 }
  })

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((i) => i.key === active.id)
        const overIndex = prev.findIndex((i) => i.key === over?.id)
        return arrayMove(prev, activeIndex, overIndex)
      })
    }
  }

  const onTabChange = (activeKey: string) => {
    const activeStep = menus?.find((menu) => menu.stepId === activeKey)
    if (activeStep) {
      handleActivateStep(activeStep)
    }
  }

  useEffect(() => {
    if (!menus) {
      setItems([])
      return
    }
    const formattedRoles = menus.map((menu: IFunnelStep) => ({
      key: menu.stepId,
      label: (
        <>
          <LuGripVertical /> {menu.stepName}
        </>
      ),
      children: null
    }))

    setItems(formattedRoles)
  }, [menus])

  return (
    <S.SideMenu
      tabPosition="left"
      items={items}
      onChange={onTabChange}
      renderTabBar={(tabBarProps, DefaultTabBar) => (
        <DndContext
          sensors={[sensor]}
          onDragEnd={onDragEnd}
          collisionDetection={closestCenter}
        >
          <SortableContext
            items={items.map((i) => i.key)}
            strategy={horizontalListSortingStrategy}
          >
            <DefaultTabBar {...tabBarProps}>
              {(node) => (
                <DraggableTabNode {...node.props} key={node.key}>
                  {node}
                </DraggableTabNode>
              )}
            </DefaultTabBar>
          </SortableContext>
        </DndContext>
      )}
    />
  )
}

export default SideMenu
