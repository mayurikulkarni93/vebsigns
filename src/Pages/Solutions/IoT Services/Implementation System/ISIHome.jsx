import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import ISIHero from './ISIHero'
import ISIConsultingSection from './ISIConsultingSection'
import ISIConsultingOverview from './ISIConsultingOverview'
import ISIOurExpertise from './ISIOurExpertise'
import ISIBenefitsSection from './ISIBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const ISIHome = () => {
    return (
        <div>
            <SEO
                title="Implementation & System Integration | Vebsigns Technologies"
                description="Seamlessly integrate IoT devices, platforms, and enterprise systems with secure and efficient implementation strategies tailored to your business."
                keywords="IoT system integration, Vebsigns Technologies, enterprise system integration, IoT device integration, digital transformation, secure implementation, automation solutions"
                canonical="https://vebsigns.com/implementation-system-integration"
            />

            <Header />
            <ISIHero />
            <ISIConsultingSection />
            <ISIConsultingOverview />
            <ISIOurExpertise />
            <ISIBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default ISIHome
