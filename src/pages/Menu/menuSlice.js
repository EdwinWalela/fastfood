import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  salads:[],
  dishes:[],
  deserts:[]
}

const menuSlice = createSlice({
  name:'menu',
  initialState,
  reducers:{
    fetchMenu:(state,action)=>{

    }
  }
})

export const {fetchMenu} = menuSlice.actions;
export default menuSlice.reducer;