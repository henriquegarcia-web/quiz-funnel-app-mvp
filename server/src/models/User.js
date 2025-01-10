// Atualização do Model: User.js
import mongoose from 'mongoose'

const { Schema } = mongoose

const UserSchema = new Schema({
  // Informações Pessoais
  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: {
      type: String,
      enum: ['male', 'female', 'other', 'prefer_not_to_say'],
      required: true
    }
  },

  // Informações de Contato
  contactInfo: {
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true }
    }
  },

  // Preferências de Usuário
  preferences: {
    preferredLanguage: { type: String, enum: ['pt-BR'], default: 'pt-BR' },
    theme: { type: String, enum: ['light', 'dark'], default: 'light' }
  },

  // Dados de Assinatura
  subscription: {
    planId: { type: String, default: 'basic' },
    planName: { type: String, default: 'Plano Básico' },
    startDate: { type: Date, default: () => new Date() },
    endDate: {
      type: Date,
      default: () =>
        new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'cancelled'],
      default: 'active'
    },
    paymentHistory: { type: Array, default: [] }
  },

  // Funis associados a esse administrador
  funnels: { type: Array, default: [] },

  // Bloqueio do usuário
  blocked: { type: Boolean, default: false },

  // Papel do usuário (role)
  role: {
    type: String,
    enum: ['user', 'admin', 'developer'],
    required: true,
    default: 'user'
  },

  // Hash da senha para autenticação
  password: { type: String, required: true }
})

export default mongoose.model('User', UserSchema)
