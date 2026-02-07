import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <header className='shadow sticky top-0 rounded-lg z-50 '>
        <nav className='bg-white px-4  py-2.5'>
            <div className=' h-16 xl:pr-16 xl:pl-16 flex items-center justify-between'>
                <div className='log'>logo</div>
                <div className='flex justify-around font-medium gap-x-5'>
                    <NavLink to='/sample' className={({isActive})=>`${isActive?"text-fuchsia-500":"text-gray-600"} `}>About me</NavLink>
                    <NavLink to='/educations' className={({isActive})=>`${isActive?"text-fuchsia-500":"text-gray-600"} hover:text-fuchsia-500 `}>Education</NavLink>
                    <NavLink to="/skills" className={({isActive})=>`${isActive?"text-fuchsia-500":"text-gray-600"} hover:text-fuchsia-500`}>Skills</NavLink>
                    <NavLink to="/github" className={({isActive})=>`${isActive?"text-fuchsia-500":"text-gray-600"} hover:text-fuchsia-500`}>Github</NavLink>
                </div >
            </div>
        </nav>                            
   </header>
  )
}

export default Header