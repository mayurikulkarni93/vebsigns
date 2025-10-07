import React from 'react'
import Header from '../../../../Components/Header'
import Footer from '../../../../Components/Footer'
import SEOHero from './SEOHero'
import SEOConsultingSection from './SEOConsultingSection'
import SEOConsultingOverview from './SEOConsultingOverview'
import SEOOurExpertise from './SEOOurExpertise'
import SEOBenefitsSection from './SEOBenefitSection'
import InsightsSection from '../../../HomePage/InsightsSection'
import SEO from '../../../../Components/SEO'

const SEOHome = () => {
    return (
        <div>
            <SEO
                title="SEO Services | Vebsigns Technologies"
                description="Enhance your online presence with Vebsigns Technologies' expert SEO services. We offer tailored strategies to boost your website's visibility and drive organic traffic."
                keywords="SEO services, Vebsigns Technologies, search engine optimization, digital marketing, website optimization, organic traffic, SEO strategy, online visibility"
                canonical="https://vebsigns.com/seo-services"
            />

            <Header />
            <SEOHero />
            <SEOConsultingSection />
            <SEOConsultingOverview />
            <SEOOurExpertise />
            <SEOBenefitsSection />
            <InsightsSection />
            <Footer />
        </div>
    )
}

export default SEOHome
