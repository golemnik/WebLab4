import { configureStore } from '@reduxjs/toolkit';
import CounterReducer from "./CounterSlice";
import DotsReducer from "./DotsSlice";
import AuthReducer from "./AuthSlice";

export default configureStore({
    reducer: {
        counter: CounterReducer,
        dots: DotsReducer,
        auth: AuthReducer
    },
})