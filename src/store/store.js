import { configureStore } from "@reduxjs/toolkit";
import registerReducer from '../pages/Register/registerSlice';
import loginReducer from '../pages/Login/loginSlice';
import tableBookingReducer from "../pages/Landing/tableBookingSlice";

export const store = configureStore({
  reducer:{
    registerUser:registerReducer,
    login:loginReducer,
    booking:tableBookingReducer
  }
})