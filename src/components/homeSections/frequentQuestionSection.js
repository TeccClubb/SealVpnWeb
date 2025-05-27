import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    question: 'What is SeelVpn and how does it work?',
    answer:
      'SeelVpn is a secure VPN service that encrypts your internet connection, allowing you to browse privately and access restricted content by routing your traffic through remote servers.',
  },
  {
    question: 'Is my online privacy worth the cost?',
    answer:
      'Absolutely. Investing in SeelVpn ensures your personal data, browsing history, and online identity remain protected from hackers, ISPs, and other third parties.',
  },
  {
    question: 'How can I confirm SeelVpn is keeping me secure?',
    answer:
      'You can check your IP address before and after connecting to SeelVpn. You’ll notice a change, which confirms your location is hidden. Additionally, SeelVpn uses military-grade encryption and a no-logs policy.',
  },
  {
    question: 'Will SeelVpn slow or change my browsing experience?',
    answer:
      'While any VPN can slightly affect speed due to encryption overhead, SeelVpn is optimized for speed and performance to ensure smooth browsing, streaming, and downloads.',
  },
  {
    question: 'How many devices can I use on one SeelVpn account?',
    answer:
      'You can use SeelVpn on up to 5 devices simultaneously, including phones, tablets, and computers, all under a single subscription.',
  },
  {
    question: 'Why should I use SeelVpn over other VPNs?',
    answer:
      'SeelVpn offers high-speed servers, strong encryption, no data logging, and user-friendly apps, making it a reliable and affordable choice among competitors.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F7F7F7] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-[#3D3D3D] mb-6">
          Frequently Asked Questions
        </h2>

        <div className="bg-white rounded-md border border-gray-200 divide-y divide-white shadow-sm">
          {faqData.map((item, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggle(index)}
              >
                <span className="text-sm text-[#6E6E6E] font-medium leading-6 tracking-tight">
                  {item.question}
                </span>
                <span className="text-green-600">
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </div>
              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-600 leading-6 tracking-tight">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
