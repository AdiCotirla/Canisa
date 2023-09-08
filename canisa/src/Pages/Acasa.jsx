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
        <h1 className='must-title'>Must Read <span className='span-title'/></h1>
        <div className='articles'>
            <div className='articles-main position'>
              <h1 className='article-title'>Why Do Rottweilers Have a bad reputation?</h1>
              <Link to = "https://notabully.org/why-do-rottweilers-have-a-bad-reputation/"className='link-read'>
              <div className='img-container reputation'/>
              </Link>
            </div>
            <div className='articles-secondary'>
                <div className='secondary first position'>
                <h1 className='article-title'>Descendants of ancient Roman dogs.</h1>
              <Link to = "https://www.a-love-of-rottweilers.com/how-were-rottweilers-used-by-the-romans.html"className='link-read'>
              <div className='img-container police'/>
              </Link>
              </div>
                <div className='secondary second position'>
                <h1 className='article-title'>Rottweilers are learners.</h1>
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
          <h1 className='puppy-title'>Looking for a puppy?</h1>
        <p className='description'>Why dont you take a look into our new born pups. They can also improve your physical and <br/>mental health! I'm sure that you will find the one that you love</p>
        <Link to="/"className='link-button'><button className='button-class'>FIND A PUPPY</button></Link>
       </div>
       <div className='imagine-find'></div>
       </div>

       
    </div>
  )
}



