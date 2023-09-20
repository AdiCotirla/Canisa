import React from 'react'
import "../Styling/Contact.css"
import map from "../assets/map.jpg"
export default function Contact() {
   
  return (
    <div className='contact-container'>
        <div className='butoane-container'>
        <a href="tel:+40725376564" className='link-contact'><h1 className='header'>SUNA-NE</h1></a>
        <a href = "mailto: abc@example.com" className='link-contact'><h1 className='header'>Trimite un mail</h1></a>
        </div>
          <div className='map-container'>
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2734.0587966106127!2d23.569011476803126!3d46.744022847143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490d327b03f08f%3A0x815acac9fbf72424!2sRottfreund%20Kennel!5e0!3m2!1sro!2sro!4v1695113408409!5m2!1sro!2sro"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className='map'
            /></div>
    </div>
  )
}