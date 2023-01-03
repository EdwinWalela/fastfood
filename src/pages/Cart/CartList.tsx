import CartItem from './CartItem';
import { useAppSelector } from '../../store/hooks';

const CartList = () => {
	const cart = useAppSelector((state) => state.cart.items);

	return (
		<>
			{cart.map((item, i) => (
				<CartItem item={item} key={i} />
			))}
		</>
	);
};

export default CartList;
