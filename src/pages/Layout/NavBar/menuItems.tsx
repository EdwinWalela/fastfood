import { NavLink } from 'react-router-dom';

const MenuItems = (props: { cartCount?: number }) => {
	return (
		<div className="md:flex-1 md:pl-24">
			<ul className="flex justify-center">
				<NavLink
					to="/about-us"
					className={({ isActive }) =>
						isActive
							? 'px-6 py-3 font-medium cursor-pointer hidden md:block'
							: 'px-6 py-3 cursor-pointer hidden md:block'
					}
				>
					<span className="">About Us</span>
				</NavLink>
				<NavLink
					to="/menu"
					className={({ isActive }) =>
						isActive ? 'px-6 py-3 font-medium cursor-pointer' : 'px-6 py-3 cursor-pointer'
					}
				>
					<span className="md:hidden block">
						<img src="./menu.svg" className="w-10 h-10" />
					</span>
					<span className="hidden md:block">Our Menu</span>
				</NavLink>
				<NavLink
					to="/contact-us"
					className={({ isActive }) =>
						isActive ? 'px-6 py-3 font-medium cursor-pointer' : 'px-6 py-3 cursor-pointer'
					}
				>
					<span className="md:hidden block">
						<img src="./contact.svg" className="w-12 h-12" />
					</span>
					<span className="hidden md:block">Contact Us</span>
				</NavLink>
				<NavLink
					to="/cart"
					className={({ isActive }) =>
						isActive ? 'px-6 py-3 font-medium cursor-pointer' : 'px-6 py-3 cursor-pointer'
					}
				>
					<span className="md:hidden block">
						<img src="./cart.svg" className="w-10 h-10" />
					</span>
					<span className="hidden md:block">Your Cart</span>
					{props.cartCount && (
						<span className="text-xs py-2 relative md:bottom-8 md:left-20 bottom-11 left-7 bg-red-500 text-white rounded-full p-3">
							{props.cartCount > 10 ? '+10' : props.cartCount}
						</span>
					)}
				</NavLink>
			</ul>
		</div>
	);
};

export default MenuItems;
