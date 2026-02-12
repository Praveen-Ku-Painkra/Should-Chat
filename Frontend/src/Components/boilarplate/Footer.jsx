import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  if (useLocation().pathname === "/login") {
    return null
  } else {
  return (
    <footer className='border-y w-full'>
      <div className='flex justify-between items-center  m-8 lg:px-16'>
        <div>Praveen Kumar Painkra</div>
        <div className='flex flex-col items-center space-y-3'>
          <p className='text-lg font-medium underline mb-2'>Follow me on</p>
          <a href="" className='font-semibold text-gray-600 hover:underline'>Linkedin</a>
          <a href=""  className='font-semibold text-gray-600 hover:underline'>Github</a>
          <a href=""  className='font-semibold text-gray-600 hover:underline'>Instagram</a>
          <a href=""  className='font-semibold text-gray-600 hover:underline'>Facebook</a>
        </div>
      </div>
      <hr className='mt-8' />
      <div className=' flex items-center h-16 text-gray-400'><p> &#169;2023praveenkumarpainkra. All Rights Reserved.</p></div>
    </footer>
  )
}
}

export default Footer