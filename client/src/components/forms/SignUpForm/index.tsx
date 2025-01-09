import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button, Input, Form, DatePicker, Select, Steps } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAdminAuth } from '@/contexts/AdminAuthProvider'
import { SignUpSchema, ISignUpFormData } from '@/types/admin'
import { ChangeAuthMode } from '@/components'

const { Option } = Select

const steps = [
  {
    id: 'basics',
    title: 'Básico',
    content: null
  },
  {
    id: 'contact',
    title: 'Contato',
    content: null
  },
  {
    id: 'address',
    title: 'Endereço',
    content: null
  },
  {
    id: 'password',
    title: 'Senha',
    content: null
  }
]

interface ISignUpForm {}

const SignUpForm = ({}: ISignUpForm) => {
  const { handleRegister } = useAdminAuth()
  const navigate = useNavigate()

  const [current, setCurrent] = useState(0)

  const { control, handleSubmit, formState, watch } = useForm<ISignUpFormData>({
    mode: 'onBlur',
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      personalInfo: {
        firstName: '',
        lastName: ''
        // dateOfBirth: null,
        // gender: 'prefer_not_to_say'
      },
      contactInfo: {
        email: '',
        phone: '',
        address: {
          street: '',
          city: '',
          state: '',
          postalCode: '',
          country: ''
        }
      },
      password: '',
      confirmPassword: ''
    }
  })

  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: ISignUpFormData) => {
    const success = await handleRegister({
      name: `${data.personalInfo.firstName} ${data.personalInfo.lastName}`,
      email: data.contactInfo.email,
      password: data.password
    })

    if (success) {
      navigate('/checkout')
    }
  }

  // ============================================

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const items = steps.map((item) => ({ key: item.title, title: item.title }))

  return (
    <S.SignUpFormContainer>
      <Steps current={current} items={items} labelPlacement="vertical" />

      <S.SignUpForm onSubmitCapture={handleSubmit(onSubmit)} layout="vertical">
        {steps[current].id === 'basics' && (
          <>
            <Controller
              name="personalInfo.firstName"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Primeiro Nome"
                  validateStatus={errors.personalInfo?.firstName ? 'error' : ''}
                  help={errors.personalInfo?.firstName?.message}
                >
                  <Input {...field} placeholder="Digite seu primeiro nome" />
                </Form.Item>
              )}
            />
            <Controller
              name="personalInfo.lastName"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Último Nome"
                  validateStatus={errors.personalInfo?.lastName ? 'error' : ''}
                  help={errors.personalInfo?.lastName?.message}
                >
                  <Input {...field} placeholder="Digite seu último nome" />
                </Form.Item>
              )}
            />
            <Controller
              name="personalInfo.dateOfBirth"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Data de Nascimento"
                  validateStatus={
                    errors.personalInfo?.dateOfBirth ? 'error' : ''
                  }
                  help={errors.personalInfo?.dateOfBirth?.message}
                >
                  <DatePicker {...field} placeholder="Data de nascimento" />
                </Form.Item>
              )}
            />
            <Controller
              name="personalInfo.gender"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Gênero"
                  validateStatus={errors.personalInfo?.gender ? 'error' : ''}
                  help={errors.personalInfo?.gender?.message}
                >
                  <Select {...field} placeholder="Selecione seu gênero">
                    <Option value="male">Masculino</Option>
                    <Option value="female">Feminino</Option>
                    <Option value="other">Outro</Option>
                    <Option value="prefer_not_to_say">Prefiro não dizer</Option>
                  </Select>
                </Form.Item>
              )}
            />
          </>
        )}

        {steps[current].id === 'contact' && (
          <>
            <Controller
              name="contactInfo.email"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="E-mail"
                  validateStatus={errors.contactInfo?.email ? 'error' : ''}
                  help={errors.contactInfo?.email?.message}
                >
                  <Input {...field} placeholder="Digite seu e-mail" />
                </Form.Item>
              )}
            />
            <Controller
              name="contactInfo.phone"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Telefone"
                  validateStatus={errors.contactInfo?.phone ? 'error' : ''}
                  help={errors.contactInfo?.phone?.message}
                >
                  <Input {...field} placeholder="Digite seu telefone" />
                </Form.Item>
              )}
            />
          </>
        )}

        {steps[current].id === 'address' && (
          <>
            <Controller
              name="contactInfo.address.street"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Rua"
                  validateStatus={
                    errors.contactInfo?.address?.street ? 'error' : ''
                  }
                  help={errors.contactInfo?.address?.street?.message}
                >
                  <Input {...field} placeholder="Digite sua rua" />
                </Form.Item>
              )}
            />
            <Controller
              name="contactInfo.address.city"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Cidade"
                  validateStatus={
                    errors.contactInfo?.address?.city ? 'error' : ''
                  }
                  help={errors.contactInfo?.address?.city?.message}
                >
                  <Input {...field} placeholder="Digite sua cidade" />
                </Form.Item>
              )}
            />
            <Controller
              name="contactInfo.address.state"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Estado"
                  validateStatus={
                    errors.contactInfo?.address?.state ? 'error' : ''
                  }
                  help={errors.contactInfo?.address?.state?.message}
                >
                  <Input {...field} placeholder="Digite seu estado" />
                </Form.Item>
              )}
            />
            <Controller
              name="contactInfo.address.postalCode"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Código Postal"
                  validateStatus={
                    errors.contactInfo?.address?.postalCode ? 'error' : ''
                  }
                  help={errors.contactInfo?.address?.postalCode?.message}
                >
                  <Input {...field} placeholder="Digite seu código postal" />
                </Form.Item>
              )}
            />
            <Controller
              name="contactInfo.address.country"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="País"
                  validateStatus={
                    errors.contactInfo?.address?.country ? 'error' : ''
                  }
                  help={errors.contactInfo?.address?.country?.message}
                >
                  <Input {...field} placeholder="Digite seu país" />
                </Form.Item>
              )}
            />
          </>
        )}

        {steps[current].id === 'password' && (
          <>
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
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Confirmar Senha"
                  validateStatus={errors.confirmPassword ? 'error' : ''}
                  help={errors.confirmPassword?.message}
                >
                  <Input.Password {...field} placeholder="Confirme sua senha" />
                </Form.Item>
              )}
            />
          </>
        )}

        <ChangeAuthMode mode="signUp" />

        <S.SignUpFormFooter>
          {current > 0 && <Button onClick={() => prev()}>Voltar</Button>}
          {current < steps.length - 1 && (
            <Button onClick={() => next()}>Próximo</Button>
          )}

          {current === steps.length - 1 && (
            <Button
              type="primary"
              htmlType="submit"
              disabled={!isValid}
              loading={isSubmitting}
            >
              Criar Conta
            </Button>
          )}
        </S.SignUpFormFooter>
      </S.SignUpForm>
    </S.SignUpFormContainer>
  )
}

export default SignUpForm
