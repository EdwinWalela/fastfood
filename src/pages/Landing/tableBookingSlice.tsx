import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TableBookingState {
  date: string,
  time: string,
  email: string
}

const initialState:TableBookingState = {
  date: '',
  time: '',
  email: ''
}

export const tableBookingSlice = createSlice({
  name:'table booking',
  initialState,
  reducers:{
    bookTable:(state,action:PayloadAction<TableBookingState>)=>{
      alert('Booking submitted successfully')
      // send to API
      console.log(action.payload)
    }
  }
})

export const { bookTable } = tableBookingSlice.actions;
export default tableBookingSlice.reducer;