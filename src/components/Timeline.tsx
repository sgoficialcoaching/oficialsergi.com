import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Film, Dumbbell, Star, Crown, Zap, Award, Camera, Globe } from 'lucide-react';

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    {
      year: '2011',
      title: 'Primeras Victorias',
      description: 'Ganador del Campeonato WABBA España Junior y 1er lugar en la Copa de España WABBA. El inicio de una carrera legendaria.',
      icon: <Trophy className="w-5 h-5" />,
      category: 'Competición',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/revista-2.jpg'
    },
    {
      year: '2013',
      title: 'Graduación & Títulos',
      description: 'Graduado en Ciencias de la Actividad Física (Universidad de Valencia). 5 victorias IFBB Men\'s Physique, Muscle & Fitness Cover Model.',
      icon: <Award className="w-5 h-5" />,
      category: 'Educación',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/Foto-24-3-19-22-47-35.png'
    },
    {
      year: '2014',
      title: 'WBFF Pro Champion',
      description: 'Victoria en WBFF Denmark. Consolidación como modelo fitness global y referente internacional.',
      icon: <Crown className="w-5 h-5" />,
      category: 'Profesional',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/Foto-14-12-19-15-39-12-scaled.jpg'
    },
    {
      year: '2015',
      title: 'Conquista de EE.UU.',
      description: '6 títulos en Men\'s Physique NPC, incluyendo 1er Overall en NPC Tampa Wings of Strength.',
      icon: <Star className="w-5 h-5" />,
      category: 'Internacional',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/sergi-constance-compitiendo.webp'
    },
    {
      year: '2017',
      title: 'Mr. Olympia & Zeus',
      description: '12º lugar en Men\'s Physique IFBB Mr. Olympia. Debut cinematográfico como Zeus en Justice League.',
      icon: <Film className="w-5 h-5" />,
      category: 'Cine',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/Zeus_celebra_la_victoria.webp'
    },
    {
      year: '2018',
      title: 'Expansión Actoral',
      description: 'Aparición en la película Summertime. Crecimiento exponencial de su marca personal global.',
      icon: <Camera className="w-5 h-5" />,
      category: 'Entretenimiento',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/sergi_constance_090917_019-1-1-scaled.jpg'
    },
    {
      year: '2020',
      title: 'Classic Physique',
      description: 'Transición exitosa a Classic Physique. 14º lugar en IFBB Europa Pro Championships.',
      icon: <Dumbbell className="w-5 h-5" />,
      category: 'Evolución',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/Foto-28-9-19-0-36-59-scaled.png'
    },
    {
      year: '2021',
      title: 'Zeus en DC Universe',
      description: 'Interpretación icónica de Zeus en Zack Snyder\'s Justice League. Lanzamiento de coaching online y BeLegend.',
      icon: <Zap className="w-5 h-5" />,
      category: 'Legado',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/Sergi-Constance-Android-Wallpaper.jpg'
    },
    {
      year: '2023',
      title: 'Era Digital',
      description: 'Videos virales motivacionales. 5M seguidores en Instagram. Lanzamiento de BeLegend Lifestyle.',
      icon: <Globe className="w-5 h-5" />,
      category: 'Digital',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/MV5BZDg0MTBjZWUtZmJkYi00MDQxLThkMDQtNGVmMTkwNGI5ZGQ2XkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg'
    },
    {
      year: '2024',
      title: 'Presencia Global',
      description: 'FIBO 2024, expansión de Sergi Constance Fitness. Programas de coaching de élite mundial.',
      icon: <Crown className="w-5 h-5" />,
      category: 'Expansión',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/ShottingAtlas-140-scaled.jpg'
    },
    {
      year: '2025',
      title: 'Multimedia & Colaboraciones',
      description: 'Calendario Mutts & Muscles, Mercedes-AMG, Mission Impossible photoshoot, Kick Streaming. El futuro es ahora.',
      icon: <Star className="w-5 h-5" />,
      category: 'Presente',
      image: 'https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/ShottingAtlas-143-scaled.jpg'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category: string) => {
    // Mantener paleta monocromática en sintonía con la web
    return 'from-gray-900/50 to-black/50 border-white/20';
  };

  return (
    <section id="timeline" className="py-24 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-16 w-64 h-64 bg-white/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-white/1 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Mi Trayectoria
          </h2>
          <div className="h-0.5 w-24 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Desde Valencia hasta Hollywood. Una historia de dedicación, transformación y éxito global.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto" ref={timelineRef}>
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
          
          {/* Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                data-index={index}
                className={`timeline-item relative transition-all duration-700 ${
                  visibleItems.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-8 z-20">
                  <div className="w-8 h-8 bg-white rounded-full border-2 border-black shadow-lg flex items-center justify-center hover:scale-125 transition-all duration-300 group">
                    <div className="text-black text-xs group-hover:scale-110 transition-transform duration-200">
                      {event.icon}
                    </div>
                  </div>
                </div>
                
                {/* Event Card */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start pr-8' : 'justify-end pl-8'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-12' : 'ml-12'}`}>
                    <div className={`bg-gradient-to-br ${getCategoryColor(event.category)} backdrop-blur-xl rounded-xl border overflow-hidden hover:scale-105 transition-all duration-500 group`}>
                      {/* Image */}
                      <div className="aspect-video overflow-hidden relative">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          style={{
                            objectPosition: event.year === '2011' ? 'center 20%' :
                                          event.year === '2013' ? 'center 30%' :
                                          event.year === '2014' ? 'center 25%' :
                                          event.year === '2015' ? 'center 15%' :
                                          event.year === '2017' ? 'center 40%' :
                                          event.year === '2018' ? 'center 30%' :
                                          event.year === '2020' ? 'center 25%' :
                                          event.year === '2021' ? 'center 50%' :
                                          event.year === '2023' ? 'center 30%' :
                                          event.year === '2024' ? 'center 25%' :
                                          event.year === '2025' ? 'center 35%' : 'center center'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Year Badge */}
                        <div className="absolute top-3 left-3">
                          <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                            {event.year}
                          </span>
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-3 right-3">
                          <span className="bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                            {event.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                          {event.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-24">
          <div className="bg-gradient-to-r from-black via-gray-900 to-black p-8 rounded-2xl border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Listo para escribir tu historia?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Únete a mi comunidad y comienza tu transformación hoy.
            </p>
            <button className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Comenzar Mi Transformación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;