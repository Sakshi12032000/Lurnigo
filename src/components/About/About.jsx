import React from 'react'
import './About.css'
import Test_1 from '../../assets/Test.jpg'
import Test_2 from '../../assets/Test1.png'

const About = () => {
  return (
    <div className='about'>
        <h3>ABOUT US</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
        Recognizing and developing potential leaders within an organization is a crucial cornerstone for ensuring sustained progression and prosperity. These future leaders are the propulsion engines of innovation, the decisive arbitrators at critical junctions, and the compasses guiding the collective organization towards the attainment of company objectives.
        </p>
        <p>
        For more than 40 years, students and their families have trusted us to help them get into their dream schools. Our mission is to provide personalized, innovative, best-in-class private tutoring, test prep, and admission products and services to help students knock down barriers and achieve their academic goals. We are solely on the side of the students—we are not affiliated with any of the test developers.
        </p>

        <h1>What test to take?</h1>
    
    <img src={Test_2} alt=''/>

    </div>
  )
}

export default About