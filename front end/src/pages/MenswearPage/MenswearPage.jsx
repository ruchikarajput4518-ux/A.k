import React, { useMemo } from 'react';
import { FilterBar } from './FilterBar';
import { HeritageSection } from './HeritageSection';
import { ProductCard } from '../../components/product/ProductCard';
import { PRODUCTS } from '../../data/products';
import { useShop } from '../../context/ShopContext';

export const MenswearPage = () => {
  const { activeMensFilter } = useShop();

  const menswearProducts = useMemo(() => {
    const list = PRODUCTS.filter((item) => item.department === 'menswear');
    if (activeMensFilter === 'all') return list;
    return list.filter((item) => item.category === activeMensFilter);
  }, [activeMensFilter]);

  return (
    <div className="pt-24 md:pt-28">
      {/* Editorial Hero */}
      <section className="px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6 z-10 md:pr-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold">
            THE MENSWEAR COLLECTION
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#e2e2e2] leading-tight">
            THE ART OF TAILORING
          </h1>
          <p className="text-base md:text-lg text-[#cfc4c5] font-light leading-relaxed max-w-lg">
            Precision meets poetry. A masterclass in structured elegance, crafted for the gentleman who demands uncompromising silhouette and quality.
          </p>
          <a
            href="#collection"
            className="btn-primary mt-2"
          >
            EXPLORE COLLECTION
          </a>
        </div>

        <div className="w-full md:w-1/2 relative aspect-[3/4] bg-[#0c0f0f] border border-white/10 overflow-hidden">
          <img
            alt="Luxury bespoke suit"
            src="/assets/menswear-suit.png"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://lh3.googleusercontent.com/aida/AEtjO1VTlI6QQ39FiYfmZeHMNtLXJEVvF3Solhx_Nw-R_PtSd2cuzY87zELUSzEMT1X-LY9bqAENCtPGm5DJojI93eDjHe2Pf_YtUMtPKenPnDpZzRiZkVZTinNUgNsFaFRrZf1TvviHIUJXblR8CaaTzJ4ttahpr-jpR_g0yRc0mZaLcVFfsKtRLkodJ03-CNxvSLocZ6oKogPZ3CUlQlVxjHGI7mQqcxTP7dmedMq33JEoAiZvWEny9g0urLA";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121414] to-transparent opacity-40"></div>
        </div>
      </section>

      {/* Filter Bar */}
      <div id="collection">
        <FilterBar />
      </div>

      {/* Product Grid */}
      <section className="px-6 md:px-16 py-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {menswearProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Heritage Craft Story */}
      <HeritageSection />
    </div>
  );
};
