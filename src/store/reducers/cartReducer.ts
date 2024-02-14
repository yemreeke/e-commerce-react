import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct } from '../../interface/product.interface';
type IItem = {
    quantity: number;
    product: IProduct;
}

type ICartStoreState = {
    items: IItem[];
    totalQuantity: number;
    totalPrice: number;
}
const initialState: ICartStoreState = {
    items: [], // Sepetteki ürünlerin listesi
    totalQuantity: 0, // Toplam ürün adeti
    totalPrice: 0, // Sepetin toplam fiyatı
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<IProduct>) {
            const product = action.payload;
            const existingProduct = state.items.find(item => item.product.id === product.id);
            state.totalQuantity++;
            state.totalPrice += product.price;
            if (!existingProduct) {
                state.items.push({
                    product: product,
                    quantity: 1, // İlk eklenen ürünün adeti 1 olarak ayarlanır
                });
            } else {
                existingProduct.quantity++;
            }
        },
        removeItem(state, action: PayloadAction<{ productId: number }>) {
            const productId = action.payload.productId;
            const existingItem = state.items.find(item => item.product.id === productId);
            if (!existingItem) {
                return;
            }
            state.items = state.items.filter(item => item.product.id !== productId);
            state.totalQuantity -= existingItem.quantity;
            state.totalPrice -= existingItem.product.price * existingItem.quantity;
        },
        increaseQuantity(state, action: PayloadAction<{ productId: number }>) {
            const productId = action.payload.productId;
            const existingItem = state.items.find(item => item.product.id === productId);
            if (!existingItem) {
                return;
            }
            existingItem.quantity++;
            state.totalQuantity++;
            state.totalPrice += existingItem.product.price;
        },
        decreaseQuantity(state, action: PayloadAction<{ productId: number }>) {
            const productId = action.payload.productId;
            const existingItem = state.items.find(item => item.product.id === productId);
            if (!existingItem || existingItem.quantity === 1) {
                return;
            }
            existingItem.quantity--;
            state.totalQuantity--;
            state.totalPrice -= existingItem.product.price;
        },

        clearCart(state) {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
