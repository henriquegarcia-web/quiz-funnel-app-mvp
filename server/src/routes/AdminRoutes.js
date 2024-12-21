import { Router } from 'express'
import {
  getAdminProfile,
  getAllAdminsProfile,
  registerAdminAccess,
  deleteAdmin,
  toggleAdminBlock
} from '../controllers/AdminController.js'
import { AuthMiddleware } from '../middleware/AuthMiddleware.js'

const router = Router()

router.get('/profile/:adminId', AuthMiddleware, getAdminProfile)
router.get('/profiles', AuthMiddleware, getAllAdminsProfile)
router.post('/register-access', AuthMiddleware, registerAdminAccess)
router.delete('/delete/:adminId', AuthMiddleware, deleteAdmin)
router.put('/block/:adminId', AuthMiddleware, toggleAdminBlock)

export default router
