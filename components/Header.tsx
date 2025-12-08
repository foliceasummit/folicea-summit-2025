'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    // Media will be rendered with a dropdown
    { name: 'Media', href: '#', children: [
      { name: 'Gallery', href: '/gallery' },
      { name: 'News', href: '/news' },
      { name: 'Video', href: '/video' },
    ] },
    { name: 'Get Involved', href: '/get-involved' },
  ];

  const [isMediaOpen, setIsMediaOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403"
              alt="FOLICEA Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold transition-colors duration-200 ${
                isScrolled ? 'text-liberian-blue' : 'text-white drop-shadow-lg'
              }`}>FOLICEA</h1>
              <p className={`text-sm transition-colors duration-200 ${
                isScrolled ? 'text-gray-600' : 'text-white/90 drop-shadow-lg'
              }`}>Summit 2025</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsMediaOpen(true)}
                  onMouseLeave={() => setIsMediaOpen(false)}
                >
                  <button
                    className={`font-medium transition-colors duration-200 ${
                      isScrolled 
                        ? 'text-gray-800 hover:text-liberian-red' 
                        : 'text-white hover:text-liberian-red drop-shadow-lg'
                    }`}
                  >
                    {item.name}
                  </button>
                  {isMediaOpen && (
                    <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-gray-800 hover:text-liberian-red' 
                      : 'text-white hover:text-liberian-red drop-shadow-lg'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              href="/get-involved"
              className="btn-primary drop-shadow-lg"
            >
              Get Involved
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg"
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white drop-shadow-lg'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
            <nav className="flex flex-col space-y-2 px-6">
              {navItems.map((item) => (
                item.children ? (
                  <div key={item.name} className="">
                    <span className="font-semibold text-gray-900">{item.name}</span>
                    <div className="ml-4 mt-2 flex flex-col space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="text-gray-800 hover:text-liberian-red transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-800 hover:text-liberian-red transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <Link
                href="/get-involved"
                className="btn-primary text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Involved
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
