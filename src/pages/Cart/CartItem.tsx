const CartItem = () =>{
  return (
    <>
      <div className="flex items-center px-3 my-6">
        <img className="w-16 mr-3" src="/assets/img/food-landing.png"/>
        <div className="flex-1 pr-4">
          <h4 className="font-bold my-2 text-sm">Greek Salad <span>x 5</span></h4>
          <p className="text-xs my-2">Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk</p>
        </div>
        <div className="">
          <p className="font-medium text-sm pl-2">KES 2000</p>
          <div className="flex justify-center">
            <button className="bg-red-500 text-white px-3 rounded-lg my-2 mx-1">+</button>
            <button className="bg-green-500 text-white px-3 rounded-lg my-2 mx-1">-</button>
          </div>
        </div>
      </div>
      <div className="border mt-4"> </div>
    </>
  )
}

export default CartItem;