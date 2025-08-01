import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App'
import Echo from './Echo.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Echo />
    {/* <App /> */}
  </StrictMode>,
)
