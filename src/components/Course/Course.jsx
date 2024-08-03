import React from 'react'
import './Course.css'
import courses_1 from '../../assets/courses-1.jpeg'
import courses_2 from '../../assets/courses-2.jpeg'
import courses_3 from '../../assets/courses-3.png'
import courses_4 from '../../assets/courses-4.jpeg'
import courses_icon_1 from '../../assets/courses-icon-1.png'
import courses_icon_2 from '../../assets/courses-icon-2.png'
import courses_icon_3 from '../../assets/courses-icon-3.png'
import courses_icon_4 from '../../assets/courses-icon-4.png'
import Test_1 from '../../assets/Test.jpg'
import Test_2 from '../../assets/Test1.png'


const Course = () => {
  return (
    <div className='course'>
      <div className='courses'>
        <img src={courses_1} alt=''/>
        <div className="caption">
          <img src={courses_icon_1} alt=''/>
          <p>SAT</p>
        </div>
        </div>  
        <div className='courses'>
          <img src={courses_2} alt=''/>
          <div className="caption">
            <img src={courses_icon_2} alt=''/>
            <p>ACT</p>
          </div>
        </div>
        <div className='courses'>
          <img src={courses_3} alt=''/>
          <div className="caption">
            <img src={courses_icon_3} alt=''/>
            <p>PSAT</p>
          </div>
        </div>
        <div className='courses'>
          <img src={courses_4} alt=''/>
          <div className="caption">
            <img src={courses_icon_4} alt=''/>
            <p>AP</p>
          </div>
        </div>
           
        
        

    </div>
    
    
  )
}

export default Course