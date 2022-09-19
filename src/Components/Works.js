import React from 'react'
import AnimatedPage from '../AnimatedPage'
import Workcard from './Workcard'

function Works() {
  const projects = [
    {
      lottie: "https://assets1.lottiefiles.com/packages/lf20_dx3CMu.json",
      name: "Stack Overflow Clone",
      tech: "Reactjs / Nodejs / MongoDB / JWT / Cookies / Bootstrap",
      gitFront: "https://github.com/Ebenezhar/stackfront",
      gitServer: "https://github.com/Ebenezhar/stackserver",
      netlify: "https://stackoverflow-2022.netlify.app/"
    },
    {
      lottie: "https://assets4.lottiefiles.com/packages/lf20_oerkhzf4.json",
      name: "Bulk Mailer",
      tech: "Reactjs / Nodejs / Mongoose / JWT / Cookies / Tailwind / Node Mailer ",
      gitFront: "https://github.com/Ebenezhar/bulkmailerfront",
      gitServer: "https://github.com/Ebenezhar/bulkmailerserver",
      netlify: "https://e-commerce-752579.netlify.app/"
    },
    {
      lottie: "https://assets4.lottiefiles.com/packages/lf20_q6wsiidu.json",
      name: "e-Commerce Application",
      tech: "Reactjs / bootstrap/ Cookies ",
      gitFront: "https://github.com/Ebenezhar/Cart-Task",
      netlify: "https://e-commerce-752579.netlify.app/"
    },
  ]

  return (
    <div className="container works-div1 pl-5 pr-5 pb-5">
      <div className='row'>
        <div className='col-lg-6'>
          <h2 className='header3 m-5'> Works</h2>
        </div>
      </div>
      <div className="col-lg-12 m-2">
        <div className="row p-4 justify-content-center mt-2 ">
          {
            projects.map((project) => {
              return (
                <div className="col-lg-5 p-2 m-2  card-div">
                  <Workcard data={project} />
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