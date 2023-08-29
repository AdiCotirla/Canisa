import React, { useState, useEffect} from 'react';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import "../../Styling/NavbarPhone.css"



export default function NavbarPhone() {
    const [click, setClick] = useState(false);
    const [deviceSize, changeDeviceSize] = useState(window.innerWidth);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

     

    function ShowMenu() {
       if(click == true)
       {
        document.body.style.overflow = "hidden"
       }
       else
       {
        document.body.style.overflowX = "hidden"
        document.body.style.overflowY = "visible"

       }
      }
      ShowMenu()
      React.useEffect(()=>{
        var NavPhone = document.getElementById("phone-navbar-switch")
        if(deviceSize < 1200)
        {
          NavPhone.classList.add("phone-on")
        }
        else
        {
          NavPhone.classList.remove("phone-on")
        }
      })
  return (
    <div className='navbar-phone-container' id='phone-navbar-switch'>
        <div className={click ? 'blur on' : "blur off"}></div>
        <div className='meniu-navbar'>
        <Link to='/' className='navbar-logo-sticky' onClick={closeMobileMenu}>
        </Link>
        <div className='meniu-icon-sticky' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        </div>
        <div className={click ? 'meniu-linkuri on' : "meniu-linkuri off"}>
            <Link to ="/"className='link-meniu-phone'>Acasa</Link>
            <Link to ="/Monte" className='link-meniu-phone'>Monte</Link>
            <Link to ="/Antrenamente" className='link-meniu-phone'>Antrenament</Link>
            <Link to ="/Despre"className='link-meniu-phone'>Despre noi</Link>
            <Link to ="/Contact" className='link-meniu-phone'>Contact</Link>
        </div>
    </div>
  )
}
