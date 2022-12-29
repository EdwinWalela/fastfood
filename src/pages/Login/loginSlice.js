import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email:'',
  password:''
}

export const loginSlice = createSlice({
  name:'login',
  initialState,
  reducers:{
    login:(state)=>{
      console.log(state)
    }
  }
})

export const { login } = loginSlice.actions
export default loginSlice.reducer;