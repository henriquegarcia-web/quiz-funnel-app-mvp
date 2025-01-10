import { Router } from 'express'

import authRoutes from './AuthRoutes.js'
import userRoutes from './UserRoutes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/user', userRoutes)

export default router
