import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { MenuItem } from '../Menu/menuSlice';

const salads = [
	{
		thumbnail: '/assets/img/landing-cover.png',
		price: 300,
		title: 'Greek Salad',
		description: 'Quality Greek kalamata olives and creamy feta cheese, made from sheep’s milk',
	},
	{
		thumbnail: '/assets/img/landing-cover.png',
		price: 550,
		title: 'Swahili Salad',
		description:
			'Well Marinated In Ginger, Garlic, Soy Sauce; Pan Fried With A Sprinkle Of Spring Onions ',
	},
	{
		thumbnail: '/assets/img/landing-cover.png',
		price: 400,
		title: 'French Salad',
		description: 'Finely Cut Juliennes Of Onions, De-Seeded Tomatoes, Gree Capsicum',
	},
];

const dishes = [
	{
		thumbnail: '/assets/img/landing-cover.png',
		price: 1300,
		title: 'Chicken Wings',
		description:
			'Well Marinated In Ginger, Garlic, Soy Sauce; Pan Fried With A Sprinkle Of Spring Onions',
	},
	{
		thumbnail: '/assets/img/landing-cover.png',
		price: 1550,
		title: 'Tsiswa',
		description:
			'Roasted On A Dry Pan With The Traditional Emulsifying Salt. Seasonal Delicacy Harvested Mainly During The Rainy Season',
	},
	{
		thumbnail: '/assets/img/landing-cover.png',
		price: 990,
		title: 'Sweet Potatos',
		description:
			'Macedoine Of Sweet Potato Mixed With Finely Chopped Red Onions And Garnished With Paysanne Of Colored Peppers',
	},
];

const deserts = [
	{
		thumbnail: '/assets/img/landing-cover.png',
		price: 250,
		title: 'Kaimati Swahili Sweets',
		description: 'Derived From Wheat Flour, Cardamons, Yeast And Sugar',
	},
	{
		thumbnail: '/assets/img/landing-cover.png',
		price: 900,
		title: 'Halua',
		description: 'Swahili Sweets; Commonly Served During Swahili Weddings',
	},
	{
		thumbnail: '/assets/img/landing-cover.png',
		price: 580,
		title: 'Kachumbari Salad',
		description: 'Washed In Fresh Lemon Juice And Served On A Bed Of Fresh Garden Lettuce',
	},
];

export interface CartItem {
	item: MenuItem;
	quantity: number;
}

interface CartState {
	items: CartItem[];
}

const initialState = {
	items: [
		{
			item: salads[0],
			quantity: 1,
		},
	],
} as CartState;

const menuSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<{ id: number; category: string }>) => {
			let cartItem: CartItem;
			switch (action.payload.category) {
				case 'salads':
					cartItem = {
						item: salads[action.payload.id],
						quantity: 1,
					};
					if (!state.items.includes(cartItem)) {
						state.items.push(cartItem);
					}
					console.log(state);
					return { ...state };
				case 'deserts':
					cartItem = {
						item: deserts[action.payload.id],
						quantity: 1,
					};
					if (!state.items.includes(cartItem)) {
						state.items.push(cartItem);
					}
					return { ...state };
				case 'dishes':
					cartItem = {
						item: dishes[action.payload.id],
						quantity: 1,
					};
					if (!state.items.includes(cartItem)) {
						state.items.push(cartItem);
					}
					return { ...state };
				default:
					return { ...state };
			}
		},
	},
});

export const { addToCart } = menuSlice.actions;
export default menuSlice.reducer;
