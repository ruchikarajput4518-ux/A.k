import React from 'react';

export const CoutureStatement = () => {
  return (
    <section className="py-24 bg-[#0c0f0f] border-t border-b border-white/10 px-6 md:px-16">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 md:col-start-2">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-3">
            HAUTE COUTURE PROTOCOL
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#e2e2e2] leading-tight mb-6">
            SILHOUETTES OF MIDNIGHT
          </h2>
          <p className="text-base text-[#cfc4c5] font-light leading-relaxed mb-6">
            Each evening gown is cut from uninterrupted lengths of French crepe de Chine and Italian velvet, sculpted entirely by hand without visible topstitching. Designed to float across salon floors with effortless majesty.
          </p>
          <div className="space-y-3 text-xs tracking-wider text-[#e2e2e2] uppercase">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e9c176] text-base">check</span>
              <span>120+ Hours of hand drapery and corsetry</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e9c176] text-base">check</span>
              <span>Bespoke fitting in Paris, London, or via Virtual Salon</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[#e9c176] text-base">check</span>
              <span>Individual silk archive numbering for each commission</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 aspect-[4/5] border border-white/15 p-4 bg-[#121414]">
          <img
            alt="Couture gown detail"
            src="/assets/evening-gown.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
