import Header from './Components/boilarplate/Header'
import Footer from './Components/boilarplate/Footer'
import { Outlet } from 'react-router-dom'

function Index() {
  return (
    <div className='flex-col content-center'>
        {/* <Header/> */}
        <Outlet/>
        {/* <Footer/> */}
    </div>
  )
}

export default Index
