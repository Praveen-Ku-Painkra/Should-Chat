
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <header className='shadow max-w-4xl mx-auto fixed top-0 border border-stone-300 rounded-lg z-50'>
        <nav className='px-4 py-2.5'>
            <div className=' h-16 xl:pr-16 xl:pl-16 flex items-center justify-between'>
                <div className='log'>logo</div>
                <div className='flex justify-around font-medium gap-x-5'>
                    <NavLink to='/auth/login' className={({isActive})=>`${isActive?"text-fuchsia-500":"text-gray-600"} header-title`}>Login</NavLink>
                    <NavLink to="/auth/signup" className={({isActive})=>`${isActive?"text-fuchsia-500":"text-gray-600"} header-title`}>Signin</NavLink>
                </div >
            </div>
        </nav>                            
   </header>
  )
}

export default Header