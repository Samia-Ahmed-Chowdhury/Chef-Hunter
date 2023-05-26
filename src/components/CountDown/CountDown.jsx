import React from 'react'
import { FaUserTie,FaUtensils,FaThumbsUp,FaStar } from 'react-icons/fa';
import '../../App.css'
import SingleBox from './SingleBox'
function CountDown() {
    return (
        <div className='background py-10 my-20'>
            <h2 className='text-4xl md:text-5xl font-semibold text-center text-white'>Our Success !!!</h2>
            <div className='grid  lg:grid-cols-4 gap-8 pt-10 pb-4 justify-center mx-5 lg:mx-16'>
               {
                cardData.map((ele)=><SingleBox key={ele.id} ele={ele} />)
               }
            </div>
        </div>
    )
}

const cardData = [
    {
        "id": 1,
        "icon":<FaUserTie/>,
        "count": 630,
        "title": "World class Chef"
    },
    {
        "id": 2,
        "count": 510,
        "icon":<FaUtensils/>,
        "title": "Best Recipe"
    },
    {
        "id": 3,
        "count": 790,
        "icon":<FaStar/>,
        "title": "Total Rating"
    },
    {
        "id": 4,
        "count": 3000,
        "icon":<FaThumbsUp/>,
        "title": "Total Likes"
    },
]

export default CountDown