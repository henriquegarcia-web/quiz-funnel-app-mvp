import { Router } from 'express'
import {
  getUserProfile,
  getAllUsersProfile,
  registerUserAccess,
  deleteUser,
  toggleUserBlock
} from '../controllers/UserController.js'
import { AuthMiddleware } from '../middleware/AuthMiddleware.js'

const router = Router()

router.get('/profile/:userId', AuthMiddleware, getUserProfile)
router.get('/profiles', AuthMiddleware, getAllUsersProfile)
router.post('/register-access', AuthMiddleware, registerUserAccess)
router.delete('/delete/:userId', AuthMiddleware, deleteUser)
router.put('/block/:userId', AuthMiddleware, toggleUserBlock)

export default router
