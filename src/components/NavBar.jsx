import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import './NavBar.css';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);         // controla se está aberto
  const [menuVisible, setMenuVisible] = useState(false);   // controla display: none

  function toggleMenu() {
    if (!menuOpen) {
      setMenuVisible(true); // mostra imediatamente
      setTimeout(() => setMenuOpen(true), 10); // anima depois de montar
    } else {
      setMenuOpen(false); // inicia a animação
      setTimeout(() => setMenuVisible(false), 400); // esconde após a transição
    }
  }

  return (
    <>
      <nav className='navbar'>
        <h2>Nitro.</h2>
        {menuOpen ? (
          <IoMdClose className='burguer' onClick={toggleMenu} />
        ) : (
          <HiOutlineMenuAlt4 className='burguer' onClick={toggleMenu} />
        )}
      </nav>

      {menuVisible && (
        <div className={`menu ${menuOpen ? 'open' : 'closed'}`}>

          <div className='menu-container'>

            <div className='pages'>
              <ul className='menu-list'>
                <a className='menu-link' href="#home" onClick={toggleMenu}><li>Home</li></a>
                <a className='menu-link' href="#services" onClick={toggleMenu}><li>Services</li></a>
                <a className='menu-link' href="#home" onClick={toggleMenu}><li>Word</li></a>
                <a className='menu-link' href="#home" onClick={toggleMenu}><li>About Us</li></a>
                <a className='menu-link' href="#home" onClick={toggleMenu}><li>Contact</li></a>
                <a className='menu-link' href="#home" onClick={toggleMenu}><li>Blogs</li></a>
              </ul>
            </div>

            <div className='division'></div>

            <div className='about'>
              <div className='getintouch'>
                <p>Get in Touch</p>
                <h2>info@website.com</h2>
              </div>
              <div className='followus'>
                <p>Follow Us</p>
                <p>icons</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
