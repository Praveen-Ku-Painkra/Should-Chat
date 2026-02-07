import { Outlet } from 'react-router-dom'
import './App.css'
import Sample from './Components/boilarplate/Sample'
import Header from './Components/boilarplate/Header'
import Footer from './Components/boilarplate/Footer'
import { store } from './app/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
    <Provider store={store}>
      <Header/>
      <Outlet/>
      <Footer/>
    </Provider>
    </>
  )
}

export default App
