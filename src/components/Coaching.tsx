import React from 'react';
import { Dumbbell, Target, Users, Crown } from 'lucide-react';

const coachingServices = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: 'Entrenamiento Personal',
    description: 'Programas de entrenamiento personalizados diseñados para maximizar tus resultados.',
    price: 'Desde €200/mes'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Plan Nutricional',
    description: 'Planes de alimentación adaptados a tus objetivos y estilo de vida.',
    price: 'Desde €150/mes'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Coaching Grupal',
    description: 'Entrenamientos grupales con la metodología que me llevó al éxito.',
    price: 'Desde €80/mes'
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: 'Elite Program',
    description: 'Acceso VIP con coaching directo y seguimiento personalizado 24/7.',
    price: 'Desde €500/mes'
  }
];

const Coaching = () => {
  return (
    <section id="coaching" className="py-32 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Clean Background Elements */}
      <div className="absolute top-32 right-32 w-72 h-72 bg-white/4 rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-32 w-64 h-64 bg-white/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight hover:scale-105 transition-all duration-1000 cursor-default">
            Coaching Elite
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-white to-gray-300 mx-auto mb-8 hover:w-40 transition-all duration-700"></div>
          <p className="text-gray-200 text-xl max-w-4xl mx-auto leading-relaxed hover:text-white transition-all duration-500">
            Transforma tu físico y mentalidad con los mismos métodos que me llevaron 
            desde Valencia hasta conquistar los escenarios más importantes del mundo
          </p>
        </div>

        {/* VIP Coaching Highlight Box */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 p-12 max-w-4xl mx-auto text-center hover:border-white/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
            <div className="mb-4">
              <span className="text-gray-300 text-sm font-medium tracking-widest uppercase">Programa Exclusivo</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
              Sergi Constance VIP Coaching
            </h3>
            <p className="text-gray-200 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
              Accede al programa de coaching más exclusivo y personalizado. Entrena directamente conmigo 
              y transforma tu físico con los mismos métodos que me llevaron desde Valencia hasta Hollywood. 
              Coaching 1 a 1, planes nutricionales personalizados, seguimiento 24/7 y acceso VIP a todo mi contenido.
            </p>
            <a 
              href="https://sergiconstancevipcoaching.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-white to-gray-100 text-black px-16 py-6 rounded-full font-bold text-xl hover:from-gray-100 hover:to-white transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-white/30 border border-white/20"
            >
              Acceder al VIP Coaching
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Coaching;