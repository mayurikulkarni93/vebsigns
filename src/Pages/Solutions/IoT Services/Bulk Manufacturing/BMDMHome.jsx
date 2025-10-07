import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import BMDMHero from './BMDMHero'
import BMDMConsultingSection from './BMDMConsultingSection'
import BMDMConsultingOverview from './BMDMConsultingOverview'
import BMDMOurExpertise from './BMDMOurExpertise'
import BMDMBenefitsSection from './BMDMBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const BMDMHome = () => {
    return (
        <div>
            <SEO
                title="Bulk Manufacturing & Device Management | Vebsigns Technologies"
                description="Vebsigns Technologies specializes in bulk manufacturing and device management services, offering scalable production solutions and efficient device lifecycle management for businesses."
                keywords="Bulk manufacturing, device management, Vebsigns Technologies, scalable production, device lifecycle management, industrial automation, manufacturing solutions, IoT device management"
                canonical="https://vebsigns.com/bulk-manufacturing"
            />

            <Header />
            <BMDMHero />
            <BMDMConsultingSection />
            <BMDMConsultingOverview />
            <BMDMOurExpertise />
            <BMDMBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default BMDMHome
