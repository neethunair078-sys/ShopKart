const Checkout = () => {
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

            {/* Order Summary */}
            <div className="order-summary bg-gray-100 p-6 rounded-lg mt-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="flex justify-between border-b py-3 product-row">
                    <p>Nike Shoes</p>
                    <p>₹7999</p>
                </div>

                <div className=" flex justify-between border-b py-3 product-row">
                    <p>T-Shirt</p>
                    <p>₹5000</p>
                     </div>

                <div className="flex justify-between font-bold text-lg mt-4">
                    <p>Total</p>
                    <p>₹12999</p>
                </div>

            </div>

            {/* Payment Section */}
            <div className="payment-section bg-green-200 p-6 rounded-lg mt-6">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

                <div className="payment-option">

                <div className="payment-option">
                    <input
                        type="radio"
                        id="cod"
                        name="payment"
                    />
                    <label htmlFor="cod">Cash on Delivery</label>
                </div>
                </div>
            </div>

            {/* Confirm Button */}
            <div className="mt-8">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 confirm-btn">
                Confirm Order
            </button>
            </div>
            <div className="mt-9 justify-between">
                <button className="w-36 bg-blue-400 justify-center rounded-lg font-bold text-shadow-white hover:bg-red-800">Cancel</button>
            </div>

        </div>
    );
};

export default Checkout;