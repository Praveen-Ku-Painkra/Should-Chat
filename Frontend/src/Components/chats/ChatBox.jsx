import Sidebar from './layout/Sidebar'
import ChatList from './layout/ChatList'
import Chats from './layout/Chats'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Loader from '../utils/loader'
import { useLoaderData } from 'react-router-dom'

function ChatBox() {

  let [chatsInfo,setChatsInfo] = useState([])
  let [chats,setChats] = useState([])
  // let [isLoading,setIsLoading] = useState(true);later  user for setting up loader
  let chatData = useLoaderData()
  useEffect(()=>{
    setChatsInfo(chatData)
  },[])

  let updateChats = (id)=>{
    setChats(chatsInfo.filter(chat => (chat.from._id === id)||(chat.to._id===id)))
  }
 
  return (
  
    <div  className='flex '>
      <Sidebar/>
      <ChatList chatsInfo={chatsInfo}  updateChats={updateChats} />
      <Chats chats={chats}/>
    </div>
  )
}

export const chatData = async()=>{
  try {
    let res = await fetch("/api/chat/699c616f35be35242c3f88bd")
    return await res.json();
  } catch (error) {
    return {error:"Error for colling api"}
  }
}

export default ChatBox