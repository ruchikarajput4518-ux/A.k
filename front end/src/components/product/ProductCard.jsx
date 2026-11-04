import React from 'react';
import { useShop } from '../../context/ShopContext';

export const ProductCard = ({ product, priority = false }) => {
  const { openQuickView, addToCart } = useShop();

  return (
    <div className="group block relative cursor-pointer">
      {/* Image Container with Zoom effect */}
      <div
        onClick={() => openQuickView(product)}
        className="relative aspect-[3/4] mb-5 overflow-hidden bg-[#0c0f0f] border border-white/5"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          onError={(e) => {
            if (product.fallbackImage) {
              e.target.src = product.fallbackImage;
            }
          }}
        />

        {/* Tag Chip */}
        {product.tag && (
          <div className="absolute top-4 left-4 z-10 bg-[#121414]/90 backdrop-blur-md px-3 py-1 border border-white/15 text-[10px] uppercase tracking-[0.2em] text-[#e9c176] font-semibold">
            {product.tag}
          </div>
        )}

        {/* Hover Quick Action Buttons */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="flex-1 py-3 bg-[#1a1c1c] text-[#e2e2e2] hover:bg-[#e2e2e2] hover:text-[#121414] border border-white/20 text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors cursor-pointer"
          >
            QUICK VIEW
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="py-3 px-4 bg-[#e9c176] text-[#121414] hover:bg-white text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Add to Bag"
          >
            <span className="material-symbols-outlined text-base">shopping_bag</span>
          </button>
        </div>
      </div>

      {/* Product Metadata */}
      <div onClick={() => openQuickView(product)} className="flex justify-between items-baseline gap-2">
        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#e2e2e2] group-hover:text-[#e9c176] transition-colors">
            {product.name}
          </h3>
          <span className="text-[11px] text-[#cfc4c5]/70 uppercase tracking-widest block mt-0.5">
            {product.category}
          </span>
        </div>
        <span className="text-sm text-[#e9c176] font-medium tracking-wider whitespace-nowrap">
          ${product.price.toLocaleString()}
        </span>
      </div>
    </div>
  );
};
