function LandingPage(){
  return (
    <div className="flex py-5">
      <div className="px-16 flex-auto">
        <h3 className="font-medium my-2">EASY WAY TO ORDER YOUR FOOD</h3>
        <h1 className="text-6xl font-bold">
          Choosing Healthy <br/>& Fresh Food
        </h1>
        <p className="my-2">
          Just confirm your order and enjoy our delicious fastest delivery.
        </p>
        <button className="bg-black text-white py-3 px-5 rounded-lg my-2">Order Now</button>
        <button className="py-3 px-5 rounded-lg my-2 mx-6">See Menu</button>
      </div>
      <div className="px-16 flex-auto">
        <img className="w-96 block" src="/assets/img/burger.png"/>
      </div>
    </div>
  )
}

export default LandingPage