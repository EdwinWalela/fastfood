import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email:'',
  password:''
}

export const loginSlice = createSlice({
  name:'login',
  initialState,
  reducers:{
    login:(state,action)=>{
      // send to api
      console.log(action.payload)
    }
  }
})

export const { login } = loginSlice.actions
export default loginSlice.reducer;