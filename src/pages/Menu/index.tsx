import MenuTabs from "./menuTabs"
import MenuList from "./menuList"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { fetchMenu } from "./menuSlice"
import { useEffect } from "react"

const Menu = () =>{
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  let category = location.pathname.split("/")[2] 
  let categories = ['salads','dishes','deserts']

  useEffect(()=>{
    if(!categories.includes(category)){
      navigate(`${categories[0]}`,{replace:true})
    }
  },
  [])

  const menu = useAppSelector((state)=>{
    switch (category) {
      case "salads":
          return state.menu.salads
      case "dishes":
        return state.menu.dishes
      case "deserts":
        return state.menu.deserts
      default:
        return [];
    }
  })

  useEffect(()=>{
    dispatch(fetchMenu(category))
  }
  ,[menu])

  return (
    <div className="my-2">
      <h1 className="text-3xl font-bold text-center">Our Fresh Menu</h1>
      <MenuTabs />
      <MenuList menu={menu}/>
    </div>
  )
}

export default Menu