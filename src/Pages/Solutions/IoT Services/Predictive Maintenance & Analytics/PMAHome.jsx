import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import PMAHero from './PMAHero'
import PMAConsultingSection from './PMAConsultingSection'
import PMAConsultingOverview from './PMAConsultingOverview'
import PMAOurExpertise from './PMAOurExpertise'
import PMABenefitsSection from './PMABenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const PMAHome = () => {
    return (
        <div>
            <Header />
            <PMAHero />
            <PMAConsultingSection />
            <PMAConsultingOverview />
            <PMAOurExpertise />
            <PMABenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default PMAHome
