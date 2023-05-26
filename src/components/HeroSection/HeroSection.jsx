import React from 'react'
import Lottie from "lottie-react";
import wok_pan from "../../assets/img_json_data/25523-wok-pan-food-fry-on-fire.json";
import chef from "../../assets/img_json_data/chef-dancing.json";
import '../../index.css'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='grid lg:grid-cols-2 gap-5 items-center mx-5 my-10 lg:mx-16'>
      <div>
       <span className="text-lg text-[#757575] border-b border-[#757575]  ">Welcome To <span className='text-[#F08428]'> Italian cuisine</span></span>
        <h2 className='font-bold text-5xl leading-[58px] md:text-6xl md:leading-[72px] mt-4'>Hunt Cook to get rid from Food Hunger </h2>
        <p className='font-normal text-lg text-[#757575] my-6'>Food is the ingredients that binds Us together...
          Nothing brings people together like Good Food...
          Food is any substance consumed to provide nutritional support for an organism</p>
        <div className=''>
          <button className='myButton myButtonHover'>Get Started</button>
        </div>
      </div>
      <div className='flex'>
        <Lottie className='' animationData={wok_pan} loop={true} />;
        <Lottie className='' animationData={chef} loop={true} />;
      </div>
    </div>
  )
}

export default HeroSection