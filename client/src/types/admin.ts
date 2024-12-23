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
  stepActive: Yup.boolean(),
  stepCanGoBack: Yup.boolean()
})

export type IStepEditorFormData = Yup.InferType<typeof StepEditorSchema>

// =============================================== FUNNEL DESIGN

// ===================== GENERAL

export const FunnelDesignSchema_General = Yup.object().shape({
  funnelShowLogo: Yup.boolean(),
  funnelShowProgress: Yup.boolean()
})

export type IFunnelDesignFormData_General = Yup.InferType<
  typeof FunnelDesignSchema_General
>

// ===================== GLOBAL MODELS

export const FunnelDesignSchema_GlobalStyles = Yup.object().shape({
  borderRadius: Yup.number(),
  pageRowGap: Yup.number(),
  backgroundColor: Yup.string(),
  colorPrimary: Yup.string()
})

export type IFunnelDesignFormData_GlobalStyles = Yup.InferType<
  typeof FunnelDesignSchema_GlobalStyles
>

// ===================== GLOBAL STYLES

const FunnelDesignFontSchema = Yup.object().shape({
  fontFamily: Yup.string(),
  fontSize: Yup.number(),
  fontWeight: Yup.number(),
  fontColor: Yup.string()
})

const FunnelDesignBorderSchema = Yup.object().shape({
  borderSize: Yup.number(),
  borderRadius: Yup.number(),
  borderColor: Yup.string()
})

const FunnelDesignContainerSchema = Yup.object().shape({
  title: FunnelDesignFontSchema,
  legend: FunnelDesignFontSchema,
  emoji: Yup.mixed(),
  backgroundColor: Yup.string(),
  border: FunnelDesignBorderSchema
})

export const FunnelDesignSchema_GlobalModels = Yup.object().shape({
  title: FunnelDesignFontSchema,
  subtitle: FunnelDesignFontSchema,
  legend: FunnelDesignFontSchema,
  card: FunnelDesignContainerSchema
})

export type IFunnelDesignFormData_GlobalModels = Yup.InferType<
  typeof FunnelDesignSchema_GlobalModels
>

// ===================== GLOBAL VARIABLES

// export const FunnelDesignSchema_GlobalVariables = Yup.object().shape({
//   funnelName: Yup.string().required('Título do funil é obrigatório'),
//   funnelSlug: Yup.string().required('Slug do funil é obrigatório'),
//   funnelActive: Yup.boolean()
// })

// export type IFunnelDesignFormData_GlobalVariables = Yup.InferType<
//   typeof FunnelDesignSchema_GlobalVariables
// >

// =============================================== FUNNEL SETTINGS

// ===================== GENERAL

export const FunnelSettingsSchema_General = Yup.object().shape({
  funnelName: Yup.string().required('Título do funil é obrigatório'),
  funnelSlug: Yup.string().required('Slug do funil é obrigatório'),
  funnelActive: Yup.boolean(),
  funnelFlowType: Yup.string().required('Tipo de flow do funil é obrigatório')
})

export type IFunnelSettingsFormData_General = Yup.InferType<
  typeof FunnelSettingsSchema_General
>

// ===================== SEO

export const FunnelSettingsSchema_Seo = Yup.object().shape({
  funnelPageName: Yup.string(),
  funnelPageDescription: Yup.string(),
  funnelPageFavicon: Yup.string()
})

export type IFunnelSettingsFormData_Seo = Yup.InferType<
  typeof FunnelSettingsSchema_Seo
>
