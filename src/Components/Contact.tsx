import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
const Contact = () => {
  const navigate = useNavigate()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .3,
  });
  useEffect(() => {
    if(inView)  {navigate('/#contact')}
 }, [inView])
  return (
    <div  ref={ref} className='container' id="contact">Contact</div>
  )
}

export default Contact