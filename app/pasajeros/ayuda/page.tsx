'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import MobileAyuda from '@/app/components/MobileAyuda';
import { useEffect, useState } from 'react';

export default function Ayuda() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  
  useEffect(() => {
    // Delay para evitar cascading renders
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

  const faqs = [
    {
      category: 'Cuenta y pagos',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      questions: [
        {
          id: 'cuenta-1',
          q: '¿Cómo creo una cuenta?',
          a: 'Descarga la app RideTaxi, ingresa tu número de teléfono y sigue las instrucciones. El proceso toma menos de 2 minutos.'
        },
        {
          id: 'cuenta-2',
          q: '¿Qué métodos de pago aceptan?',
          a: 'Aceptamos efectivo, tarjetas de crédito/débito (Visa, Mastercard, American Express), y pagos digitales como PayPal y Apple Pay.'
        },
        {
          id: 'cuenta-3',
          q: '¿Cómo cambio mi método de pago?',
          a: 'Ve a Configuración > Pagos en la app y selecciona o agrega un nuevo método de pago. Puedes tener múltiples métodos guardados.'
        }
      ]
    },
    {
      category: 'Viajes',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      questions: [
        {
          id: 'viaje-1',
          q: '¿Cómo solicito un viaje?',
          a: 'Abre la app, ingresa tu destino, selecciona el tipo de servicio y confirma. Un conductor será asignado automáticamente.'
        },
        {
          id: 'viaje-2',
          q: '¿Puedo programar un viaje para más tarde?',
          a: 'Sí, puedes programar viajes con hasta 30 días de anticipación. Selecciona la opción "Programar" al solicitar tu viaje.'
        },
        {
          id: 'viaje-3',
          q: '¿Cómo cancelo un viaje?',
          a: 'Puedes cancelar desde la app antes de que el conductor llegue. Ten en cuenta que después de 2 minutos se aplica un cargo por cancelación.'
        }
      ]
    },
    {
      category: 'Seguridad',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      questions: [
        {
          id: 'seguridad-1',
          q: '¿Cómo sé que mi conductor es confiable?',
          a: 'Todos nuestros conductores pasan por verificación de antecedentes. Puedes ver su foto, nombre, calificación y reseñas antes de subir.'
        },
        {
          id: 'seguridad-2',
          q: '¿Qué hago en caso de emergencia?',
          a: 'Presiona el botón SOS en la app para contactar inmediatamente con nuestro equipo de seguridad y autoridades locales.'
        },
        {
          id: 'seguridad-3',
          q: '¿Puedo compartir mi viaje con alguien?',
          a: 'Sí, usa la función "Compartir viaje" para enviar tu ubicación en tiempo real a tus contactos de confianza.'
        }
      ]
    },
    {
      category: 'Tarifas y promociones',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      questions: [
        {
          id: 'tarifa-1',
          q: '¿Cómo se calculan las tarifas?',
          a: 'Las tarifas se basan en la distancia, tiempo del viaje y tipo de servicio. Siempre verás el precio estimado antes de confirmar.'
        },
        {
          id: 'tarifa-2',
          q: '¿Qué son las tarifas dinámicas?',
          a: 'Durante alta demanda, las tarifas pueden aumentar temporalmente. Siempre te mostraremos el multiplicador antes de confirmar tu viaje.'
        },
        {
          id: 'tarifa-3',
          q: '¿Cómo uso un código promocional?',
          a: 'Ve a Promociones en la app e ingresa tu código. El descuento se aplicará automáticamente en tu próximo viaje.'
        }
      ]
    }
  ];

  const quickLinks = [
    { text: 'Solicitar un viaje', icon: '🚗' },
    { text: 'Problemas con pagos', icon: '💳' },
    { text: 'Reportar un problema', icon: '⚠️' },
    { text: 'Mi cuenta', icon: '👤' }
  ];

  const contactOptions = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      subtitle: 'Respuesta en 24 horas',
      link: 'ayuda@ridetaxi.com',
      href: 'mailto:ayuda@ridetaxi.com'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Teléfono',
      subtitle: 'Disponible 24/7',
      link: '1-800-555-1234',
      href: 'tel:18005551234'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Chat en vivo',
      subtitle: 'Respuesta inmediata',
      link: 'Iniciar chat',
      href: '#'
    }
  ];

  const toggleFaq = (id: string) => {
    setExpandedFaq(expandedFaq === id ? null : id);
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

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(37, 209, 171, 0.4);
          }
          50% {
            box-shadow: 0 0 40px rgba(37, 209, 171, 0.7);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
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

      {/* Mobile View */}
      <MobileAyuda />

      {/* Desktop View */}
      <div className="hidden lg:block min-h-screen bg-white">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-br from-[#010028] via-[#010033] to-[#02003d] text-white py-24 md:py-32 overflow-hidden">
            {/* Efectos de fondo animados - Solo turquesa */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-72 h-72 bg-[#25d1ab] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
              <div className="absolute top-40 right-10 w-96 h-96 bg-[#25d1ab] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-[#25d1ab] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Icono principal */}
                <div className="inline-flex mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-[#25d1ab] rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-[#25d1ab] rounded-full blur-xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-[#25d1ab] bg-clip-text text-transparent leading-tight">
                  ¿En qué podemos ayudarte?
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed">
                  Encuentra respuestas rápidas a las preguntas más frecuentes
                </p>

                {/* Barra de búsqueda */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative group">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Busca tu pregunta..."
                      className="w-full px-6 py-5 pr-16 rounded-2xl text-[#010028] placeholder-gray-400 focus:ring-2 focus:ring-[#25d1ab] focus:outline-none text-lg shadow-2xl transition-all duration-300 group-hover:shadow-3xl"
                    />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-[#25d1ab] rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-xl">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>

                  {/* Stats badges */}
                  <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
                    <div className="glass-effect rounded-full px-4 py-2 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#25d1ab] rounded-full animate-pulse"></div>
                      <span className="text-gray-300">+1,000 preguntas respondidas</span>
                    </div>
                    <div className="glass-effect rounded-full px-4 py-2 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#25d1ab] rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Soporte 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="py-12 bg-gradient-to-b from-white to-gray-50 border-b border-gray-100">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    className="group px-6 py-3 bg-white border-2 border-gray-200 hover:border-[#25d1ab] text-[#010028] rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="font-semibold group-hover:text-[#25d1ab] transition-colors">{link.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 observe-me">
                <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                  Preguntas <span className="text-[#25d1ab]">frecuentes</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Todo lo que necesitas saber para usar RideTaxi
                </p>
              </div>

              <div className="max-w-5xl mx-auto space-y-6">
                {faqs.map((category, categoryIndex) => (
                  <div
                    key={categoryIndex}
                    className="observe-me group"
                    style={{ animationDelay: `${categoryIndex * 100}ms` }}
                    onMouseEnter={() => setActiveCategory(categoryIndex)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${activeCategory === categoryIndex ? 'border-[#25d1ab]' : 'border-gray-100'}`}>
                      {/* Header de categoría */}
                      <div className="p-6 md:p-8 bg-[#25d1ab] relative overflow-hidden">
                        {/* Patrón de fondo */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0" style={{ 
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                          }}></div>
                        </div>

                        <div className="relative flex items-center space-x-4">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white shadow-lg">
                            {category.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-black text-white">
                              {category.category}
                            </h3>
                            <p className="text-white/80 text-sm mt-1">
                              {category.questions.length} preguntas
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Preguntas */}
                      <div className="p-6 md:p-8 space-y-4">
                        {category.questions.map((faq, faqIndex) => (
                          <div
                            key={faq.id}
                            className="border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-[#25d1ab]/30 transition-all duration-300"
                          >
                            <button
                              onClick={() => toggleFaq(faq.id)}
                              className="w-full text-left p-5 md:p-6 hover:bg-gray-50 transition-colors duration-300 flex items-start justify-between group/faq"
                            >
                              <div className="flex items-start space-x-4 flex-1">
                                <div className="w-8 h-8 rounded-lg bg-[#25d1ab] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md">
                                  {faqIndex + 1}
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-lg md:text-xl font-bold text-[#010028] group-hover/faq:text-[#25d1ab] transition-colors pr-4">
                                    {faq.q}
                                  </h4>
                                </div>
                              </div>
                              <div className={`shrink-0 w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center transform transition-all duration-300 ${expandedFaq === faq.id ? 'rotate-180 bg-[#25d1ab]' : ''}`}>
                                <svg 
                                  className={`w-5 h-5 transition-colors ${expandedFaq === faq.id ? 'text-white' : 'text-gray-600'}`} 
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </button>

                            {/* Respuesta expandible */}
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                expandedFaq === faq.id ? 'max-h-96' : 'max-h-0'
                              }`}
                            >
                              <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                                <div className="pl-12 pr-4">
                                  <div className="p-5 bg-[#25d1ab]/5 rounded-xl border-l-4 border-[#25d1ab]">
                                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                                      {faq.a}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Options */}
          <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 observe-me">
                  <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                    Otras formas de <span className="text-[#25d1ab]">contactarnos</span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Estamos aquí para ayudarte de la manera que prefieras
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {contactOptions.map((option, index) => (
                    <div
                      key={index}
                      className="observe-me group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-[#25d1ab]/30 transform hover:-translate-y-2">
                        {/* Header con turquesa */}
                        <div className="p-8 bg-[#25d1ab] text-center relative overflow-hidden">
                          <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0" style={{ 
                              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                              backgroundSize: '30px 30px'
                            }}></div>
                          </div>
                          
                          <div className="relative">
                            <div className="inline-flex mb-4">
                              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[#25d1ab] shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                {option.icon}
                              </div>
                            </div>
                            <h3 className="text-2xl font-black text-white mb-2">
                              {option.title}
                            </h3>
                            <p className="text-white/90 font-medium">
                              {option.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-8 text-center">
                          <a 
                            href={option.href}
                            className="inline-block text-lg font-bold text-[#25d1ab] hover:text-[#010028] transition-colors group-hover:underline"
                          >
                            {option.link}
                          </a>

                          {/* Botón de acción */}
                          <button className="mt-6 w-full px-6 py-3 bg-gray-50 hover:bg-[#25d1ab] text-[#010028] hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                            Contactar ahora
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* App Support - Solo colores de marca */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-[#010028] via-[#010033] to-[#25d1ab] text-white relative overflow-hidden">
            {/* Patrón de fondo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center observe-me">
                {/* Icono de app */}
                <div className="inline-flex mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl">
                      <svg className="w-14 h-14 text-[#25d1ab]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-white rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
                  ¿Aún necesitas ayuda?
                </h2>
                
                <p className="text-xl md:text-2xl mb-10 text-white font-light leading-relaxed">
                  Obtén soporte directo desde la app de RideTaxi
                </p>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group px-8 md:px-10 py-4 md:py-5 bg-white text-[#010028] rounded-full text-lg md:text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span>Abrir app</span>
                  </button>

                  <button className="group px-8 md:px-10 py-4 md:py-5 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg md:text-xl font-bold hover:bg-white/30 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 flex items-center justify-center space-x-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Enviar solicitud</span>
                  </button>
                </div>

                {/* Info adicional */}
                <div className="mt-12 pt-8 border-t border-white/30">
                  <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/90 font-medium">Soporte multilingüe</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/90 font-medium">Respuesta garantizada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/90 font-medium">Disponible 24/7</span>
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
