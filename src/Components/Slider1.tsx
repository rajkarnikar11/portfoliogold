import React from 'react'
import Slider from "react-slick";
import '../Styles/Slider.css' ;
import CardSection from './CardSection';

import Image1 from '../assets/project.jpg'
import Rashtra from '../assets/rashtra.png'
import Tourist from '../assets/tourist.png'
import Gallery from '../assets/gallery.png'
import Socials from '../assets/socials.png'
import Saltpeter from '../assets/saltpeter.png'


const Slider1 = () => {
  var settings = {
    dots: false,
    infinite: true,
    // lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed:4000,
    cssEase: "linear",
    pauseOnHover: true,
    arrows:false
  };
  return (
    <div className='slider-containers'>
      <Slider className='carousel' {...settings}>
        <div className='container-card' >
          <CardSection link="https://github.com/rajkarnikar11/Rashtrawaadi-Nepal" image={Rashtra} name="Rashtrawadi nepal"/>
        </div>
        <div className='container-card' >
          <CardSection  link="https://github.com/rajkarnikar11/saltpeter" image={Saltpeter} name="Saltpeter"/>
        </div>
        <div className='container-card'>
          <CardSection link="https://github.com/rajkarnikar11/Socials" image={Socials} name="Socials"/>
        </div>
        <div className='container-card'>
          <CardSection link="https://github.com/rajkarnikar11/Gallery" image={Gallery} name="Gallery"/>
        </div>
        <div className='container-card'>
          <CardSection link="https://github.com/randazzle/ToursimAid" image={Tourist} name="Tousism Aid"/>
        </div>
    </Slider>
    </div>
  )
}

export default Slider1