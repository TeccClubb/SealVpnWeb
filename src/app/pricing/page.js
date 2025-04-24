 

"use client"
import FaqTestimonialSection from "@/components/pricingSection/frequnetQuestion"
import PricingPlans from "@/components/pricingSection/pricingPlans"
import { useEffect } from "react"
import AOS from "aos"; // Import AOS library for animations
import 'aos/dist/aos.css'; // Import AOS styles
import VisaSection from "@/components/pricingSection/visaSection";
export default function pricing(){


    useEffect(() => {   
        const AOS = require('aos');
        AOS.init({ duration: 1200, once: true });
    }, []);

    return(
        <div>
            <div data-aos="fade-up" >

            <PricingPlans></PricingPlans>
            </div>
            <div data-aos="fade-right" >
                <VisaSection></VisaSection>
            </div>
            <div data-aos="zoom-out"> 

            <FaqTestimonialSection></FaqTestimonialSection>
            </div>
        </div>
    )
}