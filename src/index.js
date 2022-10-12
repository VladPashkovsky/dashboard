import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { DarkModContextProvider } from './context/darkModContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DarkModContextProvider>
      <App />
    </DarkModContextProvider>
  </React.StrictMode>,
)


