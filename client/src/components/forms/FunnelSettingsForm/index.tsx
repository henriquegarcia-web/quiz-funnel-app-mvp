import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Input, Form, Switch, Button, Collapse, Select } from 'antd'
import type { CollapseProps } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useUserAuth } from '@/contexts/UserAuthProvider'
import {
  FunnelSettingsSchema_General,
  IFunnelSettingsFormData_General,
  FunnelSettingsSchema_Seo,
  IFunnelSettingsFormData_Seo
} from '@/types/admin'
import { IFunnel } from '@/data/mock'
import { FUNNEL_FLOW_TYPES, IFunnelFlowType } from '@/data/admin'

interface IFunnelSettingsForm {
  activeFunnel?: IFunnel | null
}

const FunnelSettingsForm = ({ activeFunnel }: IFunnelSettingsForm) => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Geral',
      children: <FunnelSettingsFormGeneral activeFunnel={activeFunnel} />
    },
    {
      key: '2',
      label: 'SEO',
      children: <FunnelSettingsFormSeo activeFunnel={activeFunnel} />
    }
  ]

  return (
    <S.FunnelSettingsFormWrapper>
      <Collapse items={items} />
    </S.FunnelSettingsFormWrapper>
  )
}

export default FunnelSettingsForm

// ===================================== FUNNEL SETTINGS - GENERAL

interface IFunnelSettingsFormGeneral {
  activeFunnel?: IFunnel | null
}

const FunnelSettingsFormGeneral = ({
  activeFunnel
}: IFunnelSettingsFormGeneral) => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState, setValue, watch } =
    useForm<IFunnelSettingsFormData_General>({
      mode: 'onBlur',
      resolver: yupResolver(FunnelSettingsSchema_General),
      defaultValues: {
        funnelName: '',
        funnelSlug: '',
        funnelActive: true,
        funnelFlowType: 'flow_button'
      }
    })

  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: IFunnelSettingsFormData_General) => {
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
      setValue('funnelName', activeFunnel.funnelSettings.general.funnelName)
      setValue('funnelSlug', activeFunnel.funnelSettings.general.funnelSlug)
      setValue(
        'funnelActive',
        activeFunnel.funnelSettings.general.funnelIsPublished
      )
      setValue(
        'funnelFlowType',
        activeFunnel.funnelSettings.general.funnelFlowType
      )
    }
  }, [activeFunnel, setValue])

  const formattedFlowTypes = FUNNEL_FLOW_TYPES.map(
    (flowType: IFunnelFlowType) => ({
      value: flowType.flowId,
      label: flowType.flowLabel
    })
  )

  return (
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
      <Controller
        name="funnelFlowType"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Tipo do flow"
            validateStatus={errors.funnelFlowType ? 'error' : ''}
            help={errors.funnelFlowType?.message}
          >
            <Select
              {...field}
              options={formattedFlowTypes}
              placeholder="Selecione o tipo do flow"
            />
          </Form.Item>
        )}
      />
      <Button htmlType="submit" disabled={!isValid} loading={isSubmitting}>
        Salvar
      </Button>
    </S.FunnelSettingsForm>
  )
}

// ===================================== FUNNEL SETTINGS - GENERAL

interface IFunnelSettingsFormSeo {
  activeFunnel?: IFunnel | null
}

const FunnelSettingsFormSeo = ({ activeFunnel }: IFunnelSettingsFormSeo) => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState, setValue, watch } =
    useForm<IFunnelSettingsFormData_Seo>({
      mode: 'onBlur',
      resolver: yupResolver(FunnelSettingsSchema_Seo),
      defaultValues: {
        funnelPageName: '',
        funnelPageDescription: '',
        funnelPageFavicon: ''
      }
    })

  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: IFunnelSettingsFormData_Seo) => {
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
      setValue('funnelPageName', activeFunnel.funnelSettings.seo.pageName || '')
      setValue(
        'funnelPageDescription',
        activeFunnel.funnelSettings.seo.pageDescription || ''
      )
      setValue(
        'funnelPageFavicon',
        activeFunnel.funnelSettings.seo.pageFavicon || ''
      )
    }
  }, [activeFunnel, setValue])

  return (
    <S.FunnelSettingsForm
      layout="vertical"
      onSubmitCapture={handleSubmit(onSubmit)}
    >
      <Controller
        name="funnelPageName"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Título da página"
            validateStatus={errors.funnelPageName ? 'error' : ''}
            help={errors.funnelPageName?.message}
          >
            <Input {...field} placeholder="Digite o título da página" />
          </Form.Item>
        )}
      />
      <Controller
        name="funnelPageDescription"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Descrição da página"
            validateStatus={errors.funnelPageDescription ? 'error' : ''}
            help={errors.funnelPageDescription?.message}
          >
            <Input.TextArea
              {...field}
              rows={5}
              placeholder="Digite a descrição da página"
            />
          </Form.Item>
        )}
      />
      <Button htmlType="submit" disabled={!isValid} loading={isSubmitting}>
        Salvar
      </Button>
    </S.FunnelSettingsForm>
  )
}
