import React from 'react';
import { ShopProvider, useShop } from './context/ShopContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Toast } from './components/layout/Toast';
import { CartDrawer } from './components/cart/CartDrawer';
import { CheckoutModal } from './components/cart/CheckoutModal';
import { SearchModal } from './components/search/SearchModal';
import { ProductQuickView } from './components/product/ProductQuickView';

import { HomePage } from './pages/HomePage';
import { MenswearPage } from './pages/MenswearPage';
import { GownsPage } from './pages/GownsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { LeatherGoodsPage } from './pages/LeatherGoodsPage';
import { AtelierPage } from './pages/AtelierPage';
import { EditorialPage } from './pages/EditorialPage';

const AppContent = () => {
  const { currentPage } = useShop();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'menswear':
        return <MenswearPage />;
      case 'gowns':
        return <GownsPage />;
      case 'accessories':
        return <AccessoriesPage />;
      case 'leather':
        return <LeatherGoodsPage />;
      case 'atelier':
        return <AtelierPage />;
      case 'editorial':
        return <EditorialPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#121414] text-[#e2e2e2]">
      {/* Smoked Glass Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Global Concierge Modals & Overlays */}
      <CartDrawer />
      <CheckoutModal />
      <SearchModal />
      <ProductQuickView />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
