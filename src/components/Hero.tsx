import React, { useEffect, useRef } from 'react';
import { Play, Instagram, Twitter, Youtube } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/1 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto pt-32">
          {/* Main Video Box */}
          <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 p-4 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-700 backdrop-blur-xl group mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                playsInline
                controls
                muted
                preload="metadata"
                className="w-full h-full object-cover"
              >
                <source src="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/0924.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>

          {/* Minimal Content Below Video */}
          <div className="text-center space-y-8">
            {/* Professional Badge */}
            <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-500">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium tracking-wide">IFBB Pro • Actor • Entrepreneur</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none hover:scale-105 transition-all duration-700 cursor-default">
              SERGI CONSTANCE
            </h1>

            {/* Brief Description */}
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              De Valencia a Hollywood. Zeus en Justice League. Inspirando millones de vidas.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button 
                onClick={() => scrollToSection('coaching')}
                className="bg-white text-black px-12 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-white/20 flex items-center space-x-3"
              >
                <Play className="w-5 h-5" />
                <span>Comenzar Transformación</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('sobre')}
                className="border-2 border-white/30 text-white px-12 py-4 rounded-full font-bold text-lg hover:border-white hover:bg-white/10 transition-all duration-500 transform hover:scale-110"
              >
                Mi Historia
              </button>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-8 pt-8 mb-16">
              <a 
                href="https://www.instagram.com/sergiconstance/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-white/20 hover:border-pink-500 hover:bg-pink-500/10 transition-all duration-300 hover:scale-125 cursor-pointer group"
              >
                <Instagram className="w-6 h-6 text-gray-300 group-hover:text-pink-400 transition-colors" />
              </a>
              <a 
                href="https://x.com/sergiconstance?lang=es" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-white/20 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-125 cursor-pointer group"
              >
                <svg className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/user/SergiConstance" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full border border-white/20 hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 hover:scale-125 cursor-pointer group"
              >
                <Youtube className="w-6 h-6 text-gray-300 group-hover:text-red-500 transition-colors" />
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center animate-bounce">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;