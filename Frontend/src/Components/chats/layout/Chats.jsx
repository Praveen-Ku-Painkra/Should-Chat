import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Chats({chats}) {
  // let {personChats,groupChats} = useSelector(state => state.chat)
  // let [chatSet,setChatSet] = useState(chats)
  // console.log()
  console.log(chats)
  return (
    <div className=' w-full h-dvh flex flex-col p-8 bg-[#15191C]'>
      {chats.map((chat,idx) => {return <p key={idx}  className={chat.from=="Praveen" ? 'self-end':""}>{chat.chat}</p>})}
    </div>
  )
}

export default Chats