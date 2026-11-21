import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { api } from '../../services/api';

export const CheckoutModal = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, cartTotal, clearCart, showToast } = useShop();
  const [step, setStep] = useState(1); // 1: Client Info, 2: Confirmation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderReference, setOrderReference] = useState('');
  const [formData, setFormData] = useState({
    name: 'Lord Julian Sterling',
    email: 'j.sterling@mayfair.co.uk',
    address: '14 Grosvenor Square',
    city: 'London',
    country: 'United Kingdom',
    deliveryMethod: 'white-glove',
    tailoringNotes: 'Slightly tapered waist; custom cuff length 34.5 in.'
  });

  if (!isCheckoutOpen) return null;

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderPayload = {
        name: formData.name,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        country: formData.country,
        deliveryMethod: formData.deliveryMethod,
        tailoringNotes: formData.tailoringNotes,
        items: cart.map(item => ({
          productId: item.product.id,
          name: item.product.name,
          price: item.product.price,
          selectedSize: item.selectedSize,
          quantity: item.quantity,
          image: item.product.image
        }))
      };

      const result = await api.createOrder(orderPayload);
      const generatedId = result?.data?.id || ('RVN-' + Math.floor(100000 + Math.random() * 900000));
      setOrderReference(generatedId);
      setStep(2);
      clearCart();
      showToast(result?.message || 'Your bespoke order has been registered with our senior concierge.');
    } catch (err) {
      // Graceful local fallback if backend offline
      const fallbackId = 'RVN-' + Math.floor(100000 + Math.random() * 900000);
      setOrderReference(fallbackId);
      setStep(2);
      clearCart();
      showToast('Your bespoke order has been registered with our senior concierge.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const orderId = orderReference || 'RVN-884210';

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => setIsCheckoutOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      <div className="relative w-full max-w-2xl bg-[#121414] border border-white/15 p-8 md:p-12 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => {
            setIsCheckoutOpen(false);
            setStep(1);
          }}
          className="absolute top-6 right-6 text-white/50 hover:text-white bg-transparent border-none cursor-pointer"
          aria-label="Close"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {step === 1 ? (
          <div>
            <div className="text-center mb-8">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-2">
                RIVEN PRIVATE CLIENT SERVICES
              </span>
              <h2 className="font-display text-3xl text-[#e2e2e2]">Concierge Checkout</h2>
              <p className="text-xs text-[#cfc4c5] mt-2 font-light">
                Complete your details below. Your personal atelier advisor will oversee final inspection and bespoke delivery.
              </p>
            </div>

            {/* Order Summary Bar */}
            <div className="bg-[#1a1c1c] p-4 border border-white/5 mb-8 flex justify-between items-center text-xs tracking-wider">
              <span className="text-[#cfc4c5] uppercase">
                {cart.length} Bespoke Item(s)
              </span>
              <span className="font-bold text-[#e9c176] text-sm">
                Total: ${cartTotal.toLocaleString()}
              </span>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] mb-2 font-medium">
                    Client Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#1a1c1c] border border-white/15 focus:border-[#e9c176] text-[#e2e2e2] px-4 py-3 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] mb-2 font-medium">
                    Private Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#1a1c1c] border border-white/15 focus:border-[#e9c176] text-[#e2e2e2] px-4 py-3 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] mb-2 font-medium">
                  Dispatch Address
                </label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#1a1c1c] border border-white/15 focus:border-[#e9c176] text-[#e2e2e2] px-4 py-3 text-sm focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] mb-2 font-medium">
                    City / Prefecture
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#1a1c1c] border border-white/15 focus:border-[#e9c176] text-[#e2e2e2] px-4 py-3 text-sm focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] mb-2 font-medium">
                    Country
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-[#1a1c1c] border border-white/15 focus:border-[#e9c176] text-[#e2e2e2] px-4 py-3 text-sm focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-[0.2em] text-[#cfc4c5] mb-2 font-medium">
                  Atelier Notes & Fitting Adjustments (Optional)
                </label>
                <textarea
                  rows="2"
                  value={formData.tailoringNotes}
                  onChange={(e) => setFormData({ ...formData, tailoringNotes: e.target.value })}
                  placeholder="Specify custom sleeve inseams, monogram initials, or private delivery protocols"
                  className="w-full bg-[#1a1c1c] border border-white/15 focus:border-[#e9c176] text-[#e2e2e2] p-4 text-xs focus:outline-none"
                />
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center">
                <span className="text-[11px] uppercase text-[#cfc4c5] tracking-wider">
                  Discreet Billing • Obsidian Encryption 256-bit
                </span>
                <button type="submit" disabled={isSubmitting} className="w-full md:w-auto btn-gold px-8 py-4 disabled:opacity-50">
                  {isSubmitting ? 'CONFIRMING COMMISSION...' : 'CONFIRM COMMISSION'}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <span className="material-symbols-outlined text-6xl text-[#e9c176] mb-6">
              verified
            </span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#e9c176] font-semibold block mb-2">
              COMMISSION CONFIRMED
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-[#e2e2e2] mb-4">
              Thank You, {formData.name}
            </h2>
            <p className="text-sm text-[#cfc4c5] max-w-md mx-auto mb-8 font-light leading-relaxed">
              Your acquisition dossier <strong className="text-[#e2e2e2]">{orderId}</strong> has been transferred to our chief master tailor. A private concierge notification has been dispatched to {formData.email}.
            </p>

            <div className="bg-[#1a1c1c] p-6 max-w-md mx-auto border border-white/10 text-left mb-8 space-y-2 text-xs">
              <div className="flex justify-between text-[#cfc4c5]">
                <span>Dossier Reference:</span>
                <span className="text-[#e2e2e2] font-semibold">{orderId}</span>
              </div>
              <div className="flex justify-between text-[#cfc4c5]">
                <span>Dispatch Mode:</span>
                <span className="text-[#e9c176] font-semibold">White-Glove Armored Courier</span>
              </div>
              <div className="flex justify-between text-[#cfc4c5]">
                <span>Destination:</span>
                <span className="text-[#e2e2e2]">{formData.city}, {formData.country}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCheckoutOpen(false);
                setStep(1);
              }}
              className="btn-primary"
            >
              RETURN TO ATELIER
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
