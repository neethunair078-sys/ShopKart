import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../redux/slices/productSlice";
import { useEffect } from "react";
import axios from "axios";

const useProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);

    useEffect(() => {
        if (products.length === 0) {
            axios.get("http://localhost:5000/products").then((res) => {
                dispatch(allProducts(res.data));
            });
        }
    }, []);

    return products;
};

export default useProducts