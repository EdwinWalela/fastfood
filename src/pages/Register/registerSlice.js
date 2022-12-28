import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email:'',
  password:''
}

export const registerSlice = createSlice({
  name:'register-user',
  initialState,
  reducers:{
    registerUser:(state,action)=>{
      let {email,password} = action.payload;

      state.email = email;
      state.password = password

      // submit data to API
    }
  }
})

export const {registerUser} = registerSlice.actions;
export default registerSlice.reducer;