import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';

export const Navbar = () => {
  const { currentPage, navigateTo, cartCount, setIsCartOpen, setIsSearchOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'gowns', label: 'GOWNS' },
    { id: 'menswear', label: 'MENSWEAR' },
    { id: 'accessories', label: 'ACCESSORIES' },
    { id: 'leather', label: 'LEATHER GOODS' },
    { id: 'atelier', label: 'ATELIER' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? 'bg-[#121414]/95 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl'
          : 'bg-[#121414]/80 backdrop-blur-lg border-b border-white/5 py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Left Section: Brand & Desktop Nav Links */}
        <div className="flex items-center gap-10">
          <button
            onClick={() => {
              navigateTo('home');
              setMobileMenuOpen(false);
            }}
            className="font-display text-3xl md:text-4xl tracking-tighter text-[#e2e2e2] hover:opacity-80 transition-opacity uppercase bg-transparent border-none cursor-pointer p-0"
          >
            RIVEN
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => navigateTo(link.id)}
                  className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 bg-transparent border-none cursor-pointer py-1 relative ${
                    isActive
                      ? 'text-[#e9c176] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#e9c176]'
                      : 'text-[#cfc4c5] hover:text-[#e2e2e2]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Section: Search & Shopping Bag */}
        <div className="flex items-center gap-6 md:gap-8">
          <button
            onClick={() => setIsSearchOpen(true)}
            aria-label="Search Collection"
            className="text-[#e2e2e2] hover:text-[#e9c176] transition-colors bg-transparent border-none cursor-pointer flex items-center p-1"
          >
            <span className="material-symbols-outlined text-2xl">search</span>
          </button>

          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Bag"
            className="text-[#e2e2e2] hover:text-[#e9c176] transition-colors relative bg-transparent border-none cursor-pointer flex items-center p-1"
          >
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-[#e9c176] text-[#121414] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center tracking-tighter">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden text-[#e2e2e2] hover:text-[#e9c176] transition-colors bg-transparent border-none cursor-pointer flex items-center p-1"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0f0f]/98 border-b border-white/10 px-8 py-8 animate-slideDown flex flex-col gap-6">
          <div className="text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold border-b border-white/10 pb-2">
            ATELIER COLLECTIONS
          </div>
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  navigateTo(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm uppercase tracking-[0.2em] py-2 bg-transparent border-none cursor-pointer transition-colors ${
                  isActive ? 'text-[#e9c176] font-bold' : 'text-[#e2e2e2] hover:text-[#e9c176]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs tracking-widest text-[#cfc4c5]">
            <span>PARIS • MILAN • NEW YORK</span>
            <span className="text-[#e9c176]">EST. 1924</span>
          </div>
        </div>
      )}
    </nav>
  );
};
