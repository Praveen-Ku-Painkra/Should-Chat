import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const sample = () => {
  const count = useSelector((state) => state.chat)
 console.log(count)
  return (
    <div>sample
       
    </div>
  )
}

export default sample