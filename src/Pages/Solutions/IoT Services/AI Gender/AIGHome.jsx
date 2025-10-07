import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import AIGHero from './AIGHero'
import AIGConsultingSection from './AIGConsultingSection'
import AIGConsultingOverview from './AIGConsultingOverview'
import AIGOurExpertise from './AIGOurExpertise'
import AIGBenefitsSection from './AIGBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const AIGHome = () => {
    return (
        <div>
            <SEO
                title="IoT Product Development Services | Vebsigns Technologies"
                description="Vebsigns Technologies offers end-to-end IoT product development services, including embedded hardware design, firmware development, cloud integration, and mobile app interfaces, tailored to your business needs."
                keywords="IoT product development, Vebsigns Technologies, embedded hardware design, firmware development, cloud integration, mobile app interfaces, IoT solutions, smart devices"
                canonical="https://vebsigns.com/iot-product-development"
            />

            <Header />
            <AIGHero />
            <AIGConsultingSection />
            <AIGConsultingOverview />
            <AIGOurExpertise />
            <AIGBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default AIGHome
