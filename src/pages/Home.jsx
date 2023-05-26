import React from 'react'
import ChefContainer from '../components/ChefContainer/ChefContainer'
import HeroSection from '../components/HeroSection/HeroSection'
import CountDown from '../components/CountDown/CountDown'
import Testimonial from '../components/Testimonial/Testimonial'

function Home() {

  return (
    <>
      <HeroSection />
      <CountDown />
      <ChefContainer />
       <Testimonial />
    </>
  )
}

export default Home