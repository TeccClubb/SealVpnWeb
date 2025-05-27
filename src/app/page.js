"use client";

import BrowseCountries from "@/components/homeSections/browseCountry";
import DeviceAppsSection from "@/components/homeSections/DeviceAppsSection";
import FeaturesSection from "@/components/homeSections/featuresSection";
import PartnersSection from "@/components/partnersSection/partnersSection";

import VpnFeature from "@/components/homeSections/vpn-feature";
import DawnloadSection from "@/components/homeSections/dawnloadSection";
import FAQSection from "@/components/homeSections/frequentQuestionSection";
import Link from "next/link";
import SpringSaleSection from "@/components/homeSections/springSeleSection";

export default function HomePage() {
  return (
    <div className="w-full  bg-white">
       <SpringSaleSection></SpringSaleSection>

      {/* Logos / Partners Section */}
        <PartnersSection></PartnersSection>
        <DeviceAppsSection></DeviceAppsSection>

        <FeaturesSection></FeaturesSection>
        <BrowseCountries></BrowseCountries>
        <VpnFeature></VpnFeature>
        <FAQSection></FAQSection>
        <DawnloadSection></DawnloadSection>
    </div>
  );
}
