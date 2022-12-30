import { NavLink } from "react-router-dom"

const MenuItems = () =>{
  return (
    <div className="flex-1 ml-16">
      <ul className="flex justify-center">
        <NavLink 
          to="/about-us" 
          className={({isActive})=> isActive ? "px-6 py-3 font-medium cursor-pointer": "px-6 py-3 cursor-pointer"}>
          About Us
        </NavLink>
        <NavLink 
          to="/menu" 
          className={({isActive})=> isActive ? "px-6 py-3 font-medium cursor-pointer": "px-6 py-3 cursor-pointer"}>
          Our Menu
        </NavLink>
        <NavLink 
          to="/contact-us" 
          className={({isActive})=> isActive ? "px-6 py-3 font-medium cursor-pointer": "px-6 py-3 cursor-pointer"}>
          Contact Us
        </NavLink>
      </ul>
    </div>
  )
}

export default MenuItems