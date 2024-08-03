import React, { useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpeg'

const Navbar = () => {

  return (
    <nav className='container dark-nav'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>About us</li>
        <li>Testimonials</li>
        <li>Achievements</li>
        <li><button className='btn'>Sign in</button> </li>
      </ul>


    </nav>
  )
}

export default Navbar