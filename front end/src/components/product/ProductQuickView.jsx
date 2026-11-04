import React, { useState, useEffect } from 'react';
import { useShop } from '../../context/ShopContext';

export const ProductQuickView = () => {
  const { quickViewProduct, closeQuickView, addToCart } = useShop();
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    if (quickViewProduct && quickViewProduct.sizes && quickViewProduct.sizes.length > 0) {
      setSelectedSize(quickViewProduct.sizes[0]);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-8">
      {/* Smoked Backdrop */}
      <div
        onClick={closeQuickView}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      <div className="relative w-full max-w-4xl bg-[#121414] border border-white/20 p-6 md:p-10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeQuickView}
          className="absolute top-6 right-6 text-white/50 hover:text-white bg-transparent border-none cursor-pointer z-20"
          aria-label="Close Preview"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Image Showcase */}
          <div className="md:col-span-6 relative aspect-[3/4] bg-[#0c0f0f] border border-white/10 overflow-hidden">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                if (quickViewProduct.fallbackImage) {
                  e.target.src = quickViewProduct.fallbackImage;
                }
              }}
            />
            {quickViewProduct.tag && (
              <div className="absolute top-4 left-4 bg-[#121414]/90 px-3 py-1 border border-white/15 text-[10px] uppercase tracking-[0.2em] text-[#e9c176] font-semibold">
                {quickViewProduct.tag}
              </div>
            )}
          </div>

          {/* Sizing & Sartorial Dossier */}
          <div className="md:col-span-6 flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold mb-2">
              RIVEN ATELIER DOSSIER
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-[#e2e2e2] mb-3">
              {quickViewProduct.name}
            </h2>
            <div className="text-xl text-[#e9c176] font-medium tracking-wider mb-6">
              ${quickViewProduct.price.toLocaleString()}
            </div>

            <p className="text-sm text-[#cfc4c5] leading-relaxed mb-6 font-light">
              {quickViewProduct.description}
            </p>

            {/* Sartorial Details List */}
            <div className="border-t border-b border-white/10 py-4 mb-6 space-y-2 text-xs">
              {quickViewProduct.fabric && (
                <div className="flex justify-between">
                  <span className="text-[#cfc4c5] uppercase tracking-wider">Composition</span>
                  <span className="text-[#e2e2e2] font-medium">{quickViewProduct.fabric}</span>
                </div>
              )}
              {quickViewProduct.origin && (
                <div className="flex justify-between">
                  <span className="text-[#cfc4c5] uppercase tracking-wider">Provenance</span>
                  <span className="text-[#e2e2e2] font-medium">{quickViewProduct.origin}</span>
                </div>
              )}
              {quickViewProduct.fit && (
                <div className="flex justify-between">
                  <span className="text-[#cfc4c5] uppercase tracking-wider">Silhouette</span>
                  <span className="text-[#e2e2e2] font-medium text-right max-w-[60%]">{quickViewProduct.fit}</span>
                </div>
              )}
            </div>

            {/* Sizing Selector */}
            {quickViewProduct.sizes && quickViewProduct.sizes.length > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] font-semibold">
                    SELECT PROPORTIONS
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#e9c176] cursor-pointer hover:underline">
                    Bespoke Sizing Guide
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2.5 text-xs uppercase tracking-wider border cursor-pointer transition-all ${
                        selectedSize === size
                          ? 'border-[#e9c176] bg-[#e9c176] text-[#121414] font-bold'
                          : 'border-white/20 bg-transparent text-[#e2e2e2] hover:border-white/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4">
              <button
                onClick={() => {
                  addToCart(quickViewProduct, selectedSize);
                  closeQuickView();
                }}
                className="flex-1 btn-gold py-4 text-xs tracking-[0.25em]"
              >
                ADD TO SHOPPING BAG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
