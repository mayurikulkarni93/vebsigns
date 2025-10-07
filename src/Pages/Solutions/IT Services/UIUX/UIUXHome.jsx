import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import UIUXHero from './UIUXHero'
import UIUXConsultingSection from './UIUXConsultingSection'
import UIUXConsultingOverview from './UIUXConsultingOverview'
import UIUXOurExpertise from './UIUXOurExpertise'
import UIUXBenefitsSection from './UIUXBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import AnalyticsSlider from '../../../AboutPage/AnalyticsPlatform'
import SEO from '../../../../Components/SEO'

const UIUXHome = () => {
    return (
        <div>
            <SEO
                title="UI/UX Design Services | Vebsigns Technologies"
                description="Vebsigns Technologies offers expert UI/UX design services, creating intuitive and engaging user interfaces and experiences for web and mobile applications."
                keywords="UI/UX design, Vebsigns Technologies, user interface design, user experience design, web design, mobile app design, responsive design, wireframing, prototyping"
                canonical="https://vebsigns.com/uiux"
            />

            <Header />
            <UIUXHero />
            <UIUXConsultingSection />
            <UIUXConsultingOverview />
            <UIUXOurExpertise />
            <AnalyticsSlider />
            <UIUXBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default UIUXHome
