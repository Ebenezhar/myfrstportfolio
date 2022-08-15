import React from 'react'
import facebook from './facebook logo.svg'
import instagram from './insta logo.svg'
import twitter from './twitter logo.svg'

function ForContact() {
  return (
    <div className="container skill-div1 pl-5 pr-5 pb-5">
      <h2 className='header3 m-5'> For Contact</h2>
      <div className="col-lg-12 pl-5 pr-5 pb-5 ">
        <h1 className='text-center'> Get in Touch</h1>
        <h5 className='text-start contact-text1'>I am currently open to work in software developments. My inbox is always open if you want to communicate with me. Hit me up if you have some question I'll try to get back to you as soon as I can, or you just to say hey</h5>
        <h5 className='text-start contact-text2'>- send me an email or shoot me a message on <a target="_blank" href='https://www.linkedin.com/in/ebenezhar-selvakumar-059559136/'>LinkedIn!</a></h5>
        <h5 className='text-center p-3'><i class="fa-solid fa-phone"></i> +91-7010491206</h5>
        <h5 className='text-center'><i class="fa-solid fa-envelope"></i> ebenezharselvakumar@gamil.com</h5>
        <h5 className='text-center p-3'><i class="fa-solid fa-location-pin"></i> Tanjore, India</h5>
      </div>
        
        <div className='row d-flex justify-content-between'>
          <div className='col-lg-6'>
          <h5 className='text-center p-3'>Created by Ebenezhar selvakumar</h5>          
          </div>
          <div className='col-lg-6 text-center'>
          <a className="m-1 link-content" target="_blank" href="google.com"><img class="img-fluid" src={facebook} /></a>
          <a className="m-1 link-content" target="_blank" href="google.com"><img class="img-fluid" src={instagram} /></a>
          <a className="m-1 link-content" target="_blank" href="google.com"><img class="img-fluid" src={twitter} /></a>
          
          {/* <a className="m-1 link-content" target="_blank" href=""><i class="fa-brands fa-square-facebook"></i></a>
          <a className="m-1 link-content" target="_blank" href=""><i class="fa-brands fa-instagram"></i></a> */}
          
          </div>
          </div>    
        
      
      
    </div>
  )
}

export default ForContact   