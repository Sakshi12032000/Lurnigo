import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Course from './components/Course/Course'
import Title from './components/Title/Title'
import About from './components/About/About'
import Testimonials from './components/Testimonials/Testimonials'
import Signin from './components/Signin/Signin'
import Achievements from './components/Achievements/Achievements'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='OUR COURSES' title='What We Offer'/>
      <Course/>
      <About/>
      <Title subTitle='TESTIMONIALS' title='What Students says'/>
         <Testimonials/>

      <Title subTitle='' title='ACHIEVEMENTS'/>
        <Achievements/>

      <Title subTitle='Sign Up' title='Please Sign to Continue'/>

      <Signin/>
      
      </div>
    </div>
  )
}

export default App
