
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';

// RootReducer oluşturulur
const rootReducer = combineReducers({
    cart: cartReducer,
});

// Store oluşturulur
const store = configureStore({
    reducer: rootReducer,
});

// Store tipi tanımlanır
export type RootState = ReturnType<typeof rootReducer>;
export default store;
