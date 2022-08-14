import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  const navigateTo = (page) => {
    navigate(`/${page}`)
  }
  return (
    <nav class="navbar navbar-expand-lg" style={{ position: "sticky" }}>
      <div class="container-fluid ">
        <a class="btn navbar-brand px-lg-2 profile-name" href="#"><b>E</b>benezhar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown"> */}
        {/* <ul class="navbar-nav d-flex justify-content-center mb-lg-0"> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-lg-0 " >
            <li class="nav-item">
              <button className="btn btn-light" onClick={() => navigateTo('')}>Home </button>
            </li>
            <li class="nav-item">
              <button className="btn btn-light" onClick={() => navigateTo('Skills')}>Skills</button>
            </li>
            <li class="nav-item">
              <button className="btn btn-light" onClick={() => navigateTo('Works')}>Works</button>
            </li>
            <li class="nav-item">
              <button className="btn btn-light" onClick={() => navigateTo('Resume')}>Resume</button>
            </li>
            <li class="nav-item">
              <button className="btn btn-light" onClick={() => navigateTo('contact')}>Contact</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-addl navbar-fixed-top">
    //   <a class="btn navbar-brand px-lg-2" href="#"><b>E</b>benezhar</a> 
    //   {/* Ebıı */}
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    //     <span class="navbar-toggler-icon"></span>
    //   </button>
    //   <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
    //     <ul class="navbar-nav d-flex justify-content-center mb-lg-0">
    //       <li class="nav-item active mr-2">
    //         <a className="btn btn-light" onClick={() => navigateTo('')}>Home </a>
    //       </li>
    //       <li class="nav-item mr-2">
    //         <button className="btn btn-light" onClick={() => navigateTo('Skills')}>Skills</button>
    //       </li>
    //       <li class="nav-item mr-2">
    //         <button className="btn btn-light" onClick={() => navigateTo('Works')}>Works</button>
    //       </li>
    //       <li class="nav-item mr-2">
    //         <button className="btn btn-light" onClick={() => navigateTo('Resume')}>Resume</button>
    //       </li>
    //       <li class="nav-item mr-2">
    //         <button className="btn btn-light" onClick={() => navigateTo('contact')}>Contact</button>
    //       </li>          
    //     </ul>
    //   </div>
    // </nav>
  )
}

export default Navbar