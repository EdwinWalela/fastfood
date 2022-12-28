import BookTable from "./bookTable"

function LandingPage(){
  return (
    <>
      <div className="py-2 px-28 mb-8">
        <div className="flex">
          <div className="flex-auto">
            <h3 className="font-medium my-2">EASY WAY TO ORDER YOUR FOOD</h3>
            <h1 className="text-6xl font-bold">
              Choose Healthy <br/>& Fresh Food
            </h1>
            <p className="my-2">
              Just confirm your order and enjoy our delicious fastest delivery.
            </p>
            <button className="bg-black text-white py-3 px-5 rounded-lg my-2">Order Now</button>
          </div>
          <div className="flex-auto">
            <img className="w-80 mx-auto block" src="/assets/img/food-landing.png"/>
          </div>
        </div>
        <BookTable />
      </div>
    </>
  )
}

export default LandingPage