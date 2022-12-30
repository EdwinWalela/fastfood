import MenuListItem from "./menuListItem";

const MenuList = (props) =>{
  console.log(props.menu)
  return (
    <div className="mt-2 mb-8 px-14 flex flex-wrap">
        {props.menu.map((item,k)=><MenuListItem key={k} item={item}/>)}
       
    </div>
  )
}

export default MenuList;