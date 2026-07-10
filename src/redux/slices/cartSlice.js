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
            console.log("Reducer:", action.payload);
            state.cartItems.push(action.payload)
            localStorage.setItem(
                "cartItems",
                JSON.stringify(state.cartItems)
            );
        }
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer