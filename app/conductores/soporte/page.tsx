'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useEffect, useState } from 'react';

export default function SoporteConductores() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    tipo: '',
    descripcion: ''
  });

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

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Línea de soporte',
      subtitle: 'Disponible 24/7',
      contact: '1-800-555-1234',
      action: 'Llamar ahora',
      href: 'tel:18005551234',
      badge: 'Urgente'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'Chat en vivo',
      subtitle: 'Respuesta inmediata',
      contact: 'Conectar con agente',
      action: 'Iniciar chat',
      href: '#',
      badge: 'Rápido'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      subtitle: 'Respuesta en 24h',
      contact: 'conductores@ridetaxi.com',
      action: 'Enviar email',
      href: 'mailto:conductores@ridetaxi.com',
      badge: 'Detallado'
    }
  ];

  const topics = [
    { 
      icon: '📱', 
      title: 'Problemas con la app', 
      desc: 'La app no funciona o se cierra',
      color: 'from-blue-500 to-cyan-600'
    },
    { 
      icon: '💳', 
      title: 'Problemas de pago', 
      desc: 'No recibí mi pago o hay un error',
      color: 'from-green-500 to-emerald-600'
    },
    { 
      icon: '📄', 
      title: 'Actualizar documentos', 
      desc: 'Renovar licencia o seguro',
      color: 'from-purple-500 to-indigo-600'
    },
    { 
      icon: '⚠️', 
      title: 'Reportar un incidente', 
      desc: 'Problema con un pasajero o accidente',
      color: 'from-red-500 to-pink-600'
    },
    { 
      icon: '✏️', 
      title: 'Cambiar información', 
      desc: 'Actualizar datos personales o del vehículo',
      color: 'from-amber-500 to-orange-600'
    },
    { 
      icon: '🔒', 
      title: 'Desactivación de cuenta', 
      desc: 'Mi cuenta fue desactivada',
      color: 'from-gray-500 to-slate-600'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí iría la lógica de envío
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

        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 1;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 1.5s ease-out infinite;
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
              <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-[#25d1ab]/20 border border-[#25d1ab]/30 rounded-full px-4 py-2 mb-8">
                  <div className="relative flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#25d1ab] rounded-full"></div>
                    <div className="absolute w-2 h-2 bg-[#25d1ab] rounded-full animate-pulse-ring"></div>
                  </div>
                  <span className="text-sm font-semibold text-[#25d1ab]">Equipo disponible 24/7</span>
                </div>

                {/* Icono principal */}
                <div className="inline-flex mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 bg-[#25d1ab] rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-[#25d1ab] rounded-full blur-xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-[#25d1ab] bg-clip-text text-transparent leading-tight">
                  Soporte para conductores
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed">
                  Estamos aquí para ayudarte en cada paso del camino
                </p>

                {/* Quick stats */}
                <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
                  <div className="glass-effect rounded-2xl p-4">
                    <div className="text-3xl font-black text-[#25d1ab] mb-1">24/7</div>
                    <div className="text-xs text-gray-300">Disponible</div>
                  </div>
                  <div className="glass-effect rounded-2xl p-4">
                    <div className="text-3xl font-black text-[#25d1ab] mb-1">&lt;5min</div>
                    <div className="text-xs text-gray-300">Respuesta</div>
                  </div>
                  <div className="glass-effect rounded-2xl p-4">
                    <div className="text-3xl font-black text-[#25d1ab] mb-1">95%</div>
                    <div className="text-xs text-gray-300">Satisfacción</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16 observe-me">
                <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                  ¿Cómo prefieres <span className="text-[#25d1ab]">contactarnos?</span>
                </h2>
                <p className="text-xl text-gray-600">
                  Elige el método que mejor se adapte a tu necesidad
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="observe-me group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-[#25d1ab]/30 transform hover:-translate-y-2">
                      {/* Badge */}
                      <div className="absolute top-6 right-6 bg-[#25d1ab] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {method.badge}
                      </div>

                      {/* Header con gradiente */}
                      <div className="p-8 bg-[#25d1ab] text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute inset-0" style={{ 
                            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                            backgroundSize: '30px 30px'
                          }}></div>
                        </div>
                        
                        <div className="relative">
                          <div className="inline-flex mb-4">
                            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-[#25d1ab] shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                              {method.icon}
                            </div>
                          </div>
                          <h3 className="text-2xl font-black text-white mb-2">
                            {method.title}
                          </h3>
                          <p className="text-white/90 font-medium">
                            {method.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 text-center">
                        <p className="text-lg font-bold text-[#010028] mb-6">
                          {method.contact}
                        </p>

                        <a 
                          href={method.href}
                          className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-50 hover:bg-[#25d1ab] text-[#010028] hover:text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg space-x-2"
                        >
                          <span>{method.action}</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Topics Section */}
          <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 observe-me">
                  <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                    Temas <span className="text-[#25d1ab]">frecuentes</span> de soporte
                  </h2>
                  <p className="text-xl text-gray-600">
                    Encuentra ayuda rápida para problemas comunes
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {topics.map((topic, index) => (
                    <div
                      key={index}
                      className="observe-me group"
                      style={{ animationDelay: `${index * 50}ms` }}
                      onMouseEnter={() => setSelectedTopic(index)}
                      onMouseLeave={() => setSelectedTopic(null)}
                    >
                      <div className={`relative h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${selectedTopic === index ? 'border-[#25d1ab]' : 'border-gray-100'} p-6 cursor-pointer transform hover:-translate-y-1`}>
                        {/* Emoji icon */}
                        <div className="relative inline-flex mb-4">
                          <div className="w-16 h-16 bg-[#25d1ab]/10 rounded-2xl flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                            {topic.icon}
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#010028] mb-2 group-hover:text-[#25d1ab] transition-colors">
                          {topic.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {topic.desc}
                        </p>

                        {/* Arrow indicator */}
                        <div className={`flex items-center text-[#25d1ab] font-semibold text-sm transition-all duration-300 ${selectedTopic === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                          <span>Ver más</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 observe-me">
                  <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                    Enviar <span className="text-[#25d1ab]">solicitud</span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Completa el formulario y te responderemos pronto
                  </p>
                </div>

                <div className="observe-me">
                  <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                    {/* Form Header */}
                    <div className="p-8 md:p-10 bg-gradient-to-r from-[#25d1ab] to-[#25d1ab]/80 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{ 
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                      </div>

                      <div className="relative flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-black text-white">
                            Formulario de soporte
                          </h3>
                          <p className="text-white/80 text-sm mt-1">
                            Respuesta en menos de 24 horas
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-[#010028] mb-2">
                            Nombre completo *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.nombre}
                            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25d1ab] focus:border-[#25d1ab] transition-all"
                            placeholder="Juan Pérez"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-[#010028] mb-2">
                            Correo electrónico *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25d1ab] focus:border-[#25d1ab] transition-all"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#010028] mb-2">
                          Tipo de problema *
                        </label>
                        <select 
                          required
                          value={formData.tipo}
                          onChange={(e) => setFormData({...formData, tipo: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25d1ab] focus:border-[#25d1ab] transition-all"
                        >
                          <option value="">Selecciona un tipo</option>
                          <option value="tecnico">Problemas técnicos</option>
                          <option value="pago">Problemas de pago</option>
                          <option value="documentacion">Documentación</option>
                          <option value="incidente">Incidente con pasajero</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#010028] mb-2">
                          Descripción del problema *
                        </label>
                        <textarea
                          rows={6}
                          required
                          value={formData.descripcion}
                          onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#25d1ab] focus:border-[#25d1ab] transition-all resize-none"
                          placeholder="Describe tu problema en detalle para que podamos ayudarte mejor..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="group w-full bg-[#25d1ab] text-white py-4 rounded-xl font-black text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2"
                      >
                        <span>Enviar solicitud</span>
                        <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>

                      <p className="text-sm text-gray-500 text-center">
                        Al enviar, aceptas nuestros términos de servicio y política de privacidad
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-[#010028] via-[#010033] to-[#25d1ab] text-white relative overflow-hidden">
            {/* Patrón de fondo */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center observe-me">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  ¿Necesitas ayuda urgente?
                </h2>
                
                <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
                  Nuestro equipo está disponible 24/7 para asistirte
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:18005551234"
                    className="group px-10 py-5 bg-white text-[#010028] rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center justify-center space-x-2"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Llamar ahora</span>
                  </a>

                  <button className="px-10 py-5 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white/30 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105">
                    Iniciar chat
                  </button>
                </div>

                {/* Stats */}
                <div className="mt-12 pt-8 border-t border-white/30">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">24/7</div>
                      <div className="text-sm text-white/80">Disponible</div>
                    </div>
                    <div className="text-center border-l border-r border-white/30">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">10K+</div>
                      <div className="text-sm text-white/80">Conductores</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">95%</div>
                      <div className="text-sm text-white/80">Satisfacción</div>
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
