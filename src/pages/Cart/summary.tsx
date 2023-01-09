import { useAppSelector } from '../../store/hooks';

const OrderSummary = () => {
	const cart = useAppSelector((state) => state.cart.items);
	let subTotal = 0;
	const deliveryCost = 150;

	for (const item of cart) {
		subTotal += item.price;
	}

	const total = subTotal + deliveryCost;

	return (
		<>
			<div className="text-sm my-4 text-gray-600">
				<div className="flex my-2">
					<p className="flex-1">Subtotal</p>
					<p>KES {subTotal}</p>
				</div>
				<div className="flex my-2">
					<p className="flex-1">Delivery</p>
					<span className="mx-2 cursor-pointer">&#9432;</span>
					<p>KES {deliveryCost}</p>
				</div>
				<div className="flex font-bold my-2">
					<p className="flex-1">Total</p>
					<p>KES {total}</p>
				</div>
			</div>
			<button className="bg-green-500 text-white text-sm font-medium px-4 py-3 rounded-sm shadow-md mx-auto w-full my-2 block">
				PROCEED TO CHECKOUT
			</button>
		</>
	);
};

export default OrderSummary;
