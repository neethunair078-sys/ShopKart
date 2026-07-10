import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";
import '../css/navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems)


  return (
    <>
      <div className='navbar flex justify-between py-4 px-6'>
        <Link to="/">
          <div className='flex gap-2'>
            <HiOutlineShoppingCart size={34} className='logo-icon' />
            <h1 className='text-xl font-bold'>ShopKart</h1>
          </div>
        </Link>

        <div>
          <Link to="/cart">
            <HiOutlineShoppingCart size={24} className='logo-icon' />
            {cartItems.length > 0 && (
              <span className="absolute top-2 right-3 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}

          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
