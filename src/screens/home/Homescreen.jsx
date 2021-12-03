import React, { useEffect, useState } from 'react'
import './homescreen.css';
import axios from 'axios'
// Components
import Navbar from './components/navbar/Navbar'
import CategoryCard from './components/categoryCard/CategoryCard';
import Youtube from './components/yt/YT'
import CollapsableCard from './components/collapsable/CollapsableCard';
import ReadMoreCard from './components/readMoreCard/ReadMoreCard';
import MissCard from './components/missCard/MissCard';
import Footer from './components/footer/Footer';
// Imgs
import landing_img from '../../imgs/landing_img.png'
// import cat1 from '../../imgs/cat1.png'
// import cat2 from '../../imgs/cat2.png'
// import cat3 from '../../imgs/cat3.png'
import missCard1 from '../../imgs/missCard1.png'
import missCard2 from '../../imgs/missCard2.png'

function Homescreen() {
    const [data, setData] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => setData(res.data))
            .catch((err) => console.error(err))            
    }, [])

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
                    {data && data?.slice(0, 3)?.map(d => <CategoryCard key={d?.id} img={d?.thumbnailUrl} heading={d?.title?.split(' ')[0]} />)}                    
                </div>
            </div>      
            <div className='homescreen_vid'>
                <h2>A GLANCE AT OUR PRODUCT</h2>  
                <Youtube />  
            </div>
            <div className='homescreen_faq'>
                <h3>FAQs</h3>    
                <CollapsableCard open={false} />
                <CollapsableCard open={true} />
                <CollapsableCard open={false} />
            </div>      
            <div className="homescreen_read">
                <h3>HAVE A READ</h3>
                <ReadMoreCard heading={'The right quality'} />
                <ReadMoreCard heading={'The right time'} />
                <ReadMoreCard heading={'The basis of a balanced diet'} />
            </div>
            <div className="homescreen_miss">
                <h3>topics you can’t miss</h3>
                <MissCard bgImg={missCard1} />
                <MissCard bgImg={missCard2} />
            </div>     
        </div>
        <Footer />       
        </>
    )
}

export default Homescreen
