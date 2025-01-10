import * as Yup from 'yup'
import { IFunnel } from '@/data/mock'

export type ThemeType = 'dark' | 'light'
export type RolesType = 'user' | 'admin' | 'developer'

export type GendersType = 'male' | 'female' | 'other' | 'prefer_not_to_say'
export type LanguagesType = 'pt-BR'

export type PaymentStatusType = 'paid' | 'pending' | 'failed'
export type SubscriptionStatusType = 'active' | 'inactive' | 'cancelled'

export interface IUserAddress {
  street: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface IUserPreferences {
  preferredLanguage: LanguagesType
  theme: ThemeType
}

export interface IPayment {
  paymentId: string
  date: string
  amount: number
  currency: string
  status: PaymentStatusType
}

export interface IUserSubscription {
  planId: string
  planName: string
  startDate: string
  endDate: string
  status: SubscriptionStatusType
  paymentHistory: IPayment[]
}

export interface IUserAccountData {
  id: string
  personalInfo: {
    firstName: string
    lastName: string
    dateOfBirth: string
    gender: GendersType
  }
  contactInfo: {
    email: string
    phone: string
    address: IUserAddress
  }
  preferences: IUserPreferences
  subscription: IUserSubscription | null
  funnels: IFunnel[]
  blocked: boolean
  role: RolesType
}

// ===================================================== SERVIÇOS

export interface IRegisterAccessService {
  email: string
  role: string
}

export interface IRegisterService {
  firstName: string
  lastName: string
  dateOfBirth: Date
  gender: GendersType
  email: string
  phone: string
  address: IUserAddress
  password: string
  role?: string
}

export interface ILoginService {
  email: string
  password: string
}

// ===================================================== ENTRAR

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: Yup.string().required('Senha é obrigatória')
})

export type ISignInFormData = Yup.InferType<typeof SignInSchema>

// ===================================================== CADASTRO

export const SignUpSchema = Yup.object().shape({
  personalInfo: Yup.object().shape({
    firstName: Yup.string().required('Primeiro nome é obrigatório'),
    lastName: Yup.string().required('Último nome é obrigatório'),
    dateOfBirth: Yup.date().required('Data de nascimento é obrigatória'),
    gender: Yup.mixed<GendersType>()
      .oneOf(['male', 'female', 'other', 'prefer_not_to_say'])
      .required('Gênero é obrigatório')
  }),
  contactInfo: Yup.object().shape({
    email: Yup.string()
      .email('E-mail inválido')
      .required('E-mail é obrigatório'),
    phone: Yup.string().optional(),
    address: Yup.object()
      .shape({
        street: Yup.string().required('Rua é obrigatória'),
        city: Yup.string().required('Cidade é obrigatória'),
        state: Yup.string().required('Estado é obrigatório'),
        postalCode: Yup.string().required('Código postal é obrigatório'),
        country: Yup.string().required('País é obrigatório')
      })
      .optional()
  }),
  password: Yup.string().required('Senha é obrigatória'),
  confirmPassword: Yup.string().required('Confirmar senha é obrigatório')
  // preferences: Yup.object().shape({
  //   preferredLanguage: Yup.mixed<LanguagesType>().oneOf(['pt-BR']).required('Idioma preferido é obrigatório'),
  //   theme: Yup.mixed<ThemeType>().oneOf(['dark', 'light']).required('Tema é obrigatório')
  // }),
  // subscription: Yup.object().shape({
  //   planId: Yup.string().required('ID do plano é obrigatório'),
  //   planName: Yup.string().required('Nome do plano é obrigatório'),
  //   startDate: Yup.date().required('Data de início é obrigatória'),
  //   endDate: Yup.date().required('Data de término é obrigatória'),
  //   status: Yup.mixed<SubscriptionStatusType>().oneOf(['active', 'inactive', 'cancelled']).required('Status da assinatura é obrigatório'),
  //   paymentHistory: Yup.array().of(
  //     Yup.object().shape({
  //       paymentId: Yup.string().required('ID do pagamento é obrigatório'),
  //       date: Yup.date().required('Data do pagamento é obrigatória'),
  //       amount: Yup.number().required('Valor é obrigatório'),
  //       currency: Yup.string().required('Moeda é obrigatória'),
  //       status: Yup.mixed<PaymentStatusType>().oneOf(['paid', 'pending', 'failed']).required('Status do pagamento é obrigatório')
  //     })
  //   ).required('Histórico de pagamentos é obrigatório')
  // }),
  // blocked: Yup.boolean().required('Status de bloqueio é obrigatório'),
  // role: Yup.mixed<RolesType>().oneOf(['user', 'admin', 'developer']).required('Papel é obrigatório'),
})

export type ISignUpFormData = Yup.InferType<typeof SignUpSchema>

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
