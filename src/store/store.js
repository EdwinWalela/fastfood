import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../pages/Register/registerSlice';


export const store = configureStore({
  reducer:{
    registerUser:registerReducer
  }
})