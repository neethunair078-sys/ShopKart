import { useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"
import {addOrder} from "../redux/slices/orderSlice"

const Checkout = () => {
    
    const cartitems= useSelector((state) =>state.cart.cartItems);

    const navigate = useNavigate(); 
    const dispatch  = useDispatch();

    const total = cartitems.reduce((sum,item ) => {
        return sum + item.price  * item.quantity;
    }, 0);

    const handleConfirmOrder = () => {

        dispatch(addOrder({
        id: Date.now(),
        items: cartitems,
        total: total,
        paymentMethod: "Cash on Delivery",
        status: "Delivered"
    }));

        toast.success("Order Confirmed Successfully!" );
        navigate("/Orderhistory"); 
    }

    return (
        <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">

            <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>

            {/* Delivery Address */}
            <div className="address-section bg-gray-200 p-6 rounded-lg">

            <h2 className ="text-xl font-semibold mb-6">Delivery Address</h2>
            </div>
          
          <div className="grid grid-cols-2 gap-6">

                <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input type="text"
                className="w-full border rounded-md p-2" />
                </div>

           <div>
                <label className="block mb-2 font-medium">Mobile Number</label>
                <input type="tel"
                className="w-full border rounded-md p-2" />
            </div>

            <div>
                <label className="block mb-2 font-medium">Email</label>
                <input type="email" 
               className="w-full border rounded-md p-2"/>
             </div>

             <div>
                <label className="block mb-2 font-medium">Address</label>
                <textarea
                 placeholder="Enter Your Address"
                 className="w-full border rounded-md p-2"></textarea>

              </div>
            </div>

     <div className="grid grid-cols-3 gap-6 mt-6">

    {/* Order Summary */}
    <div className="col-span-2 order-summary bg-gray-100 p-6 rounded-lg">

        <h2 className="text-xl font-semibold mb-4">
            Order Summary
        </h2>

        {cartitems.map((item) => (
            <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
            >
                <div className="flex items-center gap-4">

                    <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover"
                    />

                    <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-500">
                            Quantity: {item.quantity}
                        </p>
                    </div>

                </div>

                <div>
                    <p className="font-semibold">
                        ${item.price * item.quantity}
                    </p>
                </div>
            </div>
        ))}

        <div className="flex justify-between font-bold text-lg mt-4">
            <p>Total</p>
            <p>${total}</p>
        </div>

    </div>

    {/* Payment Section */}
    <div className="payment-section bg-blue-50 p-6 rounded-lg h-fit">

        <h2 className="text-xl font-semibold mb-4">
            Payment Method
        </h2>

        <div className="flex items-center gap-2">
            <input
                type="radio"
                id="cod"
                name="payment"
                defaultChecked
            />

            <label htmlFor="cod">
                Cash on Delivery
            </label>
        </div>

    </div>

</div>
            {/* Confirm Button */}
            <div className="mt-8">
            <button onClick={handleConfirmOrder}
            className="w-full bg-blue-600 px-8 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 confirm-btn">
                Confirm Order
            </button>
            </div>

        </div>
    );
};

export default Checkout;