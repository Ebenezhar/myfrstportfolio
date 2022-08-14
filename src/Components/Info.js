import React from 'react'
import ebe1 from './newfolder/ebe1.jpg'

function Info() {

  return (
    <div className='row info' >
      <div className='col-lg-9 info1' >
        <div className='col p-5'>
          <h1 className='header1'>Frontend</h1>
          <h1 className='header1'>Developer.</h1>
          <p className='para1 pt-4'>I belive in web design can be more diverse and inspiring. With a mission to present the possibilities of web design, I am pursuing new expressions through experiments and thoughts</p>
        </div>
      
        <div className='quote'>
          <p className='para2'>Seize your moment</p>
        </div>
      </div>
      <div className='col-lg-3 info2'>
        <div className='profile-box'>
          <img className='profile-pic' src={ebe1} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Info