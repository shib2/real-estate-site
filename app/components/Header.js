'use client';

import { useState, useCallback } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ClickOutside from '../tools/ClickOutside';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = useCallback((e, href) => {
    e.preventDefault();
    if (pathname === '/') {
      const sectionId = href.replace('/#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = href;
    }
    setMobileMenuOpen(false);
  }, [pathname]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[rgba(165,202,211,1)] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h1 className="text-2xl font-semibold">Meilin Li</h1>
            <p>Personal Real Estate Corporation</p>
          </div>

          <nav className="hidden md:flex space-x-8 text-white">
            <Link href="/#about" scroll={false} onClick={(e) => handleClick(e, '/#about')}>About</Link>
            <Link href="/#properties" scroll={false} onClick={(e) => handleClick(e, '/#properties')}>Properties</Link>
            <Link href="/#contact" scroll={false} onClick={(e) => handleClick(e, '/#contact')}>Contact</Link>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <ClickOutside onClickOutside={closeMobileMenu}>
          <div 
            className={`md:hidden fixed top-[88px] right-0 h-full w-64 bg-[rgba(165,202,211,1)] transform transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="px-2 pt-16 pb-3 space-y-1 sm:px-3">
              <Link href="/#about" scroll={false} onClick={(e) => handleClick(e, '/#about')} className="text-white block px-3 py-2 rounded-md text-base font-medium transition-transform duration-200 hover:translate-x-2">About</Link>
              <Link href="/#properties" scroll={false} onClick={(e) => handleClick(e, '/#properties')} className="text-white block px-3 py-2 rounded-md text-base font-medium transition-transform duration-200 hover:translate-x-2">Properties</Link>
              <Link href="/#contact" scroll={false} onClick={(e) => handleClick(e, '/#contact')} className="text-white block px-3 py-2 rounded-md text-base font-medium transition-transform duration-200 hover:translate-x-2">Contact</Link>
            </div>
          </div>
        </ClickOutside>
      )}
    </header>
  );
}
