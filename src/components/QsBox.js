import './QsBox.css'
import './FourthBlock.css'
import { useEffect, useReducer} from 'react';
import questions from '../data/questionbank';
import questionsReducer from '../store/reducer';
import { initialState } from '../store/reducer';



function QsBox() {
    // const [currentQuestion, setCurrentQuestion] = useState(0);  
    const [state, dispatch] = useReducer(questionsReducer, initialState);
    // console.log(state)
    // console.log(state.currentQuestion)
    var currentQuestion = questions.find(question => question.id === state.currentQuestion);
    // console.log(currentQuestion)



    return (
        <>
            <div className='questionBox'>
                <div className='questionHeading'>Question no. : {currentQuestion?.id}</div>
                <div className='question-text'>{currentQuestion?.question}</div>
                <div className='answersection'> 
                    <button className='answerbutton'> <input type='radio' name='answer' id='option1' /> {currentQuestion?.options[0]}</button>
                    <button className='answerbutton'> <input type='radio' name='answer' id='option2' /> {currentQuestion?.options[1]}</button>
                    <button className='answerbutton'> <input type='radio' name='answer' id='option3' /> {currentQuestion?.options[2]}</button>
                    <button className='answerbutton'> <input type='radio' name='answer' id='option4' /> {currentQuestion?.options[3]}</button>
                </div>
            </div>
            <div className='fourth'>
                <button className='Save' onClick={()=>dispatch({ type: 'NEXT' })}>Save & Next</button>
                {/* use math.min or ternary operator here */}
                {/* ()=>setCurrentQuestion(currentQuestion+1) *
            dispatch({type:'next', payload : currentQuestion})/}
            {/* {
                console.log(value)
            } */}
            </div>
        </>
    );
}
export default QsBox;



// https://www.youtube.com/watch?v=TMSkGsZ5tMw&list=PL-dwj4UAzfFujsnrWRZBcwYQCZ8WlG6Wv&ab_channel=TechMentorTutorials