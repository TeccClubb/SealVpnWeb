"use client";

import "./footer.css";
import Link from "next/link";
import FacebookIcon from "../icon/FacebookIcon";
import InstagramIcon from "../icon/InstagramIcon";
import TwitterIcon from "../icon/TwitterIcon";
import TelegramIcon from "../icon/TelegramIcon";

export default function Footer() {
  

  return (
    <div>
      <footer className="bg-gray-100 py-8 text-sm">
        <div
          className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-gray-600"
          
        >
          {/* SEELVPN */}
          <div className="min-w-[150px]" >
            <h3 className="font-bold mb-2">SEEL VPN</h3>
            <ul className="space-y-1">
              <li><Link href="/what-is-vpn">What is a VPN?</Link></li>
              <li><Link href="/download-device">Downloads</Link></li>
              <li><Link href="/vpnFeature">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/Dashboard/accountSetting">My Account</Link></li>
            </ul>
          </div>

          {/* APPS */}
          <div className="min-w-[150px]"  >
            <h3 className="font-bold mb-2">APPS</h3>
            <ul className="space-y-1">
              <li><Link href="/Download?device-name=iPhone-or-iPad&download-link=">iPhone & iPad</Link></li>
              <li><Link href="/Download?device-name=Android&download-link=">Android</Link></li>
              <li><Link href="/Download?device-name=MAC&download-link=">Mac</Link></li>
              <li><Link href="/Download?device-name=Windows&download-link=">Windows</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="min-w-[150px]">
            <h3 className="font-bold mb-2">COMPANY</h3>
            <ul className="space-y-1">
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div className="min-w-[150px]"  >
            <h3 className="font-bold mb-2">FOLLOW US</h3>
            <div className="flex space-x-3">
              <Link href="#" target="_blank"><FacebookIcon className="hover:text-[#1877F2]" /></Link>
              <Link href="#" target="_blank"><InstagramIcon className="hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 hover:rounded" /></Link>
              <Link href="#" target="_blank"><TwitterIcon className="hover:text-[#1DA1F2]" /></Link>
              <Link href="#" target="_blank"><TelegramIcon className="hover:text-[#0088CC]" /></Link>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className="mt-10 flex justify-center items-center gap-x-10 text-gray-400"
          
        >
          {/* Left - Logo Section */}
          <div className="text-center" >
            <p className="font-bold mb-2">Get The Seal ESSENTIALS</p>
            <img src="/seelvpnlogo.png" alt="Logo" className="w-25 h-20 mx-auto" />
          </div>

          {/* Right - Text Section */}
          <div className="text-center" >
            <p className="font-bold SeelVpn">SeelVpn</p>
            <p className="text-xs mt-1">
              ©2025 SeelVpn LLC. <br />
              Grizzly regards from Toronto, Canada
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
