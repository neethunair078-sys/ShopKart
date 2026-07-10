import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts } from '../redux/slices/productSlice'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

const ProductList = () => {
const dispatch = useDispatch()
const products = useSelector((state) => state.products.products)

useEffect(() => {
    const getProducts = async () => {
         const response = await axios('http://localhost:5000/products');
         dispatch(allProducts(response.data))
    }

    getProducts()

}, [])


  return (
    <>
        <div className='grid grid-cols-4 gap-2'>
            {products.map((item) => (
                <ProductCard 
                    item={item}
                    thumbnail={item.thumbnail} 
                    title={item.title} 
                    price={item.price} 
                    rating={item.rating} 
                    reviews={item.reviews}
                />
            ))}
        </div>
      
    </>
  )
}

export default ProductList
