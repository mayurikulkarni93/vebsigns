import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import ADADHero from './ADADHero'
import ADADConsultingSection from './ADADConsultingSection'
import ADADConsultingOverview from './ADADConsultingOverview'
import ADADOurExpertise from './ADADOurExpertise'
import ADADBenefitsSection from './ADADBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const ADADHome = () => {
    return (
        <div>
            <SEO
                title="App Design & Development Services | Vebsigns Technologies"
                description="Vebsigns Technologies offers professional app design and development services, creating visually appealing, user-friendly, and high-performance mobile applications tailored to your business needs."
                keywords="App design, app development, mobile app development, Vebsigns Technologies, UI/UX design, cross-platform apps, native apps, custom mobile applications"
                canonical="https://vebsigns.com/app-design"
            />


            <Header />
            <ADADHero />
            <ADADConsultingSection />
            <ADADConsultingOverview />
            <ADADOurExpertise />
            <ADADBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default ADADHome
