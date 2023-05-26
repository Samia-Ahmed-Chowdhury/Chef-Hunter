import React from 'react'
import LazyLoad from 'react-lazy-load';
import { useNavigate } from 'react-router-dom';
import { FaUserGraduate,FaThumbsUp,FaBook } from "react-icons/fa";


function ChefCard({singleChefData}) {
    // console.log(singleChefData)
    const navigate=useNavigate()

    const { id, chefPicture, chefName, bio, experienceYears, recipesCount, likes } = singleChefData
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl mt-5">
         <LazyLoad threshold={0.99}>
        <figure className='rounded-t-[16px]'><img className='h-64 w-[100%]' src={chefPicture} alt="Shoes" /></figure>
        </LazyLoad>
        <div className="card-body">
          <h2 className="card-title">{chefName}</h2>
          <p className='font-normal'><FaUserGraduate className='inline'/> Experience: {experienceYears}</p>
          <p className='font-normal'><FaBook className='inline'/> Total recipes: {recipesCount}</p>
          <p className='font-normal'><FaThumbsUp className='inline'/> Total Likes: {likes}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>navigate(`/chef_data/${id}`)} className="btn border-0 bg-primaryColor">View Recipes</button>
          </div>
        </div>
      </div>
    )
}

export default ChefCard