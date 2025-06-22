import React from 'react';
import { FaApple, FaSearch, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const navItems = [
    { label: <FaApple />, isIcon: true },
    { label: 'Store' },
    { label: 'iPad' },
    { label: 'iPhone' },
    { label: 'Watch' },
    { label: 'AirPods' },
    { label: 'TV & Home' },
    { label: 'Accessories' },
    { label: 'Entertainment' },
    { label: <FaSearch />, isIcon: true },
    { label: <FaShoppingCart />, isIcon: true },  // Added cart icon here
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black text-gray-200 text-sm px-6 py-3 shadow-md">
      <div className="max-w-7xl mx-auto">
        <ul className="hidden md:flex justify-center items-center space-x-6">
          {navItems.map((item, index) => (
            <li key={index} className="hover:text-white cursor-pointer">
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

