'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import LogOutModal from '../logoutModal';
import { Oleo_Script } from 'next/font/google';
import { useUserCookie } from '../use-cookies';

const oleoScript = Oleo_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export default function Navbar() {
  const router = useRouter();
  const { user, removeUserCookie } = useUserCookie();
  const [isMounted, setIsMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route
  const dropdownRef = useRef(null);

  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Logout modal

  const handleLogout = () => {
    removeUserCookie();
    router.refresh();
    setIsLogoutModalOpen(false);
  };

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    <nav className={`w-full sticky z-50 top-0 shadow-sm ${pathname === '/what-is-vpn' ? 'bg-[#F6F6F6]' : 'bg-white'}`}>
      <div className="w-[85%] mx-auto px-4 py-3 flex items-center justify-between cursor-pointer">
        {/* Left Section (Logo) */}


        <Link href="/">
          <div className={`w-44 h-9 flex items-center text-4xl leading-[52px] text-neutral-600 font-bold cursor-pointer ${oleoScript.className}`}>
            SeelVpn
          </div>
        </Link>




        {/* Right Section (Nav + CTA) */}
        <div className="flex items-center space-x-6">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-600">
            <Link
              href="/pricing"
              className={`hover:text-black ${pathname === '/pricing' ? 'text-teal-500 font-semibold' : ''}`}
            >
              Plans
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center cursor-pointer gap-1 hover:text-black"
              >
                What is a VPN?
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-6 left-0 mt-2 w-44 bg-white border rounded shadow-md text-sm z-10">
                  <Link
                    href="/what-is-vpn"
                    onClick={() => setIsDropdownOpen(false)}
                    className={`block px-4 py-2 hover:bg-gray-100 ${pathname === '/what-is-vpn' ? 'bg-gray-100 font-medium text-teal-600' : ''}`}
                  >
                    Why VPN?
                  </Link>

                  <Link
                    href="/vpnFeature"
                    onClick={() => setIsDropdownOpen(false)}
                    className={`block px-4 py-2 hover:bg-gray-100 ${pathname === '/vpnFeature' ? 'bg-gray-100 font-medium text-teal-600' : ''}`}
                  >
                    Feature
                  </Link>

                  {/* <Link
                    href="/vpnFeature"
                    onClick={() => setIsDropdownOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Feature
                  </Link> */}
                </div>
              )}
            </div>


            <Link
              href="/download-device"
              className={`hover:text-black ${pathname === '/download-device' ? 'text-teal-500 font-semibold' : ''}`}
            >
              Download
            </Link>

            <Link href="/help" className="hover:text-black">Help</Link>
          </div>

          {/* Right CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            {isMounted && user && (
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

            )}

            {isMounted && !user && (
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
          <Link href="/pricing"
            className={`hover:text-black ${pathname === '/pricing' ? 'text-teal-500 font-semibold' : ''}`}

          >Plans</Link>
          <details className="group"  ref={dropdownRef}>
            <summary onClick={() => setIsDropdownOpen(true)} className="flex items-center justify-between cursor-pointer hover:text-black">
              What is a VPN?
            </summary>
            {
              isDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link href="/what-is-vpn" onClick={() => setIsDropdownOpen(false)}
                    className={`hover:text-black ${pathname === '/what-is-vpn' ? 'text-teal-500 font-semibold' : ''}`}

                  >
                    Why VPN?</Link>
                  <Link href="/vpnFeature" onClick={() => setIsDropdownOpen(false)}
                                      className={`hover:text-black block ${pathname === '/vpnFeature' ? 'text-teal-500 font-semibold' : ''}`}

                   >Feature</Link>
                  {/* <Link href="#" onClick={() => setIsDropdownOpen(false)} className="block hover:text-black">Online Privacy</Link> */}
                  {/* <Link href="#" onClick={() => setIsDropdownOpen(false)} className="block hover:text-black">VPN for WFH</Link> */}
                </div>
              )
            }

          </details>
          <Link href="/download-device"
            className={`hover:text-black block ${pathname === '/download-device' ? 'text-teal-500 font-semibold' : ''}`}

          >Download</Link>
          <Link href="/help" className="block hover:text-black">Help</Link>
          {isMounted && user && (
            <>
              <span onClick={() => setIsLogoutModalOpen(true)} className="block hover:text-black">Log Out</span>
              <Link
                href="/Dashboard"
                className=" px-4 py-2 rounded-full bg-teal-400 text-white text-sm hover:bg-teal-500 transition"
              >
                Client Area
              </Link>
            </>
          )}

          {isMounted && !user && (
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
