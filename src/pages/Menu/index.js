import MenuTabs from "./menuTabs"
import MenuList from "./menuList"
import { useLocation } from "react-router-dom"

const Menu = () =>{
  const location = useLocation()

  let category = location.pathname.split("/")[2]

  return (
    <div className="my-2">
      <h1 className="text-3xl font-bold text-center">Our Fresh Menu</h1>
      <MenuTabs />
      <MenuList />
    </div>
  )
}

export default Menu