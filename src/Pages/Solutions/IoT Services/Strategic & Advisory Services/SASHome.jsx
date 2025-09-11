import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import SASHero from './SASHero'
import SASConsultingSection from './SASConsultingSection'
import SASConsultingOverview from './SASConsultingOverview'
import SASOurExpertise from './SASOurExpertise'
import SASBenefitsSection from './SASBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'

const SASHome = () => {
    return (
        <div>
            <Header />
            <SASHero />
            <SASConsultingSection />
            <SASConsultingOverview />
            <SASOurExpertise />
            <SASBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default SASHome
