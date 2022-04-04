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
    
    threshold: .3,
  });
  let tl1 = gsap.timeline()
  var tl = gsap.timeline({repeat: -2});
  

  const title=useRef(null)
  const slider1=useRef(null)
  const slider2=useRef(null)
  const slider3=useRef(null)
  const git=useRef(null)
  const blinker=useRef(null)

  useEffect(() => {
    if(inView)  {navigate('/#work')}
    if(inView && animate){
     
      tl1.fromTo(title.current,{y:40,duration:2,color:"#D4B44A",opacity:0},{y:40,duration:2,color:"#D4B44A",opacity:1});
      tl1.fromTo(title.current,{y:40,duration:2,color:"#D4B44A"},{y:0,duration:1,color:"#101820FF"});
      gsap.fromTo(slider1.current,{y:50,duration:1,opacity:0,delay:.5},{opacity:1,y:0,duration:1,delay:.5});
      gsap.fromTo(slider2.current,{y:-50,duration:1,opacity:0},{opacity:1,y:0,duration:1,delay:.8});
      gsap.fromTo(slider3.current,{y:50,duration:1,opacity:0},{opacity:1,y:0,duration:1,delay:1});
      gsap.fromTo(git.current,{y:20,},{y:0,opacity:1,delay:1,duration:1})
      tl.fromTo(blinker.current,{color:"#101820FF",duration:.5,delay:1},{color:"#D4B44A",duration:1})
      tl.fromTo(blinker.current,{color:"#101820FF",duration:1},{color:"#101820FF",duration:.5,delay:1})
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
        <div className='slider-big'  ref={slider1}><Slider1  /></div>
        <div  className='slider-small'  ref={slider2}><Slider2  /></div>
        {/* <div style={{opacity:0}} ref={slider2}><Slider2  /></div>
        <div style={{opacity:0}} ref={slider3}><Slider3  /></div> */}
        
      </div>
      <div ref={git} className='github-container'>
        or click <span><a ref={blinker} className='github-link' href='https://github.com/rajkarnikar11'>here</a></span>
      </div>
    </div>
  )
}

export default Work