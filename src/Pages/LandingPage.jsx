import React from 'react'
import Analytics from '../components/Analytics/Analytics'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newsletter'
import Pricing from '../components/Pricing/Pricing'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Analytics/>
        <Newsletter/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default LandingPage