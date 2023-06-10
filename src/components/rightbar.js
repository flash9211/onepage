import '../css/RightBar.css'
// import questions from '../data/questionbank';
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentQuestion, setQuestionSate } from '../store/queationReducer'
// import questions from './../data/questionbank';


function RightBar(){

    const store = useSelector((store) => store.counter)
    console.log(store)
    const dispatch = useDispatch()
    const {questions} = store
    function onClickHandler(question) {
        dispatch(setCurrentQuestion({id:question.id})) 
        dispatch(setQuestionSate({id:question.id, state:1})) 
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
                                onClick={()=> onClickHandler(question)}>{question.id}</button>)
                    } 
                </div>
            </div>
        </>
    );
}

export default RightBar;