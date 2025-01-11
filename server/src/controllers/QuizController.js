import {
  createQuiz,
  getUserQuizzes,
  getAllQuizzes,
  deleteQuiz
} from '../services/QuizService.js'

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
