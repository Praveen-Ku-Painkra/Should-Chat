import React from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
function Auth() {

  return (
    <>
    {(useLocation().pathname==="/auth"||useLocation().pathname==="/auth/")&&<div>
        <div className='h-screen flex justify-center items-center '>
            <p className='text-xl'><NavLink to="/auth/login" className="header-title">Login</NavLink> &nbsp; <span className='text-extrabold underline'> Or </span> &nbsp; <NavLink to="/auth/signup" className="header-title">Signup</NavLink></p>
        </div>
    </div>}
        <Outlet/>
    </>
  )
}

export default Auth