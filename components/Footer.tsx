"use client"
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const MenuSection = ({ title, menuKey, items }) => (
    <div>
      <div
        className="flex justify-between items-center font-semibold mb-4 cursor-pointer md:cursor-default"
        onClick={() => toggleMenu(menuKey)}
      >
        <h3 className="text-lg">{title}</h3>
        <span className="md:hidden">
          {openMenu === menuKey ? <ChevronUp /> : <ChevronDown />}
        </span>
      </div>
      <ul
        className={`space-y-2 text-gray-400 ${openMenu === menuKey ? 'block' : 'hidden md:block'
          }`}
      >
        {items.map(({ to, label }) => (
          <li key={to}>
            <Link href={to} className="hover:text-white">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-[#001c3c] text-white pt-6 pb-4">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <img
                src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/Hostizi-logo-White.svg"
                alt="Hostizi Logo"
                className="w-[50%] md:w-[50%] h-auto"
              />
            </Link>
            <p className="text-gray-400">
              Premium hosting solutions for your digital presence
            </p>
          </div>
          <MenuSection
            title="Products"
            menuKey="products"
            items={[
              { to: '/hosting', label: 'Web Hosting' },
              { to: '/domains', label: 'Domain Names' },
              { to: '/ssl', label: 'SSL Certificates' },
              { to: '/builder', label: 'Website Builder' },
            ]}
          />
          <MenuSection
            title="Company"
            menuKey="company"
            items={[
              { to: '/about', label: 'About Us' },
              { to: '/contact', label: 'Contact' },
              { to: '/blog', label: 'Blog' },
              { to: '/careers', label: 'Careers' },
            ]}
          />
          <MenuSection
            title="Support"
            menuKey="support"
            items={[
              { to: '/support', label: 'Help Center' },
              { to: '/community', label: 'Community' },
              { to: '/status', label: 'Status' },
              { to: '/api', label: 'API' },
            ]}
          />
        </div>
        <div className="border-t border-gray-800 mt-6 pt-4 text-center text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p className="text-left mb-4 md:mb-0">&copy; 2024 HOSTIZI. All rights reserved.</p>
          <img
            src="https://raw.githubusercontent.com/asifsofficial/shopeybd-cdn/refs/heads/main/hostizi/iPayees-Payment.png"
            alt="Logo"
            className="w-[100%] md:w-[30%] h-auto"
          />
        </div>
      </div>
    </footer>
  );
}
