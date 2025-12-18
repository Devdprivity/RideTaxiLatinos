'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useEffect, useState } from 'react';

export default function Business() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [companySize, setCompanySize] = useState('');

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

  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Ahorro de costos',
      desc: 'Reduce gastos en transporte corporativo hasta un 40%',
      stat: '40%'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Gestión centralizada',
      desc: 'Dashboard para administrar todos los viajes de tu equipo',
      stat: '1 Panel'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Facturación mensual',
      desc: 'Una sola factura al mes con todos los detalles',
      stat: '1 Factura'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Políticas personalizadas',
      desc: 'Define límites y reglas según tus necesidades',
      stat: 'Custom'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Reportes detallados',
      desc: 'Analítica completa de gastos y uso',
      stat: 'Analytics'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Soporte prioritario',
      desc: 'Equipo dedicado para tu empresa 24/7',
      stat: '24/7'
    }
  ];

  const useCases = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Transporte de empleados',
      desc: 'Facilita el commute de tu equipo de forma segura y eficiente',
      features: ['Rutas personalizadas', 'Horarios flexibles', 'Tracking en tiempo real']
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Viajes corporativos',
      desc: 'Gestiona viajes de negocios y reuniones con clientes',
      features: ['Preaprobación de viajes', 'Facturación corporativa', 'Historial completo']
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Eventos empresariales',
      desc: 'Coordina el transporte para conferencias y eventos',
      features: ['Coordinación masiva', 'Múltiples destinos', 'Gestión de grupos']
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
        </svg>
      ),
      title: 'Entregas urgentes',
      desc: 'Envía documentos y paquetes de forma rápida',
      features: ['Entregas express', 'Confirmación de entrega', 'Seguro incluido']
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo requested:', { email, companySize });
  };

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

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
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
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-[#25d1ab]">Soluciones empresariales</span>
                </div>

                {/* Icono principal */}
                <div className="inline-flex mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-[#25d1ab] rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-[#25d1ab] rounded-full blur-xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-[#25d1ab] bg-clip-text text-transparent leading-tight">
                  RideTaxi Business
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed max-w-3xl mx-auto">
                  Soluciones de transporte corporativo inteligentes para empresas modernas
                </p>

                {/* Quick benefits */}
                <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
                  <div className="glass-effect rounded-2xl p-4">
                    <div className="text-3xl font-black text-[#25d1ab] mb-1">40%</div>
                    <div className="text-xs text-gray-300">Ahorro</div>
                  </div>
                  <div className="glass-effect rounded-2xl p-4">
                    <div className="text-3xl font-black text-[#25d1ab] mb-1">24/7</div>
                    <div className="text-xs text-gray-300">Soporte</div>
                  </div>
                  <div className="glass-effect rounded-2xl p-4">
                    <div className="text-3xl font-black text-[#25d1ab] mb-1">100%</div>
                    <div className="text-xs text-gray-300">Seguro</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 observe-me">
                <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                  Beneficios para <span className="text-[#25d1ab]">tu empresa</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Todo lo que necesitas para gestionar el transporte corporativo
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="observe-me group"
                    style={{ animationDelay: `${index * 50}ms` }}
                    onMouseEnter={() => setSelectedBenefit(index)}
                    onMouseLeave={() => setSelectedBenefit(null)}
                  >
                    <div className={`relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${selectedBenefit === index ? 'border-[#25d1ab]' : 'border-gray-100'} p-8 transform hover:-translate-y-2`}>
                      {/* Badge */}
                      <div className="absolute top-6 right-6 bg-[#25d1ab] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {benefit.stat}
                      </div>

                      {/* Icon */}
                      <div className="relative inline-flex mb-6">
                        <div className="w-16 h-16 bg-[#25d1ab]/10 rounded-2xl flex items-center justify-center text-[#25d1ab] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          {benefit.icon}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-[#010028] mb-3 group-hover:text-[#25d1ab] transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Demo Request Section */}
          <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto observe-me">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                  {/* Header */}
                  <div className="p-8 md:p-12 bg-gradient-to-r from-[#25d1ab] to-[#25d1ab]/80 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                    </div>

                    <div className="relative text-center">
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-3">
                        ¿Listo para optimizar el transporte de tu empresa?
                      </h3>
                      <p className="text-xl text-white/90">
                        Solicita una demostración gratuita y descubre cómo RideTaxi Business puede ayudarte
                      </p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-bold text-[#010028] mb-2">
                          Email corporativo *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@empresa.com"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25d1ab] focus:border-[#25d1ab] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#010028] mb-2">
                          Tamaño de empresa *
                        </label>
                        <select
                          required
                          value={companySize}
                          onChange={(e) => setCompanySize(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25d1ab] focus:border-[#25d1ab] transition-all"
                        >
                          <option value="">Selecciona una opción</option>
                          <option value="1-50">1-50 empleados</option>
                          <option value="51-200">51-200 empleados</option>
                          <option value="201-1000">201-1000 empleados</option>
                          <option value="1000+">1000+ empleados</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="group w-full bg-[#25d1ab] text-white py-4 rounded-xl font-black text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>Solicitar demostración</span>
                      <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>

                    <p className="text-sm text-gray-500 text-center mt-4">
                      Respuesta en menos de 24 horas • Sin compromiso
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 observe-me">
                  <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                    Casos de <span className="text-[#25d1ab]">uso</span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Soluciones adaptadas a las necesidades de tu negocio
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="observe-me group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-[#25d1ab]/30 transform hover:-translate-y-2">
                        {/* Header */}
                        <div className="p-8 bg-[#25d1ab] relative overflow-hidden">
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{ 
                              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                              backgroundSize: '30px 30px'
                            }}></div>
                          </div>

                          <div className="relative flex items-center space-x-4">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#25d1ab] shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                              {useCase.icon}
                            </div>
                            <div>
                              <h3 className="text-2xl font-black text-white">
                                {useCase.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                          <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {useCase.desc}
                          </p>

                          {/* Features list */}
                          <div className="space-y-3">
                            {useCase.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-3">
                                <svg className="w-5 h-5 text-[#25d1ab] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700 font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Final Section */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-[#010028] via-[#010033] to-[#25d1ab] text-white relative overflow-hidden">
            {/* Patrón de fondo */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center observe-me">
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

                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                  Impulsa tu negocio
                </h2>
                
                <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Únete a las empresas que ya confían en RideTaxi Business
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <button className="group px-10 py-5 bg-white text-[#010028] rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center justify-center space-x-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>Solicitar demo</span>
                  </button>

                  <button className="px-10 py-5 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white/30 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105">
                    Ver precios
                  </button>
                </div>

                {/* Stats */}
                <div className="pt-8 border-t border-white/30">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">500+</div>
                      <div className="text-sm text-white/80">Empresas</div>
                    </div>
                    <div className="text-center border-l border-r border-white/30">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">98%</div>
                      <div className="text-sm text-white/80">Satisfacción</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">40%</div>
                      <div className="text-sm text-white/80">Ahorro medio</div>
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
