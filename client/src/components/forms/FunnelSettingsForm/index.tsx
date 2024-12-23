import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Input, Form, Switch, Button } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAdminAuth } from '@/contexts/AdminAuthProvider'
import {
  FunnelSettingsSchema_General,
  IFunnelSettingsFormData
} from '@/types/admin'
import {
  StepEditorWrapper,
  StepEditorWrapperContent,
  StepEditorWrapperHeader
} from '@/utils/styles/common'
import { IFunnel } from '@/data/mock'

interface IFunnelSettingsForm {
  activeFunnel?: IFunnel | null
}

const FunnelSettingsForm = ({ activeFunnel }: IFunnelSettingsForm) => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState, setValue, watch } =
    useForm<IFunnelSettingsFormData>({
      mode: 'onBlur',
      resolver: yupResolver(FunnelSettingsSchema_General),
      defaultValues: {
        funnelName: '',
        funnelSlug: '',
        funnelActive: true
      }
    })

  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: IFunnelSettingsFormData) => {
    // const response = await handleLogin({
    //   funnelName: data.funnelName,
    // })
    // if (response) {
    //   navigate(`/admin/editor/${response}`)
    // }
    console.log('Form submitted:', data)
    // navigate('/admin/editor/funnel_test')
  }

  useEffect(() => {
    if (activeFunnel) {
      setValue('funnelName', activeFunnel.funnelSettings.name)
      setValue('funnelSlug', activeFunnel.funnelSettings.slug)
      setValue('funnelActive', activeFunnel.funnelSettings.isPublished)
    }
  }, [activeFunnel, setValue])

  return (
    <S.FunnelSettingsFormWrapper>
      <StepEditorWrapper>
        <StepEditorWrapperHeader>Geral</StepEditorWrapperHeader>
        <StepEditorWrapperContent>
          <S.FunnelSettingsForm
            layout="vertical"
            onSubmitCapture={handleSubmit(onSubmit)}
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
            <Controller
              name="funnelSlug"
              control={control}
              render={({ field }) => (
                <Form.Item
                  label="Slug"
                  validateStatus={errors.funnelSlug ? 'error' : ''}
                  help={errors.funnelSlug?.message}
                >
                  <Input {...field} placeholder="Digite o slug do funil" />
                </Form.Item>
              )}
            />
            <Controller
              name="funnelActive"
              control={control}
              render={({ field: { onChange, value, ...restField } }) => (
                <Form.Item
                  label="Oculto / Publicado"
                  validateStatus={errors.funnelActive ? 'error' : ''}
                  help={errors.funnelActive?.message}
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
              htmlType="submit"
              disabled={!isValid}
              loading={isSubmitting}
            >
              Salvar
            </Button>
          </S.FunnelSettingsForm>
        </StepEditorWrapperContent>
      </StepEditorWrapper>
    </S.FunnelSettingsFormWrapper>
  )
}

export default FunnelSettingsForm
