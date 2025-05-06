"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { name: 'Overview', href: '/Dashboard/accountOverview' },
    { name: 'Billing History', href: '/Dashboard/Account-biling-history' },
    { name: 'Security', href: '/security' },
    { name: 'Privacy', href: '/Dashboard/AccountPrivicy' },
    { name: 'Log Out', href: '/logout' },
  ];

  return (
    <div className="w-full md:ml-12 md:w-50 p-4 mt-4 md:mt-12 flex flex-col items-center md:items-start gap-2">
      {links.map((link) => (
        <div key={link.name} className="w-full flex justify-center md:justify-start">
          <Link
            href={link.href}
            className={`rounded-full px-4 py-2 text-base md:text-lg transition-all duration-200 ${
              pathname === link.href
                ? 'bg-gray-200 text-slate-600 font-bold'
                : 'text-gray-600 hover:bg-gray-200 hover:text-slate-600 hover:font-bold'
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
