import { useState } from "react"
import UserInfo from "./UserInfo"


function ChatList({chatsInfo,updateChats}) {
   let [person,setPerson] = useState("")
   let to = chatsInfo.map(chat => chat.to)
   let from = chatsInfo.map(chat => chat.from)
   let res = [...to,...from]
   
  let chatsList = [...new Set(res)].filter((el) => el != "Praveen")
  function updateChatPerson(name){
    setPerson(name)
  }
  return (
    <div className="h-screen w-xs p-2 bg-[#282e3a] flex flex-col gap-y-1 shadow-xl/50 shadow-[#15191C] shadow-indigo-500/50 border-r-1 border-[#3d4957] " >
      {chatsList.map((chatInfo,idx) => <UserInfo key={idx} id={chatInfo} person={{person,updateChatPerson}}  updateChats={updateChats}/>)}
    </div>
  )
}

export default ChatList