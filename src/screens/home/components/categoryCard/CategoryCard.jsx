import React from 'react'
import './categoryCard.css'

function CategoryCard({ img, heading}) {
    return (
        <div id='categoryCard'>
            <img src={img} alt={img} />
            <p>{heading}</p>
        </div>
    )
}

export default CategoryCard
