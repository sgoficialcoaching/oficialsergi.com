import React, { useState, useEffect } from 'react';
import { Instagram, Youtube, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 group cursor-pointer">
            {/* Logo Icon */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-2xl border border-white/20 group-hover:scale-110 group-hover:shadow-white/30 transition-all duration-700">
                <div className="text-black font-black text-xl tracking-tighter">SC</div>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <div className="text-2xl font-black text-white tracking-tight leading-none group-hover:scale-105 transition-all duration-700">
                SERGI CONSTANCE
              </div>
              <div className="text-xs text-gray-400 font-medium tracking-widest uppercase mt-0.5 group-hover:text-gray-300 transition-colors duration-500">
                IFBB Pro • Actor • Entrepreneur
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['inicio', 'sobre', 'timeline', 'coaching', 'contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition-all duration-300 capitalize font-medium tracking-wide relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <a 
              href="https://www.instagram.com/sergiconstance/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 cursor-pointer group"
            >
              <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
            </a>
            <a 
              href="https://x.com/sergiconstance?lang=es" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 cursor-pointer group"
            >
              <svg className="w-5 h-5 text-gray-300 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://www.youtube.com/user/SergiConstance" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 cursor-pointer group"
            >
              <Youtube className="w-5 h-5 text-gray-300 group-hover:text-red-500 transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-white/10 backdrop-blur-xl">
            <div className="flex flex-col space-y-4 mt-4">
              {['inicio', 'sobre', 'timeline', 'coaching', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-all duration-300 capitalize text-left font-medium py-2 px-4 rounded-lg hover:bg-white/5"
                >
                  {item}
                </button>
              ))}
              <div className="flex space-x-4 pt-6">
                <a 
                  href="https://www.instagram.com/sergiconstance/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  <Instagram className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://x.com/sergiconstance?lang=es" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-5 h-5 text-gray-300 hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/user/SergiConstance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
                >
                  <Youtube className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;