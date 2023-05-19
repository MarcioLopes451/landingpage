import React, {useState}from 'react';
import Menu from '../../images/icon-menu.svg';
import ArrowUp from '../../images/icon-arrow-up.svg';
import ArrowDown from '../../images/icon-arrow-down.svg';
import Close from '../../images/icon-close-menu.svg';
import Todo from '../../images/icon-todo.svg';
import Calender from '../../images/icon-calendar.svg';
import Reminder from '../../images/icon-reminders.svg';
import Planning from '../../images/icon-planning.svg';

export default function MobileNav() {
    const [openNav, setOpenNav] = useState(false);
    const [open,setOpen] = useState(false);
    const [open1,setOpen1] = useState(false);
    
    function handleOpen(){
        setOpen(!open);
    }
    function handleOpen1(){ 
        setOpen1(!open1);
    }
    function openMobile(){
        setOpenNav(!openNav);
    }

  return (
    <div className='mobile-nav'>
        <div className='mobile-container'>
            <img src={Menu} alt='' onClick={openMobile}/>
            {openNav ? (
                <div className='open-mobile'>
                    <div className='open-nav'>
                    <img src={Close} alt='' onClick={openMobile} className='close-btn'/>
                    <div className='open-links'>
                    <button className='mobile-links' onClick={handleOpen}>Features
                    {open ? (
                    <img src={ArrowUp} alt='up' />
                    ) : <img src={ArrowDown} alt='down'/>}
                     </button>
                     {open ? (
                     <ul className='mobile-nested'>
                        <li> <img src={Todo} alt='todo'/>Todo List</li>
                        <li> <img src={Calender} alt='calender'/>Calender</li>
                        <li> <img src={Reminder} alt='reminder'/>Reminders</li>
                        <li> <img src={Planning} alt='Planning'/>Planning</li>
                    </ul>
                    ) : null}
                    <button className='mobile-links' onClick={handleOpen1}>Company
                    {open1 ? (
                    <img src={ArrowUp} alt='up' />
                    ): <img src={ArrowDown} alt='down'/>}
                    </button>
                    {open1 ? (
                    <ul className='mobile-links-two'>
                        <li>History</li>
                        <li>Our Team</li>
                        <li>Blog</li>
                    </ul>
                    ) : null}
                    <a href='#' className='mobile-lists'>Careers</a>
                    <a href='#' className='mobile-lists'>About</a>
                    </div>
                    <div className='mobile-buttons'>
                    <p>Login</p>
                    <button>Register</button>
                    </div>
                    </div>
                </div>
            ): null}
        </div>
    </div>
  )
}
