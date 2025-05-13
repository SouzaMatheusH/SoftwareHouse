import React from 'react'
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import './NavBar.css';

function NavBar() {
  return (
    <nav className='navbar'>
        <h2>Nitro.</h2>
        <HiOutlineMenuAlt4 className='burguer' />
    </nav>
  )
}

export default NavBar