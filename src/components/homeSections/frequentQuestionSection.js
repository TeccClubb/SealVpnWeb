
import { useEffect, useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // You can replace with your own icons
  
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library for animations
import Image from 'next/image'; // Import Image component from Next.js
const faqData = [
  'What is SeelVpn and how does it work?',
  'Is my online privacy worth the cost?',
  'How can I confirm SeelVpn is keeping me secure?',
  'Will SeelVpn slow or change my browsing experience?',
  'How many devices can I use on one SeelVpn account?',
  'Why should I use SeelVpn over other VPNs?',
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  useEffect(() => { 
    const AOS = require('aos');
    AOS.init({ duration: 1200, once: true });
  } , []);

  return (
    <section className="bg-[#F7F7F7] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-[#3D3D3D] mb-6">
          Frequently Asked Questions
        </h2>

        <div className="bg-white rounded-md border border-gray-200 divide-y divide-white shadow-sm">
          {faqData.map((question, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-50"
              onClick={() => toggle(index)}
            >
              <span data-aos="zoom-in-left" className="text-sm text-[#6E6E6E]  font-medium leading-6 tracking-tight">
                {question}
              </span>
              <span data-aos="zoom-in-up" className="text-green-600">
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
