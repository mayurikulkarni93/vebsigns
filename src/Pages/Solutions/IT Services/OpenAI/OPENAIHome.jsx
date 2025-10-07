import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import OPENAIHero from './OPENAIHero'
import OPENAIConsultingSection from './OPENAIConsultingSection'
import OPENAIConsultingOverview from './OPENAIConsultingOverview'
import OPENAIOurExpertise from './OPENAIOurExpertise'
import OPENAIBenefitsSection from './OPENAIBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const OPENAIHome = () => {
    return (
        <div>
            <SEO
                title="OpenAI Consulting Services | Vebsigns Technologies"
                description="Vebsigns Technologies provides expert OpenAI consulting services to help businesses integrate AI models, optimize workflows, and leverage AI-driven solutions effectively."
                keywords="OpenAI consulting, Vebsigns Technologies, AI consulting, OpenAI integration, AI solutions, AI workflow optimization, machine learning services, artificial intelligence consulting"
                canonical="https://vebsigns.com/openai-consulting"
            />

            <Header />
            <OPENAIHero />
            <OPENAIConsultingSection />
            <OPENAIConsultingOverview />
            <OPENAIOurExpertise />
            <OPENAIBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default OPENAIHome
