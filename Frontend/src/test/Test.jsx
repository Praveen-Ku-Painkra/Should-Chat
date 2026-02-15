import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addChat } from '../features/should-chat/chatSlice'
function Test() {
    const dispatch = useDispatch()
    let chats = useSelector(state => state.chat.personChats)
    console.log(chats)
    let test = ()=>{
        dispatch(addChat())
    }
  return (
    <div>
        <button onClick={test}>Click me!</button>
    </div>
  )
}

export default Test