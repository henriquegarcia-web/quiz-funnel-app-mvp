// services/quiz.ts

import api from '@/lib/fetch'
import { IFunnel, IFunnelService } from '@/data/mock'

export const validateFunnelAccess = async (funnelId: string) => {
  try {
    const response = await api.get(`/quiz/validate/${funnelId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data.funnel
  } catch (error: any) {
    throw error.response?.data || error
  }
}

// Serviço de Listagem de todos os Quizzes
const fetchUserQuizzes = async () => {
  try {
    const response = await api.get('/quiz/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

// Serviço de Criação de Quiz
const createQuiz = async (quizData: IFunnelService) => {
  try {
    const response = await api.post('/quiz/create', quizData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

// Serviço de Deleção de Quiz
const deleteQuiz = async (quizId: string) => {
  try {
    const response = await api.delete(`/quiz/${quizId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  } catch (error: any) {
    throw error.response?.data || error
  }
}

export { fetchUserQuizzes, createQuiz, deleteQuiz }
