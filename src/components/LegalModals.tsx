import React, { useState, useEffect } from 'react';
import { X, Shield, FileText, Cookie, Scale } from 'lucide-react';

interface LegalModalsProps {}

const LegalModals: React.FC<LegalModalsProps> = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      setActiveModal(event.detail);
    };

    window.addEventListener('openLegalModal', handleOpenModal as EventListener);
    return () => window.removeEventListener('openLegalModal', handleOpenModal as EventListener);
  }, []);

  const closeModal = () => setActiveModal(null);

  const modalContent = {
    privacy: {
      icon: <Shield className="w-8 h-8" />,
      title: 'Política de Privacidad',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-white mb-4">1. Información que recopilamos</h3>
            <p className="text-gray-300 leading-relaxed">
              Recopilamos información personal que nos proporcionas voluntariamente cuando te registras en nuestros servicios, 
              te suscribes a nuestro newsletter, o nos contactas a través de nuestros formularios.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">2. Cómo utilizamos tu información</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Proporcionar y mantener nuestros servicios</li>
              <li>• Comunicarnos contigo sobre nuestros programas</li>
              <li>• Mejorar nuestros servicios y experiencia de usuario</li>
              <li>• Cumplir con obligaciones legales</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">3. Protección de datos</h3>
            <p className="text-gray-300 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal 
              contra el acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">4. Tus derechos</h3>
            <p className="text-gray-300 leading-relaxed">
              Tienes derecho a acceder, rectificar, suprimir y portar tus datos personales. También puedes oponerte al 
              tratamiento y solicitar la limitación del mismo. Para ejercer estos derechos, contacta con nosotros.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">5. Contacto</h3>
            <p className="text-gray-300 leading-relaxed">
              Para cualquier consulta sobre esta política de privacidad, puedes contactarnos en: info@sergiconstance.net
            </p>
          </section>
        </div>
      )
    },
    terms: {
      icon: <FileText className="w-8 h-8" />,
      title: 'Términos y Condiciones',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-white mb-4">1. Aceptación de términos</h3>
            <p className="text-gray-300 leading-relaxed">
              Al acceder y utilizar este sitio web, aceptas estar sujeto a estos términos y condiciones de uso. 
              Si no estás de acuerdo con alguna parte de estos términos, no debes usar nuestros servicios.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">2. Uso del sitio web</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Usar el sitio solo para fines legales y autorizados</li>
              <li>• No interferir con el funcionamiento del sitio</li>
              <li>• No intentar acceder a áreas restringidas</li>
              <li>• Respetar los derechos de propiedad intelectual</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">3. Servicios de coaching</h3>
            <p className="text-gray-300 leading-relaxed">
              Los programas de coaching y entrenamiento son servicios profesionales. Los resultados pueden variar según 
              el individuo. No garantizamos resultados específicos y recomendamos consultar con un médico antes de comenzar.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">4. Propiedad intelectual</h3>
            <p className="text-gray-300 leading-relaxed">
              Todo el contenido de este sitio web, incluyendo textos, imágenes, videos y programas de entrenamiento, 
              está protegido por derechos de autor y es propiedad de Sergi Constance.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">5. Limitación de responsabilidad</h3>
            <p className="text-gray-300 leading-relaxed">
              Sergi Constance no será responsable de daños directos, indirectos, incidentales o consecuentes que puedan 
              surgir del uso de este sitio web o de nuestros servicios.
            </p>
          </section>
        </div>
      )
    },
    cookies: {
      icon: <Cookie className="w-8 h-8" />,
      title: 'Política de Cookies',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-white mb-4">¿Qué son las cookies?</h3>
            <p className="text-gray-300 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
              Nos ayudan a mejorar tu experiencia y a entender cómo utilizas nuestro sitio.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Tipos de cookies que utilizamos</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Cookies esenciales</h4>
                <p className="text-gray-300">Necesarias para el funcionamiento básico del sitio web.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Cookies de rendimiento</h4>
                <p className="text-gray-300">Nos ayudan a entender cómo los visitantes interactúan con el sitio.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Cookies de funcionalidad</h4>
                <p className="text-gray-300">Permiten recordar tus preferencias y personalizar tu experiencia.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Gestión de cookies</h3>
            <p className="text-gray-300 leading-relaxed">
              Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu 
              dispositivo y configurar la mayoría de navegadores para evitar que se instalen.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Cookies de terceros</h3>
            <p className="text-gray-300 leading-relaxed">
              Utilizamos servicios de terceros como Google Analytics para analizar el uso del sitio. Estos servicios 
              pueden instalar sus propias cookies.
            </p>
          </section>
        </div>
      )
    },
    legal: {
      icon: <Scale className="w-8 h-8" />,
      title: 'Aviso Legal',
      content: (
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Datos identificativos</h3>
            <div className="text-gray-300 space-y-2">
              <p><strong>Titular:</strong> Sergi Constance</p>
              <p><strong>Email:</strong> info@sergiconstance.net</p>
              <p><strong>Teléfono:</strong> +34 614 42 84 20</p>
              <p><strong>Ubicación:</strong> Valencia, España</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Objeto</h3>
            <p className="text-gray-300 leading-relaxed">
              Este sitio web tiene como finalidad proporcionar información sobre los servicios profesionales de coaching, 
              entrenamiento personal y programas de fitness ofrecidos por Sergi Constance.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Condiciones de uso</h3>
            <p className="text-gray-300 leading-relaxed">
              El acceso y uso de este sitio web implica la aceptación de las presentes condiciones generales. 
              El usuario se compromete a hacer un uso correcto del sitio web conforme a la ley.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Responsabilidad</h3>
            <p className="text-gray-300 leading-relaxed">
              Sergi Constance no se hace responsable de los daños y perjuicios que puedan derivarse del uso incorrecto 
              de este sitio web o de la información contenida en el mismo.
            </p>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-white mb-4">Modificaciones</h3>
            <p className="text-gray-300 leading-relaxed">
              Sergi Constance se reserva el derecho de modificar cualquier tipo de información que pudiera aparecer en el 
              sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios dichas obligaciones.
            </p>
          </section>
        </div>
      )
    }
  };

  if (!activeModal) return null;

  const modal = modalContent[activeModal as keyof typeof modalContent];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-8 border-b border-white/10">
          <div className="flex items-center space-x-4">
            <div className="text-white">
              {modal.icon}
            </div>
            <h2 className="text-2xl font-bold text-white">{modal.title}</h2>
          </div>
          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
          {modal.content}
        </div>
        
        {/* Footer */}
        <div className="p-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            Última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalModals;