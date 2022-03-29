import React from 'react'
import Arrow from "../assets/arrow.svg"
import '../Styles/Card.css' ;
const CardSection = (props: any) => {
  return (
    <a className='card-continer' href={props.link}>
      <div className='hover-element'>
        <p>visit link</p>  
        <div>
          <img height={100} src={Arrow} alt=">"/> 
        </div>
      </div>
      <div className='card-title'>{props.name}</div>
      <div className='card-image-container'>
        <img className='card-image' src={props.image} alt="proimg"/>
       
              
      </div>
    </a>
    )
}

export default CardSection