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
import Accordion from './Accordion'
import WorkingDiffIndustry from './WorkingDiffIndustry'
import SuccessStories from './SuccessStories'
import WhyChooseUs from './WhyChooseUs'
import BeneficialResults from './BeneficialResults'
import InsightsSection from './InsightsSection'
import OurSoftware from './Solutions/OurSoftware'
import UseCases from './UseCases'
import DrivenByData from '../AboutPage/DrivenByData'
import TestimonialNew from './TestimonialNew'
import HomeCTA from './HomeCTA'

const Home = () => {
  return (
    <div >
      <Header />
      <HeroSection />
      <QuickLinks />
      <DigitalTransformation />
      <OurSoftware />
      <UseCases />
      <DrivenByData />
      <WhyChooseUs />
      <TestimonialNew />
      <InsightsSection />
      <Faq/>
      <HomeCTA/>
      <Footer />

      {/* <Team /> */}
      {/* <BeneficialResults /> */}
      {/* <Logos /> */}
      {/* <Accordion /> */}
      {/* <WorkingDiffIndustry /> */}
      {/* <SuccessStories /> */}
      {/* <BlogSection /> */}
      {/* <Testimonial/> */}
      {/*
      <Stats/>
      <Logos/>
      <Steps/>
      <Integration/> */}
    </div>
  )
}

export default Home
