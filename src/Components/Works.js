import React from 'react'
import Workcard from './Workcard'

function Works() {
  const projects = [
    {
      lottie: "https://assets1.lottiefiles.com/packages/lf20_dx3CMu.json",
      name : "Stack Overflow",
      tech : "Reactjs / Nodejs / MongoDB / Redux / JWT / Cookies",
      git : "https://github.com/Ebenezhar/stackfront",
      netlify : "https://sprightly-longma-428d2c.netlify.app"
    },
    {
      lottie: "https://assets4.lottiefiles.com/packages/lf20_q6wsiidu.json",
      name: "e-Commerce Application",
      tech : "Reactjs / bootstrap/ Cookies /Reactjs / bootstrap/ Cookies ",
      git :"https://github.com/Ebenezhar/Cart-Task",
      netlify : "https://e-commerce-752579.netlify.app/"
    },
  ]

  return (  
  
    <div className="container skill-div1 pl-5 pr-5 pb-5">
      <h2 className='header3 m-5'> Works</h2>
      <div className="col-lg-12">     
        <div className="row p-4 justify-content-center mt-2 skill-div2">        
          {
            projects.map((project)=>{
              return(
                <div className="col-lg-6 p-2 card-div">
                  <Workcard data = {project}/>
                </div>
              ) 
            })                       
          }     
        </div>        
      </div>  


    </div>
  )
}

export default Works