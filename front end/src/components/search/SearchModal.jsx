import React, { useState, useMemo } from 'react';
import { useShop } from '../../context/ShopContext';
import { PRODUCTS } from '../../data/products';

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen, openQuickView, addToCart } = useShop();
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter((item) =>
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      (item.fabric && item.fabric.toLowerCase().includes(q))
    );
  }, [query]);

  if (!isSearchOpen) return null;

  const quickTerms = ['Suits', 'Cashmere', 'Gowns', 'Titanium', 'Leather', 'Silk'];

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-16 md:pt-24 px-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsSearchOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      <div className="relative w-full max-w-3xl bg-[#121414] border border-white/15 p-8 md:p-12 shadow-2xl z-10 max-h-[85vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={() => setIsSearchOpen(false)}
          className="absolute top-6 right-6 text-white/50 hover:text-white bg-transparent border-none cursor-pointer"
          aria-label="Close Search"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Search Header & Input */}
        <div className="border-b border-white/20 pb-4 mb-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-2">
            CATALOG SEARCH
          </span>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-2xl text-[#e9c176]">search</span>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search bespoke suits, gowns, timepieces, calfskin..."
              className="w-full bg-transparent border-none text-lg md:text-xl text-[#e2e2e2] placeholder:text-white/30 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-white/40 hover:text-white bg-transparent border-none cursor-pointer text-xs uppercase"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="mb-6">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] block mb-3">
              Frequent Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {quickTerms.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="bg-[#1a1c1c] hover:bg-[#e9c176] hover:text-[#121414] text-[#e2e2e2] text-xs px-4 py-2 uppercase tracking-widest border border-white/10 transition-colors cursor-pointer"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        <div className="flex-1 overflow-y-auto divide-y divide-white/10">
          {query.trim() && filteredProducts.length === 0 && (
            <div className="text-center py-12 text-[#cfc4c5] text-sm">
              No bespoke garments or accessories found matching "{query}".
            </div>
          )}

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="py-4 flex items-center justify-between gap-4 hover:bg-white/5 px-2 transition-colors"
            >
              <div
                onClick={() => {
                  setIsSearchOpen(false);
                  openQuickView(product);
                }}
                className="flex items-center gap-4 cursor-pointer flex-1"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-18 object-cover bg-[#0c0f0f] border border-white/10 flex-shrink-0"
                  onError={(e) => {
                    if (product.fallbackImage) {
                      e.target.src = product.fallbackImage;
                    }
                  }}
                />
                <div>
                  <span className="text-[10px] text-[#e9c176] uppercase tracking-widest block">
                    {product.department}
                  </span>
                  <h4 className="text-sm font-semibold text-[#e2e2e2] uppercase tracking-wider">
                    {product.name}
                  </h4>
                  <span className="text-xs text-[#cfc4c5]">${product.price.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    openQuickView(product);
                  }}
                  className="text-xs uppercase tracking-widest text-[#cfc4c5] hover:text-white px-3 py-2 border border-white/10 bg-transparent cursor-pointer"
                >
                  View
                </button>
                <button
                  onClick={() => {
                    addToCart(product);
                    setIsSearchOpen(false);
                  }}
                  className="btn-gold px-4 py-2 text-xs"
                >
                  Acquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
