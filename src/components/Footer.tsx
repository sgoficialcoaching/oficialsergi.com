import React from 'react';
import { Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-gray-950 py-16 border-t border-white/10 relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-white/2 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-3">
            <div className="flex items-center space-x-4 mb-6">
              {/* Footer Logo Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-xl border border-white/20">
                <div className="text-black font-black text-lg tracking-tighter">SC</div>
              </div>
              
              {/* Footer Logo Text */}
              <div className="flex flex-col">
                <div className="text-2xl font-black text-white tracking-tight leading-none">
                  SERGI CONSTANCE
                </div>
                <div className="text-xs text-gray-400 font-medium tracking-widest uppercase">
                  IFBB Pro • Actor • Entrepreneur
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              IFBB Pro, actor y emprendedor español. Transformando vidas a través 
              del fitness, la disciplina y la mentalidad ganadora.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/sergiconstance/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 cursor-pointer group"
              >
                <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://x.com/sergiconstance?lang=es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 cursor-pointer group"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/user/SergiConstance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 cursor-pointer group"
              >
                <Youtube className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Sobre', id: 'sobre' },
                { name: 'Timeline', id: 'timeline' },
                { name: 'Coaching', id: 'coaching' },
                { name: 'Contacto', id: 'contacto' }
              ].map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => {
                      document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-10">
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'privacy' }))}
              className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
            >
              Política de Privacidad
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'terms' }))}
              className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
            >
              Términos y Condiciones
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'cookies' }))}
              className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
            >
              Política de Cookies
            </button>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('openLegalModal', { detail: 'legal' }))}
              className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
            >
              Aviso Legal
            </button>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
          <p className="text-gray-300 mb-4 md:mb-0 text-lg">
            © {currentYear} Sergi Constance. Todos los derechos reservados.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;