import { useNavigate } from "react-router-dom";


const Orderhistory = () => {
  const  navigate  = useNavigate();
    return (
        
        <div>
          <h1 className="font-bold text-3xl text-center mb-8">Order History</h1>
          <div className="rounded-lg bg-amber-100 p-6 mt-6 order-card">
            <h2>Order #1001</h2>
            <p>Product:</p>
            <p>Quantity:</p>
            <p>Total Amount:</p>
            <p>Payment Method:</p>
            <p>Order Status:</p>
            </div>

          <div className="rounded-lg bg-amber-100 p-6 mt-6 order-card">
                <h2>Order #2002</h2>
                <p>Product:</p>
                <p>Quantity:</p>
                <p>Total Amount:</p>
                <p>Payment Method:</p>
                <p>Order Status:</p>
                </div>
                <div className="flex flex-col items-center mt-6">
                    <p>Ready for more? Continue shopping below.</p>

                    <button onClick ={() => navigate("/")}
                     className="bg-blue-200 rounded-lg px-6 py-2 hover:bg-green-300">Continue Shopping!
                         </button>
                 </div>
           </div>

        
   


    )
}

export default Orderhistory;