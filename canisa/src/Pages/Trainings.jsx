import React from 'react'
import {training} from "../Data/Trainings.js"
import "../Styling/Player.css"

export default function Trainings() {
   
  return (
    <div className='player-big-container'>
        {training.map((training, index) => {
            return (

                    <div key={index} className='training-container'>
                        <h1 className='descriere-antre'>{training.name}</h1>
                        <div className='player-container'>
                            <iframe className='player' src={training.url} title='training' allowFullScreen></iframe>
                        </div>
                    </div>
            )
        })}
    </div>
    )
    }
    