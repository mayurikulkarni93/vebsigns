import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import GENAIHero from './GENAIHero'
import GENAIConsultingSection from './GENAIConsultingSection'
import GENAIConsultingOverview from './GENAIConsultingOverview'
import GENAIOurExpertise from './GENAIOurExpertise'
import GENAIBenefitsSection from './GENAIBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const GENAIHome = () => {
    return (
        <div>
            <SEO
                title="Generative AI Solutions | Vebsigns Technologies"
                description="Vebsigns Technologies offers Generative AI solutions to create intelligent content, automate processes, and enhance creativity using advanced AI models for businesses."
                keywords="Generative AI, Vebsigns Technologies, AI content generation, AI automation, creative AI solutions, machine learning, artificial intelligence services"
                canonical="https://vebsigns.com/gen-ai"
            />

            <Header />
            <GENAIHero />
            <GENAIConsultingSection />
            <GENAIConsultingOverview />
            <GENAIOurExpertise />
            <GENAIBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default GENAIHome
