import React from 'react'
import i4g from '../assets/I4G.png';
import zurilogo from '../assets/zurilogo.png';
function Footer() {
  return (
    <div className='footer'>
    <div>
      <img src={zurilogo} alt=''/>
    </div>
    <div>
    HNG Internship 9 Frontend Task
    </div>
    <div>
      <img src={i4g} alt=''/>
    </div>

  </div>
  )
}

export default Footer