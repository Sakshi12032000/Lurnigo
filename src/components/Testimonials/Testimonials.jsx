import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {


    const slider = useRef();
      let tx =0;


    const slideForward = ()=>{
            if(tx > -50){
                tx -= 25;
            }
            slider.current.style.transform = 'translateX(${tx}%)';
    }
    const slideBackward = ()=>{
        if(tx > 0){
            tx += 25;
        }
        slider.current.style.transform = 'translateX(${tx}%)';

    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn'onClick={slideBackward}/>
          <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt=''/>
                            <div>
                                <h3> Serena Van dan</h3>
                                <span>Lurnigo, Newark</span>
                            </div>
                        </div>
                        <p>
                        “Without taking this course, I don’t think I would have been as prepared as I am for my upcoming test. I would recommend to all my friends".
                        
                        
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt=''/>
                            <div>
                                <h3> William Jackson</h3>
                                <span>Lurnigo, Seatle</span>
                            </div>
                        </div>
                        <p>
                        “I learned to work smarter, not harder, and to see how the ACT is not all that difficult. When I took the ACT [I earned] a superscore of 34. I can get a full ride to several universities, making this course a worthy investment.”
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt=''/>
                            <div>
                                <h3> Leo</h3>
                                <span>Lurnigo, Spain</span>
                            </div>
                        </div>
                        <p>
                        “The prep class helped me improve my MCAT score 7 points, so my medical school application became so much stronger. For that, I am forever grateful"
                        </p>
                    </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt=''/>
                            <div>
                                <h3> akinchita</h3>
                                <span>Lurnigo, UK</span>
                            </div>
                        </div>
                        <p>
                        "one of the best teachers I have ever had. When I got my acceptance letter from NYU, all the hours spent with my teacher had a different taste: the reward finally came.”
                        </p>
                    </div>
                </li>
            </ul>
          </div>

    </div>
  )
}

export default Testimonials