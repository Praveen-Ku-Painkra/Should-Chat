import { useState } from "react"
import UserInfo from "./UserInfo"


function ChatList({chatsInfo,updateChats}) {
  let res = chatsInfo.map(chat => chat.to)
  let chatsList = [...new Set(res)].filter(el => el != "Praveen")
  console.log(chatsList)
  // let [chatsList,setChatList] = useState(reciverData)

  
  return (
    <div className="h-screen w-xs p-2 bg-pink  bg-stone-900 border-orange-500 border-x-[0.01rem]" >
      {chatsList.map(chatInfo =>  <UserInfo  name={chatInfo}  updateChats={updateChats}/>)}
    </div>
  )
}

export default ChatList