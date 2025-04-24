"use client";
import Image from 'next/image';
import { use } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';  // Import AOS library for animations
import 'aos/dist/aos.css'; // Import AOS styles

const faqItems = [
  {
    question: 'How does SeelVpn work',
    answer: `SeelVpn encrypts your device's incoming and outgoing data. That means when an internet service provider, network owner, or even hacker tries to snoop on your online activity, all they'll see is garbled, unreadable junk.`,
  },


  {
    question: 'Is my online privacy worth th cost?',
    answer: `Some internet service providers can legally package and sell details about everything you do online, so it really depends on how comfortable you are with your personal data being made available to others.`,
  },
  {
    question: 'How do I know SeelVpn is working?',
    answer: `With SeelVpn ON, visit bearsmyip.com to confirm you’re secure. As long as you don’t disconnect, your online activity will be encrypted and appear as though it’s coming from someone else’s computer.`,
  },
  {
    question: 'Will SeelVpn slow my browsing?',
    answer: `Not unless you’re tunneling to a country that’s really far away. If you don’t need to access something from a specific country, set SeelVpn’s country selector to Fastest to ensure the best performance.`,
  },
  {
    question: 'How many devices can I use on one SeelVpn account?',
    answer: `There is no limit on the number of devices you can use with SeelVpn. Simply visit SeelVpn.com/download on each device to install the SeelVpn app. Once the app is installed on your new device, log in with your existing SeelVpn account and connect to a server.`,
  },
  {
    question: 'Why should I use SeelVpn over other VPNs?',
    answer: `Lots of reasons! It’s incredibly simple to use, we’re the only consumer VPN provider to perform annual security audits (and publish the results), you don’t need a lawyer to understand our privacy policy, and we’ve got over 175,000 5-star reviews!`,
  },
];

export default function FaqTestimonialSection() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Testimonial */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <div className="flex items-center space-x-6">
            {/* Wirecutter Pick logo */}
            <div className="flex-shrink-0">
              <Image
                src="/pricingImg/Wpick.svg"
                alt="Wirecutter Pick"
                width={70}
                height={70}
              />
            </div>

            {/* Text + Quotes */}
            <div data-oas="zoom-in" className="relative flex-1">
              {/* Opening quote */}
              <div className="absolute -left-4 -top-2">
                <img src="/pricingImg/downComa.svg" alt="“" className="w-4 h-4" />
              </div>

              {/* Testimonial copy */}
              <p className="text-[#6E6E6E] text-center sm:text-lg leading-relaxed mx-7">
                We spent more than 65 hours researching 53 VPN services [and] SeelVpn
                is the most transparent and trustworthy provider offering fast,
                secure connections and easy setup.
                {/* closing comma SVG inline, right after last word */}
                <img
                  src="/pricingImg/upComa.svg"
                  alt="”"
                  className="inline-block w-4 h-4 ml-1 -mt-3"
                />
              </p>

              {/* Attribution */}
              <p className="mt-4 text-sm text-gray-500 text-center">
                - Wirecutter (A New York Times Company)
              </p>
            </div>
          </div>
        </div>


        {/* FAQ Heading */}
        <h2 data-aos="zoom-in" className="text-center text-xl sm:text-2xl font-bold text-[#3D3D3D] mb-8">
  Frequently Asked Questions
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
  {faqItems.map((item, idx) => (
    <div data-aos="zoom-out" key={idx}>
      <h3 className="text-[#3D3D3D] font-medium text-base sm:text-lg mb-2">
        {item.question}
      </h3>
      <p data-aos="zoom-in" className="text-[#6E6E6E] text-[15px] sm:text-[16px] font-normal leading-[22px] tracking-[-0.2px]">
        {item.answer}
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
