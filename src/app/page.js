"use client";

import BrowseCountries from "@/components/homeSections/browseCountry";
import DeviceAppsSection from "@/components/homeSections/DeviceAppsSection";
import FeaturesSection from "@/components/homeSections/featuresSection";
import PartnersSection from "@/components/partnersSection/partnersSection";

import VpnFeature from "@/components/homeSections/vpn-feature";
import DownloadSection from "@/components/homeSections/downloadSection";
import FAQSection from "@/components/homeSections/frequentQuestionSection";
import SpringSaleSection from "@/components/homeSections/springSeleSection";

export default function HomePage() {
  return (
    <div className="w-full bg-white">
       <SpringSaleSection />

      {/* Logos / Partners Section */}
        <PartnersSection />
        <DeviceAppsSection />

        <FeaturesSection />
        <BrowseCountries />
        <VpnFeature />
        <FAQSection />
        <DownloadSection />
    </div>
  );
}
