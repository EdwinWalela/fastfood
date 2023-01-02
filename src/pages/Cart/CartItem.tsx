const CartItem = () =>{
  return (
    <>
    <div className="flex items-center px-3 my-6">
      <img className="w-20 mr-10" src="/assets/img/food-landing.png"/>
      <div className="flex-1">
        <h4 className="font-bold my-2">Greek Salad</h4>
        <p className="text-xs my-2">Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk</p>
      </div>
      <div className="px-3">
        <button className="border-2 border-red-500 px-2 mr-2 rounded-md text-red-500  font-bold" >-</button>
          <input type="number" value={10} className="w-10 py-1 pl-3 text-sm rounded-lg border-2 text-center" />
          <button className="border-2 border-green-500 px-2 ml-2 rounded-md text-green-500  font-bold" >+</button>
        </div>
        <p className="font-medium text-lg">KES 2000</p>
      </div>
    <div className="border mt-4"></div>
    </>
  )
}

export default CartItem;