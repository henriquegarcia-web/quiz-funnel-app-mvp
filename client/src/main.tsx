import React from 'react'
import ReactDOM from 'react-dom/client'

import { ToastContainer, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import App from '@/App.tsx'
import GlobalStyle from '@/utils/styles/globals.ts'
import { AdminAuthProvider } from '@/contexts/AdminAuthProvider.tsx'
import { AdminProvider } from '@/contexts/AdminProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AdminAuthProvider>
      <AdminProvider>
        <GlobalStyle />
        <App />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />
      </AdminProvider>
    </AdminAuthProvider>
  </React.StrictMode>
)
