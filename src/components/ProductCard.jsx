import React from 'react'
import '../css/card.css'
import StarRating from './StarRating'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice'

const ProductCard = ({item, thumbnail, title, price, rating,reviews}) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
         console.log("Button clicked");
        const action = addToCart(item);
        console.log(action);
        dispatch(action);
    }
  return (
    <>
        <div className='card p-5 space-y-4'>
            <img src={thumbnail} alt="" />
            <h2 className='text-md font-bold'>{title}</h2>
            <StarRating rating={rating} reviews={reviews} />
            <p>${price}</p>
            <button  className='btn-primary' onClick={handleAddToCart}>Add Cart</button>
        </div>
    </>
  )
}

export default ProductCard
