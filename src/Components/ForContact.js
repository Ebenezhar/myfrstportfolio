import React from 'react'
import AnimatedPage from '../AnimatedPage'
import facebook from './facebook logo.svg'
import instagram from './insta logo.svg'
import twitter from './twitter logo.svg'

function ForContact() {
  return (
    <AnimatedPage>
      <div className="container contact-div pl-5 pr-5 pb-5">
        <div className='row'>
          <div className='col-lg-6'>
            <h2 className='header3 m-5'> For Contact</h2>
          </div>
        </div>
        <div className="col-lg-12 pl-5 pr-5 pb-5 ">
          <h1 className='text-center'data-aos-once="true" data-aos="fade-right"> Get in Touch</h1>
          <h5 className='text-start contact-text1' data-aos-once="true" data-aos="fade-left">I am currently open to work in software developments. My inbox is always open if you want to communicate with me. Hit me up if you have some question I'll try to get back to you as soon as I can, or you just to say hey</h5>
          <h5 className='text-start contact-text2'data-aos-once="true" data-aos="fade-left">- send me an email or shoot me a message on <a target="_blank" href='https://www.linkedin.com/in/ebenezhar-selvakumar-059559136/'>LinkedIn!</a></h5>
          <h5 className='text-center p-3' data-aos-once="true" data-aos="fade-right"><i class="fa-solid fa-phone" ></i> +91-7010491206</h5>
          <h5 className='text-center' data-aos-once="true" data-aos="fade-left"><i class="fa-solid fa-envelope" ></i> ebenezharselvakumar@gmail.com</h5>
          <h5 className='text-center p-3' data-aos-once="true" data-aos="fade-right"><i class="fa-solid fa-location-pin" ></i> Tanjore, India</h5>
        </div>
        <div className='row d-flex justify-content-between'>
          <div className='col-lg-6'>
            <h5 className='text-center p-3' >Created by Ebenezhar selvakumar</h5>
          </div>
          <div className='col-lg-6 text-center'>
            <a className="m-1 link-content" target="_blank" href="https://www.facebook.com/ebenezhar.kumar"><img class="img-fluid" src={facebook} /></a>
            <a className="m-1 link-content" target="_blank" href="https://www.instagram.com/ebenezhar/"><img class="img-fluid" src={instagram} /></a>
            <a className="m-1 link-content" target="_blank" href="https://twitter.com/ebenezhar"><img class="img-fluid" src={twitter} /></a>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default ForContact   