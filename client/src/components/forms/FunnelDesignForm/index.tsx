import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

import { Input, Form, Switch, Button, Collapse, InputNumber } from 'antd'
import type { CollapseProps } from 'antd'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { IFunnel } from '@/data/mock'
import {
  FunnelDesignSchema_General,
  FunnelDesignSchema_GlobalModels,
  FunnelDesignSchema_GlobalStyles,
  IFunnelDesignFormData_General,
  IFunnelDesignFormData_GlobalModels,
  IFunnelDesignFormData_GlobalStyles
} from '@/types/admin'

interface IFunnelDesignForm {
  activeFunnel?: IFunnel | null
}

const FunnelDesignForm = ({ activeFunnel }: IFunnelDesignForm) => {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'Geral',
      children: <FunnelDesignFormGeneral activeFunnel={activeFunnel} />
    },
    {
      key: '2',
      label: 'Estilos Globais',
      children: <FunnelDesignFormGlobalStyles activeFunnel={activeFunnel} />
    },
    {
      key: '3',
      label: 'Modelos',
      children: <FunnelDesignFormGlobalModels activeFunnel={activeFunnel} />
    }
    // {
    //   key: '4',
    //   label: 'Variáveis Globais',
    //   children: <FunnelDesignFormGeneral activeFunnel={activeFunnel} />
    // }
  ]

  return (
    <S.FunnelDesignFormWrapper>
      <Collapse items={items} />
    </S.FunnelDesignFormWrapper>
  )
}

export default FunnelDesignForm

// ===================================== FUNNEL DESIGN - GENERAL

interface IFunnelDesignFormGeneral {
  activeFunnel?: IFunnel | null
}

const FunnelDesignFormGeneral = ({
  activeFunnel
}: IFunnelDesignFormGeneral) => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState, setValue, watch } =
    useForm<IFunnelDesignFormData_General>({
      mode: 'onBlur',
      resolver: yupResolver(FunnelDesignSchema_General),
      defaultValues: {
        funnelShowLogo: true,
        funnelShowProgress: true
      }
    })

  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: IFunnelDesignFormData_General) => {
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
      setValue(
        'funnelShowLogo',
        activeFunnel.funnelDesign.globalStyles.showLogo
      )
      setValue(
        'funnelShowProgress',
        activeFunnel.funnelDesign.globalStyles.showProgressBar
      )
    }
  }, [activeFunnel, setValue])

  return (
    <S.FunnelDesignForm
      layout="vertical"
      onSubmitCapture={handleSubmit(onSubmit)}
    >
      <Controller
        name="funnelShowLogo"
        control={control}
        render={({ field: { onChange, value, ...restField } }) => (
          <Form.Item
            label="Mostrar logo"
            validateStatus={errors.funnelShowLogo ? 'error' : ''}
            help={errors.funnelShowLogo?.message}
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
        name="funnelShowProgress"
        control={control}
        render={({ field: { onChange, value, ...restField } }) => (
          <Form.Item
            label="Mostrar barra de progresso"
            validateStatus={errors.funnelShowProgress ? 'error' : ''}
            help={errors.funnelShowProgress?.message}
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

      <Button htmlType="submit" disabled={!isValid} loading={isSubmitting}>
        Salvar
      </Button>
    </S.FunnelDesignForm>
  )
}

// ===================================== FUNNEL DESIGN - GLOBAL STYLES

interface IFunnelDesignFormGlobalStyles {
  activeFunnel?: IFunnel | null
}

const FunnelDesignFormGlobalStyles = ({
  activeFunnel
}: IFunnelDesignFormGlobalStyles) => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState, setValue, watch } =
    useForm<IFunnelDesignFormData_GlobalStyles>({
      mode: 'onBlur',
      resolver: yupResolver(FunnelDesignSchema_GlobalStyles),
      defaultValues: {
        borderRadius: 0,
        pageRowGap: 0,
        backgroundColor: '',
        colorPrimary: ''
      }
    })

  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: IFunnelDesignFormData_GlobalStyles) => {
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
      setValue(
        'borderRadius',
        activeFunnel.funnelDesign.globalStyles.borderRadius
      )
      setValue('pageRowGap', activeFunnel.funnelDesign.globalStyles.pageRowGap)
      setValue(
        'backgroundColor',
        activeFunnel.funnelDesign.globalStyles.backgroundColor
      )
      setValue(
        'colorPrimary',
        activeFunnel.funnelDesign.globalStyles.primaryColor
      )
    }
  }, [activeFunnel, setValue])

  return (
    <S.FunnelDesignForm
      layout="vertical"
      onSubmitCapture={handleSubmit(onSubmit)}
    >
      <Controller
        name="borderRadius"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Mostrar logo"
            validateStatus={errors.borderRadius ? 'error' : ''}
            help={errors.borderRadius?.message}
          >
            <InputNumber {...field} addonAfter="px" />
          </Form.Item>
        )}
      />
      <Controller
        name="pageRowGap"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Mostrar logo"
            validateStatus={errors.pageRowGap ? 'error' : ''}
            help={errors.pageRowGap?.message}
          >
            <InputNumber {...field} addonAfter="px" />
          </Form.Item>
        )}
      />

      <Button htmlType="submit" disabled={!isValid} loading={isSubmitting}>
        Salvar
      </Button>
    </S.FunnelDesignForm>
  )
}

// ===================================== FUNNEL DESIGN - MODELS

type prefixType =
  | 'title'
  | 'subtitle'
  | 'legend'
  | 'card'
  | 'card.title'
  | 'card.legend'
  | 'card.border'

interface IFunnelDesignFormGlobalModels {
  activeFunnel?: IFunnel | null
}

const FunnelDesignFormGlobalModels = ({
  activeFunnel
}: IFunnelDesignFormGlobalModels) => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState, setValue, watch } =
    useForm<IFunnelDesignFormData_GlobalModels>({
      mode: 'onBlur',
      resolver: yupResolver(FunnelDesignSchema_GlobalModels),
      defaultValues: {
        title: {
          fontFamily: '',
          fontSize: 0,
          fontWeight: 0,
          fontColor: ''
        },
        subtitle: {
          fontFamily: '',
          fontSize: 0,
          fontWeight: 0,
          fontColor: ''
        },
        legend: {
          fontFamily: '',
          fontSize: 0,
          fontWeight: 0,
          fontColor: ''
        },
        card: {
          title: {
            fontFamily: '',
            fontSize: 0,
            fontWeight: 0,
            fontColor: ''
          },
          legend: {
            fontFamily: '',
            fontSize: 0,
            fontWeight: 0,
            fontColor: ''
          },
          emoji: null,
          backgroundColor: '',
          border: {
            borderSize: 0,
            borderRadius: 0,
            borderColor: ''
          }
        }
      }
    })

  const { errors, isSubmitting, isValid } = formState

  const onSubmit = async (data: IFunnelDesignFormData_GlobalModels) => {
    console.log('Form submitted:', data)
  }

  useEffect(() => {
    if (activeFunnel && activeFunnel.funnelDesign.globalModels) {
      const { globalModels } = activeFunnel.funnelDesign

      setValue('title', {
        ...globalModels.title,
        fontSize: Number(globalModels.title.fontSize),
        fontWeight: Number(globalModels.title.fontWeight)
      })
      setValue('subtitle', {
        ...globalModels.subtitle,
        fontSize: Number(globalModels.subtitle.fontSize),
        fontWeight: Number(globalModels.subtitle.fontWeight)
      })
      setValue('legend', {
        ...globalModels.legend,
        fontSize: Number(globalModels.legend.fontSize),
        fontWeight: Number(globalModels.legend.fontWeight)
      })
      setValue('card', {
        ...globalModels.card,
        title: {
          ...globalModels.card.title,
          fontSize: Number(globalModels.card.title.fontSize),
          fontWeight: Number(globalModels.card.title.fontWeight)
        },
        legend: {
          ...globalModels.card.legend,
          fontSize: Number(globalModels.card.legend.fontSize),
          fontWeight: Number(globalModels.card.legend.fontWeight)
        },
        border: {
          ...globalModels.card.border,
          borderSize: Number(globalModels.card.border.borderSize),
          borderRadius: Number(globalModels.card.border.borderRadius)
        }
      })
    }
  }, [activeFunnel, setValue])

  const renderFontFields = (prefix: prefixType) => (
    <>
      <Controller
        name={`${prefix}.fontFamily` as any}
        control={control}
        render={({ field }) => (
          <Form.Item label="Família">
            <Input {...field} />
          </Form.Item>
        )}
      />
      <Controller
        name={`${prefix}.fontSize` as any}
        control={control}
        render={({ field }) => (
          <Form.Item label="Tamanho">
            <InputNumber {...field} addonAfter="px" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${prefix}.fontWeight` as any}
        control={control}
        render={({ field }) => (
          <Form.Item label="Peso">
            <InputNumber {...field} addonAfter="px" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${prefix}.fontColor` as any}
        control={control}
        render={({ field }) => (
          <Form.Item label="Cor">
            <Input {...field} type="color" />
          </Form.Item>
        )}
      />
    </>
  )

  const renderBorderFields = (prefix: prefixType) => (
    <>
      <Controller
        name={`${prefix}.borderSize` as any}
        control={control}
        render={({ field }) => (
          <Form.Item label="Tamanho">
            <InputNumber {...field} addonAfter="px" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${prefix}.borderRadius` as any}
        control={control}
        render={({ field }) => (
          <Form.Item label="Arredondamento">
            <InputNumber {...field} addonAfter="px" />
          </Form.Item>
        )}
      />
      <Controller
        name={`${prefix}.borderColor` as any}
        control={control}
        render={({ field }) => (
          <Form.Item label="Cor">
            <Input {...field} type="color" />
          </Form.Item>
        )}
      />
    </>
  )

  return (
    <S.FunnelDesignForm
      layout="vertical"
      onSubmitCapture={handleSubmit(onSubmit)}
    >
      <S.FunnelDesignFormTitle orientation="left">
        Título
      </S.FunnelDesignFormTitle>
      {renderFontFields('title')}

      <S.FunnelDesignFormTitle orientation="left">
        Sub-título
      </S.FunnelDesignFormTitle>
      {renderFontFields('subtitle')}

      <S.FunnelDesignFormTitle orientation="left">
        Legenda
      </S.FunnelDesignFormTitle>
      {renderFontFields('legend')}

      <S.FunnelDesignFormTitle orientation="left">Card</S.FunnelDesignFormTitle>
      <S.FunnelDesignFormSubtitle>Título</S.FunnelDesignFormSubtitle>
      {renderFontFields('card.title')}
      <S.FunnelDesignFormSubtitle>Legenda</S.FunnelDesignFormSubtitle>
      {renderFontFields('card.legend')}
      <S.FunnelDesignFormSubtitle>Emoji</S.FunnelDesignFormSubtitle>
      <Controller
        name="card.emoji"
        control={control}
        render={({ field }) => (
          <Form.Item label="Emoji">
            <Input {...field} />
          </Form.Item>
        )}
      />
      <S.FunnelDesignFormSubtitle>Cor de Fundo</S.FunnelDesignFormSubtitle>
      <Controller
        name="card.backgroundColor"
        control={control}
        render={({ field }) => (
          <Form.Item
            label="Cor de Fundo"
            validateStatus={errors.card?.backgroundColor ? 'error' : ''}
            help={errors.card?.backgroundColor?.message}
          >
            <Input {...field} type="color" />
          </Form.Item>
        )}
      />
      <S.FunnelDesignFormSubtitle>Borda</S.FunnelDesignFormSubtitle>
      {renderBorderFields('card.border')}

      <Button htmlType="submit" disabled={!isValid} loading={isSubmitting}>
        Salvar
      </Button>
    </S.FunnelDesignForm>
  )
}
