import React from 'react';
import Logo from '../../images/logo.svg';

export default function Navbar() {
  return (
    <header className='headerOne'>
        <div className='navbar-container'>
            <div className='nav'>
            <a href='#'> <img src={Logo} alt='snap'/></a>
            <a href='#'>Features</a>
            <a href='#'>Company</a>
            <a href='#'>Careers</a>
            <a href='#'>About</a>
            </div>
            <div className='login-register'>
            <p>Login</p>
            <button>Register</button>
            </div>
        </div>
    </header>
  )
}
