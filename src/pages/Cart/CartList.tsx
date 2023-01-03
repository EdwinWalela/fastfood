import CartItem from './CartItem';
import { useAppSelector } from '../../store/hooks';

const CartList = () => {
	const cart = useAppSelector((state) => state.cart.items);
	console.log(cart);
	return (
		<>
			{cart.map((item, i) => (
				<CartItem item={item} index={i} />
			))}
		</>
	);
};

export default CartList;
