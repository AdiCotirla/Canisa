import React from 'react'
import "../Styling/Acasa.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Despre from '../Components/Despre/Despre';


export default function Acasa() {
  return (
    <div className='acasa'>
       <div className='article-container'>
        <h1 className='must-title'>trebuie citit <span className='span-title'/></h1>
        <div className='articles'>
            <div className='articles-main position'>
              <h1 className='article-title'>De ce Rottweilers au o reputatie proasta?</h1>
              <Link to = "https://notabully.org/why-do-rottweilers-have-a-bad-reputation/"className='link-read'>
              <div className='img-container reputation'/>
              </Link>
            </div>
            <div className='articles-secondary'>
                <div className='secondary first position'>
                <h1 className='article-title'>Descendentii cainilor romani.</h1>
              <Link to = "https://www.a-love-of-rottweilers.com/how-were-rottweilers-used-by-the-romans.html"className='link-read'>
              <div className='img-container police'/>
              </Link>
              </div>
                <div className='secondary second position'>
                <h1 className='article-title'>Rottweilers sunt invatacei !</h1>
              <Link to = "https://stayyy.com/how-smart-are-rottweilers/"className='link-read'>
              <div className='img-container train'/>
              </Link>
                </div>
            </div>
        </div>
       </div>
     <Despre/>


       <div className='find-container'>
        <div className='find-info-container'>
          <h1 className='puppy-title'>In cautarea unui catel ?</h1>
        <p className='description'>De ce nu te uiți la puii noștri nou-născuți? Te pot ajuta cu starea fizica cat <br/> si mentala! Sunt sigur ca ve-ti gasi unul pe plac!</p>
        <Link to="/"className='link-button'><button className='button-class'>GASESTE UN PUI</button></Link>
       </div>
       <div className='imagine-find'></div>
       </div>

       
    </div>
  )
}



