import { cloneElement, useState } from 'react'
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
import { Tabs } from 'antd'
import type { TabsProps } from 'antd'
import { LuGripVertical } from 'react-icons/lu'

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

interface ISideMenu {}

const SideMenu = ({}: ISideMenu) => {
  const [items, setItems] = useState<NonNullable<TabsProps['items']>>([
    {
      key: '1',
      label: (
        <>
          <LuGripVertical /> Tab 1
        </>
      ),
      children: null
    },
    {
      key: '2',
      label: (
        <>
          <LuGripVertical /> Tab 2
        </>
      ),
      children: null
    },
    {
      key: '3',
      label: (
        <>
          <LuGripVertical /> Tab 3
        </>
      ),
      children: null
    }
  ])

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

  return (
    <S.SideMenu
      tabPosition="left"
      items={items}
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
