import { Controls, Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import resume from './resume img.jpg'

function Resume() {
  return (
    <div className='container resume-div pl-5 pr-5 pb-5'>
      <h2 className='header3 p-5 mr-5 ml-5 mb-5'> Resume</h2>
      <div className="col-lg-12 ">
        <img className="resumeimg-div" data-aos-once="true" data-aos="fade-up-left" src={resume}/>
        {/* <Player
          className="justify-content-start"
          autoplay
          loop
          src="https://assets4.lottiefiles.com/private_files/lf30_vnbcd4ev.json"
          style={{ height: "350px", width: "350px" }}
        >
          <Controls
            // visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player> */}
      </div>
      {/* <h3 className='text-center m-5'> Page  under construction</h3> */}
    </div>
  )
}

export default Resume