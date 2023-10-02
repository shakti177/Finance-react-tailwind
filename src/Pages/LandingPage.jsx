import React from 'react'
import Analytics from '../components/Analytics/Analytics'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Analytics/>
        <Newsletter/>
    </div>
  )
}

export default LandingPage