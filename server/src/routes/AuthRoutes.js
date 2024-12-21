import { Router } from 'express'
import {
  registerAdmin,
  loginAdmin,
  verifyToken
} from '../controllers/AuthController.js'

const router = Router()

router.post('/register', registerAdmin)
router.post('/login', loginAdmin)
router.get('/verify-token', verifyToken)

export default router
