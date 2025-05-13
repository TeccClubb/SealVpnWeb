

"use client"
import FaqTestimonialSection from "@/components/pricingSection/frequnetQuestion"
import PricingPlans from "@/components/pricingSection/pricingPlans"
import { useEffect } from "react"

import VisaSection from "@/components/pricingSection/visaSection";
export default function pricing() {

    return (
        <div>
            <div  >

                <PricingPlans></PricingPlans>
            </div>
            <div  >
                <VisaSection></VisaSection>
            </div>
            <div >

                <FaqTestimonialSection></FaqTestimonialSection>
            </div>
        </div>
    )
}