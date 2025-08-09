import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
import { AppRoutes } from './AppRoutes.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
    {/* <App /> */}
  </StrictMode>,
)
