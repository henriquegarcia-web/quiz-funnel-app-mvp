import { Router } from 'express'

import authRoutes from './AuthRoutes.js'
import userRoutes from './UserRoutes.js'
import quizRoutes from './QuizRoutes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/user', userRoutes)
router.use('/quiz', quizRoutes)

export default router
