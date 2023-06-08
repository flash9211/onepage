import { configureStore } from "@reduxjs/toolkit";
import questionReducer from './questionReducer';

export const store = configureStore({
    reducer: {
        counter : questionReducer,
    },
})  