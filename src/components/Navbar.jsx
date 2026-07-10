import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";

import '../css/navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className='navbar flex justify-between py-4 px-6'>
        <div className='flex gap-2'>
          <HiOutlineShoppingCart size={34} className='logo-icon' />
          <h1 className='text-xl font-bold'>ShopKart</h1>
        </div>

        <div>
          <Link to="/cart"><HiOutlineShoppingCart size={24} className='logo-icon' /></Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
