import Sidebar from './layout/Sidebar'
import ChatList from './layout/ChatList'
import Chats from './layout/Chats'
import { useState } from 'react'

function ChatBox() {
  let [chatsInfo,setChatsInfo] = useState([{chat:"HI,my name is Praveen",from:"Praveen",to:"Ankit"},{chat:"HI,my name is Ankit",from:"Ankit",to:"Praveen"},{chat:"HI,my name is Praveen",from:"Praveen",to:"Ankit"},{chat:"HI,my name is Kaushal",from:"Kaushal",to:"Praveen"},{chat:"HI,my name is Praveen",from:"Praveen",to:"Ankit"},{chat:"HI,my name is Ankit",from:"Praveen",to:"Ankit"}])
  let [chats,setChats] = useState([""])
  let [person,setperson] = useState("")
  
  let updateChats = (name)=>{
    setChats(chatsInfo.filter(chat => (chat.to == name)||(chat.from==name)))
    console.log(chats)
  }
 
  return (
    <div  className='flex '>
      <Sidebar/>
      <ChatList chatsInfo={chatsInfo}  updateChats={updateChats}/>
      <Chats chats={chats}/>
    </div>
  )
}

// exports.chatData = async()=>{
//   let res = await fetch("/api/chat/data")
//   return await res.json();
// }

export default ChatBox