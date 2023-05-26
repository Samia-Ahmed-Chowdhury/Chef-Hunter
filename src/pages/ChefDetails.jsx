import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from 'react-router-dom'
import { FaUserGraduate, FaThumbsUp, FaBook, FaArrowLeft } from "react-icons/fa";
import RecipeCard from '../components/RecipeCard/RecipeCard';

function ChefDetails() {
    const navigate = useNavigate()
    const [chefInfo, setChefInfo] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://as-10-server-side-samia-ahmed-chowdhury.vercel.app/chef_data/${id}`)
            .then(res => res.json())
            .then(data => setChefInfo(data))
    }, [])

    return (
        <>
            {/* // navigate to back */}
            <button onClick={() => navigate(-1)} className=" text-black mx-5 mt-16 lg:mx-16">
                <FaArrowLeft className='text-primaryColor inline' /> back
            </button>

            <div className="lg:h-96 card lg:card-side bg-base-100 shadow-xl mx-5 my-16 lg:mx-16">
                <figure className='h-96 w-[100%]'><img className='h-96 object-fill' src={chefInfo.chefPicture} alt="Album" /></figure>
                <div className="card-body justify-center">
                    <h2 className="card-title">{chefInfo.chefName}</h2>
                    <p className='font-normal flex-grow-0 my-3'>{chefInfo.bio}</p>
                    <p className='font-normal flex-grow-0'><FaUserGraduate className='inline' /> Experience: {chefInfo.experienceYears}</p>
                    <p className='font-normal flex-grow-0 my-3'><FaBook className='inline' /> Total recipes: {chefInfo.recipesCount}</p>
                    <p className='font-normal flex-grow-0'><FaThumbsUp className='inline' /> Total Likes: {chefInfo.likes}</p>
                </div>
            </div>
            <RecipeCard name={chefInfo.chefName} />
        </>
    )
}

export default ChefDetails