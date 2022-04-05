import React, { useEffect, useRef,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

import '../Styles/Skills.css' ;

import { gsap } from "gsap";

const Skills = () => {
  const [animate, setAnimate] = useState(true);
  const title=useRef(null)
  const html=useRef(null)
  const redux=useRef(null)
  const react=useRef(null)
  const type=useRef(null)
  const native=useRef(null)

  const navigate = useNavigate()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .3,
  });
  let tl1 = gsap.timeline()
  let tl2 = gsap.timeline()
  useEffect(() => {
    if(inView)  {navigate('/#skills')}
    if(inView && animate){
     
      tl1.fromTo(title.current,{y:40,duration:2,color:"#D4B44A",opacity:0},{y:40,duration:2,color:"#D4B44A",opacity:1});
      tl1.fromTo(title.current,{y:40,duration:2,color:"#D4B44A"},{y:0,duration:1,color:"#101820FF"});
      tl1.fromTo(html.current,{x:-10,duration:.5,opacity:0},{x:0,duration:.5,opacity:1});
      tl1.fromTo(react.current,{x:-10,duration:.3,opacity:0},{x:0,duration:.5,opacity:1});
      tl1.fromTo(redux.current,{x:-10,duration:.3,opacity:0},{x:0,duration:.4,opacity:1});
      tl1.fromTo(type.current,{x:-10,duration:.2,opacity:0},{x:0,duration:.35,opacity:1});
      tl1.fromTo(native.current,{x:-10,duration:.2,opacity:0},{x:0,duration:.3,opacity:1});
      
      setAnimate(false)
    } 
 }, [inView])
 
  return (
    <div style={{height:"100vh"}}  ref={ref} className='skills-container' id="skills">
      <h1 ref={title} className='skills-title'>
        I CAN WORK WITH
      </h1>
      <div className='skills-list-container'>
        <li ref={html} className='skill-list'>HTML , CSS</li>
        <li ref={react} className='skill-list'>REACT JS , NEXT JS, REACTNATIVE</li>
        <li ref={redux} className='skill-list'>REDUX</li>
        <li ref={type} className='skill-list'>TYPESCRIPT</li>
        <li ref={native} className='skill-list'>Illustrator  ,Figma  ,Photoshop</li>
      </div> 
    </div>
  )
}

export default Skills