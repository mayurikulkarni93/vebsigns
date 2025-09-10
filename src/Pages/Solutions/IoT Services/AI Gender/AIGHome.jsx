import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import AIGHero from './AIGHero'
import AIGConsultingSection from './AIGConsultingSection'
import AIGConsultingOverview from './AIGConsultingOverview'
import AIGOurExpertise from './AIGOurExpertise'
import AIGBenefitsSection from './AIGBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const AIGHome = () => {
    return (
        <div>
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
