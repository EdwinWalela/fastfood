import { createSlice } from "@reduxjs/toolkit";

const salads = [
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:300,
    title:"Greek Salad",
    description:"Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk"
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:550,
    title:"Swahili Salad",
    description:"Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk"
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:400,
    title:"French Salad",
    description:"Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk"
  }
]

const dishes = [
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:1300,
    title:"Dish 1",
    description:"Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk"
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:1550,
    title:"Dish 2",
    description:"Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk"
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:990,
    title:"Dish 3",
    description:"Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk"
  }
]

const deserts = [
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:250,
    title:"Desert 1",
    description:"Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk"
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:900,
    title:"Desert 2",
    description:"Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk"
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:580,
    title:"Desert 3",
    description:"Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk"
  }
]

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
      switch (action.payload) {
        case "salads":
          return {
            ...state,
            salads
          }
        case "deserts":
          return {
            ...state,
            deserts
          }
        case "dishes":
          return {
            ...state,
            dishes
          }
        default:
          return state
      }
    }
  }
})

export const {fetchMenu} = menuSlice.actions;
export default menuSlice.reducer;