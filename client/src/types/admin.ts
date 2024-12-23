import * as Yup from 'yup'

export type AdminThemeType = 'dark' | 'light'

// export interface IAdminSignInFormDatas {
//   name?: string
//   email: string
//   password: string
//   isFirstAccess: boolean
// }

export interface IRegisterAccessService {
  email: string
  role: string
}

export interface IRegisterService {
  name: string
  email: string
  password: string
}

export interface ILoginService {
  email: string
  password: string
}

export const AdminSignInSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
  name: Yup.string().when('isFirstAccess', {
    is: true,
    then: (schema) => schema.required('Nome é obrigatório'),
    otherwise: (schema) => schema.notRequired()
  }),
  isFirstAccess: Yup.boolean().required(
    'É obrigatório informar se é o primeiro acesso'
  )
})

export type IAdminSignInFormData = Yup.InferType<typeof AdminSignInSchema>

export interface IAdminAccountData {
  id: string
  name?: string
  email: string
  blocked: boolean
  firstAccess: boolean
  role: string
  theme: AdminThemeType
}

// =============================================== FUNNEL

export const CreateFunnelSchema = Yup.object().shape({
  funnelName: Yup.string().required('Título do funil é obrigatório')
})

export type ICreateFunnelFormData = Yup.InferType<typeof CreateFunnelSchema>

// =============================================== STEP

export const StepEditorSchema = Yup.object().shape({
  stepName: Yup.string().required('Título da etapa é obrigatório'),
  stepActive: Yup.boolean()
})

export type IStepEditorFormData = Yup.InferType<typeof StepEditorSchema>
