import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import PMAHero from './PMAHero'
import PMAConsultingSection from './PMAConsultingSection'
import PMAConsultingOverview from './PMAConsultingOverview'
import PMAOurExpertise from './PMAOurExpertise'
import PMABenefitsSection from './PMABenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const PMAHome = () => {
    return (
        <div>
            <SEO
                title="Predictive Maintenance Services | Vebsigns Technologies"
                description="Vebsigns Technologies offers advanced predictive maintenance solutions leveraging IoT sensors, AI analytics, and real-time monitoring to anticipate equipment failures and optimize maintenance schedules."
                keywords="Predictive maintenance, Vebsigns Technologies, IoT sensors, AI analytics, equipment monitoring, maintenance optimization, industrial IoT, smart maintenance solutions"
                canonical="https://vebsigns.com/predictive-maintenance"
            />

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
