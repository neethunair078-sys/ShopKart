import React from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi2";

import '../css/navbar.css'

const Navbar = () => {
  return (
    <>
      <div className='flex gap-2'>
        <HiOutlineShoppingCart size={34} className='logo-icon' />
        <h1 className='text-xl font-bold'>ShopKart</h1>
      </div>
    </>
  )
}

export default Navbar
