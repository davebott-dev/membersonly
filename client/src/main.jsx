import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Index from './routes/Index.jsx'
import Root from './routes/Root.jsx'
import SignUp from './routes/Sign-up.jsx'

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
        }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
