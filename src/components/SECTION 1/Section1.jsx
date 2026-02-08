import React from 'react'
import './Section1.css'

const Section1 = () => {
  return (
    <div id='sec1'>
      <div className="sec1cont">

        <div className="top">
            <div className="head">
                <p>Unleash Your Inner Champion Today.</p>
                <p>All In One Place.</p>
            </div>

            <div className="para">
                <p>Join the ultimate tennis experience — where passion meet performance.</p>
                <p>and every swing brings you closer to victory.</p>
            </div>

            <div className="btn">
                <button>Start your own journey</button>
            </div>
        </div>

        <div className="down">
            <div className="coaches">
                <div className="left-para">
                    <p>Train with real proffesionals.</p>
                    <p>Get the real results.</p>
                </div>
                <div className="face-cards">
                    <img src="https://plus.unsplash.com/premium_photo-1723568425978-81ef0ab51252?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbiUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <img src="https://plus.unsplash.com/premium_photo-1664475960708-b7112ae198fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnR5JTIwcGVyc29uJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww" alt="" />
                    <img src="https://plus.unsplash.com/premium_photo-1727896370839-f32c21837893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNwb3J0eSUyMHBlcnNvbiUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                </div>
            </div>

            <div className="socials">

                <span>
                    <a href="#">Instagram</a>
                    <i class="ri-arrow-right-up-long-line"></i>
                </span>
                <span>
                    <a href="#">Facebook</a>
                    <i class="ri-arrow-right-up-long-line"></i>
                </span>
                <span>
                    <a href="#">Tik Tok</a>
                    <i class="ri-arrow-right-up-long-line"></i>
                </span>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
