import React, { useState,useRef,useEffect } from 'react';
import { gsap } from "gsap";
import '../Styles/Navbar.css'
import { NavHashLink } from 'react-router-hash-link';
import {
  useLocation
} from "react-router-dom";
import Homeicon from "../assets/homeicon.svg"
import Manicon from "../assets/manicon.svg"
import Workicon from "../assets/workicon.svg"
import Skillicon from "../assets/skillicon.svg"
import Contacticon from "../assets/contacticon.svg"

const Navbar = () => {

  let location = useLocation();

  const intro=useRef(null);
  const about=useRef(null);
  const work=useRef(null);
  const skills=useRef(null);
  const contact=useRef(null);
  const floating=useRef(null);

  let tl = gsap.timeline()

  useEffect(() => {
        tl.fromTo(intro.current, {x:"100vw"},{x:0,duration:.3,delay:8.5});
        tl.fromTo(about.current, {x:"100vw"},{x:0,duration:.3});
        tl.fromTo(work.current, {x:"100vw"},{x:0,duration:.3});
        tl.fromTo(skills.current, {x:"100vw"},{x:0,duration:.3});
        tl.fromTo(contact.current, {x:"100vw"},{x:0,duration:.3});
        gsap.fromTo(floating.current,{y:50,delay:1},{y:0,opacity:1,duration:1,delay:1})
       
 },[]);
    
 
  return (
    <div>
      <div className='nav-container-side'>
          <NavHashLink ref={intro} className={`${location.hash}` === "#intro" ? "active-items" : "items"}  smooth to='/#intro'>Intro</NavHashLink>
          <NavHashLink ref={about} className={`${location.hash}` === "#about" ? "active-items" : "items"} smooth to='/#about'>About Me</NavHashLink>
          <NavHashLink ref={work} className={`${location.hash}` === "#work" ? "active-items" : "items"} smooth to='/#work'>Work</NavHashLink>
          <NavHashLink ref={skills} className={`${location.hash}` === "#skills" ? "active-items" : "items"} smooth to='/#skills'>Skills</NavHashLink>
          <NavHashLink ref={contact} className={`${location.hash}` === "#contact" ? "active-items" : "items"} smooth to='/#contact'>Contact</NavHashLink>
      </div>
      <div ref={floating} className='nav-container-float'>
          <NavHashLink className={`${location.hash}` === "#intro" ? "active-float" : "float"}  smooth to='/#intro'>
            <img height={35} className='nav-icon' alt="fb" src={Homeicon}/>
          </NavHashLink>
          <NavHashLink className={`${location.hash}` === "#about" ? "active-float" : "float"} smooth to='/#about'>
            <img height={35} className='nav-icon' alt="fb" src={Manicon}/>  
          </NavHashLink>
          <NavHashLink className={`${location.hash}` === "#work" ? "active-float" : "float"} smooth to='/#work'>
            <img height={35} className='nav-icon' alt="fb" src={Workicon}/>
          </NavHashLink>
          <NavHashLink className={`${location.hash}` === "#skills" ? "active-float" : "float"} smooth to='/#skills'>
            <img height={35} className='nav-icon' alt="fb" src={Skillicon}/>
          </NavHashLink>
          <NavHashLink className={`${location.hash}` === "#contact" ? "active-float" : "float"} smooth to='/#contact'>
            <img height={35} className='nav-icon' alt="fb" src={Contacticon}/>
          </NavHashLink>
      </div>
    </div>
  )
}

export default Navbar