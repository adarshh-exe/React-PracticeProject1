import React from 'react'
import './Section3.css'

const Section3 = () => {
  return (
    <div className='s3-main'>
      <div className="cards">
        <div className="c1 card">
            <div className="c1-top">
                <span>Services</span>
                <p>Explore our full range of coaching, training, and tennis experiences. From first serve to match point — we've got the right program for you.</p>
            </div>
            <div className="c1-bot">
                <span className='explorebtn'>
                    <a href="#">Explore More</a>
                    <i class="bi bi-arrow-up-right"></i>
                </span>
            </div>
        </div>

        <div className="c2 card">
            <div className="c2-top">
                <span>Training Programs</span>
            </div>
            <div className="c2-bot">
                <div className="bot-para">
                    Programs designed for all ages and abilities.
                </div>
                <div className="arrow">
                    <i class="bi bi-arrow-up-right"></i>
                </div>
            </div>
        </div>

        <div className="c3 card">
            <div className="bg-top">
                <span>Court Access</span>
                <span>Hourly Court Rental</span>
            </div>
            <div className="c3-bot">
                <div className="bot-para">
                    <p>Step into a space built for players — to grow, complete, and thrive.</p>
                </div>
                <div className="arrows">
                    <span className="left arro">
                        <i class="bi bi-arrow-left"></i>
                    </span>
                    <span className="right arro">
                        <i class="bi bi-arrow-right"></i>
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
