import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RootWraper from './wrappers/rootWrapper'
import { RouterProvider } from 'react-router-dom'
import rootRoutes from './routes/rootRoutes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootWraper>
    <RouterProvider router={rootRoutes} />
    </RootWraper>
  </StrictMode>,
)
