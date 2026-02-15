import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  personChats : [{id:"id1",msg:"Hello,im Praveen",from:"Praveen",to:"Ankit",creaded_at:"2/7/2025"},{id:"id1",msg:"Hello,im Ankit",from:"Ankit",to:"Praveen",creaded_at:"2/7/2025"}],
  groupChats : []
}

export const chatSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat: (state,payload) => {
     state.personChats.push({name:"Praveen"})
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})


export const { addChat, decrement, incrementByAmount } = chatSlice.actions

export default chatSlice.reducer