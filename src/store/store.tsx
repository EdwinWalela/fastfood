import { configureStore } from '@reduxjs/toolkit';
import registerReducer from '../pages/Register/registerSlice';
import loginReducer from '../pages/Login/loginSlice';
import tableBookingReducer from '../pages/Landing/tableBookingSlice';
import menuReducer from '../pages/Menu/menuSlice';
import cartReducer from '../pages/Cart/cartSlice';

export const store = configureStore({
	reducer: {
		registerUser: registerReducer,
		login: loginReducer,
		booking: tableBookingReducer,
		menu: menuReducer,
		cart: cartReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
