import { useState } from "react"
import UserInfo from "./UserInfo"


function ChatList({chatsInfo,updateChats}) {
   let [person,setPerson] = useState("")
   let to = chatsInfo.map(chat => {return {name:(chat.to.firstName+" "+chat.to.lastName),id:chat.to._id}})
   let from = chatsInfo.map(chat => {return {name:(chat.from.firstName+" "+chat.from.lastName),id:chat.from._id}})
   let result = [...to,...from]
  let chatsList = result.filter((el) => el.id !="699c616f35be35242c3f88bd")
  const chatsName = chatsList.filter((obj, index, self) =>
  index === self.findIndex((item) => item.id === obj.id)
);

  function updateChatPerson(id){
    setPerson(id)
  }
  return (
    <div className="h-screen w-xs p-2 bg-[#282e3a] flex flex-col gap-y-1 shadow-xl/50 shadow-[#15191C] shadow-indigo-500/50 border-r-1 border-[#3d4957] " >
      {chatsName.map((chatInfo) => <UserInfo key={chatInfo.id} chatInfo={chatInfo} person={{person,updateChatPerson}}  updateChats={updateChats}/>)}
    </div>
  )
}

export default ChatList