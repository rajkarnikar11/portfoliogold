import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../Styles/Contact.css' ;
import emailjs from 'emailjs-com';
const Contact = () => {
  

  const navigate = useNavigate()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: .2,
  });


  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('service_u2k7rea', 'template_9z4znqd', e.target, 'vVeilgXayrdT4ivEW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  useEffect(() => {
    if(inView)  {navigate('/#contact')}
 }, [inView])
  return (
    <div ref={ref}  className='contact-container' id="contact">
      <h1 className='contact-title'>
        leave a message
      </h1>
      <div className='form-cotainer'>
        <form  onSubmit={sendEmail}>
            <div className='form-line-container' >
              <div>
                Name
              </div>
              <div>
                <input type="text" className="form-name" placeholder='Name' name="name"/>

              </div>              
            </div>
            <div className='form-line-container'>              
              <div>
                Email
              </div>
              <div>
                <input type="email" className="form-email" placeholder='Email ID' name="email"/>

              </div>
            </div>
            <div className='form-line-container'>
              <div>
                Subject
              </div>
              <div>
                <input type="text" className="form-subject" placeholder='Subject' name="subject"/>

              </div>
            </div>
            <div className='form-line-container'>
              <div>
                Message
              </div>
              <textarea className='form-textarea' placeholder='Your Message' name="message"></textarea>
            </div>
            <div>
              <input type="submit" className='form-submit' value="Send"></input>
            </div>
        </form>

      </div>
    </div>
  )
}

export default Contact