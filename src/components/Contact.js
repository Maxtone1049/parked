import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <div className='hommie'>
      <div className='winger'>
    <h1 className='head'>Contact Me</h1>
    <p className='subhead'>Hi there, contact me to ask me about anything you have in mind.</p>
    <form action='' method=''>
    <div className='firstsub'>
      <div className='joint'>
        <label for='first_name'>First name</label>
        <input type='text' id='first_name' placeholder='Enter your first name' />
      </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='joint'>
        <label for='last_name'>Last name</label>
        <input type='text' id='last_name' placeholder='Enter your last name' />
      </div>
    </div>
    {/* First divider */}
    <div className='joint'>
      <label for='email'>Email</label>
      <input type='email' id='email' placeholder='yourname@email.com'/>
    </div>
    <div className='joint'>
      <label for='message'>Message</label>
      <textarea cols='20' id='message' placeholder='Send me a message and I`ll reply you as soon as possible...' rows='5'></textarea>
    </div>
    <div className='checked'>
      <input type='checkbox' id='check'/>&nbsp;
      <label for='check'>You agree to providing your data to Maxwell Anthony who may contact you.</label>
    </div>
    <button type='submit' className='btn' id='btn__submit'>Send message</button>
    </form>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default Contact