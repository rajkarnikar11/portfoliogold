import React from 'react'
import Arrow from "../assets/arrow.svg"
import '../Styles/Card.css' ;
const CardSection = (props: any) => {
  return (
    <a target={"_blank"} className='card-continer' href={props.link}>
      <div className='over'/>
      <div className='over'/>
      <div className='over'/>
      <div className='over'/>
      <div className='over'/>
      <div className='over'/>
      <div className='over'/>
      <div className='over'/>
      <div className='over'/>
      <div className='over'/>
      <div className='over'/>
      <div className='over'/>
      <div className='tilt-box'> 
          <div className='bar' />
          <div className='card-title'>{props.name}</div>
          {/* <div className='card-title-2'>{props.name}</div>
          <div className='card-title-3'>{props.name}</div>
          <div className='card-title-4'>{props.name}</div>
          <div className='card-title-5'>{props.name}</div>
          <div className='card-title-6'>{props.name}</div>
          <div className='card-title-7'>{props.name}</div>
          <div className='card-title-8'>{props.name}</div>
          <div className='card-title-9'>{props.name}</div>
          <div className='card-title-10'>{props.name}</div> */}
          <div className='bar-2' />
          
        </div>
     
    </a>
    )
}

export default CardSection