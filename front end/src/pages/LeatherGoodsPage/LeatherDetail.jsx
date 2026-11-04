import React from 'react';

export const LeatherDetail = () => {
  return (
    <section className="py-24 bg-[#0c0f0f] border-t border-b border-white/10 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 md:col-start-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-3">
            TUSCAN MAROQUINERIE
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#e2e2e2] leading-tight mb-6">
            ARCHITECTURAL LEATHER
          </h2>
          <p className="text-base text-[#cfc4c5] font-light leading-relaxed mb-6">
            Our leather objects are sculpted from singular pieces of vegetable-tanned French box calf leather, aged with organic tannins to yield a deep obsidian patina that grows richer with every touch.
          </p>
          <div className="space-y-3 text-xs tracking-wider text-[#e2e2e2] uppercase">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e9c176] text-base">check</span>
              <span>Hand-painted raw edges with 7 distinct coats</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e9c176] text-base">check</span>
              <span>Saddle-stitched by hand using waxed French linen thread</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e9c176] text-base">check</span>
              <span>Architectural metal hardware cast in solid brass</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 aspect-square border border-white/15 p-4 bg-[#121414]">
          <img
            alt="Leather Bag and Heels"
            src="/assets/leather-goods.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
