"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./footer.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <footer className="bg-gray-100 py-8 text-sm">
        <div
          className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-gray-600"
          data-aos="fade-up"
        >
          {/* SEELVPN */}
          <div className="min-w-[150px]" data-aos="zoom-in">
            <h3 className="font-bold mb-2">SEELVPN</h3>
            <ul className="space-y-1">
              <li>What is a VPN?</li>
              <li>Download</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Help</li>
              <li>My Account</li>
            </ul>
          </div>

          {/* APPS */}
          <div className="min-w-[150px]" data-aos="zoom-in" data-aos-delay="150">
            <h3 className="font-bold mb-2">APPS</h3>
            <ul className="space-y-1">
              <li>iPhone & iPad</li>
              <li>Android</li>
              <li>Mac</li>
              <li>Windows</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="min-w-[150px]" data-aos="zoom-in" data-aos-delay="300">
            <h3 className="font-bold mb-2">COMPANY</h3>
            <ul className="space-y-1">
              <li>Blog</li>
              <li>About Us</li>
              <li>Affiliate</li>
              <li>Internet Freedom Hub</li>
              <li>Privacy Center</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div className="min-w-[150px]" data-aos="zoom-in" data-aos-delay="450">
            <h3 className="font-bold mb-2">FOLLOW US</h3>
            <div className="flex space-x-3">
              <a href="#"><img src="/Link/Facebook.png" className="w-5 h-5" /></a>
              <a href="#"><img src="/Link/Insta.png" className="w-5 h-5" /></a>
              <a href="#"><img src="/Link/Tiwitter.png" className="w-5 h-5" /></a>
              <a href="#"><img src="/Link/Telegram.png" className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div
          className="mt-10 flex justify-center items-center gap-x-10 text-gray-400"
          data-aos="fade-up"
        >
          {/* Left - Logo Section */}
          <div className="text-center" data-aos="fade-right">
            <p className="font-bold mb-2">Get The Seal ESSENTIALS</p>
            <img src="/seelvpnlogo.png" alt="Logo" className="w-28 h-20 mx-auto" />
          </div>

          {/* Right - Text Section */}
          <div className="text-center" data-aos="fade-left">
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
