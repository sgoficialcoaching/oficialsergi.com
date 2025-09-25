import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences with error handling
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (error) {
        // If parsing fails, clear invalid data and show banner
        localStorage.removeItem('cookieConsent');
        setTimeout(() => setShowBanner(true), 1000);
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false
    };
    setPreferences(essentialOnly);
    localStorage.setItem('cookieConsent', JSON.stringify(essentialOnly));
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'essential') return; // Can't disable essential cookies
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-6 left-6 right-6 z-50 max-w-md mx-auto md:max-w-lg md:left-auto md:right-6 md:mx-0">
        <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-2xl">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center">
                <Cookie className="w-5 h-5 text-black" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-lg mb-2">
                Cookies y Privacidad
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar el contenido. 
                Puedes gestionar tus preferencias en cualquier momento.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="bg-gradient-to-r from-white to-gray-100 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:from-gray-100 hover:to-white transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Aceptar Todo</span>
                </button>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="border border-white/30 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:border-white/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Configurar</span>
                  </button>
                  
                  <button
                    onClick={rejectAll}
                    className="text-gray-400 hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300"
                  >
                    Rechazar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-200 rounded-lg flex items-center justify-center">
                  <Cookie className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-xl font-bold text-white">Configuración de Cookies</h2>
              </div>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Personaliza qué cookies quieres permitir. Puedes cambiar estas preferencias en cualquier momento.
              </p>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="flex items-start justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Cookies Esenciales</h3>
                    <p className="text-gray-300 text-sm">
                      Necesarias para el funcionamiento básico del sitio web. No se pueden desactivar.
                    </p>
                  </div>
                  <div className="ml-4">
                    <div className="w-12 h-6 bg-white rounded-full flex items-center justify-end px-1">
                      <div className="w-4 h-4 bg-black rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Cookies de Análisis</h3>
                    <p className="text-gray-300 text-sm">
                      Nos ayudan a entender cómo los visitantes interactúan con el sitio web.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                        preferences.analytics 
                          ? 'bg-white justify-end' 
                          : 'bg-gray-600 justify-start'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full transition-all duration-300 mx-1 ${
                        preferences.analytics ? 'bg-black' : 'bg-white'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Cookies de Marketing</h3>
                    <p className="text-gray-300 text-sm">
                      Utilizadas para mostrar anuncios relevantes y medir la efectividad de las campañas.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                        preferences.marketing 
                          ? 'bg-white justify-end' 
                          : 'bg-gray-600 justify-start'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full transition-all duration-300 mx-1 ${
                        preferences.marketing ? 'bg-black' : 'bg-white'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-start justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">Cookies de Funcionalidad</h3>
                    <p className="text-gray-300 text-sm">
                      Permiten recordar tus preferencias y personalizar tu experiencia.
                    </p>
                  </div>
                  <div className="ml-4">
                    <button
                      onClick={() => togglePreference('functional')}
                      className={`w-12 h-6 rounded-full flex items-center transition-all duration-300 ${
                        preferences.functional 
                          ? 'bg-white justify-end' 
                          : 'bg-gray-600 justify-start'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full transition-all duration-300 mx-1 ${
                        preferences.functional ? 'bg-black' : 'bg-white'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={acceptSelected}
                className="bg-gradient-to-r from-white to-gray-100 text-black px-6 py-3 rounded-lg font-semibold hover:from-gray-100 hover:to-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Check className="w-4 h-4" />
                <span>Guardar Preferencias</span>
              </button>
              
              <button
                onClick={acceptAll}
                className="border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Aceptar Todo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;