import React from 'react'
import './Nav'
import './Nav.css'

const Nav = () => {
    return (
        <div id='navigation-bar'>

            <div className="heading">
                <a href="#">Horizon Courts</a>
            </div>

            <nav>
                <ul className="nav-list">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Coaches</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </nav>

            <div className="book">
                <span>
                    <a href="#">Book now</a>
                    <i class="ri-arrow-right-up-long-line"></i>
                </span>
            </div>

        </div>
    )
}

export default Nav
