


'use client';

import Image from 'next/image';

const countries = [
  { name: 'Argentina', flag: '🇦🇷' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Austria', flag: '🇦🇹' },
  { name: 'Belgium', flag: '🇧🇪' },
  { name: 'Brazil', flag: '🇧🇷' },
  { name: 'Bulgaria', flag: '🇧🇬' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Chile', flag: '🇨🇱' },
  { name: 'Colombia', flag: '🇨🇴' },
  { name: 'Cyprus', flag: '🇨🇾' },
  { name: 'Czech Republic', flag: '🇨🇿' },
  { name: 'Denmark', flag: '🇩🇰' },
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
  { name: 'New Zealand', flag: '🇳🇿' },
  { name: 'Nigeria', flag: '🇳🇬' },
  { name: 'Norway', flag: '🇳🇴' },
  { name: 'Peru', flag: '🇵🇪' },
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
  { name: 'Taiwan', flag: '🇹🇼' },
  { name: 'UK', flag: '🇬🇧' },
  { name: 'USA', flag: '🇺🇸' },
];

const BrowseCountries = () => {
  return (
    <div className="bg-gray-900 text-white px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Globe Image */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Replace with actual image */}
            <Image
              src="/borwseCountry.png"
              alt="Vector Globe"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Text + Countries List */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse the internet from <span className="text-orange-400">47 countries</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Discover something new, or tunnel back home to enjoy your favourite websites and apps while travelling or living abroad.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm text-gray-100">
  {countries.map((country) => (
    <div key={country.name} className="flex items-center space-x-2">
      <span>{country.flag}</span>
      <span>{country.name}</span>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default BrowseCountries;
