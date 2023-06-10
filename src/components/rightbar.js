import './RightBar.css'
import {useReducer} from 'react';
import questions from '../data/questionbank';
import questionsReducer from '../store/reducer';
import { initialState } from '../store/reducer';

function RightBar(){

    const [state, dispatch]= useReducer(questionsReducer, initialState);     
    
    function test(question) {
        console.log('hi')
        dispatch({type : 'SETCURRENTQUESTION' , payload:{id:question.id}})
    }
    return (
        <>
            <div className='rightsidebar'>
                <div className='about'>
                    <img className='profileimg' src={'https://picsum.photos/id/1/160/90'} alt='Profile'/>
                    <p>Profile Name</p>
                </div>
                <div className='threebuttons'>
                        <div className='upperbutton'>
                            <button className='qpbutton'>Question Paper</button>
                            <button className='instbutton'>Instruction</button>
                        </div>
                        <button className='subbutton'>Submit Test</button>
                </div>
                <div className='thirdsection'>
                    <p>Questions : </p>
                    {
                        questions.map(question=>
                        <button className={`qbutton ${question.state===undefined?'red ':question.state===1?'blue ':'green'}`}
                                key={question.id}
                                onClick={()=> test(question)}>{question.id}</button>)
                    } 
                </div>
            </div>
        </>
    );
}

export default RightBar;