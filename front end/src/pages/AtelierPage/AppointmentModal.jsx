import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';

export const AppointmentModal = ({ isOpen, onClose }) => {
  const { showToast } = useShop();
  const [salon, setSalon] = useState('Paris - Rue du Faubourg Saint-Honoré');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('Bespoke Tailoring Commission');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(`Appointment requested for ${name} at ${salon}. Our senior maitre d' will reach out within 24 hours.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/85 backdrop-blur-md" />

      <div className="relative w-full max-w-lg bg-[#121414] border border-white/20 p-8 md:p-10 shadow-2xl z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/50 hover:text-white bg-transparent border-none cursor-pointer"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="text-center mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-2">
            PRIVATE SALON INQUIRY
          </span>
          <h3 className="font-display text-2xl text-[#e2e2e2]">Book Atelier Fitting</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] mb-1">
              Select Atelier Location
            </label>
            <select
              value={salon}
              onChange={(e) => setSalon(e.target.value)}
              className="w-full bg-[#1a1c1c] border border-white/15 text-[#e2e2e2] px-4 py-3 text-xs focus:outline-none"
            >
              <option>Paris - Rue du Faubourg Saint-Honoré</option>
              <option>Milan - Via Montenapoleone</option>
              <option>London - Mayfair Salon</option>
              <option>New York - Madison Avenue Suite</option>
              <option>Virtual Atelier Fitting (Global)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] mb-1">
              Discipline of Interest
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full bg-[#1a1c1c] border border-white/15 text-[#e2e2e2] px-4 py-3 text-xs focus:outline-none"
            >
              <option>Bespoke Tailoring Commission (Suits & Outerwear)</option>
              <option>Haute Couture Evening Gown Fitting</option>
              <option>Private Horology & Chronometer Preview</option>
              <option>Custom Leather Maroquinerie Commission</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] mb-1">
              Your Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Eleanor Vance"
              className="w-full bg-[#1a1c1c] border border-white/15 text-[#e2e2e2] px-4 py-3 text-sm focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] mb-1">
              Confidential Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. e.vance@private.com"
              className="w-full bg-[#1a1c1c] border border-white/15 text-[#e2e2e2] px-4 py-3 text-sm focus:outline-none"
            />
          </div>

          <button type="submit" className="w-full btn-gold py-4 text-xs tracking-[0.2em] mt-4">
            CONFIRM SALON RESERVATION
          </button>
        </form>
      </div>
    </div>
  );
};
