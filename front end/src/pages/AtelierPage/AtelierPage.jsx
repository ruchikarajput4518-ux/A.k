import React, { useState } from 'react';
import { AppointmentModal } from './AppointmentModal';

export const AtelierPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-24 md:pt-28">
      {/* Atelier Hero */}
      <section className="px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#e9c176] font-semibold block mb-4">
          HOUSE PHILOSOPHY & CRAFT
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#e2e2e2] mb-6 max-w-4xl mx-auto leading-tight">
          THE RIVEN ATELIER
        </h1>
        <p className="text-base md:text-xl text-[#cfc4c5] font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Where silence speaks louder than noise. Discover our century-old heritage of bespoke pattern making, architectural cuts, and obsessive material purity.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="btn-gold"
        >
          REQUEST SALON APPOINTMENT
        </button>
      </section>

      {/* Atelier Locations Grid */}
      <section className="py-20 px-6 md:px-16 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-2">
            GLOBAL HOUSES
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#e2e2e2]">
            Our Private Salons
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Paris */}
          <div className="bg-[#0c0f0f] border border-white/10 p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#e9c176] uppercase tracking-[0.2em] font-semibold block mb-2">
                FOUNDING ATELIER
              </span>
              <h3 className="font-display text-2xl text-[#e2e2e2] mb-4">Paris</h3>
              <p className="text-xs text-[#cfc4c5] leading-relaxed mb-6 font-light">
                18 Rue du Faubourg Saint-Honoré, 75008 Paris. Home to our Haute Couture drapery and private client archive rooms.
              </p>
            </div>
            <div className="text-[11px] text-[#e9c176] uppercase tracking-widest pt-4 border-t border-white/10">
              By Private Invitation Only
            </div>
          </div>

          {/* Milan */}
          <div className="bg-[#0c0f0f] border border-white/10 p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#e9c176] uppercase tracking-[0.2em] font-semibold block mb-2">
                TAILORING WORKSHOP
              </span>
              <h3 className="font-display text-2xl text-[#e2e2e2] mb-4">Milan</h3>
              <p className="text-xs text-[#cfc4c5] leading-relaxed mb-6 font-light">
                Via Montenapoleone 12, 20121 Milano. Dedicated to bespoke menswear tailoring, full canvas jackets, and cashmere coats.
              </p>
            </div>
            <div className="text-[11px] text-[#e9c176] uppercase tracking-widest pt-4 border-t border-white/10">
              Master Tailor in Residence
            </div>
          </div>

          {/* London */}
          <div className="bg-[#0c0f0f] border border-white/10 p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] text-[#e9c176] uppercase tracking-[0.2em] font-semibold block mb-2">
                SALON & ARCHIVE
              </span>
              <h3 className="font-display text-2xl text-[#e2e2e2] mb-4">London</h3>
              <p className="text-xs text-[#cfc4c5] leading-relaxed mb-6 font-light">
                14 Mayfair Place, London W1J 8AJ. Private fitting rooms overlooking quiet courtyards with dedicated concierge service.
              </p>
            </div>
            <div className="text-[11px] text-[#e9c176] uppercase tracking-widest pt-4 border-t border-white/10">
              Personal Fitting Suites
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Specs */}
      <section className="py-20 bg-[#0c0f0f] px-6 md:px-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-3">
            TECHNICAL DISCIPLINE
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#e2e2e2] mb-8">
            The Rules of Noir Construction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="border border-white/10 p-6 bg-[#121414]">
              <h4 className="text-sm font-semibold text-[#e9c176] uppercase tracking-wider mb-2">
                Zero Radius Geometry
              </h4>
              <p className="text-xs text-[#cfc4c5] leading-relaxed font-light">
                No rounded corners. Every pocket welt, lapel notch, and collar stance adheres to architectural 90-degree discipline.
              </p>
            </div>
            <div className="border border-white/10 p-6 bg-[#121414]">
              <h4 className="text-sm font-semibold text-[#e9c176] uppercase tracking-wider mb-2">
                Pure Natural Fibers
              </h4>
              <p className="text-xs text-[#cfc4c5] leading-relaxed font-light">
                100% natural organic materials. Super 150s virgin wool, Grade-A cashmere, mulberry silk, and vegetable box calfskin.
              </p>
            </div>
            <div className="border border-white/10 p-6 bg-[#121414]">
              <h4 className="text-sm font-semibold text-[#e9c176] uppercase tracking-wider mb-2">
                Ghost Border Finishes
              </h4>
              <p className="text-xs text-[#cfc4c5] leading-relaxed font-light">
                Subtle 15% opacity perimeter seams instead of bulky topstitching, letting the silhouette command attention in silence.
              </p>
            </div>
            <div className="border border-white/10 p-6 bg-[#121414]">
              <h4 className="text-sm font-semibold text-[#e9c176] uppercase tracking-wider mb-2">
                Obsidian Depth
              </h4>
              <p className="text-xs text-[#cfc4c5] leading-relaxed font-light">
                Dyes calibrated to absorb maximum visible light wavelengths, resulting in an unmatched pitch-black intensity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
