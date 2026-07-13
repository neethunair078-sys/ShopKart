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
            state.cartItems.push(action.payload)
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

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer