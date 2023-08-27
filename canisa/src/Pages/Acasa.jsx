import React from 'react'
import "../Styling/Acasa.css"

export default function Acasa() {
  return (
    <div className='acasa'>
       <div className='article-container'>
        <h1 className='must-title'>Must Read <span className='span-title'/></h1>
        <div className='articles'>
            <div className='articles-main'></div>
            <div className='articles-secondary'>
                <div className='secondary first'></div>
                <div className='secondary second'></div>
            </div>
        </div>
       </div>
    </div>
  )
}



