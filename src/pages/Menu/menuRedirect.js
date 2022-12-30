import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const MenuRedirect = () =>{

  const navigate = useNavigate();

  useEffect(()=>{
    navigate('/menu/dishes',{replace:"true"})
  },
  [])

}

export default MenuRedirect