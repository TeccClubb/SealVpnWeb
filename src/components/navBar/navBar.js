'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import LogOutModal from '../logoutModal';
import { Oleo_Script } from 'next/font/google';
import { signOut, useSession } from 'next-auth/react';

const oleoScript = Oleo_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Navbar() {
  const router = useRouter();
  const { status: authStatus } = useSession()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    signOut()
    router.refresh();
    setIsLogoutModalOpen(false);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close the menu on route change
  }, [pathname]);

  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <nav className={`w-full sticky z-50 top-0 shadow-sm ${pathname === '/what-is-vpn' ? 'bg-[#F6F6F6]' : 'bg-white'}`}>
      <div className="w-[90%] md:w-[75%] mx-auto px-4 py-4 flex items-center align-center justify-between cursor-pointer">
        <Link href="/">
          <div className={`w-44 h-9 flex items-center text-4xl leading-[52px] text-neutral-600 font-bold cursor-pointer ${oleoScript.className}`}>
            SeelVpn
          </div>
        </Link>

        <div className="flex items-center space-x-6">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-600">
            <Link
              href="/pricing"
              className={`hover:text-teal-700 ${pathname === '/pricing' ? 'text-teal-700' : ''}`}
            >
              Plans
            </Link>

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`flex items-center cursor-pointer gap-1 hover:text-teal-700 ${pathname === '/what-is-vpn' || pathname === '/vpnFeature' ? 'text-teal-700 font-medium' : ''}`}>
                What is a VPN?
                <ChevronDown className="w-4 h-4" />
              </div>

              <div
                className={`absolute top-full left-0 mt-2 w-44 bg-white rounded-lg shadow-lg text-sm z-10 py-5 px-3 transition-all duration-200 ${
                  isDropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/what-is-vpn"
                  className={`block px-4 py-2 rounded-lg hover:text-teal-700 ${
                    pathname === '/what-is-vpn' ? 'text-teal-700 font-medium' : ''
                  }`}
                >
                  Why Vpn?
                </Link>
                <Link
                  href="/vpnFeature"
                  className={`block px-4 py-2 rounded-lg hover:text-teal-700 ${
                    pathname === '/vpnFeature' ? 'text-teal-700 font-medium' : ''
                  }`}
                >
                  Feature
                </Link>
              </div>
            </div>

            <Link
              href="/download-device"
              className={`hover:text-teal-700 ${pathname === '/download-device' ? 'text-teal-700' : ''}`}
            >
              Download
            </Link>

            <Link href="/help" className={`hover:text-teal-700 block ${pathname === '/help' ? 'text-teal-700' : ''}`}>Help</Link>
          </div>

          {/* Right CTA Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            {authStatus === "authenticated" && (
              <>
                <span
                  onClick={() => setIsLogoutModalOpen(true)}
                  className="px-4 py-2 rounded-full bg-white border border-teal-700/30 text-black text-sm hover:bg-teal-700 hover:text-white transition duration-200 cursor-pointer"
                >
                  Log Out
                </span>
                <Link
                  href="/Dashboard"
                  className="ml-4 px-4 py-2 rounded-full border border-teal-700/30 bg-teal-600 text-white text-sm hover:bg-teal-700 transition duration-200"
                >
                  Client Area
                </Link>
              </>
            )}
            
            {authStatus === "unauthenticated" && (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 rounded-full bg-white border border-teal-700/30 text-black text-sm hover:bg-teal-700 hover:text-white transition duration-200"
                >
                  Log In
                </Link>
                <Link
                  href="/pricing"
                  className="ml-4 px-4 py-2 rounded-full bg-teal-600 text-white text-sm hover:bg-teal-700 transition duration-200"
                >
                  Get SeelVpn
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden text-black mt-1">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white px-6 pb-4 flex flex-col space-y-3 text-gray-700 text-base items-center z-40 shadow-md">
          <Link
            href="/pricing"
            className={`hover:text-teal-700 ${pathname === '/pricing' ? 'text-teal-700' : ''}`}
          >
            Plans
          </Link>

          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer hover:text-teal-700">
              What is a VPN? 
            </summary>
            <div className="ml-4 mt-2 space-y-2">
              <Link
                href="/what-is-vpn"
                className={`hover:text-teal-700 ${pathname === '/what-is-vpn' ? 'text-teal-700' : ''}`}
              >
                - Why VPN?
              </Link>
              <Link
                href="/vpnFeature"
                className={`hover:text-teal-700 block ${pathname === '/vpnFeature' ? 'text-teal-700' : ''}`}
              >
                - Feature
              </Link>
            </div>
          </details>

          <Link
            href="/download-device"
            className={`hover:text-teal-700 block ${pathname === '/download-device' ? 'text-teal-700' : ''}`}
          >
            Download
          </Link>
          <Link href="/help" className={`hover:text-teal-700 block ${pathname === '/help' ? 'text-teal-700' : ''}`}>
            Help
          </Link>

          {authStatus === "authenticated" && (
            <>
              <span
                onClick={() => setIsLogoutModalOpen(true)}
                className="block hover:text-teal-700 cursor-pointer"
              >
                Log Out
              </span>
              <Link
                href="/Dashboard"
                className="w-[120px] text-center px-4 py-2 rounded-full bg-teal-600 text-white text-base hover:bg-teal-700 transition duration-200 block"
              >
                Client Area
              </Link>
            </>
          )}
          {authStatus === "unauthenticated" && (
            <>
              <Link href="/login" className="block hover:text-teal-700">Log In</Link>
              <Link
                href="/pricing"
                className="inline-block w-[130px] text-center mt-2 px-4 py-2 rounded-full bg-teal-600 text-white text-base hover:bg-teal-700 transition duration-200"
              >
                Get SeelVpn
              </Link>
            </>
          )}
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
