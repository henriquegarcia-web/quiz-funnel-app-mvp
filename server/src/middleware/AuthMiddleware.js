import jwt from 'jsonwebtoken'
import { authConfig } from '../config/auth.js'

export const AuthMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) {
    return res.status(401).json({
      code: 'ACCESS_DENIED',
      message: 'Acesso negado, nenhum token fornecido'
    })
  }

  try {
    const decoded = jwt.verify(token, authConfig.jwtSecret)
    req.user = decoded
    next()
  } catch (error) {
    return res
      .status(400)
      .json({ code: 'INVALID_TOKEN', message: 'Token inválido' })
  }
}
  