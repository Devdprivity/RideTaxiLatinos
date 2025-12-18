'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useEffect, useState } from 'react';

export default function RegistroConductor() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStep, setSelectedStep] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

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

  const steps = [
    {
      number: 1,
      title: 'Completa el formulario',
      description: 'Ingresa tu información básica y sube los documentos requeridos',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: 2,
      title: 'Verificación',
      description: 'Revisaremos tus antecedentes y documentos (toma 1-3 días)',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      number: 3,
      title: 'Capacitación',
      description: 'Completa el curso online de seguridad y uso de la app',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      number: 4,
      title: 'Empieza a conducir',
      description: 'Activa tu cuenta y comienza a aceptar viajes',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Horarios flexibles',
      description: 'Trabaja cuando quieras. Sin horarios fijos ni mínimos de horas.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Pagos semanales',
      description: 'Retira tus ganancias cada semana o cuando quieras con retiro instantáneo.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Seguro incluido',
      description: 'Cobertura de seguro mientras estás en un viaje activo, sin costo extra.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Soporte 24/7',
      description: 'Equipo de soporte dedicado disponible siempre que lo necesites.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Bonos y promociones',
      description: 'Gana bonos extra por completar viajes en horas pico y zonas de alta demanda.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'App fácil de usar',
      description: 'Interfaz intuitiva con navegación GPS integrada y tracking de ganancias en tiempo real.'
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

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes slideRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(37, 209, 171, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(37, 209, 171, 0.7);
          }
        }

        @keyframes count-up {
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

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .observe-me {
          opacity: 0;
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
          {/* Hero Section - Mejorado */}
          <section className="relative bg-gradient-to-br from-[#010028] via-[#010033] to-[#02003d] text-white py-24 md:py-32 overflow-hidden">
            {/* Efectos de fondo animados */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-[#25d1ab] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
              <div className="absolute top-40 right-10 w-96 h-96 bg-[#25d1ab] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-[#25d1ab] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Contenido izquierdo */}
                <div>
                  <div className="inline-flex items-center space-x-2 bg-[#25d1ab]/20 border border-[#25d1ab]/30 rounded-full px-4 py-2 mb-6">
                    <div className="w-2 h-2 bg-[#25d1ab] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#25d1ab]">Únete a miles de conductores</span>
                  </div>

                  <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-[#25d1ab] bg-clip-text text-transparent leading-tight">
                    Conduce y gana con RideTaxi
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
                    Genera ingresos con horarios flexibles. Tú decides cuándo y dónde trabajar.
                  </p>

                  {/* Botones de acción */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group px-8 py-4 bg-[#25d1ab] text-white rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center space-x-2">
                      <span>Registrarme ahora</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white/20 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105">
                      Ver requisitos
                    </button>
                  </div>

                  {/* Stats rápidos */}
                  <div className="mt-10 grid grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-black text-[#25d1ab] mb-1">10K+</div>
                      <div className="text-sm text-gray-400">Conductores</div>
                    </div>
                    <div className="text-center border-l border-r border-white/20">
                      <div className="text-3xl font-black text-[#25d1ab] mb-1">$25</div>
                      <div className="text-sm text-gray-400">Por hora</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-[#25d1ab] mb-1">24/7</div>
                      <div className="text-sm text-gray-400">Soporte</div>
                    </div>
                  </div>
                </div>

                {/* Card de ganancias - Rediseñado */}
                <div className="observe-me">
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl glass-effect overflow-hidden group">
                    {/* Patrón de fondo */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2325d1ab' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                    </div>

                    <div className="relative">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-[#25d1ab] rounded-2xl flex items-center justify-center shadow-xl">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-white">Ganancias estimadas</h3>
                      </div>

                      <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:border-[#25d1ab]/50 transition-all duration-300">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-300 font-medium">Por hora promedio</span>
                            <span className="text-4xl font-black text-[#25d1ab]">$15-25</span>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:border-[#25d1ab]/50 transition-all duration-300">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-gray-300 font-medium">Tiempo parcial</div>
                              <div className="text-xs text-gray-400">20h/semana</div>
                            </div>
                            <span className="text-3xl font-black text-[#25d1ab]">$300-500</span>
                          </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 hover:border-[#25d1ab]/50 transition-all duration-300">
                          <div className="flex justify-between items-center">
                            <div>
                              <div className="text-gray-300 font-medium">Tiempo completo</div>
                              <div className="text-xs text-gray-400">40h/semana</div>
                            </div>
                            <span className="text-3xl font-black text-[#25d1ab]">$600-1K</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-white/20">
                        <p className="text-sm text-gray-400 flex items-start space-x-2">
                          <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                          <span>Los ingresos varían según la ciudad, horas trabajadas y demanda</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Steps Section - Mejorado */}
          <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 observe-me">
                <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                  Cómo <span className="text-[#25d1ab]">registrarte</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Un proceso simple en 4 pasos
                </p>
              </div>

              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="observe-me group"
                      style={{ animationDelay: `${index * 100}ms` }}
                      onMouseEnter={() => setSelectedStep(index)}
                      onMouseLeave={() => setSelectedStep(null)}
                    >
                      <div className={`relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${selectedStep === index ? 'border-[#25d1ab]' : 'border-gray-100'} transform hover:-translate-y-2`}>
                        {/* Número de paso grande en el fondo */}
                        <div className="absolute top-4 right-4 text-8xl font-black text-gray-100 opacity-50 group-hover:text-[#25d1ab]/10 transition-colors">
                          {step.number}
                        </div>

                        <div className="relative p-8 text-center">
                          {/* Icono con número */}
                          <div className="relative inline-flex mb-6">
                            <div className="w-20 h-20 bg-[#25d1ab] rounded-2xl flex items-center justify-center text-white shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                              {step.icon}
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#010028] rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg">
                              {step.number}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-[#010028] mb-3 group-hover:text-[#25d1ab] transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Barra de progreso en hover */}
                        <div className={`absolute bottom-0 left-0 h-1 bg-[#25d1ab] transition-all duration-500 ${selectedStep === index ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Línea de conexión visual */}
                <div className="hidden lg:block relative -mt-[280px] mb-[280px] pointer-events-none">
                  <div className="flex justify-between px-[80px]">
                    {[0, 1, 2].map((i) => (
                      <svg key={i} className="w-24 h-4 text-[#25d1ab]/20" viewBox="0 0 100 10">
                        <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section - Mejorado */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 observe-me">
                <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                  Beneficios de conducir con <span className="text-[#25d1ab]">RideTaxi</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Más que un trabajo, una oportunidad de crecimiento
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="observe-me group"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-[#25d1ab]/30 p-8 transform hover:-translate-y-2">
                      {/* Efecto de brillo en hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-[#25d1ab]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                      <div className="relative">
                        {/* Icono */}
                        <div className="relative inline-flex mb-6">
                          <div className="w-16 h-16 bg-[#25d1ab]/10 rounded-2xl flex items-center justify-center text-[#25d1ab] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            {benefit.icon}
                          </div>
                          {hoveredBenefit === index && (
                            <div className="absolute inset-0 w-16 h-16 bg-[#25d1ab] rounded-2xl blur-xl opacity-30 animate-pulse"></div>
                          )}
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-[#010028] mb-3 group-hover:text-[#25d1ab] transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>

                        {/* Check icon que aparece en hover */}
                        <div className={`mt-4 flex items-center space-x-2 text-[#25d1ab] font-semibold transition-all duration-300 ${hoveredBenefit === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm">Incluido</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Final - Rediseñado */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-[#010028] via-[#010033] to-[#25d1ab] text-white relative overflow-hidden">
            {/* Patrón de fondo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center observe-me">
                {/* Icono principal */}
                <div className="inline-flex mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                      <svg className="w-14 h-14 text-[#25d1ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-white rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
                  Comienza a ganar hoy
                </h2>
                
                <p className="text-xl md:text-2xl mb-10 text-white font-light leading-relaxed max-w-2xl mx-auto">
                  Miles de conductores ya confían en RideTaxi para generar ingresos
                </p>

                {/* Botón CTA principal */}
                <button className="group px-12 py-6 bg-white text-[#010028] rounded-full text-xl font-black hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center space-x-3 mb-6">
                  <span>Registrarme como conductor</span>
                  <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <p className="text-sm text-white/80 flex items-center justify-center space-x-2">
                  <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>El registro es gratis y toma menos de 10 minutos</span>
                </p>

                {/* Badges de confianza */}
                <div className="mt-12 pt-8 border-t border-white/30">
                  <div className="flex flex-wrap justify-center gap-8 text-sm">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span className="text-white/90 font-medium">+10,000 conductores</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/90 font-medium">Verificación completa</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/90 font-medium">Soporte 24/7</span>
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
