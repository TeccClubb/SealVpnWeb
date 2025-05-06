"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Overview', href: '/' },
    { name: 'Billing History', href: '/Dashboard/Acount-biling-history' },
    { name: 'Security', href: '/security' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Log Out', href: '/logout' },
  ];

  return (
    <div className="ml-12  p-4 flex flex-col gap-2">
      {links.map((link) => (
        <div key={link.name} className="flex justify-start">
          <Link
            href={link.href}
            className={`rounded-full px-4 py-2  transition-all  text-lg duration-200 ${
              pathname === link.href
                ? 'bg-gray-200 text-slate-600 text-lg font-bold'
                : 'text-gray-600 hover:bg-gray-200 hover:text-slate-600  hover:leading-snug hover:font-bold'
            }`}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
