"use client";

import "./footer.css";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "../icon/FacebookIcon";
import InstagramIcon from "../icon/InstagramIcon";
import TwitterIcon from "../icon/TwitterIcon";
import TelegramIcon from "../icon/TelegramIcon";

export default function Footer() {
  const linkClasses = "hover:underline hover:opacity-80";
  const sectionClasses = "min-w-[150px]";
  const socialLinkProps = {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  // Grouping links and sections
  const footerLinks = [
    {
      title: "SEEL VPN",
      links: [
        { href: "/what-is-vpn", label: "What is a VPN?" },
        { href: "/download-device", label: "Downloads" },
        { href: "/vpnFeature", label: "Features" },
        { href: "/pricing", label: "Pricing" },
        { href: "/Dashboard/accountSetting", label: "My Account" },
      ],
    },
    {
      title: "APPS",
      links: [
        { href: "/Download?device-name=iPhone-or-iPad&download-link=", label: "iPhone & iPad" },
        { href: "/Download?device-name=Android&download-link=", label: "Android" },
        { href: "/Download?device-name=MAC&download-link=", label: "Mac" },
        { href: "/Download?device-name=Windows&download-link=", label: "Windows" },
      ],
    },
    {
      title: "COMPANY",
      links: [
        { href: "/about-us", label: "About Us" },
        { href: "/privacy-policy", label: "Privacy Policy" },
        { href: "/terms-of-service", label: "Terms of Service" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FacebookIcon className="hover:text-[#1877F2]" />, label: "Facebook" },
    { icon: <InstagramIcon className="hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:via-pink-500 hover:to-purple-500 hover:rounded" />, label: "Instagram" },
    { icon: <TwitterIcon className="hover:text-[#1DA1F2]" />, label: "Twitter" },
    { icon: <TelegramIcon className="hover:text-[#0088CC]" />, label: "Telegram" },
  ];

  return (
    <footer className="bg-gray-100 py-8 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8">
        {footerLinks.map((section, index) => (
          <div key={index} className={sectionClasses}>
            <h3 className="font-bold mb-2">{section.title}</h3>
            <ul className="space-y-1">
              {section.links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className={linkClasses}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* FOLLOW US */}
        <div className={sectionClasses}>
          <h3 className="font-bold mb-2">FOLLOW US</h3>
          <div className="flex space-x-3">
            {socialLinks.map((social, idx) => (
              <Link href="#" {...socialLinkProps} key={idx} aria-label={social.label}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 flex justify-center items-center gap-x-10 text-gray-400">
        {/* Logo Section */}
        <div className="text-center">
          <p className="font-bold mb-2">Get The Seal ESSENTIALS</p>
          <Image
            src="/seelvpnlogo.png"
            alt="SeelVPN Logo"
            width={100}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* Text Section */}
        <div className="text-center">
          <p className="font-bold">SeelVpn</p>
          <p className="text-xs mt-1">
            ©2025 SeelVpn LLC. <br />
            Grizzly regards from Toronto, Canada
          </p>
        </div>
      </div>
    </footer>
  );
}
