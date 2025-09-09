import React from 'react'
import AIMLHero from './AIMLHero'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import AIConsultingSection from './AIConsulting'
import AIConsultingOverview from './AIConsultingOverview'
import OurExpertise from './OurExpertise'
import BenefitsSection from './BenefitsSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const AIMLHome = () => {
    return (
        <div>
            <Header />
            <AIMLHero />
            <AIConsultingSection />
            <AIConsultingOverview />
            <OurExpertise />
            <BenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default AIMLHome
