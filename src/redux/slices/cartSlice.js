import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(
                item => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                })

            }
        },

        incrementQuantity: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }

        },

        decrementQuantity: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            )
        },

        clearCart: (state) => {
            state.cartItems = []
        },

        loadCart: (state, action) => {
            state.cartItems = action.payload
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart, loadCart } = cartSlice.actions
export default cartSlice.reducer