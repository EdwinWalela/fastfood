import MenuListItem from './menuListItem';
import type { MenuItem } from './menuSlice';

const MenuList = (props: { menu: MenuItem[] }) => {
	return (
		<div className="mt-2 mb-8 px-14 flex flex-wrap">
			{props.menu.map((item, k) => (
				<MenuListItem index={k} item={item} />
			))}
		</div>
	);
};

export default MenuList;
