import '../css/RightBar.css'
import questions from '../data/questionbank';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentQuestion } from '../store/queationReducer'


function RightBar(){

    const store = useSelector((store) => store.counter)
    console.log(store)
    const dispatch = useDispatch()

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
                                onClick={()=> dispatch(setCurrentQuestion(question))}>{question.id}</button>)
                    } 
                </div>
            </div>
        </>
    );
}

export default RightBar;