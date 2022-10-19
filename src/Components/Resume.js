import React from 'react'

function Resume() {
  return (
    <div className='container resume-div pl-5 pr-5 pb-5'>
      <h2 className='header3 p-5 mr-5 ml-5 mb-5'> Resume</h2>
      <div className="d-flex justify-content-center">
        <button className='p-3 mb-5 bg-white rounded hover-shadow' >
          <a className='col-lg-12 display-5 justify-content-center text-decoration-none text-dark font-weight-bold' target="_blank" href='https://drive.google.com/file/d/1ryMIh2UYbWBGU6bykG2atTozGAtqerSM/view?usp=sharing'>Click here to view Resume</a>
        </button>
      </div>
    </div>
  )
}

export default Resume