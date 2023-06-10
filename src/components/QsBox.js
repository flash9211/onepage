import './QsBox.css'
import './FourthBlock.css'
import questions from '../data/questionbank';
import {useDispatch, useSelector} from 'react-redux';
import { nextQuestion } from '../store/questionReducer';



function QsBox() {
    const store = useSelector((store)=> store.counter)  
    const dispatch = useDispatch()
    var currentQuestion = questions.find(question => question.id === store.currentQuestion);

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
                <button className='Save' onClick={()=>dispatch(nextQuestion())}>Save & Next</button>
            </div>
        </>
    );
}
export default QsBox;



// https://www.youtube.com/watch?v=TMSkGsZ5tMw&list=PL-dwj4UAzfFujsnrWRZBcwYQCZ8WlG6Wv&ab_channel=TechMentorTutorials