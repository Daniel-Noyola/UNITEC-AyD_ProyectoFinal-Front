import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import { IncidentsProvider } from './context/IncidentsProvider'
import { APIProvider } from '@vis.gl/react-google-maps'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY} libraries={["places"]}>
      <IncidentsProvider>
        <RouterProvider router={router}/>
      </IncidentsProvider>
    </APIProvider>
  </StrictMode>,
)
