import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from "./CounterSlice";
import DotsReducer from "./DotsSlice";

export default configureStore({
    reducer: {
        counter: CounterReducer,
        dots: DotsReducer
    },
})