// middleware/AuthMiddleware.js

import jwt from 'jsonwebtoken'
import { authConfig } from '../config/auth.js'

export const AuthMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader) {
      return res.status(401).json({
        code: 'NO_TOKEN_PROVIDED',
        message: 'Token não fornecido'
      })
    }

    const parts = authHeader.split(' ')
    if (parts.length !== 2) {
      return res.status(401).json({
        code: 'TOKEN_MALFORMATTED',
        message: 'Token mal formatado'
      })
    }

    const [scheme, token] = parts

    if (!/^Bearer$/i.test(scheme)) {
      return res.status(401).json({
        code: 'TOKEN_MALFORMATTED',
        message: 'Token mal formatado'
      })
    }

    jwt.verify(token, authConfig.jwtSecret, (err, decoded) => {
      if (err) {
        switch (err.name) {
          case 'JsonWebTokenError':
            return res.status(401).json({
              code: 'INVALID_TOKEN',
              message: 'Token inválido'
            })
          case 'TokenExpiredError':
            return res.status(401).json({
              code: 'TOKEN_EXPIRED',
              message: 'Token expirado'
            })
          default:
            return res.status(401).json({
              code: 'TOKEN_ERROR',
              message: 'Erro na validação do token'
            })
        }
      }

      req.user = decoded
      return next()
    })
  } catch (error) {
    console.error('Erro no middleware de autenticação:', error)
    return res.status(500).json({
      code: 'AUTH_ERROR',
      message: 'Erro interno no servidor durante autenticação'
    })
  }
}
