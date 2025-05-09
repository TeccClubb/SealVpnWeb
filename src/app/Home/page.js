'use client';

import BrowseCountries from '@/components/homeSections/browseCountry';
import DeviceAppsSection from '@/components/homeSections/DeviceAppsSection';
import FeaturesSection from '@/components/homeSections/featuresSection';
import PartnersSection from '@/components/partnersSection/partnersSection';
 
import Image from 'next/image';
import VpnFeature from '@/components/homeSections/vpn-feature';
import DawnloadSection from '@/components/homeSections/dawnloadSection';
import FaqTestimonialSection from '@/components/pricingSection/frequnetQuestion';
import FAQSection from '@/components/homeSections/frequentQuestionSection';
// import BearImg from '/public/bear.png'; // Make sure this image exists
import { useEffect } from 'react';
import { Sidebar } from 'lucide-react';

export default function HomePage() {

  


  
  return (
    <div className="w-full bg-white">
      <section  className="w-full py-10 flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-20 px-4 md:px-20">
        {/* Left Text Section */}
        <div  className=" text-center md:text-left max-w-xl flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 leading-snug">
            A more secure way <br /> to <span className="text-black font-bold">browse the web</span>
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            SeeVpn encrypts your internet connection to keep <br className="hidden md:block" />
            your online activity private on any network.
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="bg-teal-400 hover:bg-teal-500 text-white text-sm md:text-base px-6 py-2 rounded-full transition">
              Spring Sale! Get 67% off
            </button>
            
            <p className="mt-2 text-gray-500 text-xs md:text-sm">
              Your first year of SeeVpn for $3.99/mo $10.99 $8.99 USD
            </p>
          </div>
        </div>

        {/* Right Bear Image */}
        <div  className="flex-1 flex justify-center">
          <img className='w-[400px]' src='imageofHero.png'></img>
        </div>
      </section>

      {/* Logos / Partners Section */}
     <div >  
        <PartnersSection></PartnersSection>
     </div>
     <div >
        <DeviceAppsSection></DeviceAppsSection>
     </div>
     
     <div >
      <FeaturesSection  ></FeaturesSection>
     </div>
     <div >
      <BrowseCountries></BrowseCountries>
     </div>
     <div >
      <VpnFeature></VpnFeature>
     </div>
     <div >
       <FAQSection></FAQSection>
     </div>
     <div >
      <DawnloadSection></DawnloadSection>
     </div>
     
    </div>
  );
}
