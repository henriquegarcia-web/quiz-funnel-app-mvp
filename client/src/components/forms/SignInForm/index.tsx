import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button, Input, Form } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAdminAuth } from '@/contexts/AdminAuthProvider'
import { SignInSchema, ISignInFormData } from '@/types/admin'
import { ChangeAuthMode } from '@/components'

interface ISignInForm {}

const SignInForm = ({}: ISignInForm) => {
  const { handleLogin } = useAdminAuth()
  const navigate = useNavigate()

  const { control, handleSubmit, formState, watch } = useForm<ISignInFormData>({
    mode: 'onBlur',
    resolver: yupResolver(SignInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: ISignInFormData) => {
    const success = await handleLogin({
      email: data.email,
      password: data.password
    })

    if (success) {
      navigate('/admin')
    }
  }

  return (
    <S.SignInForm onSubmitCapture={handleSubmit(onSubmit)} layout="vertical">
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

      <ChangeAuthMode mode="signIn" />

      <Button
        type="primary"
        htmlType="submit"
        disabled={!isValid}
        loading={isSubmitting}
      >
        Entrar
      </Button>
    </S.SignInForm>
  )
}

export default SignInForm
