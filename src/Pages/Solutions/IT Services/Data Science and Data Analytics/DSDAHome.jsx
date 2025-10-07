import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import DSDAHero from './DSDAHero'
import DSDAConsultingSection from './DSDAConsultingSection'
import DSDAConsultingOverview from './DSDAConsultingOverview'
import DSDAOurExpertise from './DSDAOurExpertise'
import DSDABenefitsSection from './DSDABenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const DSDAHome = () => {
    return (
        <div>
            <SEO
                title="Data Science Services | Vebsigns Technologies"
                description="Vebsigns Technologies provides comprehensive Data Science services including data analysis, predictive modeling, business intelligence, and actionable insights to drive smarter decisions."
                keywords="Data Science services, Vebsigns Technologies, data analysis, predictive modeling, business intelligence, AI insights, machine learning, data-driven solutions"
                canonical="https://vebsigns.com/data-science"
            />

            <Header />
            <DSDAHero />
            <DSDAConsultingSection />
            <DSDAConsultingOverview />
            <DSDAOurExpertise />
            <DSDABenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default DSDAHome
