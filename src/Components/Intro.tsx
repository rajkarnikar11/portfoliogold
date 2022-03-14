import React, { useState } from 'react';
import { gsap } from "gsap";
import {Link} from "react-router-dom";
import Fbstroke from "../assets/fbstroke.svg"
import Fbfill from "../assets/fbfill.svg"
import Instastroke from "../assets/instastroke.svg"
import Instafill from "../assets/instafill.svg"
import Instroke from "../assets/instroke.svg"
import Infill from "../assets/infill.svg"
// IoMdDownload
import { MdGetApp } from "react-icons/md";
import '../Styles/Intro.css'
const Intro = () => {
    const [mouse,setMouse]=useState(true)
    const [facebook,setFacebook]=useState(true)
    const [insta,setInsta]=useState(true)
    const [linkedin,setIn]=useState(true)
  return (
    <div className='intro-container'>
        <div className='header-container'>
            <h1 className='header'>SALIL RAJKARNIKAR</h1>
        </div>
        <div style={{display:'flex'}}>
            <div className='text-container'>
                <h1 className='namaste'>NAMASTE</h1>
                <div className='text-info-container'>
                    <div className='left'>
                        <p className='iam'>I AM</p></div>
                        <div className='right'>
                            <p className='salil'>SALIL</p>
                            <p className='rajkarnikar'>RAJKARNIKAR</p>
                            <p className='dev'>A FRONTEND DEVELOPER</p>
                            <p className='based'>BASED IN</p>
                            <p className='kathmandu'>KATHMANDU</p>
                            <div onMouseLeave={() => setMouse(true)} onMouseEnter={() => setMouse(false)} className='resume-container'>
                                {mouse && <div>
                                    <p className='resume-text1'>DOWNLOAD</p>
                                    <p className='resume-text'>RESUME</p>
                            </div>}
                                {
                                    !mouse && <div>
                                        <MdGetApp color='#131313' size="4.7vw"/>
                                    </div>
                                }
                                
                                
                        </div>
                    </div>
                </div>
            
            </div>    
            <div className='follow-container'>
                <h1 className='follow-text'>FOLLOW ME ON</h1>
                <div className='follow-icon-container'>
                    <a  onMouseLeave={() => setFacebook(true)} onMouseEnter={() => setFacebook(false)} href= "https://www.facebook.com/S.Rajkarnikar11/" >
                        {
                            facebook &&
                            <img style={{opacity:".8"}} className='follow-icon' alt="fb" src={Fbstroke}/>
                        }
                        {
                            !facebook &&
                            <img className='follow-icon' alt="fb" src={Fbfill}/>
                        }
                    </a>
                    <a onMouseLeave={() => setInsta(true)} onMouseEnter={() => setInsta(false)} href= "https://www.instagram.com/salilrajkarnikar/" >
                        {
                            insta &&
                            <img style={{opacity:".8"}} className='follow-icon' alt="fb" src={Instastroke}/>
                        }
                        {
                            !insta &&
                            <img className='follow-icon' alt="fb" src={Instafill}/>
                        }
                    </a>
                    <a onMouseLeave={() => setIn(true)} onMouseEnter={() => setIn(false)} href= "https://www.linkedin.com/in/salil-rajkarnikar-93b649201/" >
                        {
                            linkedin &&
                            <img style={{opacity:".8"}} className='follow-icon' alt="fb" src={Instroke}/>
                        }
                        {
                            !linkedin &&
                            <img className='follow-icon' alt="fb" src={Infill}/>
                        }
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro