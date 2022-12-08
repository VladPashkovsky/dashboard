import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkModContextProvider } from './context/darkModContext'
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <DarkModContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DarkModContextProvider>

)


