import React from 'react'
import CountUp from "react-countup";

function SingleBox({ele}) {
  return (
    <div className="card w-56 text-center glass">
    <div className="card-body text-white">
    <p className='flex justify-center text-[40px] md:text-[45px] mb-2 '>{ele.icon}</p>
    
    <h2 className="card-title justify-center font-bold text-primaryColor text-2xl">
    <CountUp end={ele.count} duration={10} enableScrollSpy />+</h2>
        <p className='text-gray-300 font-semibold '>{ele.title}</p>
    </div>
</div>
  )
}

export default SingleBox