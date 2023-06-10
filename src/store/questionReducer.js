import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentQuestion : 1, 
//     questions : [
//     {
        
//         "id": 1,
//         "question": "Which planet is closest to the sun?",
//         "options": ["Mars", "Venus", "Mercury", "Jupiter"],
//         "answer": 2,
//         "color" : 0 
//     },
//     {
//         "id": 2,
//         "question": "What is the capital of France?",
//         "options": ["London", "Paris", "Rome", "Madrid"],
//         "answer": 1,
//         "color" : 0
//     },
//     {
//         "id": 3,
//         "question": "Who painted the Mona Lisa?",
//         "options": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
//         "answer": 0,
//         "color" : 0
//     },
//     {
//         "id": 4,
//         "question": "Which animal is known as the 'King of the Jungle'?",
//         "options": ["Elephant", "Tiger", "Lion", "Giraffe"],
//         "answer": 2,
//         "color" : 0
//     },
//     {
//         "id": 5,
//         "question": "What is the chemical symbol for gold?",
//         "options": ["Au", "Ag", "Gd", "Go"],
//         "answer": 0,
//         "color" : 0
//     },
//     {
//         "id": 6,
//         "question": "Which country is known as the 'Land of the Rising Sun'?",
//         "options": ["China", "India", "Japan", "Brazil"],
//         "answer": 2,
//         "color" : 0
//     },
//     {
//         "id": 7,
//         "question": "What is the largest organ in the human body?",
//         "options": ["Heart", "Liver", "Lung", "Skin"],
//         "answer": 3,
//         "color" : 0
//     },
//     {
//         "id": 8,
//         "question": "Who wrote the play 'Romeo and Juliet'?",
//         "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
//         "answer": 0,
//         "color" : 0
//     },
//     {
//         "id": 9,
//         "question": "What is the square root of 144?",
//         "options": ["12", "14", "16", "18"],
//         "answer": 0,
//         "color" : 0
//     },
//     {
//         "id": 10,
//         "question": "What is the tallest mountain in the world?",
//         "options": ["Mount Everest", "Kilimanjaro", "Mount McKinley", "Mount Fuji"],
//         "answer": 0,
//         "color" : 0
//     },
//     {
//         "id": 11,
//         "question": "Which country won the FIFA World Cup in 2018?",
//         "options": ["France", "Brazil", "Germany", "Argentina"],
//         "answer": 0,
//         "color" : 0
//     },
//     {
//         "id": 12,
//         "question": "What is the largest ocean in the world?",
//         "options": ["Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Atlantic Ocean"],
//         "answer": 2,
//         "color" : 0
//     },
//     {
//         "id": 13,
//         "question": "Who discovered penicillin?",
//         "options": ["Alexander Fleming", "Thomas Edison", "Albert Einstein", "Isaac Newton"],
//         "answer": 0,
//         "color" : 0
//     },
//     {
//         "id": 14,
//         "question": "Which instrument is used to measure atmospheric pressure?",
//         "options": ["Thermometer", "Barometer", "Hydrometer", "Anemometer"],
//         "answer": 1,
//         "color" : 0
//     },
//     {
//         "id": 15,
//         "question": "Which city is known as the 'Big Apple'?",
//         "options": ["New York City", "Chicago", "Los Angeles", "Houston"],
//         "answer": 0,
//         "color" : 0
//     },
//     {
//         "id": 16,
//         "question": "What is the chemical symbol for oxygen?",
//         "options": ["Ox", "Oi", "Oxg", "O"],
//         "answer": 3,
//         "color" : 0
//     },
//     {
//         "id": 17,
//         "question": "Who was the first person to walk on the moon?",
//         "options": ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
//         "answer": 1,
//         "color" : 0
//     },
//     {
//         "id": 18,
//         "question": "What is the capital of Japan?",
//         "options": ["Beijing", "Tokyo", "Seoul", "Osaka"],
//         "answer": 1,
//         "color" : 0
//     },
//     {
//         "id": 19,
//         "question": "Which planet is known as the 'Red Planet'?",
//         "options": ["Mars", "Venus", "Jupiter", "Saturn"],
//         "answer": 0,
//         "color" : 0
//     },
//     {
//         "id": 20,
//         "question": "Who painted the ceiling of the Sistine Chapel?",
//         "options": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
//         "answer": 3,
//         "color" : 0
//     }

// ]

}

export const counterSlice = createSlice({
    name: 'question',
    initialState,
    reducers:{
        setCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload.id 
        },
        nextQuestion: (state)=>{
            state.currentQuestion = state.currentQuestion + 1
        }
    }
})

export const { setCurrentQuestion, nextQuestion } = counterSlice.actions

export default counterSlice.reducer