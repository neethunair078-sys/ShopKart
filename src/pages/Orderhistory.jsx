import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";


const Orderhistory = () => {
  const orders = useSelector((state) => state.order.orders);

  const navigate = useNavigate();
  
  return (

    <div>
      <h1 className="font-bold text-3xl text-center mb-8">Order History</h1>

      {orders.map((order) => (
        <div key={order.id}>
          {order.items.map((product) => (
            <div className="rounded-lg bg-blue-200 p-6 mt-6 order-card">
            <h2>Order #1001</h2>
            <p>Product: {product.title}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Total Amount:</p>
            <p>Payment Method:</p>
            <p>Order Status:</p>
          </div>
          ))}
        </div>
      ))}

      
      <div className="flex flex-col items-center mt-6">
        <p>Ready for more? Continue shopping below.</p>

        <button onClick={() => navigate("/")}
          className="bg-blue-400 rounded-lg px-6 py-2 hover:bg-green-300">Continue Shopping!
        </button>
      </div>
    </div>





  )
}

export default Orderhistory;