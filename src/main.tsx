import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import '@fontsource-variable/inter'
import './index.css'
import App from './App'
import IntroGate from './components/intro/IntroGate'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
  <IntroGate>
    <App />
  </IntroGate>
</BrowserRouter>
  </StrictMode>,
)