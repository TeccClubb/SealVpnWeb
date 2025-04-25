"use client"
import AOS from 'aos';
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';

export default function WhatIsVpnFirstSection() {
  useEffect(()=>{
    AOS.init({ duration: 1200, once: true });
   
  },[])
  const topics = [
    'What is a VPN?',
    'Why do I need a VPN?',
    'What does a VPN do and how does it work?',
    'What does a VPN client do exactly?',
    'How do I install a VPN?',
    'How do I use my VPN once it has been set up?',
    'VPN FAQ',
    'Why SeelVpn is the right VPN solution for you',
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col items-center ">
      {/* Globe Image Full Width & Left */}
      <img
        src="/whatIsVpnImg/whatsVpn-full-image.png"
        alt="Globe"
        className="w-full h-auto object-cover object-left mb-10 "
        data-aos="fade-down"
      />

      {/* Description Section */}
      <div className="max-w-2xl text-neutral-500  mb-12" data-aos="fade-up">
        <p className="mb-4" >
          If your device is connected to the internet, your internet service provider can see
          everything you do. Every search. Every file you download. Everything. To protect their
          privacy, more people are using virtual private networks, or VPN for short, to stop
          companies from tracking what they do online.
        </p>
        <p>
          To help put an end to the misinformation surrounding VPN, we’ll explain what a VPN is,
          how it works, why you need one, and what a VPN can do for you.
        </p>
      </div>

      {/* Table of Contents Heading */}
      <h2 className="text-2xl font-bold text-gray-800  mb-6">
        VPN Overview: Table of Contents
      </h2>

      {/* List with Numbered Circles */}
      <div  className="w-full flex justify-start max-w-2xl">

      <div className="max-w-2xl  text-gray-600 mb-12">

      <ul className="text-gray-700 space-y-4 text-base max-w-2xl ">
  {topics.map((item, index) => (
    <li key={index} className="flex items-start gap-3" data-aos="zoom-in">
      <img src="/whatIsVpnImg/checkSvg.svg" alt="Check" className="w-6 h-6 mt-1" />
      <span data-aos="fade-up">{item}</span>
    </li>
  ))}
</ul>

      </div>
      </div>

      {/* Optional SeelVpn Bot */}
      <div className="fixed bottom-4 right-4">
        <img src="/whatIsVpnImg/vpn-svg.svg" alt="SeelVpn Bot" className="w-12 h-12" />
      </div>
    </div>
  );
}
