// routes/QuizRoutes.js

import { Router } from 'express'

import {
  validateFunnelAccessController,
  createQuizController,
  getUserQuizzesController,
  getAllQuizzesController,
  deleteQuizController
} from '../controllers/QuizController.js'
import { AuthMiddleware } from '../middleware/AuthMiddleware.js'

const router = Router()

router.get('/validate/:funnelId', AuthMiddleware, validateFunnelAccessController)
router.post('/create', AuthMiddleware, createQuizController)
router.get('/all', AuthMiddleware, getAllQuizzesController)
router.get('/user', AuthMiddleware, getUserQuizzesController)
router.delete('/:id', AuthMiddleware, deleteQuizController)

export default router
