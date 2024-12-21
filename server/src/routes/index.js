import { Router } from 'express'

import authRoutes from './AuthRoutes.js'
import adminRoutes from './AdminRoutes.js'

const router = Router()

router.use('/auth', authRoutes)
router.use('/admin', adminRoutes)

export default router
