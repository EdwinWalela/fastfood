import CartItem from './CartItem';
import { useAppSelector } from '../../store/hooks';

const CartList = () => {
	const cart = useAppSelector((state) => state.cart.items);

	return (
		<>
			{cart.map((item) => (
				<CartItem item={item} />
			))}
		</>
	);
};

export default CartList;
