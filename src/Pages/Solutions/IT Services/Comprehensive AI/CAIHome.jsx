import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import CAIHero from './CAIHero'
import CAIConsultingSection from './CAIConsultingSection'
import CAIConsultingOverview from './CAIConsultingOverview'
import CAIOurExpertise from './CAIOurExpertise'
import CAIBenefitsSection from './CAIBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const CAIHome = () => {
    return (
        <div>
            <SEO
                title="Comprehensive AI Solutions | Vebsigns Technologies"
                description="Unlock the full potential of Artificial Intelligence with Vebsigns Technologies. Our end-to-end AI services include predictive analytics, automation, and intelligent systems tailored to your business needs."
                keywords="Comprehensive AI solutions, Vebsigns Technologies, Artificial Intelligence services, predictive analytics, AI automation, intelligent systems, machine learning, AI consulting"
                canonical="https://vebsigns.com/comprehensive-ai"
            />

            <Header />
            <CAIHero />
            <CAIConsultingSection />
            <CAIConsultingOverview />
            <CAIOurExpertise />
            <CAIBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default CAIHome
