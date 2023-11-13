'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link href='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src='/img/logo-porto.png' />
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                href='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                href='/Solicite'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Solicite
              </Link>
            </li>

            
            <li className='nav-item'>
              <Link
                href='/Login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>

          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;