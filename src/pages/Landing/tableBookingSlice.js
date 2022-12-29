import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: new Date(),
  time: new Date().getTime(),
  email: ''
}

export const tableBookingSlice = createSlice({
  name:'table booking',
  initialState,
  reducers:{
    bookTable:(state,action)=>{
      console.log(action)
    }
  }
})

export const { bookTable } = tableBookingSlice.actions;
export default tableBookingSlice.reducer;