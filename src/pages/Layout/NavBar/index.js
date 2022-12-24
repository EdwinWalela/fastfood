import AuthButtons from "./authButtons"
import Logo from "./logo"
import MenuItems from "./menuItems"

function NavBar(){
  return (
    <div className="p-8 flex">
      <Logo />
      <MenuItems />
      <AuthButtons />
    </div>
  )
}

export default NavBar