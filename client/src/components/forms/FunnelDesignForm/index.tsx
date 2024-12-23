import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Input, Form, Switch, Button } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAdminAuth } from '@/contexts/AdminAuthProvider'
// import { StepEditorSchema, IFunnelDesignFormData } from '@/types/admin'
import {
  StepEditorWrapper,
  StepEditorWrapperContent,
  StepEditorWrapperHeader
} from '@/utils/styles/common'
import { IFunnelStep } from '@/data/mock'

interface IFunnelDesignForm {
  stepActive?: IFunnelStep
}

const FunnelDesignForm = ({ stepActive }: IFunnelDesignForm) => {
  // const navigate = useNavigate()

  // const { control, handleSubmit, formState, setValue, watch } =
  //   useForm<IFunnelDesignFormData>({
  //     mode: 'onBlur',
  //     resolver: yupResolver(StepEditorSchema),
  //     defaultValues: {
  //       stepName: '',
  //       stepActive: true
  //     }
  //   })

  // const { errors, isSubmitting, isValid } = formState

  // const onSubmit = async (data: IFunnelDesignFormData) => {
  //   // const response = await handleLogin({
  //   //   funnelName: data.funnelName,
  //   // })
  //   // if (response) {
  //   //   navigate(`/admin/editor/${response}`)
  //   // }
  //   console.log('Form submitted:', data)
  //   // navigate('/admin/editor/funnel_test')
  // }

  // useEffect(() => {
  //   if (stepActive) {
  //     setValue('stepName', stepActive.stepName)
  //     setValue('stepActive', stepActive.stepActive)
  //   }
  // }, [stepActive, setValue])

  return (
    <S.FunnelDesignFormWrapper>
      {/* <StepEditorWrapper>
        <StepEditorWrapperHeader>
          Configurações da Etapa
        </StepEditorWrapperHeader>
        <StepEditorWrapperContent>
          <S.FunnelDesignForm
            layout="vertical"
            onSubmitCapture={handleSubmit(onSubmit)}
          >
            <Controller
              name="stepName"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Título"
                  validateStatus={errors.stepName ? 'error' : ''}
                  help={errors.stepName?.message}
                >
                  <Input {...field} placeholder="Digite o nome da etapa" />
                </Form.Item>
              )}
            />
            <Controller
              name="stepActive"
              control={control}
              render={({ field: { onChange, value, ...restField } }) => (
                <Form.Item
                  label="Oculta / Ativa"
                  validateStatus={errors.stepActive ? 'error' : ''}
                  help={errors.stepActive?.message}
                >
                  <Switch
                    {...restField}
                    checked={value}
                    onChange={(checked: boolean) => {
                      onChange(checked)
                    }}
                  />
                </Form.Item>
              )}
            />
            <Button
              // type="primary"
              htmlType="submit"
              disabled={!isValid}
              loading={isSubmitting}
            >
              Salvar
            </Button>
          </S.FunnelDesignForm>
        </StepEditorWrapperContent>
      </StepEditorWrapper> */}
    </S.FunnelDesignFormWrapper>
  )
}

export default FunnelDesignForm
