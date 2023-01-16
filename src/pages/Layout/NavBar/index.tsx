import AuthButtons from './authButtons';
import Logo from './logo';
import MenuItems from './menuItems';
import { useAppSelector } from '../../../store/hooks';

const NavBar = () => {
	const cart = useAppSelector((state) => state.cart.items);
	return (
		<div className="p-4 md:flex w-screen md:bg-transparent md:text-black bg-black text-white">
			<Logo />
			<MenuItems cartCount={cart.length} />
			<AuthButtons />
		</div>
	);
};

export default NavBar;
