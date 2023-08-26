import React, { Component, useState, useEffect} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import {FaPhoneAlt } from 'react-icons/fa';
import logo from "../../assets/logo.png"
import "../../Styling/Navbar.css"

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0
    };}
  render() {
    window.onscroll = function(){
      const top = window.scrollY
      const navbar = document.getElementById("navbar-sticky")
      if(top < 200)
      { 
        navbar.classList.add("visible")
      }
      else if (top >= 100)
      {
        navbar.classList.remove("visible")
      }
    }
    return (
      
      <div className='Navbar' id='navbar'>
        <div className='Navbar-contact'>
          <p><FaPhoneAlt className='phone'/> : 0725376564</p>
        </div>
        <div className='Navbar-links'>
        <Link to= "/" className='link-navbar'><img src={logo}></img></Link>
        <Link to= "/"className='link-navbar'>Acasa</Link>
        <Link to= "/Monte"className='link-navbar'>Monte</Link>
        <Link to= "/Antrenamente"className='link-navbar'>Antrenamente</Link>
        <Link to= "/Despre"className='link-navbar'>Despre noi</Link>
        <Link to= "/Contact"className='link-navbar'>Contact</Link>
        </div>
        <div id="navbar-sticky" className='navbar-sticky visible'>
        <div className='Navbar-links-sticky'>
        <Link to= "/"className='link-navbar'>Acasa</Link>
        <Link to= "/Monte"className='link-navbar'>Monte</Link>
        <Link to= "/Antrenamente"className='link-navbar'>Antrenamente</Link>
        <Link to= "/Despre"className='link-navbar'>Despre noi</Link>
        <Link to= "/Contact"className='link-navbar'>Contact</Link>
        </div>
        </div>
      </div>
      
    )
    
  }
}
