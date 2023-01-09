import type { MenuItem } from '../Menu/menuSlice';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from './cartSlice';
import React from 'react';

const CartItem = (props: { item: MenuItem; index: number }) => {
	const dispatch = useAppDispatch();

	function handleIncrementCart(id: number, category: string) {
		dispatch(addToCart({ id, category }));
	}

	function handleDecrementCart(id: number, category: string) {
		// dispatch();
	}

	return (
		<>
			<div className="flex items-center px-3 my-6">
				<img className="w-16 mr-3" src="/assets/img/food-landing.png" />
				<div className="flex-1 pr-4">
					<h4 className="font-bold my-2 text-sm">{props.item.title}</h4>
					<p className="text-xs my-2">{props.item.description}</p>
				</div>
				<div className="">
					<p className="font-medium text-sm pl-2">KES {props.item.price}</p>
				</div>
			</div>
			<div className="border mt-4"> </div>
		</>
	);
};

export default CartItem;
