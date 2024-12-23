import * as S from './styles'

import { StepEditorForm } from '@/components'
import { IFunnelStep } from '@/data/mock'

export type StepEditorType = 'step' | 'component'

interface IStepEditor {
  stepEditionType: StepEditorType
  stepActive?: IFunnelStep
}

const StepEditor = ({ stepEditionType, stepActive }: IStepEditor) => {
  return (
    <S.StepEditor>
      {stepEditionType === 'step' && <StepEditorForm stepActive={stepActive} />}
      {stepEditionType === 'component' && <ComponentEditorFormWrapper />}
    </S.StepEditor>
  )
}

export default StepEditor

// ======================================== COMPONENT EDITOR FORM

export const ComponentEditorFormWrapper = () => {
  return (
    <S.ComponentEditorFormWrapper>
      {/* <S.StepEditorWrapper>
        <S.StepEditorWrapperHeader>
          Configurações da Etapa
        </S.StepEditorWrapperHeader>
        <S.StepEditorWrapperContent></S.StepEditorWrapperContent>
      </S.StepEditorWrapper> */}
    </S.ComponentEditorFormWrapper>
  )
}
