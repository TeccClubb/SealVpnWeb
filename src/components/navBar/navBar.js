'use client';

import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Get current route

  return (
    <nav className={`w-full shadow-sm ${pathname === '/what-is-vpn' ? 'bg-[#F6F6F6]' : 'bg-white'}`}>
      <div className="w-[90%] mx-auto px-4 py-3 flex cursor-pointer items-center justify-between">
        {/* Logo */}
        <div onClick={() => router.push("/Home")} className="text-3xl font-bold text-gray-800">
          <span className="italic">Seel</span>
          <span className="font-medium">Vpn</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6 text-gray-600">
          <Link href="/pricing" className="hover:text-black">Plans</Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 hover:text-black"
            >
              What is a VPN?
              <ChevronDown className="w-4 h-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-6 left-0 mt-2 w-44 bg-white border rounded shadow-md text-sm z-10">
                <Link href="/what-is-vpn" className="block px-4 py-2 hover:bg-gray-100">Why VPN?</Link>
                <Link href="/vpnFeature" className="block px-4 py-2 hover:bg-gray-100">Feature</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Online Privacy</Link>
                <Link href="#" className="block px-4 py-2 hover:bg-gray-100">VPN for WFH</Link>
              </div>
            )}
          </div>

          <Link href="download" className="hover:text-black">Download</Link>
          <Link href="#" className="hover:text-black">Help</Link>
          <Link href="/login" className="hover:text-black">Log In</Link>
        </div>

        {/* Right CTA Button (Desktop) */}
        <div className="hidden lg:block">
          <Link
            href="/pricing"
            className="ml-4 px-4 py-2 rounded-full bg-teal-400 text-white text-sm hover:bg-teal-500 transition"
          >
            Get SeeVpn
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 text-gray-700 text-sm">
          <Link href="#" className="block hover:text-black">Plans</Link>
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer hover:text-black">
              What is a VPN?
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              <Link href="#" className="block hover:text-black">Why VPN?</Link>
              <Link href="#" className="block hover:text-black">Feature</Link>
              <Link href="#" className="block hover:text-black">Online Privacy</Link>
              <Link href="#" className="block hover:text-black">VPN for WFH</Link>
            </div>
          </details>
          <Link href="#" className="block hover:text-black">Download</Link>
          <Link href="#" className="block hover:text-black">Help</Link>
          <Link href="#" className="block hover:text-black">Log In</Link>
          <Link
            href="#"
            className="inline-block mt-2 px-4 py-2 rounded-full bg-teal-400 text-white text-sm hover:bg-teal-500 transition"
          >
            Get SeeVpn
          </Link>
        </div>
      )}
    </nav>
  );
}
