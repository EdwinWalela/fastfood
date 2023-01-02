import CartList from './CartList';
import OrderSummary from './summary';

const CartPage = () => {
	return (
		<div className="m-h-screen">
			<div className="mx-auto my-8 p-10 rounded-lg shadow-lg w-2/5 bg-white">
				<h3 className="font-bold text-md my-2 text-gray-500">YOUR ORDER</h3>
				<div className="border my-4"></div>
				<CartList />
				<OrderSummary />
			</div>
		</div>
	);
};

export default CartPage;
