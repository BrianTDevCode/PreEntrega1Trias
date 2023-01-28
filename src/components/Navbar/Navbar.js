import React from 'react'
import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <header className='header'>
        <nav className='header__nav'>
        <h1 className='header__logo'>
            <a className='header__link' href="#">Computer Shop</a>
        </h1>
            <ul className='header__ul'>
                <a className='header__link--menu' href="#"><li className='header__li'>Inicio</li></a>
                <a className='header__link--menu' href="#"><li className='header__li'>Tienda</li></a>
            </ul>
            <CartWidget/>
        </nav>
  
    </header>
  )
}

export default NavBar