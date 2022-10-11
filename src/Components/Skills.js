import React from 'react'
import css from './Css logo.svg'
import javascript from './javascript logo.svg'
import redux from './redux logo.svg'
import bootstrap from './bootstrap logo.svg'
import react from './react logo.svg'
import html from './html logo.svg'
import mysql from './mysql logo.svg'
import mongodb from './mongodb logo.svg'
import nodejs from './nodejs logo.svg'
import aws from './aws logo.svg'
import npm from './npm logo.svg'
import heroku from './heroku logo.svg'
import postman from './postman logo.svg'
import github from './github logo.svg'
import Skillcard from './Skillcard'
import { useNavigate } from 'react-router-dom'


function Skills() {
  const navigate = useNavigate();

  const skills = [
    {
      name: "Java Script",
      logo: `${javascript}`,
    },
    {
      name: "HTML",
      logo: `${html}`,
    },
    {
      name: "CSS",
      logo: `${css}`,
    },
    {
      name: "Bootstrap",
      logo: `${bootstrap}`,
    },
    {
      name: "NPM",
      logo: `${npm}`,
    },
    {
      name: "React",
      logo: `${react}`,
    },
    {
      name: "Redux",
      logo: `${redux}`,
    },
    {
      name: "Node JS",
      logo: `${nodejs}`,
    },
    {
      name: "Mongo DB",
      logo: `${mongodb}`,
    },
    {
      name: "My SQL",
      logo: `${mysql}`,
    },
    {
      name: "AWS",
      logo: `${aws}`,
    },
    {
      name: "Git",
      logo: `${github}`,
    },
    {
      name: "Postman",
      logo: `${postman}`,
    },
    {
      name: "Heroku",
      logo: `${heroku}`,
    },

  ]

  return (

    <div className="container skill-div1 pl-5 pr-5 pb-5">
      <div className='row'>
        <div className='col-lg-6'>
          <h2 className='header3 m-5'>KEY Skills</h2>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-2 p-3 skill-div2">
          {
            skills.map((skill) => {
              return <Skillcard data={skill} />
            })
          }
          <div><h2 className="dotts ">.....</h2></div>
        </div>
      </div>

    </div>


  )
}

export default Skills 