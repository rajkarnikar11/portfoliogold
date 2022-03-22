import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
const Skills = () => {
  const navigate = useNavigate()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .3,
  });
  useEffect(() => {
    if(inView)  {navigate('/#skills')}
 }, [inView])
  return (
    <div style={{height:"100vh"}}  ref={ref} className='container' id="skills">Skills</div>
  )
}

export default Skills