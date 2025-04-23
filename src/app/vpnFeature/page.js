 


import FaqTestimonialSection from "@/components/pricingSection/frequnetQuestion"
import PricingPlans from "@/components/pricingSection/pricingPlans"
import BrowseCountries from "@/components/vpnFeature/browseCountry"
import EncryptionSection from "@/components/vpnFeature/encryptionSection"
import FeatureSection from "@/components/vpnFeature/featureSection"
import Performance from "@/components/vpnFeature/perfomance"
import PrivacySection from "@/components/vpnFeature/privacy"
export default function vpnFeatures(){

    return(
        <div>
            <FeatureSection></FeatureSection>

            <PrivacySection></PrivacySection>
            <Performance></Performance>
            <EncryptionSection></EncryptionSection>
            <BrowseCountries></BrowseCountries>
        </div>
    )
}