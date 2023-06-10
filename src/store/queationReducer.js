import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentQuestion: 1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCurrentQuestion: (state,action) => {
      console.log(action)
      state.currentQuestion = action.payload.id
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentQuestion ,decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer