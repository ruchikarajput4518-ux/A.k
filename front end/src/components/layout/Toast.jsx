import React from 'react';
import { useShop } from '../../context/ShopContext';

export const Toast = () => {
  const { toast } = useShop();

  if (!toast) return null;

  return (
    <div className="fixed bottom-8 right-8 z-[100] animate-slideDown max-w-md">
      <div className="bg-[#1a1c1c] border border-[#e9c176]/40 px-6 py-4 shadow-2xl flex items-center gap-4">
        <span className="material-symbols-outlined text-[#e9c176] text-xl">check_circle</span>
        <div className="text-xs tracking-wider text-[#e2e2e2] uppercase font-medium">
          {toast}
        </div>
      </div>
    </div>
  );
};
