import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Login from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
