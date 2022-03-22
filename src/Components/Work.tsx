import React, { useEffect, useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";


import { gsap } from "gsap";

import '../Styles/Work.css' ;
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';

const Work = () => {
  const navigate = useNavigate()

  const [animate, setAnimate] = useState(true);

  const { ref, inView, entry } = useInView({
    
    threshold: .7,
  });
  let tl1 = gsap.timeline()

  const title=useRef(null)

  useEffect(() => {
    if(inView)  {navigate('/#work')}
    if(inView && animate){
     
      tl1.fromTo(title.current,{y:40,duration:2,color:"#D4B44A",opacity:0},{y:40,duration:2,color:"#D4B44A",opacity:1});
      tl1.fromTo(title.current,{y:40,duration:2,color:"#D4B44A"},{y:0,duration:1,color:"#101820FF"});
      setAnimate(false)
    } 
 }, [inView])
 
  return (
    <div style={{height:"100vh"}} ref={ref} className='work-container' id="work">
      <h1 ref={title} className='work-title'>
        MY WORKS
      {/* {inView && navigate('/#about')}   */}
      </h1>
      <div className='carousel-container'>
        <Slider1/>
        <Slider2/>
        <Slider3/>
      </div>
    </div>
  )
}

export default Work