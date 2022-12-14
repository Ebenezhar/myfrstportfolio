import React from 'react';
import Navbar from './Navbar';
import {
  Outlet,
} from "react-router-dom";


function Home() {
  return (
    <div style={{ "overflow-x": "hidden" }} className="col-lg-12">
      <Navbar />
      <div className="container-fluid">
        <Outlet />
      </div>
    </div>
  )
}

export default Home