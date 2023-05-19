import React, {useState} from 'react';
import Logo from '../../images/logo.svg';
import Todo from '../../images/icon-todo.svg';
import Calender from '../../images/icon-calendar.svg';
import Reminder from '../../images/icon-reminders.svg';
import Planning from '../../images/icon-planning.svg';
import ArrowUp from '../../images/icon-arrow-up.svg';
import ArrowDown from '../../images/icon-arrow-down.svg';
import MobileNav from './MobileNav';


export default function Navbar() {
const [open,setOpen] = useState(false);
const [open1,setOpen1] = useState(false);

function handleOpen(){
  setOpen(!open,ArrowUp);
}
function handleOpen1(){
  setOpen1(!open1);
}


  return (
    <header className='headerOne'>
        <div className='navbar-container'>
            <div className='nav'>
            <a href='#'> <img src={Logo} alt='snap'/></a>
            <button className='nested-links' onClick={handleOpen}>Features 
            {open ? (
              <img src={ArrowUp} alt='up' />
            ): <img src={ArrowDown} alt='down'/>}
            </button>
            <button className='nested-links' onClick={handleOpen1}>Company
            {open1 ? (
              <img src={ArrowUp} alt='up' />
            ): <img src={ArrowDown} alt='down'/>}
            </button>
            <a href='#' className='links'>Careers</a>
            <a href='#' className='links'>About</a>
            </div>
            <div className='login-register'>
            <p>Login</p>
            <button>Register</button>
            </div>
          <MobileNav />
        </div>
        {open ? (
              <ul className='nested-lists'>
                <li> <img src={Todo} alt='todo'/>Todo List</li>
                <li> <img src={Calender} alt='calender'/>Calender</li>
                <li> <img src={Reminder} alt='reminder'/>Reminders</li>
                <li> <img src={Planning} alt='Planning'/>Planning</li>
              </ul>
            ) : null}
            {open1 ? (
              <ul className='nested-lists-two'>
                <li>History</li>
                <li>Our Team</li>
                <li>Blog</li>
              </ul>
            ) : null}
    </header>
  )
}
