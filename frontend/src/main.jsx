import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
/////////////////////////////////////Pages////////////////////////Pages///////////////////////
import Landing from "../src/pages/Landing.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component:App,
    children:[
      {
        path:"home",
        Component:Landing
      }
    ]
  }
]);



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

)
