import { StrictMode } from 'react'
// import "./index.css"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Index from './Components/Index/Index.jsx'
import Signin from './Components/Auth/Signin/Signin.jsx'
import Login from './Components/Auth/Login/Login.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path="/" element={<Index/>}/>
      <Route path="signin" element={<Signin/>}/>
      <Route path="login" element={<Login/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}  />
  </StrictMode>,
)
