import React from 'react';
import Logo from '../../images/logo.svg';
import Menu from '../../images/icon-menu.svg';

export default function Navbar() {
  return (
    <header className='headerOne'>
        <div className='navbar-container'>
            <div className='nav'>
            <a href='#'> <img src={Logo} alt='snap'/></a>
            <a href='#' className='links'>Features</a>
            <a href='#' className='links'>Company</a>
            <a href='#' className='links'>Careers</a>
            <a href='#' className='links'>About</a>
            </div>
            <div className='login-register'>
            <p>Login</p>
            <button>Register</button>
            </div>
          <img src={Menu} alt='menu' className='menu-icon' />
        </div>
    </header>
  )
}
