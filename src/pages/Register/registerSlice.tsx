import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface registerState{
  email: string,
  password: string
}

const initialState = {
  email:'',
  password:''
} as registerState

export const registerSlice = createSlice({
  name:'register-user',
  initialState,
  reducers:{
    registerUser:(state,action:PayloadAction<registerState>)=>{
      let {email,password} = action.payload;

      state.email = email;
      state.password = password

      // submit data to API
    }
  }
})

export const {registerUser} = registerSlice.actions;
export default registerSlice.reducer;