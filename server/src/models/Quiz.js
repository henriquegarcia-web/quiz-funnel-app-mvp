import mongoose from 'mongoose'

const { Schema } = mongoose

const QuizSchema = new Schema({
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  funnelSettings: {
    general: {
      funnelName: { type: String, required: true },
      funnelDescription: { type: String, required: true },
      funnelSlug: { type: String, required: true, unique: true },
      funnelIsPublished: { type: Boolean, default: false },
      funnelFlowType: {
        type: String,
        enum: ['flow_button', 'flow_direct_click'],
        default: 'flow_button'
      }
    },
    seo: {
      pageName: { type: String, default: null },
      pageDescription: { type: String, default: null },
      pageFavicon: { type: String, default: null }
    },
    leadCapture: {
      isRequired: { type: Boolean, default: true },
      fields: {
        type: [String],
        default: ['field_name', 'field_email', 'field_phone']
      }
    },
    tracking: {
      pixelFacebook: { type: String, default: '' },
      googleAnalytics: { type: String, default: '' }
    },
    redirectOnComplete: { type: String, default: '' },
    notifications: {
      enabled: { type: Boolean, default: false },
      to: { type: [String], default: [] }
    }
  },
  funnelDesign: {
    globalStyles: {
      borderRadius: { type: Number, default: 8 },
      pageRowGap: { type: Number, default: 16 },
      primaryColor: { type: String, default: '#F7941D' },
      backgroundColor: { type: String, default: '#FFFFFF' },
      font: { type: String, default: 'Arial' },
      logo: { type: String, default: '' },
      showLogo: { type: Boolean, default: true },
      showProgressBar: { type: Boolean, default: true }
    },
    globalModels: {
      title: {
        fontFamily: { type: String, default: 'Poppins' },
        fontSize: { type: String, default: '24px' },
        fontWeight: { type: String, default: '600' },
        fontColor: { type: String, default: '#1f2937' }
      },
      subtitle: {
        fontFamily: { type: String, default: 'Inter' },
        fontSize: { type: String, default: '16px' },
        fontWeight: { type: String, default: '400' },
        fontColor: { type: String, default: '#4b5563' }
      },
      legend: {
        fontFamily: { type: String, default: 'Inter' },
        fontSize: { type: String, default: '14px' },
        fontWeight: { type: String, default: '400' },
        fontColor: { type: String, default: '#6b7280' }
      },
      card: {
        title: {
          fontFamily: { type: String, default: 'Poppins' },
          fontSize: { type: String, default: '18px' },
          fontWeight: { type: String, default: '500' },
          fontColor: { type: String, default: '#1f2937' }
        },
        legend: {
          fontFamily: { type: String, default: 'Inter' },
          fontSize: { type: String, default: '14px' },
          fontWeight: { type: String, default: '400' },
          fontColor: { type: String, default: '#6b7280' }
        },
        backgroundColor: { type: String, default: '#ffffff' },
        border: {
          borderSize: { type: String, default: '1px' },
          borderRadius: { type: String, default: '8px' },
          borderColor: { type: String, default: '#e5e7eb' }
        }
      },
      button: {
        label: {
          fontFamily: { type: String, default: 'Inter' },
          fontSize: { type: String, default: '14px' },
          fontWeight: { type: String, default: '400' },
          fontColor: { type: String, default: '#6b7280' }
        },
        backgroundColor: { type: String, default: '#ffffff' },
        backgroundColorHover: { type: String, default: '#ffffff' },
        backgroundColorActive: { type: String, default: '#ffffff' },
        border: {
          borderSize: { type: String, default: '1px' },
          borderRadius: { type: String, default: '8px' },
          borderColor: { type: String, default: '#e5e7eb' }
        }
      }
    },
    globalVariables: { type: [Object], default: [] }
  },
  funnelSteps: { type: [Object], default: [] },
  funnelAnalytics: {
    totalResponses: { type: Number, default: 0 },
    progressByStep: { type: Map, of: Boolean, default: {} }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

export default mongoose.model('Quiz', QuizSchema)
