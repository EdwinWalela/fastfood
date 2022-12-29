import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  date: '',
  time: '',
  email: ''
}

export const tableBookingSlice = createSlice({
  name:'table booking',
  initialState,
  reducers:{
    bookTable:(state,action)=>{
      alert('Booking submitted successfully')
      // send to API
      console.log(action.payload)
    }
  }
})

export const { bookTable } = tableBookingSlice.actions;
export default tableBookingSlice.reducer;