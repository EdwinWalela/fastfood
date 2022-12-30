const MenuListItem = () =>{
  return (
    <div className="shadow-md bg-white py-6 mx-8 my-4 text-center w-80 rounded-lg">
      <h3 className="text-left bg-black text-white pl-6 py-1 rounded-tr-md rounded-br-md w-1/3">KES 300</h3>
      <img src="/assets/img/food-landing.png" className="px-8 my-4 w-48 block m-auto" alt=""/>
      <h2 className="text-lg font-medium px-8 ">Greek Salad</h2>
      <p className="text-xs px-8 ">Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk</p>
      <button className="bg-black text-white py-1  px-6 mx-6 rounded-full my-4">Add To Cart</button>
    </div>
  )
}

export default MenuListItem