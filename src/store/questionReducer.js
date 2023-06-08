import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentQuestion : 1
}

export const counterSlice = createSlice({
    name: 'question',
    initialState,
    reducers:{
        setCurrentQuestion: (state, action) => {
            console.log(action)
            state.currentQuestion = action.payload.id 
        },
        nextQuestion: (state)=>{
            state.currentQuestion = state.currentQuestion + 1
        }
    }
})

export const { setCurrentQuestion, nextQuestion } = counterSlice.actions

export default counterSlice.reducer