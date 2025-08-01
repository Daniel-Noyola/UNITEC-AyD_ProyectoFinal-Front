import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import { IncidentsProvider } from './context/IncidentsProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IncidentsProvider>
      <RouterProvider router={router}/>
    </IncidentsProvider>
  </StrictMode>,
)
