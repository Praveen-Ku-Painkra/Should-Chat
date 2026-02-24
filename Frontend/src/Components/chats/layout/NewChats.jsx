import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState } from 'react';

function NewChats({id}) {
    let [chat,setChat] = useState('')

    async function handleSubmit(evt){
        evt.preventDefault()
        let responce = await axios({
            method:"post",
            url:"/api/chat",
            // data:{msg:chat,to:}
        })
        
    }

    function handleInput(evt){
        setChat(evt.target.value)
    }
  return (

      <div className=' fixed   bottom-16'>
          <form action="/chat" onSubmit={handleSubmit}>
            <input type="text" name="chat" id="chat" value={chat} onChange={handleInput} placeholder='Chat...' className='m-4 px-4 text-sm border rounded-xl' />
            <button className='border rounded px-2'>Submit</button>
          </form>
      </div>
    )
}

export default NewChats