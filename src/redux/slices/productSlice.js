
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        allProducts: (state, action) => {
            state.products= action.payload
        }
    }

})

export const {allProducts} = productSlice.actions
export default productSlice.reducer