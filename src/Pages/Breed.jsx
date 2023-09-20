import React from 'react'
import { BreedData } from '../Data/BreedData'
import "../Styling/Breed.css"
export default function Breed() {
  return (
    <div className='monte-master'>
        {BreedData && BreedData.map((monte, index)=>{
            return (
                <div key={index} className='monte-container'>
                   <h1 className='monte-nr'>{monte.name}</h1> 
                    {monte.parinti && monte.parinti.map(parinte =>
                        {
                            return(
                                <div className='monte-info'>
                                    <div className='parinte-container'>
                                            <img src={parinte.imgTata} alt=""  className='img-parinti'/>
                                            <h1 className='nume-parinti'>{parinte.numeTata}</h1>
                                    </div>
                                    <div className='parinte-container'>
                                            <img src={parinte.imgMama} alt=""  className='img-parinti'/>
                                            <h1 className='nume-parinti'>{parinte.numeMama}</h1>
                                    </div>    
                                </div>
                            )
                        })}
                        <h1 className='puppies-presentation'>CATELUSI : </h1>
                        <div className='pui-container'>
                        {monte.pui && monte.pui.map(pui =>{
                        return(
                            <div className='pui-individual'>
                                <div className='details'>
                            <h2 className='pui-detail' >{pui.name}</h2>
                            <span className='pui-detail'>{pui.sex}</span>
                            </div>
                            <div className='imgBx'>
                                <img src={pui.imgPui} alt=""  className='img-pui'/>
                            </div>
                            

                            </div>
                        )
                    })}
                        </div>
                    
                </div>
            )
        })}

    </div>
  )
}
