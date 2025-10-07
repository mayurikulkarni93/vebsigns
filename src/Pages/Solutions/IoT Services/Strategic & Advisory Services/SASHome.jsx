import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import SASHero from './SASHero'
import SASConsultingSection from './SASConsultingSection'
import SASConsultingOverview from './SASConsultingOverview'
import SASOurExpertise from './SASOurExpertise'
import SASBenefitsSection from './SASBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const SASHome = () => {
    return (
        <div>
            <SEO
                title="Strategic Advisory Services | Vebsigns Technologies"
                description="Vebsigns Technologies offers expert strategic advisory services to help businesses navigate complex challenges, optimize operations, and achieve sustainable growth through tailored solutions."
                keywords="Strategic advisory, business strategy, Vebsigns Technologies, operational optimization, growth strategies, business consulting, enterprise solutions"
                canonical="https://vebsigns.com/strategic-advisory-services"
            />

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
