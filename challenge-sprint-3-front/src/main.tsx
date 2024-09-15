import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Fale from './routes/FaleConosco/index.tsx'
import Sobre from './routes/SobreNos/index.tsx'
import Error from './routes/Error/index.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/faq",
        element: <Faq/>,
      },
      {
        path: "/fale",
        element: <Fale/>,
      },
      {
        path:"/sobre",
        element: <Sobre/>,
      }
    ]
  }
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
