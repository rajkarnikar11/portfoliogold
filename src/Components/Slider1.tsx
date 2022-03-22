import React from 'react'
import Slider from "react-slick";
import '../Styles/Slider.css' ;
import CardSection from './CardSection';

import Image1 from '../assets/project.jpg'

const Slider1 = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    rtl: true,
    arrows:false
  };
  return (
    <div>
      <Slider className='carousel' {...settings}>
        <div className='container-card' >
          <CardSection image={Image1} name="Rashtrawadi nepal"/>
        </div>
        <div className='container-card' >
          <CardSection image={Image1} name="Rashtrawadi nepal"/>
        </div>
        <div className='container-card'>
          <CardSection image={Image1} name="Rashtrawadi nepal"/>
        </div>
        <div className='container-card'>
          <CardSection image={Image1} name="Rashtrawadi nepal"/>
        </div>
    </Slider>
    </div>
  )
}

export default Slider1