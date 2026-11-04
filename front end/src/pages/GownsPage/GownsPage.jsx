import React from 'react';
import { CoutureStatement } from './CoutureStatement';
import { ProductCard } from '../../components/product/ProductCard';
import { PRODUCTS } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export const GownsPage = () => {
  const { navigateTo } = useShop();
  const gownProducts = PRODUCTS.filter((item) => item.department === 'gowns');

  return (
    <div className="pt-24 md:pt-28">
      {/* Editorial Hero */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img
            alt="Evening Gowns Atelier"
            src="/assets/evening-gown.png"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-6 md:px-16 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-[#e9c176] font-semibold mb-3 block">
            HAUTE COUTURE SALON
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#e2e2e2] mb-6">
            EVENING GOWNS
          </h1>
          <p className="text-base md:text-lg text-[#cfc4c5] font-light max-w-xl mx-auto">
            Architectural silhouettes draped in the deepest midnight silks. Crafted individually to each client's anatomical measurements.
          </p>
        </div>
      </section>

      {/* Gown Products Grid */}
      <section className="px-6 md:px-16 pb-24 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-1">
              CURRENT EDITIONS
            </span>
            <h2 className="font-display text-3xl text-[#e2e2e2]">
              The Noir Gown Archive
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#cfc4c5] mt-2 md:mt-0">
            {gownProducts.length} Couture Silhouettes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gownProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Couture Statement */}
      <CoutureStatement />

      {/* Fitting Appointment CTA */}
      <section className="py-20 px-6 md:px-16 text-center max-w-2xl mx-auto">
        <h3 className="font-display text-2xl md:text-3xl text-[#e2e2e2] mb-3">
          Schedule A Private Salon Fitting
        </h3>
        <p className="text-sm text-[#cfc4c5] mb-8 font-light">
          Appointments available at our Paris atelier on Rue du Faubourg Saint-Honoré or our Milan salon on Via Montenapoleone.
        </p>
        <button
          onClick={() => navigateTo('atelier')}
          className="btn-primary"
        >
          COMMISSION BESPOKE GOWN
        </button>
      </section>
    </div>
  );
};
