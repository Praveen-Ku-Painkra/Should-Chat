import { Outlet } from 'react-router-dom'
import './App.css'
import Sample from './Components/boilarplate/Sample'
import Header from './Components/boilarplate/Header'
import Footer from './Components/boilarplate/Footer'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
