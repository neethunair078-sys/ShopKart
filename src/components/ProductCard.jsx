import React from 'react'
import '../css/card.css'
import StarRating from './StarRating'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'


const ProductCard = ({item, thumbnail, title, price, rating,reviews}) => {
    const dispatch = useDispatch()

    const cartItem = useSelector((state) => state.cart.cartItems)



    const isAdded = cartItem.find(cartItem => cartItem.id === item.id)

    const handleAddToCart = () => {
        dispatch(addToCart(item));
        toast.success("Added to your cart succesfully")
    }
  return (
    <>
        <div className='card p-5 space-y-4'>
            <Link to="/product-details">
                <img src={thumbnail} alt="" />
                <h2 className='text-md font-bold'>{title}</h2>
                <StarRating rating={rating} reviews={reviews} />
                <p className='font-bold'>${price}</p>
            </Link>
            

            {!isAdded ? 
              <button  className='btn-primary flex items-center justify-center gap-2 p-1' onClick={handleAddToCart}>
                <HiOutlineShoppingCart size={20} className='logo-icon' /> 
                Add to cart
            </button>  

            :

            <Link to="/cart" className='btn-primary flex items-center justify-center gap-2 p-'>
                <HiOutlineShoppingCart size={20} className='logo-icon' /> 
                Go to cart 
            </Link>  
            }
        </div>
    </>
  )
}

export default ProductCard
