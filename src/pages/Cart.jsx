import { useDispatch, useSelector } from "react-redux"
import '../css/cart.css'
import { useState } from "react"
import { decrementQuantity, incrementQuantity, removeFromCart } from "../redux/slices/cartSlice"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"
import emptyCart from '../assets/empty-cart.webp'

const Cart = () => {

    const navigate = useNavigate()

    const cartitems = useSelector((state) => state.cart.cartItems)


    const dispatch = useDispatch()

    const handlequantityInc = (id) => {
        dispatch(incrementQuantity(id))
    }

    const handlequantityDec = (id) => {
        dispatch(decrementQuantity(id))
    }

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    const handleCheckout = () => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (!user) {
            toast.error("Please login to continue.");
            navigate("/login");
            return;
        }

        navigate("/checkout");
    }


    const totalPrice = cartitems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (cartitems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-15 text-center">
        <img
          src={emptyCart}
          alt="Empty Cart"
          className="w-60 mb-6"
        />

        <h2 className="text-2xl font-bold mb-2">
          Your cart is empty
        </h2>

        <p className="text-gray-500 mb-6">
          Looks like you haven't added anything yet. <br /> Explore our products and find something you'll love!
        </p>

        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    );
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
                            </div>


                            <div className="quantity">
                                <button onClick={() => handlequantityDec(item.id)}>
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button onClick={() => handlequantityInc(item.id)}>
                                    +
                                </button>
                            </div>


                            <div className="price-section">
                                <p>${item.price}</p>

                                <button
                                    className="remove"
                                    onClick={() => handleRemove(item.id)}
                                >
                                    Remove
                                </button>
                            </div>

                        </div>
                    ))}



                </div>
                <div>
                    <div className="order-summary">
                        <h2>Order Summary</h2>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>

                        <hr />

                        <div className="summary-row total">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>

                        </div>

                        <button onClick={handleCheckout} className="checkout-btn">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>


            </div>
        </div>







    )

}



export default Cart