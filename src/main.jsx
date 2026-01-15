import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { LocationProvider } from './context/LocationContext.jsx'
import { PlainModeProvider } from './context/PlainModeContext.jsx'

createRoot(document.getElementById('root')).render(
  <LocationProvider>
    <PlainModeProvider>
      <App />
    </PlainModeProvider>
  </LocationProvider>,
)
