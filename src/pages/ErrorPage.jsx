import React from 'react'
import Lottie from "lottie-react";
import errorImg from "../assets/img_json_data/err.json";
import { useNavigate, useRouteError } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';


function ErrorPage() {
    const navigate = useNavigate()
    const { error, status } = useRouteError()

    return (
        <div className='text-center flex flex-col items-center mt-16'>
            <Lottie className='h-96' animationData={errorImg} loop={true} />;
            <p className='text-2xl font-semibold md:text-3xl mb-8 myDecoration '>
                {error?.message}
            </p>

            <button onClick={() => navigate('/')} className='myButton flex items-center gap-3'>
                <FaArrowLeft className="h-6 w-6 text-[#757575]" />
                Back To Home</button>

        </div>
    )
}

export default ErrorPage