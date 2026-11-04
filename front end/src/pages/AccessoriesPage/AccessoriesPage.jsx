import React from 'react';
import { HorologyDetail } from './HorologyDetail';
import { ProductCard } from '../../components/product/ProductCard';
import { PRODUCTS } from '../../data/products';

export const AccessoriesPage = () => {
  const accessoryProducts = PRODUCTS.filter((item) => item.department === 'accessories');

  return (
    <div className="pt-24 md:pt-28">
      {/* Editorial Hero */}
      <section className="px-6 md:px-16 py-16 md:py-24 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-6 z-10 md:pr-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#e9c176] font-semibold">
            METALLURGY & OPTICS
          </span>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl text-[#e2e2e2] leading-tight">
            HOROLOGY & VISION
          </h1>
          <p className="text-base md:text-lg text-[#cfc4c5] font-light leading-relaxed max-w-lg">
            Tactile perfection. Titanium watch cases hand-brushed to a matte obsidian finish, paired with beveled Japanese acetate eyewear.
          </p>
        </div>

        <div className="w-full md:w-1/2 relative aspect-square bg-[#0c0f0f] border border-white/10 overflow-hidden">
          <img
            alt="Horology and Eyewear"
            src="/assets/accessories-watch.png"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121414] to-transparent opacity-30"></div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 md:px-16 py-20 max-w-[1440px] mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-1">
              INSTRUMENTS OF DISTINCTION
            </span>
            <h2 className="font-display text-3xl text-[#e2e2e2]">
              Limited Timepieces & Eyewear
            </h2>
          </div>
          <span className="text-xs uppercase tracking-[0.2em] text-[#cfc4c5] mt-2 md:mt-0">
            Swiss Made & Japanese Handcrafted
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accessoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Horology Craft Details */}
      <HorologyDetail />
    </div>
  );
};
