import React from 'react';
import './ReadMoreCard.css';
import { BiChevronRight } from 'react-icons/bi'

function ReadMoreCard({ heading }) {
    return (
        <div className='readCard_cont'>
            <h5>{heading}</h5>
            <p>
                Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.
            </p>
            <p className='readMore'>
                <span>Read More</span> <BiChevronRight />
            </p>
        </div>
    )
}

export default ReadMoreCard
