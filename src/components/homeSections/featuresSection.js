import Image from 'next/image';

export default function FeaturesSection() {
 
  const features = [
    {
      img: '/stopPasswordandData.svg',
      title: 'Stop password and data theft',
      desc: 'Hackers can steal passwords and data over insecure public WiFi. SeeIVpn blocks them to keep you secure.'
    },
    {
      img: '/protectOnlinePrivecy.svg',
      title: 'Protect your online privacy',
      desc: 'Network owners and internet providers can see everything you do online. With SeeIVpn on, they can’t see a thing.'
    },
    {
      img: '/globleContent.svg',
      title: 'Access global content',
      desc: 'Some content is only available in certain regions. SeeIVpn changes your virtual location so you can see it anywhere.'
    },
    {
      img: '/preventIpTracking.svg',
      title: 'Prevent IP-based tracking',
      desc: 'Ad services use your IP address to track your behavior across sites. SeeIVpn stops them by assigning you a new IP.'
    },
    {
      img: '/bypassLocal.svg',
      title: 'Bypass local censorship',
      desc: 'Some governments block popular websites and apps. SeeIVpn unblocks them by changing your virtual location.'
    },
    {
      img: '/wayMoreImg.svg',
      title: 'And way, way more',
      desc: 'Play on new game servers, prevent speed throttling, and unblock apps and websites on school and work networks.'
    },
  ];
  return (
    <section className="md:py-10 py-5 px-6 sm:px-10 lg:px-20 bg-white text-center mb-10" style={{color:"black"}}>
      <h2 className="text-3xl font-bold mb-12 text-neutral-600">Why millions of people are using SeeIVpn</h2>
      <div   className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left max-w-5xl mx-auto">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center justify-center  gap-5">
            <Image src={feature.img} alt={feature.title} width={60} height={60} className="flex-shrink-0" />
            <div >
              <h3 className="text-lg font-semibold text-neutral-600 mb-1">{feature.title}</h3>
              <p className=" text-neutral-500 text-base">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
