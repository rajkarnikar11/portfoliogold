import React, { useState,useRef,useEffect } from 'react';
import { gsap } from "gsap";
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import Fbstroke from "../assets/fbstroke.svg"
import Fbfill from "../assets/fbfill.svg"
import Instastroke from "../assets/instastroke.svg"
import Instafill from "../assets/instafill.svg"
import Instroke from "../assets/instroke.svg"
import Infill from "../assets/infill.svg"
import Linkedinqr from "../assets/linkedinqr.png"
import Instaqr from "../assets/instaqr.png"
import Fbqr from "../assets/fbqr.png"
// IoMdDownload
import { MdGetApp } from "react-icons/md";
import '../Styles/Intro.css'
const Intro = () => {
    const navigate = useNavigate()
    const namaste=useRef(null);
    const header=useRef(null);
    const iam=useRef(null);
    const salil=useRef(null);
    const rajkarnikar=useRef(null);
    const dev=useRef(null);
    const based=useRef(null);
    const kathmandu=useRef(null);
    const follow=useRef(null);
    const resume=useRef(null);
    const fbicon=useRef(null);
    const instaicon=useRef(null);
    const linkedinicon=useRef(null);
    const photo=useRef(null);

    const [mouse,setMouse]=useState(true)
    const [facebook,setFacebook]=useState(true)
    const [insta,setInsta]=useState(true)
    const [linkedin,setIn]=useState(true)

    let tl = gsap.timeline()
    let t2 = gsap.timeline()
    
    useEffect(() => {
        //for namaste
        tl.fromTo(namaste.current, {opacity:0,y:500,x:"30%",color:"rgb(0, 0, 0,0)"}, {duration: 1,y:200,x:"30%",color:"rgb(0, 0, 0,0)", opacity:1});
        tl.to(namaste.current, {duration:1,color:"#D4B44A"});
        tl.to(namaste.current, {duration:1,delay:1,x:0,y:0,color:"rgb(0, 0, 0,0)"});
        // gsap.to(namaste.current, { rotation: "+=360" });

        //for salil rajkernikar header
        gsap.fromTo(header.current,{opacity:0},{opacity:1,delay:8,duration:1})
        
        //for bulktext section
        tl.fromTo(iam.current, {y:-1000,rotation: 0 ,opacity: 0}, {duration: 1,y:0,rotation: 0,opacity:1,delay:.2});
        tl.to(iam.current, {duration: .5,y:0,rotation: -90,delay:0});
        tl.fromTo(salil.current, {duration: 1,x:"80",opacity: 0},{x:0,opacity:1});
        tl.fromTo(rajkarnikar.current, {duration: .5,x:"80",opacity: 0},{x:0,opacity:1});
        tl.fromTo(dev.current, {y:"80",opacity: 0},{duration: .5,y:0,opacity:1});
        tl.fromTo(based.current, {y:"80",opacity: 0},{duration: .3,y:0,opacity:1});
        tl.fromTo(kathmandu.current, {y:"80",opacity: 0},{duration: .2,y:0,opacity:1});
        tl.fromTo(resume.current, {y:"-80",opacity: 0},{duration: .5,y:0,opacity:1});       
        tl.fromTo(follow.current, {y:"80"}, {y:0, duration:1,opacity:1});
        tl.fromTo(fbicon.current, {opacity:0,y:-10}, {y:0,opacity:1, duration:.5,delay:0});
        tl.fromTo(instaicon.current, {opacity:0,y:-10}, {y:0,opacity:1, duration:.5,delay:.1});
        tl.fromTo(linkedinicon.current,{opacity:0,y:-10}, {y:0,opacity:1, duration:.5,delay:.05});
        
       

    },[]);
       
    
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: .3,
    });
    useEffect(() => {
        if(inView)  {navigate('/#intro')}
    }, [inView])
  return (
    <div  ref={ref} id="intro" className='intro-container'>
        {/* <div ref={header} className='header-container'>
            <h1 className='header'>SALIL RAJKARNIKAR</h1>
        </div> */}
        <div style={{display:'flex'}}>
            <div className='text-container'>
                <h1  className='namaste'ref={namaste}>NAMASTE</h1>
                <div className='text-info-container'>
                    <div className='left'>
                        <p ref={iam} className='iam'>I AM</p></div>
                        <div className='right'>
                            <p ref={salil} className='salil'>SALIL</p>
                            <p ref={rajkarnikar} className='rajkarnikar'>RAJKARNIKAR</p>
                            <p ref={dev} className='dev'>A FRONTEND DEVELOPER</p>
                            <p ref={based} className='based'>BASED IN</p>
                            <p ref={kathmandu} className='kathmandu'>KATHMANDU</p>
                            <a  href='/resume.pdf' download>
                                <div ref={resume} onMouseLeave={() => setMouse(true)} onMouseEnter={() => setMouse(false)} className='resume-container'>
                                    
                                        <p className='resume-text1'>DOWNLOAD</p>
                                        <p className='resume-text'>RESUME</p>
                                    
                                        <MdGetApp className='dowmload-icon' color='#131313' size="4.7vw"/>
                                       
                                                             
                                </div>
                            </a>
                    </div>
                </div>
            
            </div>    
            <div className='follow-container-out'>
                <h1 ref={follow} className='follow-text'>FOLLOW ME ON</h1>
                <div className='follow-container'>
                    <a ref={fbicon} target={"_blank"} onMouseLeave={() => setFacebook(true)} onMouseEnter={() => setFacebook(false)} href= "https://www.facebook.com/S.Rajkarnikar11/" >
                        {
                            
                            <img style={{opacity:"1"}} className='follow-icon' alt="fb" src={Fbstroke}/>

                        }
                        {
                            !facebook &&<div>
                                <img className='qr-icon' alt="fb" src={Fbqr}/>
                                <img style={{opacity:"1"}} className='follow-icon' alt="fb" src={Fbfill}/>
                            </div>
                        }
                    </a>
                    <a ref={instaicon} target={"_blank"} onMouseLeave={() => setInsta(true)} onMouseEnter={() => setInsta(false)} href= "https://www.instagram.com/salilrajkarnikar/" >
                        {
                           
                            <img style={{opacity:"1"}} className='follow-icon1' alt="fb" src={Instastroke}/>
                        }
                        {
                            !insta &&<div>
                                    <img className='qr-icon' alt="insta" src={Instaqr}/>
                                    <img style={{opacity:"1"}} className='follow-icon1' alt="insta" src={Instafill}/>
                                    
                                </div>
                            }
                    </a>
                    <a ref={linkedinicon} target={"_blank"} onMouseLeave={() => setIn(true)} onMouseEnter={() => setIn(false)} href= "https://www.linkedin.com/in/salil-rajkarnikar-93b649201/" >
                        {
                            
                            <img style={{opacity:"1"}} className='follow-icon2' alt="fb" src={Instroke}/>
                        }
                        {
                            !linkedin &&<div>
                                <img className='qr-icon' alt="inkedin" src={Linkedinqr}/>
                                <img style={{opacity:"1"}} className='follow-icon2' alt="inkedin" src={Infill}/>
                                
                            </div>
                        }
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro