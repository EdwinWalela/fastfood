import { NavLink } from "react-router-dom"

const MenuItems = (props:{cartCount?:number}) =>{
  return (
    <div className="flex-1 pl-24">
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
        <NavLink 
          to="/cart" 
          className={({isActive})=> isActive ? "px-6 py-3 font-medium cursor-pointer": "px-6 py-3 cursor-pointer"}>
          Your Cart
          {props.cartCount &&
            <span className="text-xs py-2 relative bottom-2 left-1 bg-red-500 text-white rounded-full p-3" >{props.cartCount > 10 ? "+10" : props.cartCount}</span>
          }
        </NavLink>
      </ul>
    </div>
  )
}

export default MenuItems