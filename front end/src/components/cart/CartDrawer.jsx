import React from 'react';
import { useShop } from '../../context/ShopContext';

export const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, cartTotal, cartCount, setIsCheckoutOpen, navigateTo } = useShop();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Smoked Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#121414] border-l border-white/10 h-full flex flex-col z-10 animate-slideLeft shadow-2xl">
        {/* Header */}
        <div className="p-6 md:p-8 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-xl text-[#e9c176]">shopping_bag</span>
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#e2e2e2]">
              SHOPPING BAG ({cartCount})
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Shopping Bag"
            className="text-[#cfc4c5] hover:text-[#e2e2e2] bg-transparent border-none cursor-pointer flex items-center"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        {/* Worldwide Delivery Banner */}
        <div className="bg-[#1a1c1c] px-6 py-2.5 border-b border-white/5 text-[11px] text-[#e9c176] tracking-wider uppercase flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-sm">flight</span>
          <span>COMPLIMENTARY WHITE-GLOVE GLOBAL DELIVERY</span>
        </div>

        {/* Bag Items List */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 divide-y divide-white/10">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <span className="material-symbols-outlined text-5xl text-white/20 mb-4">
                production_quantity_limits
              </span>
              <p className="font-display text-xl text-[#e2e2e2] mb-2">Your Bag is Empty</p>
              <p className="text-xs text-[#cfc4c5] mb-8 max-w-xs">
                Explore the latest pieces from the Noir Collection and curate your bespoke wardrobe.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigateTo('menswear');
                }}
                className="btn-primary"
              >
                DISCOVER COLLECTION
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.product.id}-${item.selectedSize}`} className="py-6 first:pt-0 last:pb-0 flex gap-4">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-24 object-cover bg-[#0c0f0f] border border-white/10 flex-shrink-0"
                  onError={(e) => {
                    if (item.product.fallbackImage) {
                      e.target.src = item.product.fallbackImage;
                    }
                  }}
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h4 className="text-xs font-semibold text-[#e2e2e2] uppercase tracking-wider">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        aria-label="Remove item"
                        className="text-[#cfc4c5] hover:text-[#e9c176] bg-transparent border-none cursor-pointer p-0"
                      >
                        <span className="material-symbols-outlined text-base">delete</span>
                      </button>
                    </div>
                    <div className="text-[11px] text-[#cfc4c5] uppercase tracking-wider mb-2">
                      Size: <span className="text-[#e2e2e2] font-semibold">{item.selectedSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-white/20">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, -1)}
                        className="w-7 h-7 flex items-center justify-center text-xs text-[#e2e2e2] hover:bg-white/10 bg-transparent border-none cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-semibold text-[#e2e2e2]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, 1)}
                        className="w-7 h-7 flex items-center justify-center text-xs text-[#e2e2e2] hover:bg-white/10 bg-transparent border-none cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <span className="text-sm font-semibold text-[#e9c176] tracking-wider">
                      ${(item.product.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout */}
        {cart.length > 0 && (
          <div className="p-6 md:p-8 bg-[#0c0f0f] border-t border-white/10 flex flex-col gap-4">
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-[0.2em] text-[#cfc4c5]">SUBTOTAL</span>
              <span className="font-display text-2xl text-[#e2e2e2] font-bold">
                ${cartTotal.toLocaleString()}
              </span>
            </div>
            <p className="text-[10px] text-white/40 tracking-wider uppercase">
              Taxes calculated at dispatch. All bespoke items packaged in signature obsidian boxes.
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="w-full btn-gold py-4 text-xs tracking-[0.25em]"
            >
              PROCEED TO CONCIERGE CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
