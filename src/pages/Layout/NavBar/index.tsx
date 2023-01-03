import AuthButtons from './authButtons';
import Logo from './logo';
import MenuItems from './menuItems';
import { useAppSelector } from '../../../store/hooks';
import { stat } from 'fs';

const NavBar = () => {
	const cart = useAppSelector((state) => state.cart.items);
	return (
		<div className="p-4 flex">
			<Logo />
			<MenuItems cartCount={cart.length} />
			<AuthButtons />
		</div>
	);
};

export default NavBar;
