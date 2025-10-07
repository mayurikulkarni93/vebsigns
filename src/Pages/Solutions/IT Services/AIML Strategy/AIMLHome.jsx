import React from 'react'
import AIMLHero from './AIMLHero'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import AIConsultingSection from './AIConsulting'
import AIConsultingOverview from './AIConsultingOverview'
import OurExpertise from './OurExpertise'
import BenefitsSection from './BenefitsSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const AIMLHome = () => {
    return (
        <div>
            <SEO
                title="AI & ML Strategy Services | Vebsigns Technologies"
                description="Vebsigns Technologies offers AI and Machine Learning strategy services to help businesses leverage data-driven insights, predictive analytics, and intelligent automation for growth."
                keywords="AI strategy, ML strategy, Vebsigns Technologies, artificial intelligence solutions, machine learning services, predictive analytics, data-driven insights, intelligent automation"
                canonical="https://vebsigns.com/ai-ml-strategy"
            />


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
