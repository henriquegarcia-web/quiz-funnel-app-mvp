import Quiz from '../models/Quiz.js'
import slugify from 'slugify'

const formatQuiz = (quiz) => {
  return {
    funnelId: quiz._id,
    ...quiz
  }
}

export const createQuiz = async (quizData) => {
  const { funnelName, funnelDescription, userId } = quizData
  const funnelSlug = slugify(funnelName, { lower: true })

  const quiz = new Quiz({
    createdBy: userId,
    funnelSettings: {
      general: {
        funnelName,
        funnelDescription,
        funnelSlug
      }
    }
  })

  await quiz.save()
  return formatQuiz(quiz.toObject())
}

export const getUserQuizzes = async (createdBy) => {
  const quizzes = await Quiz.find({ createdBy }).lean()
  return quizzes.map(formatQuiz)
}

export const getAllQuizzes = async () => {
  const quizzes = await Quiz.find().lean()
  return quizzes.map(formatQuiz)
}

export const deleteQuiz = async (quizId) => {
  const quiz = await Quiz.findByIdAndDelete(quizId)
  if (!quiz) {
    throw new Error('Quiz not found')
  }
  return quiz.toObject()
}
