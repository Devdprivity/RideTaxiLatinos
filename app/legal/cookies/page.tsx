'use client';

import { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function Cookies() {
  const [isVisible, setIsVisible] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  const handleSavePreferences = () => {
    // Guardar preferencias en localStorage
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    alert('✅ Preferencias guardadas exitosamente');
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    alert('✅ Todas las cookies aceptadas');
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    setPreferences(onlyEssential);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyEssential));
    alert('✅ Solo cookies esenciales activadas');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#010028]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#25d1ab] pt-24 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-2xl">🍪</span>
              <span className="text-white font-semibold text-sm">Gestiona tus preferencias</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Política de Cookies
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Te explicamos qué son las cookies, cómo las usamos y cómo puedes controlarlas para tener la mejor experiencia en RideTaxi.
            </p>

            {/* Quick actions */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <button
                onClick={handleAcceptAll}
                className="bg-[#010028] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#010028]/90 transition-all duration-300 transform hover:scale-105"
              >
                Aceptar todas
              </button>
              <button
                onClick={handleRejectAll}
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
              >
                Solo esenciales
              </button>
            </div>
          </div>
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-16 text-[#010028]" viewBox="0 0 1440 48" fill="currentColor" preserveAspectRatio="none">
            <path d="M0,24 C240,48 480,48 720,24 C960,0 1200,0 1440,24 L1440,48 L0,48 Z" />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1 bg-[#010028]">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          {/* ¿Qué son las cookies? */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#25d1ab]/20">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                  <span className="text-4xl">🍪</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Qué son las cookies?</h2>
                  <div className="h-1 w-24 bg-[#25d1ab] rounded-full" />
                </div>
              </div>
              <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                <p>
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos ayudan a recordar tus preferencias, mejorar tu experiencia y entender cómo usas nuestra plataforma.
                </p>
                <p>
                  En RideTaxi, utilizamos cookies y tecnologías similares (como almacenamiento local, píxeles de seguimiento y SDKs móviles) para proporcionar, proteger y mejorar nuestros servicios.
                </p>
              </div>
            </div>
          </section>

          {/* Tipos de Cookies */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tipos de cookies que usamos</h2>
              <div className="h-1 w-24 bg-[#25d1ab] rounded-full mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  type: 'Cookies esenciales',
                  icon: '🔒',
                  required: true,
                  description: 'Necesarias para que el sitio web funcione correctamente. No se pueden desactivar.',
                  examples: ['Autenticación de sesión', 'Seguridad', 'Funcionalidad básica', 'Carrito de compra'],
                  duration: 'Sesión / 1 año'
                },
                {
                  type: 'Cookies funcionales',
                  icon: '⚙️',
                  required: false,
                  description: 'Permiten recordar tus preferencias y opciones para mejorar tu experiencia.',
                  examples: ['Idioma preferido', 'Tema visual', 'Ubicación guardada', 'Configuración personalizada'],
                  duration: '1 mes / 1 año'
                },
                {
                  type: 'Cookies analíticas',
                  icon: '📊',
                  required: false,
                  description: 'Nos ayudan a entender cómo los usuarios interactúan con el sitio para mejorarlo.',
                  examples: ['Google Analytics', 'Métricas de uso', 'Rutas de navegación', 'Tiempo en página'],
                  duration: '2 años'
                },
                {
                  type: 'Cookies de marketing',
                  icon: '📢',
                  required: false,
                  description: 'Se utilizan para mostrar anuncios relevantes y medir la efectividad de campañas.',
                  examples: ['Facebook Pixel', 'Google Ads', 'Retargeting', 'Anuncios personalizados'],
                  duration: '1 mes / 2 años'
                }
              ].map((cookie, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#25d1ab]/20 hover:border-[#25d1ab]/40 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{cookie.icon}</span>
                      <h3 className="text-xl font-bold text-white">{cookie.type}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      cookie.required 
                        ? 'bg-[#25d1ab]/20 text-[#25d1ab] border border-[#25d1ab]/30' 
                        : 'bg-white/10 text-white/70'
                    }`}>
                      {cookie.required ? 'Obligatorias' : 'Opcionales'}
                    </span>
                  </div>
                  
                  <p className="text-white/70 mb-4 leading-relaxed">{cookie.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-[#25d1ab] font-semibold text-sm mb-2">Ejemplos:</p>
                    <ul className="space-y-1">
                      {cookie.examples.map((example, exIdx) => (
                        <li key={exIdx} className="flex items-center gap-2 text-white/60 text-sm">
                          <svg className="w-4 h-4 text-[#25d1ab]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/50">Duración: {cookie.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Control de Cookies - Panel interactivo */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#25d1ab] to-[#25d1ab]/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Gestiona tus preferencias</h2>
                  <p className="text-white/90 max-w-2xl mx-auto">
                    Personaliza qué cookies quieres permitir. Puedes cambiar tus preferencias en cualquier momento.
                  </p>
                </div>

                <div className="space-y-4 max-w-3xl mx-auto">
                  {[
                    { key: 'essential', label: 'Cookies esenciales', desc: 'Siempre activas', locked: true },
                    { key: 'functional', label: 'Cookies funcionales', desc: 'Mejoran tu experiencia', locked: false },
                    { key: 'analytics', label: 'Cookies analíticas', desc: 'Nos ayudan a mejorar', locked: false },
                    { key: 'marketing', label: 'Cookies de marketing', desc: 'Anuncios personalizados', locked: false }
                  ].map((item) => (
                    <div key={item.key} className="bg-[#010028] rounded-2xl p-6 flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg mb-1">{item.label}</h4>
                        <p className="text-white/70 text-sm">{item.desc}</p>
                      </div>
                      <div className="ml-4">
                        {item.locked ? (
                          <div className="bg-[#25d1ab] rounded-full px-4 py-2 text-white font-semibold text-sm">
                            Siempre activas
                          </div>
                        ) : (
                          <button
                            onClick={() => setPreferences({...preferences, [item.key]: !preferences[item.key as keyof typeof preferences]})}
                            className={`relative w-14 h-8 rounded-full transition-all duration-300 ${
                              preferences[item.key as keyof typeof preferences] ? 'bg-white' : 'bg-white/30'
                            }`}
                          >
                            <div className={`absolute top-1 w-6 h-6 rounded-full bg-[#010028] transition-all duration-300 ${
                              preferences[item.key as keyof typeof preferences] ? 'left-7' : 'left-1'
                            }`} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <button
                    onClick={handleSavePreferences}
                    className="bg-[#010028] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#010028]/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Guardar preferencias
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    Aceptar todas
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Cómo controlar cookies */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#25d1ab]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Cómo controlar las cookies en tu navegador
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { browser: 'Chrome', icon: '🌐', color: '#25d1ab' },
                  { browser: 'Firefox', icon: '🦊', color: '#25d1ab' },
                  { browser: 'Safari', icon: '🧭', color: '#25d1ab' },
                  { browser: 'Edge', icon: '🔷', color: '#25d1ab' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#010028]/50 rounded-2xl p-6 text-center hover:bg-[#010028]/70 transition-all duration-300 transform hover:scale-105">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.browser}</h4>
                    <p className="text-white/70 text-sm mb-4">
                      Configura cookies desde las opciones de privacidad
                    </p>
                    <button className="text-[#25d1ab] hover:underline font-semibold text-sm flex items-center gap-1 mx-auto">
                      Ver guía
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>

              <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-6 mt-8">
                <p className="text-[#25d1ab] font-semibold mb-2">⚠️ Importante</p>
                <p className="text-white/80">
                  Si bloqueas todas las cookies, algunas funciones del sitio pueden no funcionar correctamente. Las cookies esenciales son necesarias para operaciones básicas como iniciar sesión.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies de terceros */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#25d1ab]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cookies de terceros</h2>
              <div className="h-1 w-24 bg-[#25d1ab] rounded-full mb-8" />
              
              <div className="space-y-4 text-white/80 leading-relaxed mb-8">
                <p>
                  Utilizamos servicios de terceros que pueden establecer cookies en tu dispositivo. Estos servicios tienen sus propias políticas de privacidad:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Google Analytics', purpose: 'Análisis de tráfico web', link: 'https://policies.google.com/privacy' },
                  { name: 'Facebook Pixel', purpose: 'Remarketing y conversiones', link: 'https://www.facebook.com/privacy' },
                  { name: 'Stripe', purpose: 'Procesamiento de pagos', link: 'https://stripe.com/privacy' }
                ].map((service, idx) => (
                  <div key={idx} className="bg-[#010028]/50 rounded-2xl p-6 border border-[#25d1ab]/10">
                    <h4 className="text-[#25d1ab] font-bold text-lg mb-2">{service.name}</h4>
                    <p className="text-white/70 text-sm mb-4">{service.purpose}</p>
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#25d1ab] text-sm font-semibold inline-flex items-center gap-1 transition-colors"
                    >
                      Ver política
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Actualizaciones */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#25d1ab]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Actualizaciones de esta política</h2>
              <div className="h-1 w-24 bg-[#25d1ab] rounded-full mb-8" />
              
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Podemos actualizar esta Política de Cookies ocasionalmente para reflejar cambios en las tecnologías que usamos o requerimientos legales.
                </p>
                <p>
                  Te notificaremos sobre cambios significativos mediante un aviso en nuestro sitio web o la aplicación. Te recomendamos revisar esta página periódicamente.
                </p>
                <div className="bg-[#25d1ab]/10 border border-[#25d1ab]/20 rounded-xl p-5 mt-6 flex items-center gap-4">
                  <svg className="w-8 h-8 text-[#25d1ab] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-[#25d1ab] font-semibold">Última actualización</p>
                    <p className="text-white">Diciembre 18, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contacto */}
          <section>
            <div className="bg-gradient-to-br from-[#25d1ab] to-[#25d1ab]/80 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿Preguntas sobre cookies?
                </h3>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Si tienes dudas sobre cómo usamos las cookies o quieres ejercer tus derechos, contáctanos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:privacy@ridetaxi.com"
                    className="inline-flex items-center justify-center gap-2 bg-[#010028] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#010028]/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Contactar equipo de privacidad
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <Link
                    href="/legal/privacidad"
                    className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    Ver política de privacidad
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

