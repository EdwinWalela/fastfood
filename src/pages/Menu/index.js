import MenuTabs from "./menuTabs"
import MenuList from "./menuList"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { fetchMenu } from "./menuSlice"
import { useEffect } from "react"

const Menu = () =>{
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let category = location.pathname.split("/")[2] 
  let categories = ['salads','dishes','deserts']

  useEffect(()=>{
    if(!categories.includes(category)){
      navigate(`${categories[0]}`,{replace:true})
    }
  },
  [])

  const menu = useSelector((state)=>state.menu[category])

  useEffect(()=>{
    dispatch(fetchMenu(category))
  }
  ,[menu])


  return (
    <div className="my-2">
      <h1 className="text-3xl font-bold text-center">Our Fresh Menu</h1>
      <MenuTabs />
      <MenuList />
    </div>
  )
}

export default Menu