import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './style/main.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.tsx'
import Faq from './routes/Faq/index.tsx'
import Fale from './routes/FaleConosco/index.tsx'
import Sobre from './routes/SobreNos/index.tsx'
import Error from './routes/Error/index.tsx'
import Login from './routes/Login/index.tsx'


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
      },
      {
        path:"/login",
        element: <Login/>,
      }
    ]
  }
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
