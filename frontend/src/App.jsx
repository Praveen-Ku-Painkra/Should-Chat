import { Outlet } from 'react-router'
import './App.css'
import Landing from './pages/Landing'

function App() {

  return (
    <>
    <h1>This is app.jsx</h1>
      <Outlet/>
    </>
  )
}

export default App
