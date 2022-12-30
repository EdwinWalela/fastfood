import MenuList from "./menuList"
import MenuTabs from "./menuTabs"

const Menu = () =>{
  return (
    <div className="my-2">
      <h1 className="text-3xl font-bold text-center">Our Fresh Menu</h1>
      <MenuTabs />
      <MenuList />
    </div>
  )
}

export default Menu