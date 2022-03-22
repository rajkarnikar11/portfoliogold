import React, { useEffect, useRef,useState } from 'react';
import '../Styles/About.css' ;
import Pro from '../assets/salil.png';

import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { gsap } from "gsap";
import {
  useLocation
} from "react-router-dom";

const About = () => {
  const navigate = useNavigate()
  
  const [animate, setAnimate] = useState(true);

  let tl = gsap.timeline()
  let tl1 = gsap.timeline()


  const text1=useRef(null);
  const text2=useRef(null);
  const name=useRef(null);
  const text3=useRef(null);
  const title=useRef(null);
  const photo=useRef(null);

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .7,
  });
  useEffect(() => {
    if(inView)  {navigate('/#about')};
    if(inView && animate){
      tl.fromTo(text1.current, {opacity:0,x:50}, {duration: 1,x:0,delay:1, opacity:1}); 
      tl.fromTo(text2.current, {opacity:0,x:50}, {duration: 1,x:0, opacity:1}); 
      tl.fromTo(text3.current, {opacity:0,x:50}, {duration: 1,x:0, opacity:1}); 
      tl1.fromTo(title.current,{y:40,duration:2,color:"#D4B44A",opacity:0},{y:40,duration:2,color:"#D4B44A",opacity:1})
      tl1.fromTo(title.current,{y:40,duration:2,color:"#D4B44A"},{y:0,duration:1,color:"#101820FF"})
      tl1.to(name.current,{y:5,duration:1,opacity:1})
      gsap.fromTo(photo.current,{opacity:0,x:-50,delay:2.5},{opacity:1,x:0,delay:2.5});
      setAnimate(false)
    }
 }, [inView])
  let location = useLocation();
  
    

  
  return (
    <div ref={ref}  className='about-container' id="about">
      
      <h1 ref={title} className='about-title'>
        ABOUT 
      {/* {inView && navigate('/#about')}   */}
      </h1>
      <div className='about-body'>
          <div ref={name} className='about-name'>
            SALIL RAJKARNIKAR
          </div>
          <div  className='pro-container'>
            <div ref={photo} className='linear-gradient'/>
            <img ref={photo} src={Pro}  className="pro" alt="pro-pic"/>
          </div>
          <div className='about-text-container'>
            <p ref={text1} className='about-text'>
              I am Salil Rajkarnikar 
            </p>
             <p ref={text2} className='about-text1'> I studied Computer Engineering at Kathmandu Engineering College</p>
             <p ref={text3} className='about-text2'> I am a FrontEnd developer with keen eye for modern Aesthetics
            </p>
          </div>

      </div>
    </div>
  )
}

export default About