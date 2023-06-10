import './RightBar.css'
import questions from '../data/questionbank';
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentQuestion } from '../store/questionReducer';

function RightBar(){
    const store = useSelector((store)=>store.counter)
    console.log(store)
    const dispatch = useDispatch();  
    function handleClick(question)
    {
        dispatch(setCurrentQuestion(question))
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
                        <button className='qbutton'  
                                key={question.id}
                                onClick={()=>handleClick(question)}>{question.id}</button>)
                    } 
                </div>
            </div>
        </>
    );
}

export default RightBar;