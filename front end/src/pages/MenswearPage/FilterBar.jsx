import React from 'react';
import { useShop } from '../../context/ShopContext';
import { CATEGORIES } from '../../data/products';

export const FilterBar = () => {
  const { activeMensFilter, setActiveMensFilter } = useShop();

  return (
    <section className="px-6 md:px-16 py-6 border-t border-b border-white/10 flex flex-wrap justify-center gap-6 md:gap-10 sticky top-[72px] md:top-[88px] z-40 bg-[#121414]/90 backdrop-blur-md">
      {CATEGORIES.map((cat) => {
        const isActive = activeMensFilter === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => setActiveMensFilter(cat.id)}
            className={`text-xs uppercase tracking-[0.2em] font-semibold py-1 bg-transparent border-none cursor-pointer transition-colors relative ${
              isActive
                ? 'text-[#e9c176] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#e9c176]'
                : 'text-[#cfc4c5] hover:text-[#e2e2e2]'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </section>
  );
};
