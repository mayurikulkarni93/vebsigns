import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import WDADHero from './WDADHero'
import WDADConsultingSection from './WDADConsultingSection'
import WDADConsultingOverview from './WDADConsultingOverview'
import WDADOurExpertise from './WDADOurExpertise'
import WDADBenefitsSection from './WDADBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const WDADHome = () => {
    return (
        <div>
            <SEO
                title="Website Design & Development Services | Vebsigns Technologies"
                description="Vebsigns Technologies provides professional website design and development services, creating responsive, user-friendly, and high-performing websites tailored to your business needs."
                keywords="Website design, website development, Vebsigns Technologies, web development services, responsive websites, UI/UX design, custom web development, business websites"
                canonical="https://vebsigns.com/website-design"
            />

            <Header />
            <WDADHero />
            <WDADConsultingSection />
            <WDADConsultingOverview />
            <WDADOurExpertise />
            <WDADBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default WDADHome
