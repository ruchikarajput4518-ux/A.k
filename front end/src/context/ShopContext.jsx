import React, { createContext, useContext, useState, useEffect } from 'react';

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  // Navigation State
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'menswear' | 'gowns' | 'accessories' | 'leather' | 'atelier' | 'editorial'

  // Cart State (pre-populated with 1 luxury item for realistic showcase)
  const [cart, setCart] = useState([
    {
      product: {
        id: "mens-suit-charcoal",
        name: "Charcoal Wool Bespoke Suit",
        price: 2450,
        image: "/assets/menswear-suit.png",
        department: "menswear"
      },
      selectedSize: "40R",
      quantity: 1
    }
  ]);

  // Modal / Drawer States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Filter States
  const [activeMensFilter, setActiveMensFilter] = useState('all');

  // Toast Notifications
  const [toast, setToast] = useState(null);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const addToCart = (product, selectedSize = null) => {
    const size = selectedSize || (product.sizes ? product.sizes[0] : 'Standard');
    setCart(prev => {
      const existingIndex = prev.findIndex(item => item.product.id === product.id && item.selectedSize === size);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += 1;
        return next;
      }
      return [...prev, { product, selectedSize: size, quantity: 1 }];
    });
    showToast(`Added ${product.name} (${size}) to Shopping Bag`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, selectedSize) => {
    setCart(prev => prev.filter(item => !(item.product.id === productId && item.selectedSize === selectedSize)));
  };

  const updateQuantity = (productId, selectedSize, delta) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId && item.selectedSize === selectedSize) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ShopContext.Provider value={{
      currentPage,
      navigateTo,
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
      isCartOpen,
      setIsCartOpen,
      isSearchOpen,
      setIsSearchOpen,
      isCheckoutOpen,
      setIsCheckoutOpen,
      quickViewProduct,
      openQuickView,
      closeQuickView,
      activeMensFilter,
      setActiveMensFilter,
      toast,
      showToast
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
