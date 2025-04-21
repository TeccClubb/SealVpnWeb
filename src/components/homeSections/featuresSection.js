import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      img: '/stopPasswordandData.svg',
      title: 'Stop password and data theft',
      desc: 'Hackers can steal passwords and data over insecure public WiFi. SeeIVpn blocks them to keep you secure.'
    },
    {
      img: '/protectOnlinePrivecy.png',
      title: 'Protect your online privacy',
      desc: 'Network owners and internet providers can see everything you do online. With SeeIVpn on, they can’t see a thing.'
    },
    {
      img: '/globleContent.png',
      title: 'Access global content',
      desc: 'Some content is only available in certain regions. SeeIVpn changes your virtual location so you can see it anywhere.'
    },
    {
      img: '/preventIpTracking.svg',
      title: 'Bypass local censorship',
      desc: 'Some governments block popular websites and apps. SeeIVpn unblocks them by changing your virtual location.'
    },
    {
      img: '/bypassLocal.svg',
      title: 'Prevent IP-based tracking',
      desc: 'Ad services use your IP address to track your behavior across sites. SeeIVpn stops them by assigning you a new IP.'
    },
    {
      img: '/wayMoreImg.svg',
      title: 'And way, way more',
      desc: 'Play on new game servers, prevent speed throttling, and unblock apps and websites on school and work networks.'
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-white text-center" style={{color:"black"}}>
      <h2 className="text-3xl font-bold mb-12">Why millions of people are using SeeIVpn</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left max-w-5xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-5">
            <Image src={feature.img} alt={feature.title} width={60} height={60} className="flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
