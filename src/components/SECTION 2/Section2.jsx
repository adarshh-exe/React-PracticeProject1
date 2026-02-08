import React from 'react'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='main-info'>
        <div className="top">
            <div className="left">
                <span>About Horizon</span>
            </div>
            <div className="right">
                <p>At Horizon, we don't just play tennis — we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.</p> 
            </div>
        </div>

        <div className="mid">
            <div className="card1 card">
                <div className="ico">
                    <i class="ri-ping-pong-fill"></i>
                </div>
                <div className="yap">
                    Professional hard courts<span className="col"> with tournament-grade lighting and climate control — play in</span> perfect conditions, in any season.
                </div>
                <div className="game">
                    <span className='gameon'><span className="btn"><span className="hollow"></span></span></span>
                    <span>Game Mode</span>
                </div>
            </div>

            <div className="card2 card">
                <span>Private & Group Lessons</span>
            </div>

            <div className="card3 card">
                <div className="ctop">
                    <span className='c3-head'>100+</span>
                    <p className='c3sechead'>Pro Coaches</p>
                    <p>Certified Professionals ready to boost your game from first serve to tournament level.</p>
                </div>
                <div className="cbot">
                    <div className="beginner">
                        <span className="txt">Beginner</span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span className='points'>55</span>
                    </div>

                    <div className="intermediate">
                        <span className="txt">Intermediate</span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span className='points'>40</span>
                    </div>

                    <div className="advanced">
                        <span className="txt">Advanced</span>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span className='points'>35</span>
                    </div>
                </div>
            </div>

        </div>

        <div className="bottom">
            <div className="bot-para">
                <p>A few more facts about us in numbers</p>
            </div>
            <div className="bot-stats">
                <div className="statnums">
                    <span>12,000+</span>
                    <p>Hours of play annually</p>
                </div>
                <div className="statnums">
                    <span>89%</span>
                    <p>Player Retention Rate</p>
                </div>
                <div className="statnums">
                    <span>1,200+</span>
                    <p>Active Members</p>
                </div>
                <div className="statnums">
                    <span>125+</span>
                    <p>Annual Tournaments</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section2
