import React, {useState}from 'react';
import Menu from '../../images/icon-menu.svg';
import ArrowUp from '../../images/icon-arrow-up.svg';
import ArrowDown from '../../images/icon-arrow-down.svg';
import Close from '../../images/icon-close-menu.svg'

export default function MobileNav() {
    const [openNav, setOpenNav] = useState(false);

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
                    <img src={Close} alt='' onClick={openMobile}/>
                    <div className='open-links'>
                    <button className='mobile-links'>Features </button>
                    <button className='mobile-links'>Company</button>
                    <a href='#' className='mobile-lists'>Careers</a>
                    <a href='#' className='mobile-lists'>About</a>
                    </div>
                    </div>
                </div>
            ): null}
        </div>
    </div>
  )
}
