import React from 'react'
import Navbar from './components/navbar/Navbar'
import CategoryCard from './components/categoryCard/CategoryCard';
import Youtube from './components/yt/YT'
import './homescreen.css';
// Imgs
import landing_img from '../../imgs/landing_img.png'
import cat1 from '../../imgs/cat1.png'
import cat2 from '../../imgs/cat2.png'
import cat3 from '../../imgs/cat3.png'


function Homescreen() {
    return (
        <>
        <Navbar />
        <div id='homescreen' >
            <div className='homescreen_img'>
                <img src={landing_img} alt="landing banner" />
                <h4>HOW IT WORKS</h4>
                <p>Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
            </div>
            <div className='homescreen_categories'>
                <h3>CATEGORIES</h3>
                <div className='catCard_cont' >
                    <CategoryCard img={cat1} heading={'Lakme'} />
                    <CategoryCard img={cat2} heading={'Lakme'} />
                    <CategoryCard img={cat3} heading={'Lakme'} />                    
                </div>
            </div>      
            <div className='homescreen_vid'>
                <h2>A GLANCE AT OUR PRODUCT</h2>  
                <Youtube />  
            </div>      
        </div>
        </>
    )
}

export default Homescreen
