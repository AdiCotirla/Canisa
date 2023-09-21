import React from 'react'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import "../../Styling/Footer.css"
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-logo'>
            <img src={logo} className='img-logo' alt='logo'></img>
        </div>
        <div className='footer-menu'>
            <h1 className='header-footer'>Menu</h1>
            <Link to= "/"className='link-footer'>Acasa</Link>
            <Link to= "/Monte"className='link-footer'>Monte</Link>
            <Link to= "/Antrenamente"className='link-footer'>Antrenamente</Link>
            <Link to= "/Despre" className='link-footer'>Despre noi</Link>
            <Link to= "/Contact" className='link-footer'>Contact</Link>
        </div>
        <div className='footer-social'>
            <h1 className='header-footer'>Follow us</h1>
            <Link to="https://www.facebook.com/Rottfreund.kennel" className='link-footer'>Facebook</Link>
            <Link to="https://www.instagram.com/rottfreund_kennel/" className='link-footer'>Instagram</Link>
            {/* <Link className='link-footer'>TikTok</Link> */}
        </div>
        <p className='copyright'>© All Rights Reserved 2023 Rottfreund. The unauthorised reproduction of text and images is strictly prohibited. Designed by Front-end Web Developer Adi Cotirla.</p>
    </div>
  )
}
