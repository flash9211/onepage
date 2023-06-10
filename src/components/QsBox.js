import React, { useEffect } from 'react';
import '../css/QsBox.css'
import '../css/FourthBlock.css'
// import questions from '../data/questionbank';
import { useSelector, useDispatch } from 'react-redux'
import { fetchBlogPosts } from '../store/queationReducer';
import { setNextQuestion, setQuestionSate } from '../store/queationReducer'
import questions from './questionbank';
import { current } from '@reduxjs/toolkit';

function QsBox() {
    const store = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchBlogPosts());
    }, [dispatch]);

    function onClickHandler(question) {
        dispatch(setNextQuestion()) 
        dispatch(setQuestionSate({id:question.id, state:2})) 
    }
    // let currentQuestion = store.questions
    
    var currentQuestion = store.questions.find(question => question.id === store.currentQuestion);

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
                <button className='Save' onClick={()=>onClickHandler(currentQuestion)}>Save & Next</button>
            </div>
        </>
    );
}
export default QsBox;



// https://www.youtube.com/watch?v=TMSkGsZ5tMw&list=PL-dwj4UAzfFujsnrWRZBcwYQCZ8WlG6Wv&ab_channel=TechMentorTutorials