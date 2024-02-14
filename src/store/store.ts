
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './reducers/cartReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

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
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

