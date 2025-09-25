import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Cyber Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-particle-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Energy Fields */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl animate-energy-wave"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-pink-500/15 to-red-500/15 rounded-full blur-3xl animate-energy-wave" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-energy-wave" style={{ animationDelay: '2s' }}></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-none hover:scale-105 transition-all duration-1000 cursor-default">
              Sobre Mí
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-white to-gray-300 mb-8 hover:w-32 transition-all duration-700"></div>
            <p className="text-gray-200 text-xl leading-relaxed font-light hover:text-white transition-all duration-500">
              Soy Sergi Constance, un atleta profesional IFBB Pro nacido en Valencia, España. 
              Mi pasión por el fitness y la búsqueda de la excelencia me han llevado desde las 
              competiciones de bodybuilding hasta las pantallas de Hollywood.
            </p>
            <div className="h-2 w-32 holographic-border mb-8 rounded-full animate-quantum-glow hover:w-40 transition-all duration-700"></div>
            <p className="text-gray-200 text-xl leading-relaxed font-light hover:text-white transition-all duration-500">
              Con más de una década de experiencia en el mundo del fitness, he conquistado 
              múltiples títulos internacionales y he tenido el honor de representar a Zeus 
              en las películas de Justice League de Zack Snyder.
            </p>
            <p className="text-gray-200 text-xl leading-relaxed font-light hover:text-white transition-all duration-500">
              Mi misión es inspirar a millones de personas alrededor del mundo a superar 
              sus límites, alcanzar sus metas y vivir una vida extraordinaria a través 
              del fitness, la disciplina y la mentalidad ganadora.
            </p>
            <div className="flex flex-wrap gap-4 pt-8">
              <span className="bg-gradient-to-r from-white to-gray-200 text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-110 hover:shadow-lg transition-all duration-500 cursor-default">IFBB Pro</span>
              <span className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full text-sm font-bold border border-white/20 hover:scale-110 hover:border-white/40 hover:shadow-lg transition-all duration-500 cursor-default">Actor</span>
              <span className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full text-sm font-bold border border-white/20 hover:scale-110 hover:border-white/40 hover:shadow-lg transition-all duration-500 cursor-default">Emprendedor</span>
              <span className="bg-gradient-to-r from-white to-gray-200 text-black px-6 py-3 rounded-full text-sm font-bold hover:scale-110 hover:shadow-lg transition-all duration-500 cursor-default">5M+ Followers</span>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-white/30 transition-all duration-700 hover:scale-105">
              <img
                src="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/revista-2.jpg"
                alt="Sergi Constance"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl blur-sm animate-float"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-purple-500/15 to-transparent rounded-2xl blur-sm animate-float-delayed"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;