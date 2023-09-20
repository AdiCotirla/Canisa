import React, { Component} from 'react'
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
      scrollTop: 0,
    };}
    TabOn(width)
    {
      var navbar = document.getElementById("navbar")
      if(width > 1200)
      {
        navbar.classList.add("tab-on")
        return
      }
      else if (width < 1200)
      {
       navbar.classList.remove("tab-on")
       navbar.classList.add("tab-off")
       return
      }
    }
    componentDidMount()
    {
      this.TabOn(window.innerWidth)
    }
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

    // window.onscroll = function(){
    //   const top = window.scrollY
    //   const navbar = document.getElementById("navbar-sticky")
    //   if(top > 400)
    //   { 
    //     navbar.style = { width :"100vw", top : "0"}
    //   }
    //   else if (top <= 200)
    //   {
    //     navbar.classList.remove("full")
    //   }
    // }
    return (
      
      <div className='Navbar' id='navbar'>
        <div className='Navbar-contact'>
          <p><FaPhoneAlt className='phone '/> : 0725376564</p>
        </div>
        <div className='Navbar-links'>
        <Link to= "/" className='link-navbar'><img src={logo}></img></Link>
        <Link to= "/"className='link-navbar click'><></>Acasa</Link>
        <Link to= "/Monte"className='link-navbar click'>Monte</Link>
        <Link to= "/Antrenamente"className='link-navbar click'>Antrenamente</Link>
        <Link to= "/Despre"className='link-navbar click'>Despre noi</Link>
        <Link to= "/Contact"className='link-navbar click'>Contact</Link>
        </div>
        <div id="navbar-sticky" className='navbar-sticky visible'>
        <div className='Navbar-links-sticky'>
        <Link to= "/"className='link-navbar click'>Acasa</Link>
        <Link to= "/Monte"className='link-navbar click'>Monte</Link>
        <Link to= "/Antrenamente"className='link-navbar click'>Antrenamente</Link>
        <Link to= "/Despre"className='link-navbar click'>Despre noi</Link>
        <Link to= "/Contact"className='link-navbar click'>Contact</Link>
        </div>
        </div>
      </div>
      
    )
    
  }
}
