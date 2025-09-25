import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje para WhatsApp
    const whatsappMessage = `Hola Sergi, me contacto desde tu web:

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Motivo:* ${formData.subject}
*Mensaje:* ${formData.message}`;
    
    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Abrir WhatsApp con el mensaje
    const whatsappURL = `https://wa.me/34614428420?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
    
    // Limpiar formulario
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contacto" className="py-32 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-white/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight hover:scale-105 transition-all duration-1000 cursor-default">
            Contacto
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-white to-gray-300 mx-auto mb-8 hover:w-40 transition-all duration-700"></div>
          <p className="text-gray-200 text-xl max-w-4xl mx-auto leading-relaxed hover:text-white transition-all duration-500">
            ¿Tienes una propuesta? ¿Quieres colaborar? ¿Necesitas más información sobre mis programas? 
            Estoy aquí para ayudarte en tu camino hacia la excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="flex items-center space-x-6 group">
                <div className="bg-gradient-to-r from-white to-gray-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Email</h3>
                  <p className="text-gray-300 text-lg">info@sergiconstance.net</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="bg-gradient-to-r from-white to-gray-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Teléfono</h3>
                  <p className="text-gray-300 text-lg">+34 614 42 84 20</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 group">
                <div className="bg-gradient-to-r from-white to-gray-100 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Ubicación</h3>
                  <p className="text-gray-300 text-lg">Valencia, España</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-black to-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-white/30 transition-all duration-500">
              <h3 className="text-white text-2xl font-bold mb-6">¿Por qué contactarme?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
                  <span>Colaboraciones y patrocinios</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
                  <span>Proyectos cinematográficos</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
                  <span>Eventos y apariciones</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-white to-gray-300 rounded-full"></div>
                  <span>Consultas sobre coaching</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-black to-gray-900 p-10 rounded-2xl border border-gray-800 hover:border-white/30 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 text-white px-6 py-4 rounded-xl border border-gray-700 focus:border-white focus:outline-none transition-all duration-300 backdrop-blur-sm text-lg"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 text-white px-6 py-4 rounded-xl border border-gray-700 focus:border-white focus:outline-none transition-all duration-300 backdrop-blur-sm text-lg"
                />
              </div>
              
              <div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 text-white px-6 py-4 rounded-xl border border-gray-700 focus:border-white focus:outline-none transition-all duration-300 backdrop-blur-sm text-lg"
                >
                  <option value="">Selecciona el motivo</option>
                  <option value="coaching">Coaching</option>
                  <option value="collaboration">Colaboración</option>
                  <option value="media">Medios</option>
                  <option value="events">Eventos</option>
                  <option value="other">Otro</option>
                </select>
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full bg-gray-900/50 text-white px-6 py-4 rounded-xl border border-gray-700 focus:border-white focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm text-lg"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-white to-gray-100 text-black py-5 rounded-xl font-bold text-lg hover:from-gray-100 hover:to-white transition-all duration-500 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
              >
                <Send className="w-6 h-6" />
                <span>Enviar Mensaje</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;