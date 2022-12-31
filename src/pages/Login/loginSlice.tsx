import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface LoginState {
  email: string,
  password: string
}

const initialState = {
  email:'',
  password:''
} as LoginState

export const loginSlice = createSlice({
  name:'login',
  initialState,
  reducers:{
    login:(state,action:PayloadAction<LoginState>)=>{
      // send to api
      console.log(action.payload)
    }
  }
})

export const { login } = loginSlice.actions
export default loginSlice.reducer;