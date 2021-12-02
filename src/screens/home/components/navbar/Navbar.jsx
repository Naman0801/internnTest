import React from 'react'
import './navbar.css'
// Imgs
import logo from '../../../../imgs/company_logo.png'

function Navbar() {
    return (
        <div id='navbar'>
            <img src={logo} alt="Sea Basket" className='nav_img' />
            <div>
                <a href="#category">Category</a>
                <a href="#faq">FAQs</a>
                <a href="#cart">My Cart</a>
                <button>Login</button>
            </div>
        </div>
    )
}

export default Navbar
