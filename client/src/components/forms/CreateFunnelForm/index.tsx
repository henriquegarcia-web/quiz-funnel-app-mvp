import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Button, Input, Form, theme, Checkbox } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAdminAuth } from '@/contexts/AdminAuthProvider'
import { CreateFunnelSchema, ICreateFunnelFormData } from '@/types/admin'

interface ICreateFunnelForm {}

const CreateFunnelForm = ({}: ICreateFunnelForm) => {
  // const { handleLogin } = useAdminAuth()
  const navigate = useNavigate()

  const { control, handleSubmit, formState, watch } =
    useForm<ICreateFunnelFormData>({
      mode: 'onBlur',
      resolver: yupResolver(CreateFunnelSchema),
      defaultValues: {
        funnelName: ''
      }
    })

  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: ICreateFunnelFormData) => {
    // const response = await handleLogin({
    //   funnelName: data.funnelName,
    // })
    // if (response) {
    //   navigate(`/admin/editor/${response}`)
    // }
    navigate('/admin/editor/funnel_test')
  }

  return (
    <S.CreateFunnelForm
      onSubmitCapture={handleSubmit(onSubmit)}
      layout="vertical"
    >
      <Controller
        name="funnelName"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Título"
            validateStatus={errors.funnelName ? 'error' : ''}
            help={errors.funnelName?.message}
          >
            <Input {...field} placeholder="Digite o nome do funil" />
          </Form.Item>
        )}
      />

      <Button
        type="primary"
        htmlType="submit"
        disabled={!isValid}
        loading={isSubmitting}
      >
        Criar
      </Button>
    </S.CreateFunnelForm>
  )
}

export default CreateFunnelForm
