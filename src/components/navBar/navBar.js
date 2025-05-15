'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import LogOutModal from '../logoutModal';
import Cookies from "js-cookie";
import { Oleo_Script } from 'next/font/google';

const oleoScript = Oleo_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // State to hold user data
  const router = useRouter();
  const pathname = usePathname(); // Get current route


  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Logout modal

  const handleLogout = () => {
    console.log("User logged out");

    // ✅ Remove token from local storage
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");

    // ✅ Remove token from cookies
    Cookies.remove("access_token", { path: "/" });

    // ✅ Redirect to login page
    window.location.href = "/login";

    // ✅ Close modal (if you're using one)
    setIsLogoutModalOpen(false);
  };


useEffect(() => {
  const handleStorageChange = () => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  };

  window.addEventListener("storage", handleStorageChange);
  return () => window.removeEventListener("storage", handleStorageChange);
}, []);
useEffect(() => {
  const storedUser = localStorage.getItem("user");
  setUser(storedUser ? JSON.parse(storedUser) : null);
}, [pathname]);






  return (
    <nav className={`w-full sticky z-50 top-0 shadow-sm ${pathname === '/what-is-vpn' ? 'bg-[#F6F6F6]' : 'bg-white'}`}>
      <div className="w-[85%] mx-auto px-4 py-3 flex items-center justify-between cursor-pointer">
        {/* Left Section (Logo) */}
        <div className={`w-44 h-9 flex items-center text-4xl leading-[52px] text-neutral-600 font-bold ${oleoScript.className}`}>
          SeelVpn
        </div>



        {/* Right Section (Nav + CTA) */}
        <div className="flex items-center space-x-6">
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
                  <Link href="/what-is-vpn" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Why VPN?</Link>
                  <Link href="/vpnFeature" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Feature</Link>
                  <Link href="#" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">Online Privacy</Link>
                  <Link href="#" onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 hover:bg-gray-100">VPN for WFH</Link>
                </div>
              )}
            </div>

            <Link href="Download" className="hover:text-black">Download</Link>
            <Link href="#" className="hover:text-black">Help</Link>
          </div>

          {/* Right CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            {
              user ? (
                <>

                <span
                  onClick={() => setIsLogoutModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-white border border-neutral-300 text-black text-sm hover:bg-teal-500 hover:text-white transition"
                >
                  Log Out
                </span>
                  <Link
              href="/Dashboard"
              className="ml-4 px-4 py-2 rounded-full bg-teal-400 text-white text-sm hover:bg-teal-500 transition"
            >
              Client Area
            </Link>
                </>
                
              ) : (
                <>

                <Link
                  href="/login"
                  className="px-4 py-2 rounded-full bg-white border border-neutral-300 text-black text-sm hover:bg-teal-500 hover:text-white transition"
                >
                  Log In
                </Link>
                  <Link
              href="/pricing"
              className="ml-4 px-4 py-2 rounded-full bg-teal-400 text-white text-sm hover:bg-teal-500 transition"
            >
              Get SeeVpn
            </Link>
                </>
              )
            }
          
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden text-black">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 text-gray-700 text-sm">
          <Link href="/pricing" className="block hover:text-black">Plans</Link>
          <details className="group">
            <summary onClick={() => setIsDropdownOpen(true)} className="flex items-center justify-between cursor-pointer hover:text-black">
              What is a VPN?
            </summary>
            {
              isDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/what-is-vpn" onClick={() => setIsDropdownOpen(false)} className="block hover:text-black">Why VPN?</Link>
                  <Link href="/vpnFeature" onClick={() => setIsDropdownOpen(false)} className="block hover:text-black">Feature</Link>
                  <Link href="#" onClick={() => setIsDropdownOpen(false)} className="block hover:text-black">Online Privacy</Link>
                  <Link href="#" onClick={() => setIsDropdownOpen(false)} className="block hover:text-black">VPN for WFH</Link>
                </div>
              )
            }

          </details>
          <Link href="/download-device" className="block hover:text-black">Download</Link>
          <Link href="#" className="block hover:text-black">Help</Link>
          {
            user ? (
              <>
              <span onClick={() => setIsLogoutModalOpen(true)} className="block hover:text-black">Log Out</span>
               <Link
              href="/Dashboard"
              className=" px-4 py-2 rounded-full bg-teal-400 text-white text-sm hover:bg-teal-500 transition"
            >
              Client Area
            </Link>
              </>
            ) : (
              <>

              <Link href="/login" className="block hover:text-black">Log In</Link>
                <Link
            href="/pricing"
            className="inline-block mt-2 px-4 py-2 rounded-full bg-teal-400 text-white text-sm hover:bg-teal-500 transition"
          >
            Get SeeVpn
          </Link>
              </>
            )
          }
        
        </div>

      )}
      <LogOutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </nav>
  );
}
