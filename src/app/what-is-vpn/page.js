"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import WhatIsVpnFirstSection from "@/components/whatIs-vpn/whats-vpn";

export default function WhatIsVPN() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <WhatIsVpnFirstSection />

      <div className="bg-white px-4 py-12 md:py-20 text-center text-gray-800" data-aos="fade-up">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">What is a VPN?</h2>

        <div className="max-w-3xl mx-auto text-sm md:text-base leading-relaxed space-y-5" data-aos="fade-up">
          <p>
            A VPN is an app that keeps your internet connection private, whether you’re connecting to unsafe public Wi-Fi or your network at home. Having a layer of security that blocks people from watching you browse helps keep you safe online, no matter where you connect from.
          </p>
          <p>
            Virtual private networks protect you by creating an encrypted “tunnel” that all of your device’s data travels through on its way to the internet. Encryption turns words and data, like text files, into secret code. If someone tries to read encrypted data without the password, they’ll see random gibberish.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-6" data-aos="zoom-in">
            <Image
              src="/whatisVpn/whatisVpn.png"
              alt="Unencrypted Data"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          <p className="text-gray-500 text-sm italic" data-aos="fade-in">
            SeelVPN makes your data unreadable between you and its destination
          </p>

          <p>
            A VPN acts as your gateway for accessing the internet privately. VPN software can be installed on most popular devices, like your phone, laptop and desktop. One important thing to remember is: a VPN protects the internet data that’s sent over your connection. You’ll still need an ISP to connect to the internet; your VPN runs on top of that connection.
          </p>
        </div>

        {/* Quotation Block */}
        <div className="bg-white px-4 py-16 md:py-24 text-center text-gray-800" data-aos="fade-up">
          <p className="text-sky-500 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-10">
            “ A VPN encrypts your internet connection to keep your online activity private on any network. ”
          </p>

          {/* Icons Block */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto mb-16">
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="100">
              <Image src="/whatIsVpn/eye.png" alt="Private Browsing Icon" width={64} height={64} />
              <p className="mt-4 text-sm text-gray-600 max-w-xs text-center">
                Your browsing is private, so you can’t be easily tracked online
              </p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="200">
              <Image src="/whatIsVpnImg/flagInBottle.png" alt="Location Change Icon" width={64} height={64} />
              <p className="mt-4 text-sm text-gray-600 max-w-xs text-center">
                Your connection looks like it's coming from another country, which unlocks some websites
              </p>
            </div>
            <div className="flex flex-col items-center" data-aos="fade-up" data-aos-delay="300">
              <Image src="/whatIsVpnImg/vpnSearch.png" alt="Encrypted Icon" width={64} height={64} />
              <p className="mt-4 text-sm text-gray-600 max-w-xs text-center">
                Your internet connection is encrypted, keeping the information you send and receive private
              </p>
            </div>
          </div>

          {/* Why VPN Section */}
          <div className="max-w-3xl mx-auto text-left" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-center mb-6">Why do I need a VPN?</h3>
            <p className="text-sm text-gray-700 mb-5">
              The reasons why you need a VPN are personal, and a little different for everyone. Some people use a VPN to bypass geo-restrictions and stay in touch with loved ones while traveling in heavily censored countries. Other people use VPNs to stay secure on public Wi-Fi. Some people just like knowing their internet service provider can’t see what they’re browsing every time they go online.
            </p>
            <p className="text-sm text-gray-700 mb-5">
              While the benefits of using a VPN are just starting to go mainstream, it wasn’t long ago that people had trouble seeing the importance of encryption. As hacking and data breaches became more common, people realized how much of their online browsing was visible to their ISP or local networks (long before there was “work” and “kids” at home). With this more broad type of VPN protection, you enjoy any kind of private protection.
            </p>
            <p className="text-sm text-gray-700">
              Just like you need protection from viruses, you need to protect yourself from privacy threats. Using a VPN gives you <span className="text-sky-500 underline">protection in a layer of encryption</span>, making it harder for people to spy on you online.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
