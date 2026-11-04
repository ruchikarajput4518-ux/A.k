import React from 'react';

export const StatementSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 max-w-[1440px] mx-auto text-center border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold mb-6 block">
          BESPOKE CRAFTSMANSHIP
        </span>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#e2e2e2] mb-8 leading-tight">
          Silence Over Noise. Quality Over Quantity.
        </h2>
        <p className="text-base sm:text-lg text-[#cfc4c5] font-light leading-relaxed max-w-3xl mx-auto">
          Every piece in the RIVEN atelier is a testament to deliberate design and meticulous execution. We curate an aesthetic of high-contrast minimalism, where vast negative space frames garments of unparalleled construction.
        </p>

        {/* Brand pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left border-t border-white/10 pt-12">
          <div>
            <span className="font-display text-2xl text-[#e9c176] block mb-2">01.</span>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#e2e2e2] mb-2">
              Full Floating Canvas
            </h3>
            <p className="text-xs text-[#cfc4c5] leading-relaxed font-light">
              Hand-sewn horsehair canvas that molds to the wearer's anatomy, creating a living drape that deepens with each wearing.
            </p>
          </div>
          <div>
            <span className="font-display text-2xl text-[#e9c176] block mb-2">02.</span>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#e2e2e2] mb-2">
              Monochromatic Palette
            </h3>
            <p className="text-xs text-[#cfc4c5] leading-relaxed font-light">
              Strict 90/7/3 tonal ratio: 90% obsidian, 7% crisp white, 3% muted gold accents. Total architectural discipline.
            </p>
          </div>
          <div>
            <span className="font-display text-2xl text-[#e9c176] block mb-2">03.</span>
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#e2e2e2] mb-2">
              Heritage Provenance
            </h3>
            <p className="text-xs text-[#cfc4c5] leading-relaxed font-light">
              Milled in Biella, crafted across our private salons in Milan and Paris with artisanal precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
