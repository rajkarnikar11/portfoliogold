import React from 'react'
import Slider from "react-slick";
import '../Styles/Slider.css' ;

const Slider2 = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    
    arrows:false
  };
  return (
    <div>
      <Slider className='carousel' {...settings}>
        <div >
          <div className='card-container' >1</div>
        </div>
        <div >
          <div className='card-container'>2</div>
        </div>
        <div >
          <div className='card-container'>3</div>
        </div>
        <div >
          <div className='card-container'>4</div>
        </div>
        <div >
          <div className='card-container'>5</div>
        </div>
        <div >
          <div className='card-container'>6</div>
        </div>
    </Slider>
    </div>
  )
}

export default Slider2