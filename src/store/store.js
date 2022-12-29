import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../pages/Register/registerSlice';
import loginReducer from '../pages/Login/loginSlice';

export const store = configureStore({
  reducer:{
    registerUser:registerReducer,
    login:loginReducer
  }
})