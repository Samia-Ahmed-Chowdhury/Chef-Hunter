import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import SingleCardTes from './SingleCardTes';

function Testimonial() {

    const [testmonialData,setTestmonialData]=useState([])

    useEffect(() => {
        fetch(`https://as-10-server-side-samia-ahmed-chowdhury.vercel.app/testimonial`)
            .then(res => res.json())
            .then(data => setTestmonialData(data))
    }, [])

    return (
        <div className='my-28'>
            <h2 className="text-4xl text-center font-medium md:mx-auto md:w-[30%] mb-10 mx-5">Provide Best Service To Our Follower With Our Tools</h2>
            <Marquee pauseOnHover className='my-12'>
                <div className='flex mx-5 lg:mx-0 gap-8'>
                    {
                        testmonialData.map(data => <SingleCardTes key={data.id} data={data} />)
                    }
                </div>
            </Marquee>
        </div>
    )
}

export default Testimonial

// const testmonialData = [
//     {
//         "id": 1,
//         "imgSrc": "https://images.unsplash.com/photo-1567722066597-2bdf36d13481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
//         "name": "Samia",
//         "text": "Whatever you do, do with determination. You have one life to live; do your work with passion and give your best. Whether you want to be a chef, doctor, actor, or a mother, be passionate to get the best result.",
//         "rating": 4.5
//     },
//     {
//         "id": 2,
//         "imgSrc": "https://images.unsplash.com/photo-1558624232-75ee22af7e67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
//         "name": "Nadia",
//         "text": "If you are a chef, no matter how good a chef you are, it's not good cooking for yourself; the joy is in cooking for others - it's the same with music.will.i.am",
//         "rating": 4.1
//     },
//     {
//         "id": 3,
//         "imgSrc": "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//         "name": "Sam Ahmed",
//         "text": "A chef's palate is born out of his childhood, and one thing all chefs have in common is a mother who can cook.",
//         "rating": 4.9
//     },
//     {
//         "id": 4,
//         "imgSrc": "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//         "name": "Saif",
//         "text": "All great chefs have two things in common. First, they respect nature as the true artist, and they are just cooks. Second, everything that they do is an extension of them as a person.",
//         "rating": 4.4
//     },
// ]