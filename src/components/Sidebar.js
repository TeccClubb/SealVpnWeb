"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import LogOutModal from './logoutModal';

const Sidebar = () => {
  const pathname = usePathname();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // Logout modal


  const links = [
    { name: 'Overview', href: '/Dashboard/accountOverview' },
    { name: 'Billing History', href: '/Dashboard/Account-biling-history' },
    { name: 'Security', href: '/Dashboard/twoFactorAuthentication' },
    { name: 'Privacy', href: '/Dashboard/AccountPrivicy' },
    { name: 'Log Out', href: '/logout' },
  ];
  const handleLogout = () => {
    // Handle logout logic here
    console.log('User logged out');
    setIsLogoutModalOpen(false); // Close the logout modal after logging out
  }

  return (
    <div className="w-full md:ml-12 md:w-50 p-4 mt-4 md:mt-12 flex flex-col items-center md:items-start gap-2">
      {links.map((link) => (
  <div key={link.name} className="w-full flex justify-center md:justify-start">
    {link.name === 'Log Out' ? (
      <button
        onClick={() => setIsLogoutModalOpen(true)}
        className={`w-full text-left rounded-full px-4 py-2 text-base md:text-lg transition-all duration-200 text-gray-600 hover:bg-gray-200 hover:text-slate-600 hover:font-bold`}
      >
        {link.name}
      </button>
    ) : (
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
    )}
  </div>
))}

        <LogOutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
};

export default Sidebar;
