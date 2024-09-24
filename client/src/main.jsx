import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './routes/Index.jsx'
import Root from './routes/Root.jsx'
import SignUp from './routes/Sign-up.jsx'
import Login from './routes/Log-in.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root/>,
    children: [
      {
        index:true,
        element: <Index/>,
      },
      {
        path: 'sign-up',
        element: <SignUp/>,
        },
        {
          path: 'log-in',
          element: <Login/>
        }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
