import * as S from './styles'

import {
  LuChartLine,
  LuClipboardCheck,
  LuEye,
  LuSmilePlus,
  LuUserRound
} from 'react-icons/lu'
import type { TableColumnsType, TableProps } from 'antd'

interface IInsightsView {}

const InsightsView = ({}: IInsightsView) => {
  return (
    <S.InsightsView>
      <S.InsightsViewWrapper>
        <InsightsFeedback />
        <LeadsTable />
      </S.InsightsViewWrapper>
    </S.InsightsView>
  )
}

export default InsightsView

// =========================== FEEDBACKS

const InsightsFeedback = () => {
  return (
    <S.InsightsFeedbackWrapper>
      <S.InsightsFeedback title="Visitantes" value={1128} prefix={<LuEye />} />
      <S.InsightsFeedback
        title="Leads Adquiridos"
        value={213}
        prefix={<LuUserRound />}
      />
      <S.InsightsFeedback
        title="Taxa de Interação"
        value="10%"
        prefix={<LuChartLine />}
      />
      <S.InsightsFeedback
        title="Leads Qualificados"
        value={432}
        prefix={<LuSmilePlus />}
      />
      <S.InsightsFeedback
        title="Fluxos Finalizados"
        value={163}
        prefix={<LuClipboardCheck />}
      />
    </S.InsightsFeedbackWrapper>
  )
}

// =========================== LEADS TABLE

export interface LeadType {
  key: React.Key
  name: string
  gender: string
  phone: string
  email: string
  quizCompleted: string
  score: number
  createdAt: string
}

const columns: TableColumnsType<LeadType> = [
  {
    title: 'Nome',
    dataIndex: 'name',
    render: (text: string) => <>{text}</>
  },
  {
    title: 'Sexo',
    dataIndex: 'gender'
  },
  {
    title: 'Telefone',
    dataIndex: 'phone'
  },
  {
    title: 'E-mail',
    dataIndex: 'email'
  },
  {
    title: 'Quiz Completado',
    dataIndex: 'quizCompleted'
  },
  {
    title: 'Pontuação',
    dataIndex: 'score'
  },
  {
    title: 'Data de Criação',
    dataIndex: 'createdAt'
  }
]

const leadsData: LeadType[] = [
  {
    key: '1',
    name: 'João Silva',
    gender: 'Masculino',
    phone: '(11) 98765-4321',
    email: 'joao.silva@email.com',
    quizCompleted: 'Quiz de Estilo de Vida',
    score: 85,
    createdAt: '2024-12-20 10:30'
  },
  {
    key: '2',
    name: 'Maria Oliveira',
    gender: 'Feminino',
    phone: '(21) 99876-5432',
    email: 'maria.oliveira@email.com',
    quizCompleted: 'Quiz de Preferências de Viagem',
    score: 92,
    createdAt: '2024-12-21 14:45'
  },
  {
    key: '3',
    name: 'Carlos Santos',
    gender: 'Masculino',
    phone: '(31) 97654-3210',
    email: 'carlos.santos@email.com',
    quizCompleted: 'Quiz de Conhecimentos Gerais',
    score: 78,
    createdAt: '2024-12-22 09:15'
  },
  {
    key: '4',
    name: 'Ana Rodrigues',
    gender: 'Feminino',
    phone: '(41) 98765-1234',
    email: 'ana.rodrigues@email.com',
    quizCompleted: 'Quiz de Hábitos Alimentares',
    score: 88,
    createdAt: '2024-12-23 16:20'
  }
]

const rowSelection: TableProps<LeadType>['rowSelection'] = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: LeadType[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      'selectedRows: ',
      selectedRows
    )
  },
  getCheckboxProps: (record: LeadType) => ({
    disabled: record.name === 'Disabled User',
    name: record.name
  })
}

const LeadsTable = () => {
  return (
    <S.LeadsTable<any>
      rowSelection={{ type: 'checkbox', ...rowSelection }}
      columns={columns}
      dataSource={leadsData}
    />
  )
}
