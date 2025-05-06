"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
<<<<<<< Updated upstream
    { name: 'Overview', href: '/' },
    { name: 'Billing History', href: '/Dashboard/Acount-biling-history' },
=======
    { name: 'Overview', href: '/Dashboard/accountOverview' },
    { name: 'Billing History', href: '/Dashboard/Account-biling-history' },
>>>>>>> Stashed changes
    { name: 'Security', href: '/security' },
    { name: 'Privacy', href: '/Dashboard/AccountPrivicy' },
    { name: 'Log Out', href: '/logout' },
  ];

  return (
<<<<<<< Updated upstream
    <div className="ml-12  p-4 flex flex-col gap-2">
=======
    <div className="w-full md:ml-12 md:w-50 p-4 mt-4 md:mt-12 flex flex-col items-center md:items-start gap-2">
>>>>>>> Stashed changes
      {links.map((link) => (
        <div key={link.name} className="w-full flex justify-center md:justify-start">
          <Link
            href={link.href}
            className={`rounded-full px-4 py-2 text-base md:text-lg transition-all duration-200 ${
              pathname === link.href
<<<<<<< Updated upstream
                ? 'bg-gray-300 text-slate-600 text-lg font-bold'
                : 'text-gray-600 hover:bg-gray-200 hover:text-slate-600  hover:leading-snug hover:font-bold'
=======
                ? 'bg-gray-200 text-slate-600 font-bold'
                : 'text-gray-600 hover:bg-gray-200 hover:text-slate-600 hover:font-bold'
>>>>>>> Stashed changes
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
