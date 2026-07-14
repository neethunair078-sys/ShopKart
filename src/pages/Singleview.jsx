import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import toast from "react-hot-toast";

const Singleview = () => {
  const [product, setProduct] = useState(null);

  const { productid } = useParams();

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems);

  const isAdded = cartItems.find(
    (item) => item.id === product?.id
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Added to your cart successfully");
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/products/${productid}`
        );

        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [productid]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-8">

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-10">

        {/* Left Side */}
        <div className="w-full md:w-1/2">

          <div className="bg-white border rounded-2xl shadow-lg p-6">

            <img
              src={product.images?.[0]}
              alt={product.title}
              className="w-full h-[450px] object-contain"
            />

          </div>

        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 space-y-5">

          <h1 >
              Item:{product.title}
          </h1>

          <h2 >
            Price: ${product.price}
          </h2>

          <p>
           
           Category: {product.category}
          </p>

          <p>
            
           Brand: {product.brand}
          </p>

          <div>

            <h3 className="text-xl font-bold mb-2">
              Description
            </h3>

            <p className="text-gray-600 leading-7">
              {product.description}
            </p>

          </div>

          {/* Button Section */}

          <div className="mt-6">

            {!isAdded ? (

              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >

                <HiOutlineShoppingCart size={20} />

                Add To Cart

              </button>

            ) : (

              <Link
                to="/cart"
                className="bg-green-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 w-fit"
              >

                <HiOutlineShoppingCart size={20} />

                Go To Cart

              </Link>

            )}

          </div>

          {/* Delivery */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border rounded-lg p-5">

            <div className="text-center">

              <p className="font-semibold">
                Free Delivery
              </p>

            </div>



          </div>

        </div>

      </div>

   

      <div className="mt-10">

        <h2 className="text-2xl font-bold mb-5">
          Customer Reviews
        </h2>

        {product.reviews.map((review, index) => (

          <div
            key={index}
            className="border rounded-lg p-4 mb-4 shadow-sm"
          >

            <h3 className="font-semibold">
              {review.reviewerName}
            </h3>

            <p className="text-gray-600">
              {review.comment}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Singleview;