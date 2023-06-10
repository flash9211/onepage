import { configureStore } from '@reduxjs/toolkit'
import queationReducer from './queationReducer'

export const store = configureStore({
  reducer: {
    counter1: queationReducer,
  },
})