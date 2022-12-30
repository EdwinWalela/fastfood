import { NavLink } from "react-router-dom"

const MenuTabs = () =>{
  return (
    <div className="flex justify-center my-6">
      <NavLink
        to="/menu/salads"
        className={({isActive})=>{
          return isActive ?
            "bg-black text-white py-1 px-6 mx-6 rounded-full my-2" 
            :
            "border-black border-2  py-1  px-6 mx-6 rounded-full my-2"
        }}
      >
        <button>Salads
        </button>
      </NavLink>
      <NavLink
        to="/menu/dishes"
        className={({isActive})=>{
          return isActive ?
            "bg-black text-white py-1 px-6 mx-6 rounded-full my-2" 
            :
            "border-black border-2  py-1  px-6 mx-6 rounded-full my-2"
        }}
      >
        <button>Dishes</button>
      </NavLink>
      <NavLink
        to="/menu/deserts"
        className={({isActive})=>{
          return isActive ?
            "bg-black text-white py-1 px-6 mx-6 rounded-full my-2" 
            :
            "border-black border-2  py-1  px-6 mx-6 rounded-full my-2"
        }}
      >
        <button >Deserts</button>
      </NavLink>
    </div>
  )
}

export default MenuTabs