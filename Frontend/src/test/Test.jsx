import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addChat } from '../features/should-chat/chatSlice'
function Test() {
   async function  sample(){
    let res = await fetch("/api/test")
    let data = await res.json()
    console.log(data)
   }
  return (
    <div>
        <button onClick={sample}>Click me!</button>
    </div>
  )
}

export default Test