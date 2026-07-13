import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProducts } from '../redux/slices/productSlice'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import useProducts from '../hook/useProducts'

const ProductList = () => {

const products = useProducts() // custom hook for all the product listing

  return (
    <>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
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
