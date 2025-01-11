import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState
} from 'react'

import { useUserAuth } from '@/contexts/UserAuthProvider'
import { EDITORV1_NAVIGATION_ITEMS, IEditorNavItem } from '@/data/admin'
import { IFunnel, IFunnelStep } from '@/data/mock'
import { StepEditorType } from '@/components/editorV1/StepEditor'

// ------------------------------------------------------------------------

export type ThemeType = 'dark' | 'light'

interface IEditorV1ContextData {
  editorActiveView: IEditorNavItem
  activeFunnelData: IFunnel | null
  stepActive?: IFunnelStep
  stepEditionType: StepEditorType
  handleActivateFunnel: (funnel?: IFunnel) => void
  handleActivateView: (view: IEditorNavItem) => void
  handleActivateStep: (step: IFunnelStep) => void
}

// ------------------------------------------------------------------------

export const EditorV1Context = createContext<IEditorV1ContextData>(
  {} as IEditorV1ContextData
)

const EditorV1Provider = ({ children }: { children: React.ReactNode }) => {
  // ========================================================================
  // const { adminAccountData } = useUserAuth()

  const [editorActiveView, setEditorActiveView] = useState(
    EDITORV1_NAVIGATION_ITEMS[0]
  )
  const [activeFunnelData, setActiveFunnelData] = useState<IFunnel | null>(null)
  const [stepActive, setStepActive] = useState<IFunnelStep>()
  const [stepEditionType, setStepEditionType] = useState<StepEditorType>('step')

  // const [isOperationsLoading, setOperationsLoading] = useState<boolean>(false)

  // ============================================= EDITOR V1 FUNCTIONS

  const handleActivateFunnel = (funnel?: IFunnel) => {
    if (!!funnel) {
      setActiveFunnelData(funnel)
      // console.log(funnel.funnelId)
    }
  }

  const handleActivateView = (view: IEditorNavItem) => {
    setEditorActiveView(view)
    // console.log(view.navId)
  }

  const handleActivateStep = (step: IFunnelStep) => {
    setStepActive(step)
    // console.log(step.stepId)
  }

  const handleToggleComponentEdition = (component: any) => {
    if (stepEditionType === 'component') {
      setStepEditionType('step')
    } else {
      setStepEditionType('component')
    }
  }

  useLayoutEffect(() => {
    setEditorActiveView(EDITORV1_NAVIGATION_ITEMS[0])
  }, [])

  // ========================================================================

  const EditorV1ContextData: IEditorV1ContextData = useMemo(() => {
    return {
      editorActiveView,
      activeFunnelData,
      stepActive,
      stepEditionType,
      handleActivateFunnel,
      handleActivateView,
      handleActivateStep
    }
  }, [editorActiveView, activeFunnelData, stepActive, stepEditionType])

  return (
    <EditorV1Context.Provider value={EditorV1ContextData}>
      {children}
    </EditorV1Context.Provider>
  )
}

function useEditorV1(): IEditorV1ContextData {
  const context = useContext(EditorV1Context)

  if (!context)
    throw new Error('useAuth must be used within a EditorV1Provider')

  return context
}

export { EditorV1Provider, useEditorV1 }
