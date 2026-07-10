import React from 'react'
import '../css/card.css'
import StarRating from './StarRating'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import toast from 'react-hot-toast'


const ProductCard = ({item, thumbnail, title, price, rating,reviews}) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(addToCart(item));
        toast.success("Added to your cart succesfully")
    }
  return (
    <>
        <div className='card p-5 space-y-4'>
            <img src={thumbnail} alt="" />
            <h2 className='text-md font-bold'>{title}</h2>
            <StarRating rating={rating} reviews={reviews} />
            <p className='font-bold'>${price}</p>
            <button  className='btn-primary flex items-center justify-center gap-2' onClick={handleAddToCart}>
                <HiOutlineShoppingCart size={20} className='logo-icon' /> 
                Add to Cart
            </button>
        </div>
    </>
  )
}

export default ProductCard
