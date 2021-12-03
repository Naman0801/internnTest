import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import './MissCard.css'

function MissCard({ bgImg }) {
    return (
        <div className='missCard_cont' style={{ background: `url(${bgImg}) no-repeat right / contain #fff` }} >
            <h6>topics you can’t miss</h6>
            <p className='missCard_data'>
                Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.
            </p>
            <p className='readMore'>
                <span>Read More</span> <BiChevronRight />
            </p>
        </div>
    )
}

export default MissCard
