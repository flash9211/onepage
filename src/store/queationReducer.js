import axios from '../_mockAPIs/axios';
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  currentQuestion: 1,
  questions :[],

}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCurrentQuestion: (state,action) => {
     state.currentQuestion = action.payload.id

    },
    decrement: (state, action) => {
      state.questions = action.payload
    },
    setNextQuestion : (state, action)=>{
      state.currentQuestion = state.currentQuestion+1
    },
    setQuestionSate: (state, action) => {

      state.questions = state.questions.map((question) =>
        question.id === action.payload.id
          ? {
              ...question,
              state:action.payload.state,
            }
          : question,
      );



    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentQuestion ,decrement, setQuestionSate, setNextQuestion } = counterSlice.actions

export const fetchBlogPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/questions');
    console.log(response.data)
    dispatch(decrement(response.data));
  } catch (err) {
    throw new Error();
  }
};

export default counterSlice.reducer