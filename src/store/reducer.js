
let initialState = {
    currentQuestion : 1
}

 export default function questionsReducer(state=initialState, action){
  console.log(action)

  switch(action.type)
  {
    case 'SETCURRENTQUESTION':
      return{
         ...state,
        currentQuestion : action.payload.id
        }
    case 'NEXT' :
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1 
      }
    default:
      return state
  }
}

export {initialState}
