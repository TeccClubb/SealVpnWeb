'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const countries = [
  { name: 'Argentina', flag: 'https://flagcdn.com/w320/ar.png' },
  { name: 'Australia', flag: 'https://flagcdn.com/w320/au.png' },
  { name: 'Austria', flag: 'https://flagcdn.com/w320/at.png' },
  { name: 'Belgium', flag: 'https://flagcdn.com/w320/be.png' },
  { name: 'Brazil', flag: 'https://flagcdn.com/w320/br.png' },
  { name: 'Bulgaria', flag: 'https://flagcdn.com/w320/bg.png' },
  { name: 'Canada', flag: 'https://flagcdn.com/w320/ca.png' },
  { name: 'Chile', flag: 'https://flagcdn.com/w320/cl.png' },
  { name: 'Colombia', flag: 'https://flagcdn.com/w320/co.png' },
  { name: 'Cyprus', flag: 'https://flagcdn.com/w320/cy.png' },
  { name: 'Czech Republic', flag: 'https://flagcdn.com/w320/cz.png' },
  { name: 'Denmark', flag: 'https://flagcdn.com/w320/dk.png' },
  { name: 'Finland', flag: 'https://flagcdn.com/w320/fi.png' },
  { name: 'France', flag: 'https://flagcdn.com/w320/fr.png' },
  { name: 'Germany', flag: 'https://flagcdn.com/w320/de.png' },
  { name: 'Greece', flag: 'https://flagcdn.com/w320/gr.png' },
  { name: 'Hungary', flag: 'https://flagcdn.com/w320/hu.png' },
  { name: 'Indonesia', flag: 'https://flagcdn.com/w320/id.png' },
  { name: 'Ireland', flag: 'https://flagcdn.com/w320/ie.png' },
  { name: 'Italy', flag: 'https://flagcdn.com/w320/it.png' },
  { name: 'Japan', flag: 'https://flagcdn.com/w320/jp.png' },
  { name: 'Kenya', flag: 'https://flagcdn.com/w320/ke.png' },
  { name: 'Latvia', flag: 'https://flagcdn.com/w320/lv.png' },
  { name: 'Lithuania', flag: 'https://flagcdn.com/w320/lt.png' },
  { name: 'Malaysia', flag: 'https://flagcdn.com/w320/my.png' },
  { name: 'Mexico', flag: 'https://flagcdn.com/w320/mx.png' },
  { name: 'Moldova', flag: 'https://flagcdn.com/w320/md.png' },
  { name: 'Netherlands', flag: 'https://flagcdn.com/w320/nl.png' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/w320/nz.png' },
  { name: 'Nigeria', flag: 'https://flagcdn.com/w320/ng.png' },
  { name: 'Norway', flag: 'https://flagcdn.com/w320/no.png' },
  { name: 'Peru', flag: 'https://flagcdn.com/w320/pe.png' },
  { name: 'Philippines', flag: 'https://flagcdn.com/w320/ph.png' },
  { name: 'Poland', flag: 'https://flagcdn.com/w320/pl.png' },
  { name: 'Portugal', flag: 'https://flagcdn.com/w320/pt.png' },
  { name: 'Romania', flag: 'https://flagcdn.com/w320/ro.png' },
  { name: 'Serbia', flag: 'https://flagcdn.com/w320/rs.png' },
  { name: 'Singapore', flag: 'https://flagcdn.com/w320/sg.png' },
  { name: 'Slovenia', flag: 'https://flagcdn.com/w320/si.png' },
  { name: 'South Africa', flag: 'https://flagcdn.com/w320/za.png' },
  { name: 'South Korea', flag: 'https://flagcdn.com/w320/kr.png' },
  { name: 'Spain', flag: 'https://flagcdn.com/w320/es.png' },
  { name: 'Sweden', flag: 'https://flagcdn.com/w320/se.png' },
  { name: 'Switzerland', flag: 'https://flagcdn.com/w320/ch.png' },
  { name: 'Taiwan', flag: 'https://flagcdn.com/w320/tw.png' },
  { name: 'UK', flag: 'https://flagcdn.com/w320/gb.png' },
  { name: 'USA', flag: 'https://flagcdn.com/w320/us.png' },
];

const BrowseCountries = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-gray-900 text-white px-20 py-5">
      <div className="flex justify-center" data-aos="fade-up">
        <h1 className="font-bold text-4xl pb-4">Browse 46+ countries</h1>
      </div>
      <div className="max-w-7xl w-[87%] m-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text + Countries List */}
        <div data-aos="fade-right">
          <p className="text-gray-300 text-center mb-6">
            Browse all over the globe in our ever-expanding network of over 8000 secure VPN servers, physically located in the country you select.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-gray-100">
            {countries.map((country) => (
              <div key={country.name} className="flex items-center space-x-2">
                <img src={country.flag} alt={`${country.name} flag`} className="w-6 h-4" />
                <span>{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Globe Image */}
        <div className="flex justify-center" data-aos="fade-left">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/vpnfeatureImg/worldWide.png"
              alt="Vector Globe"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center" data-aos="zoom-in-up">
        <button className="bg-teal-400 mt-5 hover:bg-teal-500 text-white px-6 py-2 rounded-full text-sm">
          Get SeeVpn now
        </button>
      </div>
    </div>
  );
};

export default BrowseCountries;
