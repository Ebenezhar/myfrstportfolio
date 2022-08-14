import React from 'react'
import ForContact from './ForContact'
import Info from './Info'
import Resume from './Resume'
import Skills from './Skills'
import Works from './Works'

function Infobody() {
  return (
    <div >
        <div ><Info/></div>
        <div ><Skills/></div>
        <div ><Works/></div>
        <div ><Resume/></div>
        <div ><ForContact/></div>
      </div>
  )
}

export default Infobody