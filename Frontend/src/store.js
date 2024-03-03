import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import rightBarReducer from './features/RightBar/rightBarSlice';


export const store = configureStore({
    reducer:{
        userState:userReducer,
        barState:rightBarReducer
    }
})