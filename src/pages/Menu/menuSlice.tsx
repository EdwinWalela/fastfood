import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MenuItem {
  thumbnail: string,
  price: number,
  title: string,
  description: string
}

interface MenuState {
  salads: MenuItem[],
  dishes: MenuItem[],
  deserts: MenuItem[],
}

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
    description:"Well Marinated In Ginger, Garlic, Soy Sauce; Pan Fried With A Sprinkle Of Spring Onions "
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:400,
    title:"French Salad",
    description:"Finely Cut Juliennes Of Onions, De-Seeded Tomatoes, Gree Capsicum"
  }
]

const dishes = [
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:1300,
    title:"Chicken Wings",
    description:"Well Marinated In Ginger, Garlic, Soy Sauce; Pan Fried With A Sprinkle Of Spring Onions"
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:1550,
    title:"Tsiswa",
    description:"Roasted On A Dry Pan With The Traditional Emulsifying Salt. Seasonal Delicacy Harvested Mainly During The Rainy Season"
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:990,
    title:"Sweet Potatos",
    description:"Macedoine Of Sweet Potato Mixed With Finely Chopped Red Onions And Garnished With Paysanne Of Colored Peppers"
  }
]

const deserts = [
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:250,
    title:"Kaimati Swahili Sweets",
    description:"Derived From Wheat Flour, Cardamons, Yeast And Sugar"
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:900,
    title:"Halua",
    description:"Swahili Sweets; Commonly Served During Swahili Weddings"
  },
  {
    thumbnail:"/assets/img/landing-cover.png",
    price:580,
    title:"Kachumbari Salad",
    description:"Washed In Fresh Lemon Juice And Served On A Bed Of Fresh Garden Lettuce"
  }
]

const initialState = {
  salads:[],
  dishes:[],
  deserts:[]
} as MenuState

const menuSlice = createSlice({
  name:'menu',
  initialState,
  reducers:{
    fetchMenu:(state,action:PayloadAction<string>)=>{
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