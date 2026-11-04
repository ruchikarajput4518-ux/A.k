import React from 'react';

export const HeritageSection = () => {
  return (
    <section className="py-24 border-t border-white/10 px-6 md:px-16 bg-[#0c0f0f] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 md:col-start-2 flex flex-col gap-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold">
            BESPOKE TRADITION
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#e2e2e2] leading-tight">
            HERITAGE <br />IN EVERY STITCH
          </h2>
          <p className="text-base text-[#cfc4c5] font-light leading-relaxed">
            We source only the finest Italian wools and cashmere, combining traditional bespoke construction methods with a modern, architectural silhouette. Every garment is a testament to the quiet power of exceptional craftsmanship.
          </p>
          <div className="pt-4 flex items-center gap-8 text-xs tracking-widest text-[#cfc4c5] uppercase">
            <div>
              <span className="font-display text-xl text-[#e9c176] block mb-1">50+</span>
              Hours Per Garment
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div>
              <span className="font-display text-xl text-[#e9c176] block mb-1">Super 150s</span>
              Virgin Merino
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div>
              <span className="font-display text-xl text-[#e9c176] block mb-1">Full Horsehair</span>
              Floating Canvas
            </div>
          </div>
        </div>

        <div className="md:col-span-4 aspect-square border border-white/15 p-4 relative bg-[#121414]">
          <img
            alt="Tailor hands working on suit lapel"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9LMPFY0HKYwzbjc4NDI7lh8KxN6RvDAoqNY23Z86qpraSznhgSjTQRDQcTkxtxtUuQpFyoZMz-unuI2azhqioeCYMRDPLZNAYe_bncxL-KzfbL08dx-HNiDvoK1kVGo1BhjmHb5Q9E-y1j0TP3pJB5RJHHdnbMXVLC56CuNaNy4ken8XJmvWrcTpCB_bdu8DTETeWwG7FgwTpAe6uhXnoeAe8uPTr59YczRDmjBUBxNLHi1o36cif"
            className="w-full h-full object-cover filter grayscale contrast-125"
          />
        </div>
      </div>
    </section>
  );
};
