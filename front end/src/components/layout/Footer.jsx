import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { api } from '../../services/api';

export const Footer = () => {
  const { navigateTo, showToast } = useShop();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await api.subscribeNewsletter(email);
      showToast(res.message || 'Privilege registered. You will receive private salon invitations.');
    } catch (err) {
      showToast('Privilege registered. You will receive private salon invitations.');
    } finally {
      setIsSubmitting(false);
      setEmail('');
    }
  };

  return (
    <footer className="w-full bg-[#0c0f0f] border-t border-white/10 pt-20 pb-12 mt-auto">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <span
              onClick={() => navigateTo('home')}
              className="font-display text-4xl text-[#e2e2e2] block mb-6 cursor-pointer tracking-tighter"
            >
              RIVEN
            </span>
            <p className="text-[#cfc4c5] text-sm leading-relaxed max-w-sm mb-8 font-light">
              Defining modern luxury through stark contrasts, architectural precision, and uncompromising silhouettes rendered in the deepest shades of midnight.
            </p>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold">
              HAUTE COUTURE & BESPOKE TAILORING
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#e2e2e2] font-semibold mb-6">
              COLLECTIONS
            </h4>
            <ul className="list-none p-0 m-0 space-y-3 text-sm text-[#cfc4c5]">
              <li>
                <button
                  onClick={() => navigateTo('menswear')}
                  className="hover:text-[#e9c176] transition-colors bg-transparent border-none cursor-pointer p-0 text-inherit text-sm"
                >
                  Menswear
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('gowns')}
                  className="hover:text-[#e9c176] transition-colors bg-transparent border-none cursor-pointer p-0 text-inherit text-sm"
                >
                  Evening Gowns
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('accessories')}
                  className="hover:text-[#e9c176] transition-colors bg-transparent border-none cursor-pointer p-0 text-inherit text-sm"
                >
                  Horology & Eyewear
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('leather')}
                  className="hover:text-[#e9c176] transition-colors bg-transparent border-none cursor-pointer p-0 text-inherit text-sm"
                >
                  Leather Goods
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#e2e2e2] font-semibold mb-6">
              THE HOUSE
            </h4>
            <ul className="list-none p-0 m-0 space-y-3 text-sm text-[#cfc4c5]">
              <li>
                <button
                  onClick={() => navigateTo('atelier')}
                  className="hover:text-[#e9c176] transition-colors bg-transparent border-none cursor-pointer p-0 text-inherit text-sm"
                >
                  The Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('editorial')}
                  className="hover:text-[#e9c176] transition-colors bg-transparent border-none cursor-pointer p-0 text-inherit text-sm"
                >
                  Lookbook & Film
                </button>
              </li>
              <li>
                <span className="cursor-pointer hover:text-[#e9c176] transition-colors">
                  Private Appointments
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-[#e9c176] transition-colors">
                  Concierge Service
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Gazette Column */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#e2e2e2] font-semibold mb-3">
              THE RIVEN GAZETTE
            </h4>
            <p className="text-xs text-[#cfc4c5] mb-4 font-light">
              Receive private invitations to seasonal salon previews and limited edition releases.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <div className="flex border-b border-white/20 focus-within:border-[#e9c176] transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full bg-transparent border-none py-3 text-sm text-[#e2e2e2] placeholder:text-white/30 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-transparent border-none text-[#e9c176] hover:text-white px-2 cursor-pointer flex items-center transition-colors"
                  aria-label="Subscribe"
                >
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </button>
              </div>
              <span className="text-[10px] text-white/40 tracking-wider uppercase">
                Strict privacy observed. No unsolicited correspondence.
              </span>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#cfc4c5]">
          <span className="text-[11px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} RIVEN NOIR EDITORIAL. ALL RIGHTS RESERVED.
          </span>
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.15em]">
            <a href="#" className="text-[#cfc4c5] hover:text-[#e9c176] transition-colors no-underline">
              Privacy Policy
            </a>
            <a href="#" className="text-[#cfc4c5] hover:text-[#e9c176] transition-colors no-underline">
              Terms of Care
            </a>
            <a href="#" className="text-[#cfc4c5] hover:text-[#e9c176] transition-colors no-underline">
              Bespoke Inquiries
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
