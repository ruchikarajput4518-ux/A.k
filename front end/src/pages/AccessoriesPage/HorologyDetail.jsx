import React from 'react';

export const HorologyDetail = () => {
  return (
    <section className="py-24 bg-[#0c0f0f] border-t border-b border-white/10 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 md:col-start-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-3">
            SWISS CHRONOMETRY & JAPANESE ACETATE
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#e2e2e2] leading-tight mb-6">
            PRECISION METALLURGY
          </h2>
          <p className="text-base text-[#cfc4c5] font-light leading-relaxed mb-6">
            The RIVEN horology division partners with independent watchmakers in Geneva to craft timepieces in Grade 5 Titanium and DLC diamond coating. Complementing our eyewear sculpted from 8mm Japanese cellulose acetate.
          </p>
          <div className="space-y-3 text-xs tracking-wider text-[#e2e2e2] uppercase">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e9c176] text-base">watch</span>
              <span>28,800 VPH Column-Wheel Chronograph Movement</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e9c176] text-base">verified</span>
              <span>Anti-reflective double domed sapphire crystal</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e9c176] text-base">grade</span>
              <span>Individually numbered limited series of 100</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 aspect-square border border-white/15 p-4 bg-[#121414]">
          <img
            alt="Watch and Sunglasses metallic textures"
            src="/assets/accessories-watch.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
