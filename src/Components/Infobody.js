import React from 'react'
import AnimatedPage from '../AnimatedPage'
import ForContact from './ForContact'
import Info from './Info'
import Resume from './Resume'
import Skills from './Skills'
import Works from './Works'

function Infobody() {

  return (
    <AnimatedPage>
      <div >
        <div ><Info /></div>
        <div ><Skills /></div>
        <div ><Works /></div>
        <div ><Resume /></div>
        <div ><ForContact /></div>
      </div>
    </AnimatedPage>

  )
}

export default Infobody