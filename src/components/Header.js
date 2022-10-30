import React from 'react'
import men from '../assets/menu.png';
import share from '../assets/share.png';

function Header () {
  
return (
    <header>
        <nav>
        <p className='close'>&times; </p>
        <img src={share} className='share' alt=''/>
        </nav>
        <img src={men} alt='' onClick={open} className='menu'/>
    </header>
  )

  function open(){
    const menu = document.querySelector('.menu')
    const close = document.querySelector('.close')
    const nav = document.querySelector('nav')
    
    menu.addEventListener('click',()=>{
        nav.classList.add('open-nav')
    })
    
    close.addEventListener('click',()=>{
        nav.classList.remove('open-nav')
    })
  }
}

export default Header