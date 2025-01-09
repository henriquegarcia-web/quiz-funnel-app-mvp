import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button, Input, Form } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAdminAuth } from '@/contexts/AdminAuthProvider'
import { AdminSignUpSchema, IAdminSignUpFormData } from '@/types/admin'
import { ChangeAuthMode } from '@/components'

interface IAdminSignUpForm {}

const AdminSignUpForm = ({}: IAdminSignUpForm) => {
  const { handleRegister } = useAdminAuth()
  const navigate = useNavigate()

  const { control, handleSubmit, formState, watch } =
    useForm<IAdminSignUpFormData>({
      mode: 'onBlur',
      resolver: yupResolver(AdminSignUpSchema),
      defaultValues: {
        name: '',
        email: '',
        password: ''
      }
    })

  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: IAdminSignUpFormData) => {
    const success = await handleRegister({
      name: data.name,
      email: data.email,
      password: data.password
    })

    if (success) {
      navigate('/checkout')
    }
  }

  return (
    <S.AdminSignUpForm
      onSubmitCapture={handleSubmit(onSubmit)}
      layout="vertical"
    >
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Nome"
            validateStatus={errors.name ? 'error' : ''}
            help={errors.name?.message}
          >
            <Input {...field} placeholder="Digite seu nome" />
          </Form.Item>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="E-mail"
            validateStatus={errors.email ? 'error' : ''}
            help={errors.email?.message}
          >
            <Input {...field} placeholder="Digite seu e-mail" />
          </Form.Item>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Senha"
            validateStatus={errors.password ? 'error' : ''}
            help={errors.password?.message}
          >
            <Input.Password {...field} placeholder="Digite sua senha" />
          </Form.Item>
        )}
      />

      <ChangeAuthMode mode="signUp" />

      <Button
        type="primary"
        htmlType="submit"
        disabled={!isValid}
        loading={isSubmitting}
      >
        Criar Conta
      </Button>
    </S.AdminSignUpForm>
  )
}

export default AdminSignUpForm
