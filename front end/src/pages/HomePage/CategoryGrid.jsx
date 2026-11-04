import React from 'react';
import { useShop } from '../../context/ShopContext';

export const CategoryGrid = () => {
  const { navigateTo } = useShop();

  return (
    <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto" id="collection">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-2">
            CURATED PILLARS
          </span>
          <h2 className="font-display text-3xl md:text-5xl text-[#e2e2e2]">
            Atelier Departures
          </h2>
        </div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#cfc4c5] mt-4 md:mt-0">
          SELECT A DISCIPLINE TO EXPLORE
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Menswear (Span 8) */}
        <div
          onClick={() => navigateTo('menswear')}
          className="group md:col-span-8 relative overflow-hidden block aspect-[4/5] md:aspect-[16/9] cursor-pointer bg-[#0c0f0f] border border-white/10"
        >
          <img
            alt="Menswear Tailoring"
            src="/assets/menswear-suit.png"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            onError={(e) => {
              e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuAbahOi1Nb4neFMF6sX5x6bgXvDZEXJ7Hy9PANhHiJwm1ht1NItbhfk4tu7-E_uAlE9chlae2R-tE30EWiIxf9IBXKEzWNOFBFo_gnuh859CrNuhlx7FngeK9CTZZDqjbdF6RPiO3UjCMCRHNVGTloGMDkIHcYSfQ8VfZoh90Fea3x25cVybhITaYrNLlStUYdgFfuGxBg85uYtb8_WP5uY8aQsJQI4FQg910T-0OqPkuOq0dQqQs0w";
            }}
          />
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-500"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-1">
              SUITS & COUTURE
            </span>
            <h3 className="font-display text-2xl md:text-4xl text-[#e2e2e2] mb-3">
              Tailoring
            </h3>
            <span className="text-xs uppercase tracking-[0.2em] text-[#e2e2e2] flex items-center gap-2 group-hover:text-[#e9c176] transition-colors">
              DISCOVER DISCIPLINE <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </span>
          </div>
        </div>

        {/* Right Stack: Accessories & Leather Goods (Span 4) */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Accessories (Square) */}
          <div
            onClick={() => navigateTo('accessories')}
            className="group relative overflow-hidden block aspect-square flex-1 cursor-pointer bg-[#0c0f0f] border border-white/10"
          >
            <img
              alt="Luxury Watch and Sunglasses"
              src="/assets/accessories-watch.png"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuDE-VeJ8vsVMPZaoTLIUxAzm2bpacXe1CO0hbTFkmlloM5clT1WBfPinzW3Wku3wraqRr-OEYcXmsHf4hQwf0sN_MU3Q8pi3-6Rj975ib6-woxwD4rlAks3-AjPo_nSzDgEoaLRqCuJ54VZ45ZxCbGPR3YgigvM-g8fAamXUoiA2GQ3vqUlxHB0p4PTb_hYf6cL88s-PLeah_Re8oraMTs9OGaQI6Un05zOHcIJXTDGV0Pptj9pwcRF";
              }}
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-1">
                HOROLOGY & VISION
              </span>
              <h3 className="font-display text-xl md:text-2xl text-[#e2e2e2] mb-2">
                Accessories
              </h3>
              <span className="text-xs uppercase tracking-[0.2em] text-[#e2e2e2] flex items-center gap-2 group-hover:text-[#e9c176] transition-colors">
                DISCOVER <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>

          {/* Leather Goods (Square) */}
          <div
            onClick={() => navigateTo('leather')}
            className="group relative overflow-hidden block aspect-square flex-1 cursor-pointer bg-[#0c0f0f] border border-white/10"
          >
            <img
              alt="Leather Bag and Designer Heels"
              src="/assets/leather-goods.png"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              onError={(e) => {
                e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuCTMUnzBYj9CSB52yqVXmhiids2vi84bu7kpg_vl4vzlRsa6VtVLbGINz9F9bYHpX3mzvL2iekSLOqg5QzhaV18aGR7377mLCYg-gP1FYRS0_G86JiADwrCIEqlfEvALF1uQtkj3IEoqBAJdNehkf-LeEuhtQyxFpieGfmPZaFBkMgvpgUr1amvBNm93_j_PzLdNPnQNujuLu-ALSWUUxS_UpfTNKamDiS9La-X0ZQDfBerWWzqJXTw";
              }}
            />
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/45 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/90 to-transparent">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-1">
                BOX CALF & HEELS
              </span>
              <h3 className="font-display text-xl md:text-2xl text-[#e2e2e2] mb-2">
                Leather Goods
              </h3>
              <span className="text-xs uppercase tracking-[0.2em] text-[#e2e2e2] flex items-center gap-2 group-hover:text-[#e9c176] transition-colors">
                DISCOVER <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
