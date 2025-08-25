import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import HeroSection from './HeroSection'
import Testimonial from './Testimonial'
import Team from './Team'
import Stats from './Stats'
import Steps from './Steps'
import Logos from './Logos'
import BlogSection from './BlogSection'
import Integration from './Integration'
import Faq from '../Faq/Faq'
import DigitalTransformation from './DigitalTransformation'
import QuickLinks from './QuickLinks'

const Home = () => {
  return (
    <div >
      <Header/>
      <HeroSection/>
      <QuickLinks/>
      <DigitalTransformation/>
       {/* <Testimonial/> */}
      {/*<Team/>
      <Stats/>
      <Logos/>
      <Steps/>
      <BlogSection/>
      <Integration/> */}
      {/* <Faq/> */}
      <Footer/>
    </div>
  )
}

export default Home
