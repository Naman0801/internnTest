import React from 'react'
import './Footer.css'

// Imgs
import logo from '../../../../imgs/company_logo.png';

function Footer() {
    return (
        <footer id='footer'>
            <div className='footer_cont'>
                <div className="footer_data">
                    <img src={logo} alt='Sea Basket' />
                    <div>
                        <div>
                            <p>Support</p>
                            <p>About Us</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div>
                            <p>Terms & Conditions</p>
                            <p>Return & Refund Policy</p>
                            <p>Shipping & Delivery Policy</p>
                            <p></p>
                        </div>
                    </div>
                </div>
                <p className='footer_copyright'>Sea Basket I All Rights Reserved I 2021 Copyright</p>
            </div>
        </footer>
    )
}

export default Footer
