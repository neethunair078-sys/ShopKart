import { createSlice } from "@reduxjs/toolkit";
import ProductCard from "../../components/ProductCard";

const initialState = {
    cartItems: JSON.parse(localStorage.getItem("cartItems")) || []
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

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems)
            );
        },

        incrementQuantity: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems)
            );
        },

        decrementQuantity: (state, action) => {
            const item = state.cartItems.find(
                item => item.id === action.payload
            );

            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }

            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems)
            );
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            )
            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems)
            );
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions
export default cartSlice.reducer