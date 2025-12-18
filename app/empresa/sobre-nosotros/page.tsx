'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useEffect, useState } from 'react';

export default function SobreNosotros() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ viajes: 0, conductores: 0, ciudades: 0, rating: 0 });
  const [activeValue, setActiveValue] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          
          // Animar stats cuando sean visibles
          if (entry.target.classList.contains('stats-section')) {
            animateStats();
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.observe-me');
    elements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setStats({
        viajes: Math.floor(5000000 * progress),
        conductores: Math.floor(50000 * progress),
        ciudades: Math.floor(30 * progress),
        rating: Number((4.8 * progress).toFixed(1))
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setStats({ viajes: 5000000, conductores: 50000, ciudades: 30, rating: 4.8 });
      }
    }, stepDuration);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  const values = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Seguridad',
      desc: 'La seguridad de nuestros pasajeros y conductores es nuestra máxima prioridad'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Comunidad',
      desc: 'Estamos comprometidos con el bienestar de la comunidad latina'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Transparencia',
      desc: 'Precios claros, sin sorpresas ni cargos ocultos'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Inclusión',
      desc: 'Servicio bilingüe y comprensión cultural'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Calidad',
      desc: 'Estándares altos en servicio y experiencia'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Innovación',
      desc: 'Tecnología al servicio de nuestra comunidad'
    }
  ];

  const timeline = [
    { year: '2020', title: 'Fundación', desc: 'RideTaxi nace con la misión de servir a la comunidad latina' },
    { year: '2021', title: 'Expansión', desc: 'Llegamos a 10 ciudades principales' },
    { year: '2022', title: 'Crecimiento', desc: '10,000 conductores y 1M de viajes' },
    { year: '2023', title: 'Reconocimiento', desc: 'Premio a mejor servicio de transporte' },
    { year: '2024', title: 'Innovación', desc: '50,000 conductores y nuevas funciones' }
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .observe-me {
          opacity: 0;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .timeline-line {
          background: linear-gradient(to bottom, #25d1ab 0%, #25d1ab 100%);
        }
      `}</style>

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-[#010028] via-[#010033] to-[#02003d] text-white py-24 md:py-32 overflow-hidden">
            {/* Efectos de fondo animados */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-[#25d1ab] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
              <div className="absolute top-40 right-10 w-96 h-96 bg-[#25d1ab] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-[#25d1ab] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-[#25d1ab]/20 border border-[#25d1ab]/30 rounded-full px-4 py-2 mb-8">
                  <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <span className="text-sm font-semibold text-[#25d1ab]">Fundada en 2020</span>
                </div>

                {/* Icono principal */}
                <div className="inline-flex mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-[#25d1ab] rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-[#25d1ab] rounded-full blur-xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-[#25d1ab] bg-clip-text text-transparent leading-tight">
                  Conectando comunidades
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed max-w-3xl mx-auto">
                  Más que un servicio de transporte, somos parte de tu comunidad
                </p>

                {/* Mission preview */}
                <div className="max-w-3xl mx-auto glass-effect rounded-2xl p-6 md:p-8">
                  <p className="text-lg text-white/90 leading-relaxed">
                    Proporcionar transporte seguro, confiable y accesible mientras creamos oportunidades económicas para conductores de la comunidad latina
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left - Content */}
                  <div className="observe-me">
                    <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-6">
                      Nuestra <span className="text-[#25d1ab]">historia</span>
                    </h2>
                    <div className="space-y-6">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        RideTaxi nació en 2020 con una visión clara: crear un servicio de transporte que entendiera y sirviera a la comunidad latina en América. Fundada por latinoamericanos para latinoamericanos, nuestra misión siempre ha sido más que solo mover personas de un punto A a un punto B.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        Entendemos los desafíos únicos que enfrenta nuestra comunidad: la barrera del idioma, la necesidad de precios justos y transparentes, y sobre todo, la importancia de sentirse seguro y comprendido durante cada viaje.
                      </p>
                    </div>

                    {/* Mission Card */}
                    <div className="mt-8 bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-[#25d1ab]/20">
                      <div className="p-8 bg-[#25d1ab] relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0" style={{ 
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                          }}></div>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white relative">
                          Nuestra misión
                        </h3>
                      </div>
                      <div className="p-8">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Proporcionar transporte seguro, confiable y accesible mientras creamos oportunidades económicas para conductores de la comunidad latina, todo con el servicio y la calidez que nos caracteriza.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right - Timeline */}
                  <div className="observe-me">
                    <div className="relative">
                      {/* Timeline line */}
                      <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#25d1ab]/20"></div>

                      <div className="space-y-8">
                        {timeline.map((item, index) => (
                          <div
                            key={index}
                            className="relative pl-16"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-0 w-12 h-12 bg-[#25d1ab] rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                              <span className="text-white font-black text-sm">{item.year}</span>
                            </div>

                            {/* Timeline card */}
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-2 border-gray-100 hover:border-[#25d1ab]/30 transform hover:-translate-y-1">
                              <h4 className="text-xl font-bold text-[#010028] mb-2">
                                {item.title}
                              </h4>
                              <p className="text-gray-600">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 observe-me">
                  <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                    Nuestros <span className="text-[#25d1ab]">valores</span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Los principios que guían cada decisión que tomamos
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="observe-me group"
                      style={{ animationDelay: `${index * 50}ms` }}
                      onMouseEnter={() => setActiveValue(index)}
                      onMouseLeave={() => setActiveValue(null)}
                    >
                      <div className={`relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${activeValue === index ? 'border-[#25d1ab]' : 'border-gray-100'} p-8 transform hover:-translate-y-2`}>
                        {/* Icon */}
                        <div className="relative inline-flex mb-6">
                          <div className="w-16 h-16 bg-[#25d1ab]/10 rounded-2xl flex items-center justify-center text-[#25d1ab] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            {value.icon}
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#010028] mb-3 group-hover:text-[#25d1ab] transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {value.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Impact Stats Section */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-[#010028] via-[#010033] to-[#25d1ab] text-white relative overflow-hidden">
            {/* Patrón de fondo */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-16 observe-me">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                  Nuestro impacto
                </h2>
                <p className="text-xl text-white/90">
                  Números que demuestran nuestro compromiso
                </p>
              </div>

              <div className="observe-me stats-section grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-black text-white mb-3">
                    {formatNumber(stats.viajes)}+
                  </div>
                  <div className="text-white/80 text-lg font-medium">Viajes completados</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-black text-white mb-3">
                    {formatNumber(stats.conductores)}+
                  </div>
                  <div className="text-white/80 text-lg font-medium">Conductores activos</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-black text-white mb-3">
                    {stats.ciudades}+
                  </div>
                  <div className="text-white/80 text-lg font-medium">Ciudades</div>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-black text-white mb-3">
                    {stats.rating > 0 ? stats.rating.toFixed(1) : '0.0'}★
                  </div>
                  <div className="text-white/80 text-lg font-medium">Calificación promedio</div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center observe-me">
                <div className="inline-flex mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-[#25d1ab] rounded-3xl flex items-center justify-center shadow-2xl">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-[#25d1ab] rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-[#010028] mb-6">
                  Únete a nuestra comunidad
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Ya sea como pasajero o conductor, eres parte de algo más grande
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group px-10 py-5 bg-[#25d1ab] text-white rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span>Descargar app</span>
                  </button>
                  <button className="px-10 py-5 bg-[#010028] text-white rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>Ser conductor</span>
                  </button>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">+5M viajes realizados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Conductores verificados</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Soporte en español</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
