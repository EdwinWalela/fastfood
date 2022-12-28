import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email:'',
  password:''
}

export const registerSlice = createSlice({
  name:'register',
  initialState,
  reducers:{
    registerUser:(state)=>{
      console.log(state)
    }
  }
})

export const {registerUser} = registerSlice.actions;
export default registerSlice.reducer;