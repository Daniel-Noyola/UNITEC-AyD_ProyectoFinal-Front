import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './index.css'
import { IncidentsProvider } from './context/IncidentsProvider'
import { APIProvider } from '@vis.gl/react-google-maps'
import { UsersProvider } from './context/UsersProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UsersProvider>
      <APIProvider apiKey={import.meta.env.VITE_MAPS_API_KEY} libraries={["places"]}>
        <IncidentsProvider>
          <RouterProvider router={router}/>
        </IncidentsProvider>
      </APIProvider>
    </UsersProvider>
  </StrictMode>,
)
