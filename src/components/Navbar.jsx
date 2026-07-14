import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import '../css/navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import toast from 'react-hot-toast';


const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)

  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate()


  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );



const handleLogout = () => {
  localStorage.removeItem("user");
  toast.success("Logout successfully")
  navigate('/')
}



  return (
    <>
      <div className='navbar flex justify-between py-4 px-6'>
        <Link to="/">
          <div className='flex gap-2'>
            <HiOutlineShoppingCart size={34} className='logo-icon' />
            <h1 className='text-xl font-bold'>ShopKart</h1>
          </div>
        </Link>

        <div className='flex gap-4 items-center'>

          <p>{user.name}</p>

          {user ? 
            <button onClick={handleLogout} className='cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow'>
            Logout
          </button>

          :

          <button onClick={() => navigate('/login')} className='cursor-pointer bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow'>
            Login
          </button>
          
          }
          

          <Link to="/cart">
            <HiOutlineShoppingCart size={24} className='logo-icon' />
            {totalItems > 0 && (
              <span className="absolute top-3 right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}

          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
