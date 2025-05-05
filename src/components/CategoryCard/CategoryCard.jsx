import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ category }) => {
    return (
        <Link to={category?.href} className='rounded-[12px] relative flex flex-col justify-center items-center gap-2 aspect-square bg-Blue'>
            <div className='h-[60px] aspect-square'>
                <img src={category?.icon} alt={category.label} className='h-full w-full' />

            </div>
            <span className='text-[20px]  font-bold capitalize text-Snow'>{category?.label}</span>
        </Link>
    )
}

export default CategoryCard