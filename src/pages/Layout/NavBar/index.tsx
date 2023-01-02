import AuthButtons from "./authButtons"
import Logo from "./logo"
import MenuItems from "./menuItems"

const NavBar = () => {
  return (
    <div className="p-4 flex">
      <Logo />
      <MenuItems cartCount={2}/>
      <AuthButtons />
    </div>
  )
}

export default NavBar