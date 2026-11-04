import React from 'react';
import { HeroSection } from './HeroSection';
import { StatementSection } from './StatementSection';
import { CategoryGrid } from './CategoryGrid';
import { ProductCard } from '../../components/product/ProductCard';
import { PRODUCTS } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export const HomePage = () => {
  const { navigateTo } = useShop();
  // Select 3 featured highlights
  const featured = PRODUCTS.slice(0, 3);

  return (
    <div className="w-full">
      <HeroSection />
      <StatementSection />
      <CategoryGrid />

      {/* Featured Atelier Curations */}
      <section className="py-24 px-6 md:px-16 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-2">
              CURATED SELECTION
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#e2e2e2]">
              The Atelier Icons
            </h2>
          </div>
          <button
            onClick={() => navigateTo('menswear')}
            className="mt-4 md:mt-0 text-xs uppercase tracking-[0.2em] text-[#e9c176] hover:text-white flex items-center gap-2 bg-transparent border-none cursor-pointer p-0"
          >
            VIEW ALL PIECES <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Private Consultation Banner */}
      <section className="py-20 bg-[#0c0f0f] border-t border-b border-white/10 px-6 md:px-16 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-3">
            BESPOKE SALON
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#e2e2e2] mb-4">
            Private Commissioning
          </h2>
          <p className="text-sm text-[#cfc4c5] mb-8 font-light leading-relaxed">
            Experience our personal tailoring service in Paris, Milan, or via virtual consultation with our Master Pattern Maker.
          </p>
          <button
            onClick={() => navigateTo('atelier')}
            className="btn-gold"
          >
            REQUEST PRIVATE APPOINTMENT
          </button>
        </div>
      </section>
    </div>
  );
};
