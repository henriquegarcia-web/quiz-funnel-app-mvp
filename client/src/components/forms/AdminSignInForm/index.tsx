import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button, Input, Form, theme, Checkbox } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAdminAuth } from '@/contexts/AdminAuthProvider'
import { AdminSignInSchema, IAdminSignInFormData } from '@/types/admin'

interface IAdminSignInForm {}

const AdminSignInForm = ({}: IAdminSignInForm) => {
  const { handleLogin, handleRegister } = useAdminAuth()
  const navigate = useNavigate()
  const [isFirstAccess, setIsFirstAccess] = useState(false)

  const { control, handleSubmit, formState, watch } =
    useForm<IAdminSignInFormData>({
      mode: 'all',
      resolver: yupResolver(AdminSignInSchema),
      defaultValues: {
        name: '',
        email: '',
        password: '',
        isFirstAccess: false
      }
    })

  const { errors, isSubmitting, isValid } = formState
  const watchIsFirstAccess = watch('isFirstAccess')

  const onSubmit = async (data: IAdminSignInFormData) => {
    let success
    if (data.isFirstAccess) {
      if (data.name) {
        success = await handleRegister({
          name: data.name,
          email: data.email,
          password: data.password
        })
      } else {
        console.error('Nome é obrigatório para registro')
        return
      }
    } else {
      success = await handleLogin({
        email: data.email,
        password: data.password
      })
    }
    if (success) {
      navigate('/playground')
    }
  }

  return (
    <S.AdminSignInForm
      onSubmitCapture={handleSubmit(onSubmit)}
      layout="vertical"
    >
      {watchIsFirstAccess && (
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
      )}
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
            label={isFirstAccess ? 'Criar Senha' : 'Senha'}
            validateStatus={errors.password ? 'error' : ''}
            help={errors.password?.message}
          >
            <Input.Password {...field} placeholder="Digite sua senha" />
          </Form.Item>
        )}
      />
      <S.SignInFormFirstAccess>
        <p>Primeiro acesso?</p>
        <Controller
          name="isFirstAccess"
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              onChange={(e) => {
                field.onChange(e.target.checked)
                setIsFirstAccess(e.target.checked)
              }}
            />
          )}
        />
      </S.SignInFormFirstAccess>
      <Button
        type="primary"
        htmlType="submit"
        disabled={!isValid}
        loading={isSubmitting}
      >
        {watchIsFirstAccess ? 'Registrar' : 'Entrar'}
      </Button>
    </S.AdminSignInForm>
  )
}

export default AdminSignInForm
