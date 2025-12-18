'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useEffect, useRef, useState } from 'react';

export default function Seguridad() {
  const [isVisible, setIsVisible] = useState(false);
  const featuresRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  useEffect(() => {
    setIsVisible(true);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    // Observar elementos
    const elements = document.querySelectorAll('.observe-me');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Verificación de conductores',
      description: 'Todos nuestros conductores pasan por un riguroso proceso de verificación de antecedentes penales, laborales y de manejo.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Seguimiento en tiempo real',
      description: 'Comparte tu ubicación en tiempo real con familiares y amigos. Ellos pueden seguir tu viaje desde su dispositivo.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Botón de emergencia',
      description: 'Botón SOS integrado en la app que te conecta inmediatamente con autoridades y nuestro equipo de seguridad.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
      title: 'Código de verificación',
      description: 'Verifica que el conductor correcto llegó por ti con un código PIN único para cada viaje.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Soporte 24/7',
      description: 'Nuestro equipo de seguridad está disponible las 24 horas del día, los 7 días de la semana para ayudarte.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Registro de viajes',
      description: 'Guardamos un registro completo de todos tus viajes incluyendo ruta, conductor y tiempos.',
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const tips = [
    {
      number: 1,
      title: 'Verifica el vehículo y conductor',
      description: 'Antes de subir, confirma que la placa, modelo del auto y foto del conductor coincidan con la información en la app.'
    },
    {
      number: 2,
      title: 'Comparte tu viaje',
      description: 'Usa la función de compartir viaje para que tus contactos de confianza sepan dónde estás en todo momento.'
    },
    {
      number: 3,
      title: 'Usa el cinturón de seguridad',
      description: 'Siempre usa el cinturón de seguridad durante todo el viaje, ya sea que vayas adelante o atrás.'
    },
    {
      number: 4,
      title: 'Confía en tu instinto',
      description: 'Si algo no se siente bien, no dudes en cancelar el viaje y reportar cualquier comportamiento inapropiado.'
    },
    {
      number: 5,
      title: 'Reporta incidentes',
      description: 'Reporta cualquier problema inmediatamente a través de la app. Tomamos todas las quejas muy en serio.'
    }
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(37, 209, 171, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(37, 209, 171, 0.6);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .observe-me {
          opacity: 0;
        }

        .gradient-border {
          position: relative;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #25d1ab, #00b4d8) border-box;
          border: 2px solid transparent;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* Hero Section con animación mejorada */}
          <section className="relative bg-gradient-to-br from-[#010028] via-[#010033] to-[#02003d] text-white py-24 md:py-32 overflow-hidden">
            {/* Efectos de fondo animados */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-[#25d1ab] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
              <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Icono principal con efecto glow */}
                <div className="inline-flex mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#25d1ab] to-[#00b4d8] rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-pulse-glow transform hover:scale-110 transition-transform duration-300">
                    <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-[#25d1ab] bg-clip-text text-transparent leading-tight">
                  Tu seguridad es nuestra prioridad
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
                  Implementamos las más estrictas medidas de seguridad para que viajes tranquilo
                </p>

                {/* Badge de confianza */}
                <div className="mt-10 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 glass-effect">
                  <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-white">Certificado de seguridad 2025</span>
                </div>
              </div>
            </div>
          </section>

          {/* Safety Features Grid - Diseño tipo Meta/Uber */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 observe-me">
                <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                  Múltiples capas de <span className="text-[#25d1ab]">protección</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Tecnología y procesos diseñados para tu tranquilidad
                </p>
              </div>

              <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="observe-me group relative"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setActiveCard(index)}
                    onMouseLeave={() => setActiveCard(null)}
                  >
                    <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[#25d1ab]/30 transform hover:-translate-y-2">
                      {/* Gradient overlay en hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <div className="relative p-8 z-10">
                        {/* Icono con efecto glassmorphism */}
                        <div className="relative mb-6">
                          <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                            {feature.icon}
                          </div>
                          {/* Glow effect */}
                          <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                        </div>

                        <h3 className="text-2xl font-bold text-[#010028] mb-4 group-hover:text-[#25d1ab] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>

                        {/* Indicador de hover */}
                        <div className="mt-6 flex items-center text-[#25d1ab] font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                          <span className="text-sm">Más información</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Safety Tips - Diseño moderno con numeración */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-[#010028] to-[#02003d] relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2325d1ab' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 observe-me">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                    Consejos de <span className="text-[#25d1ab]">seguridad</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Prácticas recomendadas para un viaje seguro
                  </p>
                </div>

                <div ref={tipsRef} className="space-y-6">
                  {tips.map((tip, index) => (
                    <div
                      key={index}
                      className="observe-me group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-white/20 hover:border-[#25d1ab]/50 transition-all duration-500 hover:bg-white/15 glass-effect overflow-hidden">
                        {/* Gradient effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#25d1ab]/0 via-[#25d1ab]/5 to-[#25d1ab]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        
                        <div className="relative flex items-start space-x-6">
                          {/* Número con diseño moderno */}
                          <div className="flex-shrink-0">
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#25d1ab] to-[#00b4d8] rounded-2xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                              <span className="text-2xl md:text-3xl font-black text-white">{tip.number}</span>
                            </div>
                          </div>

                          <div className="flex-1 pt-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#25d1ab] transition-colors duration-300">
                              {tip.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                              {tip.description}
                            </p>
                          </div>

                          {/* Check icon */}
                          <div className="hidden md:block flex-shrink-0">
                            <div className="w-10 h-10 rounded-full border-2 border-[#25d1ab]/30 flex items-center justify-center group-hover:border-[#25d1ab] group-hover:bg-[#25d1ab] transition-all duration-500">
                              <svg className="w-5 h-5 text-[#25d1ab] group-hover:text-white transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Emergency Section - Rediseñado con mejor contraste */}
          <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="relative observe-me">
                  {/* Contenedor principal */}
                  <div className="relative bg-gradient-to-br from-red-600 via-red-500 to-pink-600 rounded-3xl md:rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden shadow-2xl">
                    {/* Patrón de fondo animado */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 animate-pulse" style={{ 
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                      }}></div>
                    </div>

                    {/* Contenido */}
                    <div className="relative z-10">
                      {/* Icono de emergencia */}
                      <div className="inline-flex mb-8">
                        <div className="relative">
                          <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                            <svg className="w-12 h-12 md:w-14 md:h-14 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          {/* Glow ring */}
                          <div className="absolute inset-0 w-24 h-24 md:w-28 md:h-28 bg-white rounded-full blur-2xl opacity-50 animate-ping"></div>
                        </div>
                      </div>

                      <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
                        ¿Emergencia?
                      </h2>
                      
                      <p className="text-xl md:text-2xl mb-10 text-white font-light max-w-2xl mx-auto leading-relaxed">
                        Si estás en una situación de emergencia, usa el botón SOS en la app o contacta a las autoridades locales
                      </p>

                      {/* Botones de acción */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a 
                          href="tel:911" 
                          className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-red-600 rounded-full text-lg md:text-xl font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3"
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <span>Llamar al 911</span>
                        </a>

                        <button className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-full text-lg md:text-xl font-bold hover:bg-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-3">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <span>Centro de seguridad</span>
                        </button>
                      </div>

                      {/* Info adicional */}
                      <div className="mt-10 pt-10 border-t border-white/30">
                        <p className="text-white/90 text-sm md:text-base font-medium">
                          Disponible 24/7 • Respuesta inmediata • Confidencial
                        </p>
                      </div>
                    </div>
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
