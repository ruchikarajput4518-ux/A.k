import React from 'react';
import { useShop } from '../../context/ShopContext';

export const EditorialPage = () => {
  const { navigateTo } = useShop();

  const looks = [
    {
      number: "LOOK 01",
      title: "The Midnight Silhouette",
      image: "/assets/evening-gown.png",
      description: "Silk crepe column gown framed against negative black space. Uncompromising geometry meets soft sculptural movement.",
      route: "gowns"
    },
    {
      number: "LOOK 02",
      title: "Architectural Suiting",
      image: "/assets/menswear-suit.png",
      description: "Super 150s charcoal wool tailored with a sharp, high-armhole cut and hand-canvassed chest piece.",
      route: "menswear"
    },
    {
      number: "LOOK 03",
      title: "Monochrome Chronometry",
      image: "/assets/accessories-watch.png",
      description: "Grade 5 Titanium automatic chronometer alongside beveled obsidian acetate optics.",
      route: "accessories"
    },
    {
      number: "LOOK 04",
      title: "Tuscan Box Calf",
      image: "/assets/leather-goods.png",
      description: "Full-grain French calfskin crafted with seamless edge coats and sculptural footwear heel silhouettes.",
      route: "leather"
    }
  ];

  return (
    <div className="pt-24 md:pt-28">
      {/* Editorial Header */}
      <section className="px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#e9c176] font-semibold block mb-4">
          CAMPAIGN VISUALS
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#e2e2e2] mb-6">
          THE NOIR EDITORIAL
        </h1>
        <p className="text-base md:text-lg text-[#cfc4c5] font-light max-w-xl mx-auto leading-relaxed">
          Cinematic photography documenting the interplay of light and profound darkness across our latest silhouettes.
        </p>
      </section>

      {/* Looks Stream */}
      <section className="px-6 md:px-16 pb-24 max-w-[1440px] mx-auto space-y-24">
        {looks.map((look, idx) => (
          <div
            key={look.number}
            className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className={`md:col-span-7 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="aspect-[4/5] bg-[#0c0f0f] border border-white/10 overflow-hidden relative group">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
            </div>

            <div className={`md:col-span-5 flex flex-col items-start ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold mb-2">
                {look.number}
              </span>
              <h2 className="font-display text-3xl md:text-4xl text-[#e2e2e2] mb-4">
                {look.title}
              </h2>
              <p className="text-sm text-[#cfc4c5] font-light leading-relaxed mb-8">
                {look.description}
              </p>
              <button
                onClick={() => navigateTo(look.route)}
                className="btn-primary"
              >
                DISCOVER WARDROBE
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
