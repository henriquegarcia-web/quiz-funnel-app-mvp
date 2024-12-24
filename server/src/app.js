import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './routes/index.js'

const allowedOrigins = [
  'http://localhost:5173',
  process.env.PRODUCTION_CLIENT_URL
]

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true)
//     } else {
//       callback(new Error('Bloqueado pelo CORS'))
//     }
//   },
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   credentials: true,
//   optionsSuccessStatus: 200
// }

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      console.error(`Bloqueado pelo CORS: Origem não permitida => ${origin}`)
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'X-CSRF-Token'
  ],
  exposedHeaders: ['Authorization'],
  optionsSuccessStatus: 204
}

const app = express()

// CORS
app.use(cors(corsOptions))

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Rota de teste
app.get('/teste', (req, res) => {
  res.status(200).json({ message: 'Servidor está funcionando corretamente!' })
})

// Routes
app.use('/api', routes)

export default app
