'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useEffect, useState } from 'react';

export default function Ganancias() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'hourly' | 'weekly' | 'monthly'>('weekly');

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

  // Cálculos de ganancias
  const hourlyRate = 20; // Promedio
  const weeklyEarnings = Math.round(hourlyRate * hoursPerWeek);
  const monthlyEarnings = Math.round(weeklyEarnings * 4.33);
  const yearlyEarnings = Math.round(monthlyEarnings * 12);

  const earningsCards = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      amount: '$15-25',
      label: 'por hora',
      description: 'Promedio en horas normales',
      highlight: 'Base'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      amount: '$600+',
      label: 'por semana',
      description: 'Tiempo completo (40h/semana)',
      highlight: 'Popular'
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      amount: '2.5x',
      label: 'en horas pico',
      description: 'Bonos por alta demanda',
      highlight: 'Máximo'
    }
  ];

  const paymentFeatures = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Tarifa base',
      description: 'Ganas un porcentaje de cada tarifa (normalmente 75-80%)',
      percentage: '75-80%'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Propinas',
      description: 'Las propinas son 100% para ti, sin comisiones',
      percentage: '100%'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Bonos',
      description: 'Gana bonos extra por completar objetivos y en horas pico',
      percentage: 'Extra'
    }
  ];

  const tips = [
    { icon: '⏰', text: 'Conduce en horas pico (mañanas y tardes entre semana)' },
    { icon: '📍', text: 'Posiciónate cerca de zonas de alta demanda' },
    { icon: '⭐', text: 'Mantén una calificación alta para recibir más viajes' },
    { icon: '🎯', text: 'Completa los retos semanales para ganar bonos adicionales' },
    { icon: '😊', text: 'Ofrece un servicio excelente para recibir más propinas' }
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

        @keyframes countUp {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
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

        .animate-count-up {
          animation: countUp 0.5s ease-out forwards;
        }

        .observe-me {
          opacity: 0;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .shimmer-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
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
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-semibold text-[#25d1ab]">Gana más conduciendo inteligentemente</span>
                </div>

                {/* Icono principal */}
                <div className="inline-flex mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-[#25d1ab] rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-[#25d1ab] rounded-full blur-xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-[#25d1ab] bg-clip-text text-transparent leading-tight">
                  Maximiza tus ganancias
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed">
                  Gana dinero conduciendo en tus propios horarios
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
                  <div className="glass-effect rounded-2xl p-4 md:p-6">
                    <div className="text-3xl md:text-4xl font-black text-[#25d1ab] mb-1">$20</div>
                    <div className="text-xs md:text-sm text-gray-300">Por hora</div>
                  </div>
                  <div className="glass-effect rounded-2xl p-4 md:p-6">
                    <div className="text-3xl md:text-4xl font-black text-[#25d1ab] mb-1">75%</div>
                    <div className="text-xs md:text-sm text-gray-300">Para ti</div>
                  </div>
                  <div className="glass-effect rounded-2xl p-4 md:p-6">
                    <div className="text-3xl md:text-4xl font-black text-[#25d1ab] mb-1">24/7</div>
                    <div className="text-xs md:text-sm text-gray-300">Pagos</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Earnings Calculator */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 observe-me">
                <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                  Calcula tus <span className="text-[#25d1ab]">ganancias</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Ajusta las horas y ve tu potencial de ingresos
                </p>
              </div>

              <div className="max-w-4xl mx-auto observe-me">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                  {/* Calculator */}
                  <div className="p-8 md:p-12 bg-gradient-to-br from-[#25d1ab] to-[#25d1ab]/80 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{ 
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                      }}></div>
                    </div>

                    <div className="relative">
                      <label className="block text-white text-lg font-bold mb-4">
                        Horas por semana: {hoursPerWeek}h
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="60"
                        value={hoursPerWeek}
                        onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                        className="w-full h-3 bg-white/20 rounded-full appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, white ${(hoursPerWeek - 10) / 50 * 100}%, rgba(255,255,255,0.2) ${(hoursPerWeek - 10) / 50 * 100}%)`
                        }}
                      />
                      <div className="flex justify-between text-white/80 text-sm mt-2">
                        <span>10h</span>
                        <span>60h</span>
                      </div>
                    </div>
                  </div>

                  {/* Results Tabs */}
                  <div className="p-8 md:p-12">
                    <div className="flex justify-center space-x-2 mb-8">
                      {(['hourly', 'weekly', 'monthly'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                            activeTab === tab
                              ? 'bg-[#25d1ab] text-white shadow-lg'
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {tab === 'hourly' && 'Por hora'}
                          {tab === 'weekly' && 'Semanal'}
                          {tab === 'monthly' && 'Mensual'}
                        </button>
                      ))}
                    </div>

                    {/* Display earnings */}
                    <div className="text-center">
                      <div className="inline-flex items-baseline space-x-2 mb-4">
                        <span className="text-5xl md:text-7xl font-black text-[#010028] animate-count-up">
                          ${activeTab === 'hourly' ? hourlyRate : activeTab === 'weekly' ? weeklyEarnings : monthlyEarnings}
                        </span>
                        <span className="text-2xl font-bold text-gray-400">USD</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="bg-gray-50 rounded-2xl p-4">
                          <div className="text-2xl font-black text-[#25d1ab]">${weeklyEarnings}</div>
                          <div className="text-sm text-gray-600">Semanal</div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-4">
                          <div className="text-2xl font-black text-[#25d1ab]">${monthlyEarnings}</div>
                          <div className="text-sm text-gray-600">Mensual</div>
                        </div>
                        <div className="bg-gray-50 rounded-2xl p-4">
                          <div className="text-2xl font-black text-[#25d1ab]">${(yearlyEarnings / 1000).toFixed(1)}K</div>
                          <div className="text-sm text-gray-600">Anual</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Earnings Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mt-16">
                {earningsCards.map((card, index) => (
                  <div
                    key={index}
                    className="observe-me group"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onMouseEnter={() => setSelectedCard(index)}
                    onMouseLeave={() => setSelectedCard(null)}
                  >
                    <div className={`relative h-full bg-[#25d1ab] rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${selectedCard === index ? 'scale-105' : ''}`}>
                      {/* Badge */}
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-bold text-white">{card.highlight}</span>
                      </div>

                      <div className="p-8 text-center text-white relative">
                        {/* Icon */}
                        <div className="inline-flex mb-6">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            {card.icon}
                          </div>
                        </div>

                        <div className="text-5xl md:text-6xl font-black mb-2">{card.amount}</div>
                        <div className="text-xl md:text-2xl font-bold mb-4 opacity-90">{card.label}</div>
                        <p className="text-sm opacity-80">{card.description}</p>
                      </div>

                      {/* Shimmer effect */}
                      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Payment Features */}
          <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 observe-me">
                  <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                    Cómo funciona el <span className="text-[#25d1ab]">pago</span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Transparente y justo para todos
                  </p>
                </div>

                <div className="space-y-6">
                  {paymentFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="observe-me group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-[#25d1ab]/30 p-8 transform hover:-translate-y-1">
                        <div className="flex items-start space-x-6">
                          {/* Icon */}
                          <div className="shrink-0">
                            <div className="w-16 h-16 bg-[#25d1ab]/10 rounded-2xl flex items-center justify-center text-[#25d1ab] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                              {feature.icon}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <h3 className="text-2xl font-bold text-[#010028] group-hover:text-[#25d1ab] transition-colors">
                                {feature.title}
                              </h3>
                              <div className="bg-[#25d1ab] text-white px-4 py-2 rounded-full font-black text-lg">
                                {feature.percentage}
                              </div>
                            </div>
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tips Section */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-[#010028] via-[#010033] to-[#02003d] text-white relative overflow-hidden">
            {/* Patrón de fondo */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2325d1ab' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 observe-me">
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                    Consejos para <span className="text-[#25d1ab]">ganar más</span>
                  </h2>
                  <p className="text-xl text-gray-300">
                    Estrategias probadas de conductores exitosos
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tips.map((tip, index) => (
                    <div
                      key={index}
                      className="observe-me group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="h-full glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 border border-white/10 hover:border-[#25d1ab]/50">
                        <div className="flex items-start space-x-4">
                          <div className="shrink-0 w-12 h-12 bg-[#25d1ab] rounded-xl flex items-center justify-center text-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                            {tip.icon}
                          </div>
                          <p className="text-white text-lg leading-relaxed pt-2">
                            {tip.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center observe-me">
                <div className="inline-flex mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-[#25d1ab] rounded-3xl flex items-center justify-center shadow-2xl">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-[#25d1ab] rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-[#010028] mb-6">
                  Comienza a ganar hoy
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                  Regístrate y empieza a generar ingresos en pocos días
                </p>

                <button className="group px-12 py-6 bg-[#25d1ab] text-white rounded-full text-xl font-black hover:bg-opacity-90 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center space-x-3">
                  <span>Registrarme como conductor</span>
                  <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Registro gratis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Pagos semanales</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Soporte 24/7</span>
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
