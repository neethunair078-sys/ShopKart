import { useDispatch, useSelector } from "react-redux"
import '../css/cart.css'
import { useState } from "react"
import { decrementQuantity, incrementQuantity } from "../redux/slices/cartSlice"

const Cart = () => {
    const cartitems = useSelector((state) => state.cart.cartItems)
    console.log(cartitems);

    const dispatch = useDispatch()

    const handlequantityInc = (id) => {
        dispatch(incrementQuantity(id))
    }

    const handlequantityDec = (id) => {
        dispatch(decrementQuantity(id))
    }

    return (
        <div className="cart-page">
            <h1>SHOPINGCART</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className=" col-span-2 bg-gray-100 p-4">
                    {cartitems.map((item) => (
                        <div key={item.id} className="cart-items">
                            <img src={item.thumbnail} alt="" />
                            <div className="cart-details">
                                <h2>{item.title}</h2>
                                <div className="quantity">
                                    <button onClick={() => handlequantityInc(item.id)}>+</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handlequantityDec(item.id)}>-</button>
                                    <div className="price-section">
                                        <p>${item.price}</p>
                                        <p className="remove">Remove</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="order-summary">
                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>$44.97</span>
                        </div>

                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>

                        <hr />

                        <div className="summary-row total">
                            <span>Total</span>
                            <span>$44.97</span>

                        </div>

                        <button className="checkout-btn">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>


            </div>
        </div>







    )

}



export default Cart