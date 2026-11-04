import React from 'react';
import { useShop } from '../../context/ShopContext';

export const HeroSection = () => {
  const { navigateTo } = useShop();

  return (
    <section className="relative w-full h-screen min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background Photography with dark overlays */}
      <div className="absolute inset-0 z-0">
        <img
          alt="RIVEN Noir Collection - Evening Gown"
          src="/assets/evening-gown.png"
          className="w-full h-full object-cover object-center scale-100 animate-[fadeIn_2s_ease-out_forwards]"
          onError={(e) => {
            e.target.src = "https://lh3.googleusercontent.com/aida-public/AB6AXuBBNSIMd15s-GfuDrlC7IBcZdLkGLINckizrOsX0GylHyXDVubkoL1qdzQaed5-DKw3qsqeiDLeMSfGpZ8GXo53S3H9WUS0jbFvrBVTe_Gb6AYoQACeW0-iHWXQMwnZ6AbbT49DqjtD7lt-MXXjrlwu-O69ixjWlpKRjRkjX5oypS7bIV1Y9mZWLxdkhrAEPGgsiXFMGOgSGJiqQfpC8lYVoYIg8dGHgRhOciO6CppZMYvt9a91oYQ-";
          }}
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#121414] via-transparent to-black/30"></div>
      </div>

      {/* Hero Typography & CTA */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 mt-16 max-w-4xl mx-auto">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#e9c176] font-semibold mb-4 animate-fadeIn">
          FALL / WINTER NOIR
        </span>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#e2e2e2] mb-6 tracking-tight animate-fadeIn">
          THE NOIR COLLECTION
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-[#e2e2e2]/90 max-w-2xl mb-10 font-light leading-relaxed animate-fadeIn">
          Uncompromising luxury. Timeless silhouettes rendered in the deepest shades of midnight.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fadeIn">
          <button
            onClick={() => navigateTo('menswear')}
            className="btn-primary"
          >
            EXPLORE COLLECTION
          </button>
          <button
            onClick={() => navigateTo('atelier')}
            className="btn-secondary"
          >
            THE ATELIER
          </button>
        </div>
      </div>
    </section>
  );
};
