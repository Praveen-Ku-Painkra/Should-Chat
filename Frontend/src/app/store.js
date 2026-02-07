import { configureStore } from '@reduxjs/toolkit'
import chatReducer from "../features/should-chat/chatSlice"

export const store = configureStore({
  reducer: {
    chat:chatReducer,
  },
})