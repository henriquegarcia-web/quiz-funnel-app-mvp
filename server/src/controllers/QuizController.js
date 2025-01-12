// controllers/QuizController.js

import mongoose from 'mongoose'
import {
  validateFunnelAccess,
  createQuiz,
  getUserQuizzes,
  getAllQuizzes,
  deleteQuiz
} from '../services/QuizService.js'
import Quiz from '../models/Quiz.js'

export const validateFunnelAccessController = async (req, res) => {
  const { funnelId } = req.params
  const userId = req.user.id

  if (!mongoose.Types.ObjectId.isValid(funnelId)) {
    return res.status(400).json({
      code: 'INVALID_FUNNEL_ID',
      message: 'ID do funil inválido'
    })
  }

  try {
    const funnel = await Quiz.findOne({ _id: funnelId, createdBy: userId })

    if (!funnel) {
      return res.status(404).json({
        code: 'FUNNEL_NOT_FOUND',
        message:
          'Funil não encontrado ou você não possui permissão para acessá-lo'
      })
    }

    return res.status(200).json({ funnel })
  } catch (error) {
    console.error('Erro na validação do acesso ao Editor:', error)
    return res.status(500).json({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'Erro ao validar o acesso ao editor'
    })
  }
}

export const createQuizController = async (req, res) => {
  try {
    const userId = req.user.id
    const quiz = await createQuiz({ ...req.body, userId })
    res.status(201).json(quiz)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getUserQuizzesController = async (req, res) => {
  try {
    const userId = req.user.id
    const quizzes = await getUserQuizzes(userId)
    res.status(200).json(quizzes)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const getAllQuizzesController = async (req, res) => {
  try {
    const quizzes = await getAllQuizzes()
    res.status(200).json(quizzes)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export const deleteQuizController = async (req, res) => {
  try {
    const { id } = req.params
    const quiz = await deleteQuiz(id)
    res.status(200).json({ message: 'Quiz deleted successfully', quiz })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
