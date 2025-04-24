'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';

const countries = [
  { name: 'Argentina', flag: './argentin.png' },
  { name: 'Australia', flag: '/austria.png' },
  { name: 'Austria', flag: '/austria.png' },
  { name: 'Belgium', flag: 'Bulgaria.png' },
  { name: 'Brazil', flag: '/brazil.png' },
  { name: 'Bulgaria', flag: '🇧🇬' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Chile', flag: '🇨🇱' },
  { name: 'Colombia', flag: '🇨🇴' },
  { name: 'Cyprus', flag: '/cyprus.png' },
  { name: 'Czech Republic', flag: '🇨🇿' },
  { name: 'Denmark', flag: '/danmark.png' },
  { name: 'Finland', flag: '🇫🇮' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'Hungary', flag: '🇭🇺' },
  { name: 'Indonesia', flag: '🇮🇩' },
  { name: 'Ireland', flag: '🇮🇪' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'Kenya', flag: '🇰🇪' },
  { name: 'Latvia', flag: '🇱🇻' },
  { name: 'Lithuania', flag: '🇱🇹' },
  { name: 'Malaysia', flag: '🇲🇾' },
  { name: 'Mexico', flag: '🇲🇽' },
  { name: 'Moldova', flag: '🇲🇩' },
  { name: 'Netherlands', flag: '🇳🇱' },
  { name: 'New Zealand', flag: '/newziland.png' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'Norway', flag: '🇳🇴' },
  { name: 'Peru', flag: '/peru.png' },
  { name: 'Philippines', flag: '🇵🇭' },
  { name: 'Poland', flag: '🇵🇱' },
  { name: 'Portugal', flag: '🇵🇹' },
  { name: 'Romania', flag: '🇷🇴' },
  { name: 'Serbia', flag: '🇷🇸' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'Slovenia', flag: '🇸🇮' },
  { name: 'South Africa', flag: '🇿🇦' },
  { name: 'South Korea', flag: '🇰🇷' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Sweden', flag: '🇸🇪' },
  { name: 'Switzerland', flag: '🇨🇭' },
  { name: 'Taiwan', flag: '/taiwan.png' },
  { name: 'UK', flag: '/ukflag.png' },
  { name: 'USA', flag: '🇺🇸' },
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
