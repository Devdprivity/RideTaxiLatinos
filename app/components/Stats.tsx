'use client';

import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mainStats = [
    { value: '5M+', label: 'Viajes completados', delay: '0ms' },
    { value: '50K+', label: 'Conductores activos', delay: '100ms' },
    { value: '30+', label: 'Ciudades', delay: '200ms' },
    { value: '4.8★', label: 'Calificación promedio', delay: '300ms' },
  ];

  const featureStats = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: '<5 min',
      label: 'Tiempo de espera promedio',
      gradient: 'from-[#25d1ab] to-[#1fb596]'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      value: '24/7',
      label: 'Soporte disponible',
      gradient: 'from-[#25d1ab] to-[#1fb596]'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      value: '100%',
      label: 'Tarifas transparentes',
      gradient: 'from-[#25d1ab] to-[#1fb596]'
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-16 md:pt-20 pb-8 md:pb-10 bg-[#010028]"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #25d1ab 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-[#25d1ab] rounded-full blur-3xl opacity-10 animate-blob" />
      <div className="absolute -bottom-24 right-1/4 w-[520px] h-[520px] bg-[#25d1ab] rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/25 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-white mb-5">
            <span className="h-2 w-2 rounded-full bg-turquoise" />
            <span className="text-xs font-semibold uppercase tracking-wider">Nuestros números</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            RideTaxi en números
          </h2>
          <p className="text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            El crecimiento de nuestra comunidad nos impulsa a ser mejores cada día.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto mb-14">
          {mainStats.map((stat, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl p-6 md:p-8 text-center border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-turquoise/50 hover:shadow-xl hover:shadow-black/20 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: stat.delay,
                transition: 'all 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-br from-turquoise/10 to-transparent" />
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-turquoise mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featureStats.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-linear-to-br ${feature.gradient} rounded-3xl p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/25 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${400 + index * 100}ms`,
                transition: 'all 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)'
              }}
            >
              {/* Shine effect */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-transparent via-white/15 to-transparent -skew-x-12 translate-x-[-120%] group-hover:translate-x-[120%]"
                style={{ transition: 'all 900ms ease' }}
              />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/95 rounded-2xl flex items-center justify-center mx-auto mb-4 text-turquoise shadow-lg shadow-black/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
                  {feature.icon}
                </div>
                {/* Fondo turquesa => texto blanco (alto contraste) */}
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  {feature.value}
                </div>
                <div className="text-white text-sm md:text-base font-medium opacity-95">
                  {feature.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 text-white/70 text-xs md:text-sm">
            <svg className="w-4 h-4 text-turquoise" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Actualizado en tiempo real</span>
          </div>
        </div>
      </div>
    </section>
  );
}
