// config/auth.js

import dotenv from 'dotenv'

dotenv.config()

export const authConfig = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: '1h'
  // jwtAlgorithm: 'HS256'
  // jwtIssuer: 'your-app-name',
  // jwtAudience: 'your-app-client'
}
