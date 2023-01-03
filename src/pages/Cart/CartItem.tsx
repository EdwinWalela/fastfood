import type { MenuItem } from '../Menu/menuSlice';

const CartItem = (props: { item: { item: MenuItem; quantity: number } }) => {
	return (
		<>
			<div className="flex items-center px-3 my-6">
				<img className="w-16 mr-3" src="/assets/img/food-landing.png" />
				<div className="flex-1 pr-4">
					<h4 className="font-bold my-2 text-sm">
						{props.item.item.title}
						<span> x {props.item.quantity}</span>
					</h4>
					<p className="text-xs my-2">{props.item.item.description}</p>
				</div>
				<div className="">
					<p className="font-medium text-sm pl-2">
						KES {props.item.item.price * props.item.quantity}
					</p>
					<div className="flex justify-center">
						<button className="bg-red-500 text-white px-3 rounded-lg my-2 mx-1">+</button>
						<button className="bg-green-500 text-white px-3 rounded-lg my-2 mx-1">-</button>
					</div>
				</div>
			</div>
			<div className="border mt-4"> </div>
		</>
	);
};

export default CartItem;
