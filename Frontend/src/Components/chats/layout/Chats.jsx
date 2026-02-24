import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import NewChats from './NewChats'

function Chats({chats}) {
  // let {personChats,groupChats} = useSelector(state => state.chat)
  // let [chatSet,setChatSet] = useState(chats)
  // console.log()
  return (
    <div className=' w-full h-dvh flex flex-col p-8 bg-[#15191C] overflow-y-auto'>
      {chats&&chats.map((chat,idx) => {  return <p key={idx}  className={chat.from._id==="699c616f35be35242c3f88bd" ? 'self-end':""}>{chat.msg}</p>})}
      <NewChats/>
    </div>
  )
}

export default Chats