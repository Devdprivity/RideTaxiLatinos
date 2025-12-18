'use client';

import { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function Privacidad() {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);

    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('data-section') || '';
        }
      });
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'introduccion', title: 'Introducción' },
    { id: 'recopilacion', title: 'Información que recopilamos' },
    { id: 'uso', title: 'Cómo usamos tu información' },
    { id: 'compartir', title: 'Compartir información' },
    { id: 'seguridad', title: 'Seguridad de datos' },
    { id: 'derechos', title: 'Tus derechos' },
    { id: 'cookies', title: 'Cookies y tecnologías' },
    { id: 'menores', title: 'Privacidad de menores' },
    { id: 'cambios', title: 'Cambios a esta política' },
    { id: 'contacto', title: 'Contacto' }
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(`[data-section="${id}"]`);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#010028]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#25d1ab] pt-24 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slower" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-white font-semibold text-sm">Tu privacidad es nuestra prioridad</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Política de Privacidad
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              En RideTaxi, protegemos tu información personal con los más altos estándares de seguridad. Conoce cómo recopilamos, usamos y protegemos tus datos.
            </p>

            {/* Quick info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto">
              {[
                { icon: '🔒', title: 'Datos encriptados', desc: 'Protección total' },
                { icon: '🚫', title: 'No vendemos', desc: 'Tu info privada' },
                { icon: '✅', title: 'Control total', desc: 'Tú decides' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 transform transition-all duration-500 hover:scale-105 hover:bg-white/15"
                >
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <div className="text-lg font-bold text-white">{item.title}</div>
                  <div className="text-sm text-white/80">{item.desc}</div>
                </div>
              ))}
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
        <div className="container mx-auto px-4 py-16">
          <div className="flex gap-8 max-w-7xl mx-auto">
            {/* Sidebar Navigation - Desktop */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#25d1ab]/20">
                <h3 className="text-[#25d1ab] font-bold text-lg mb-4">Contenido</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                        activeSection === section.id
                          ? 'bg-[#25d1ab] text-white font-semibold transform scale-105'
                          : 'text-white/70 hover:text-[#25d1ab] hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-1 max-w-4xl">
              <div className="space-y-12">
                {/* Section 1: Introducción */}
                <section data-section="introduccion" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Introducción</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      RideTaxi LLC (&quot;nosotros&quot;, &quot;nuestro&quot; o &quot;la Compañía&quot;) se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información personal cuando utilizas nuestra plataforma.
                    </p>
                    <p>
                      Al usar RideTaxi, aceptas las prácticas descritas en esta política. Si no estás de acuerdo, por favor no uses nuestros servicios.
                    </p>
                    <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-4 mt-6">
                      <p className="text-[#25d1ab] font-semibold">📅 Última actualización: Diciembre 2024</p>
                      <p className="text-white/90 mt-2">
                        Esta política ha sido actualizada para cumplir con GDPR, CCPA y regulaciones internacionales de privacidad.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2: Recopilación */}
                <section data-section="recopilacion" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Información que recopilamos</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-6 text-white/80 leading-relaxed">
                    <p className="font-semibold text-white text-lg">Recopilamos los siguientes tipos de información:</p>
                    
                    <div className="space-y-4">
                      {[
                        {
                          title: '👤 Información de cuenta',
                          items: ['Nombre completo', 'Correo electrónico', 'Número de teléfono', 'Foto de perfil', 'Fecha de nacimiento']
                        },
                        {
                          title: '📍 Información de ubicación',
                          items: ['Ubicación en tiempo real durante viajes', 'Historial de direcciones', 'Rutas de viaje', 'Destinos frecuentes']
                        },
                        {
                          title: '💳 Información de pago',
                          items: ['Método de pago (tokenizado)', 'Historial de transacciones', 'Información de facturación']
                        },
                        {
                          title: '📱 Información del dispositivo',
                          items: ['Tipo y modelo de dispositivo', 'Sistema operativo', 'Dirección IP', 'ID del dispositivo', 'Datos de sensores']
                        }
                      ].map((category, idx) => (
                        <div key={idx} className="bg-[#25d1ab]/5 rounded-xl p-5 border border-[#25d1ab]/10">
                          <h4 className="text-[#25d1ab] font-bold text-lg mb-3">{category.title}</h4>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-center gap-2 text-white/70">
                                <svg className="w-4 h-4 text-[#25d1ab] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Section 3: Uso */}
                <section data-section="uso" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Cómo usamos tu información</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>Usamos tu información personal para:</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      {[
                        { icon: '🚗', text: 'Facilitar viajes y conectar pasajeros con conductores' },
                        { icon: '💰', text: 'Procesar pagos y emitir facturas' },
                        { icon: '🔔', text: 'Enviarte notificaciones importantes' },
                        { icon: '🛡️', text: 'Mejorar la seguridad y prevenir fraudes' },
                        { icon: '📊', text: 'Analizar y mejorar nuestros servicios' },
                        { icon: '💬', text: 'Proporcionar soporte al cliente' },
                        { icon: '📧', text: 'Enviarte ofertas y promociones (opcional)' },
                        { icon: '⚖️', text: 'Cumplir con obligaciones legales' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors">
                          <span className="text-2xl shrink-0">{item.icon}</span>
                          <span className="text-white">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-4 mt-6">
                      <p className="text-[#25d1ab] font-semibold">✅ Minimización de datos</p>
                      <p className="text-white/90 mt-2">
                        Solo recopilamos y utilizamos la información necesaria para proporcionar nuestros servicios.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 4: Compartir */}
                <section data-section="compartir" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Compartir información</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      RideTaxi NO vende tu información personal a terceros. Solo compartimos información en las siguientes circunstancias:
                    </p>
                    <ul className="space-y-3 ml-4">
                      {[
                        'Con conductores: compartimos tu nombre, foto y ubicación para coordinar viajes',
                        'Con procesadores de pago: para completar transacciones de forma segura',
                        'Con proveedores de servicios: que nos ayudan a operar la plataforma',
                        'Por requerimientos legales: cuando la ley nos obliga a divulgar información',
                        'En caso de fusión o venta: con entidades adquirentes',
                        'Con tu consentimiento: cuando nos autorizas explícitamente'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-[#25d1ab] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-4 mt-6">
                      <p className="text-[#25d1ab] font-semibold">🚫 Nunca vendemos tus datos</p>
                      <p className="text-white/90 mt-2">
                        Tu información personal es confidencial y nunca será vendida a terceros para marketing o publicidad.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5: Seguridad */}
                <section data-section="seguridad" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Seguridad de datos</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Implementamos medidas técnicas y organizativas avanzadas para proteger tu información:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      {[
                        { icon: '🔐', title: 'Encriptación SSL/TLS', desc: 'Todas las comunicaciones están cifradas' },
                        { icon: '🛡️', title: 'Tokenización', desc: 'Datos de pago tokenizados y seguros' },
                        { icon: '🔒', title: 'Acceso restringido', desc: 'Solo personal autorizado' },
                        { icon: '📡', title: 'Monitoreo 24/7', desc: 'Detección de amenazas en tiempo real' },
                        { icon: '🔄', title: 'Respaldos regulares', desc: 'Backups automáticos diarios' },
                        { icon: '✅', title: 'Auditorías', desc: 'Revisiones de seguridad periódicas' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#25d1ab]/5 rounded-xl p-5 border border-[#25d1ab]/10 hover:border-[#25d1ab]/30 transition-colors">
                          <div className="text-3xl mb-2">{item.icon}</div>
                          <h4 className="text-white font-bold mb-1">{item.title}</h4>
                          <p className="text-sm text-white/70">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6">
                      Sin embargo, ningún sistema es 100% seguro. Te recomendamos mantener tu contraseña segura y notificarnos inmediatamente sobre cualquier actividad sospechosa.
                    </p>
                  </div>
                </section>

                {/* Section 6: Derechos */}
                <section data-section="derechos" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Tus derechos de privacidad</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>Según las leyes de privacidad aplicables (GDPR, CCPA), tienes derecho a:</p>
                    <div className="space-y-4 mt-6">
                      {[
                        { title: 'Acceso', desc: 'Solicitar una copia de tus datos personales', icon: '📄' },
                        { title: 'Rectificación', desc: 'Corregir información incorrecta o incompleta', icon: '✏️' },
                        { title: 'Eliminación', desc: 'Solicitar la eliminación de tus datos', icon: '🗑️' },
                        { title: 'Portabilidad', desc: 'Recibir tus datos en formato estructurado', icon: '📦' },
                        { title: 'Oposición', desc: 'Oponerte al procesamiento de tus datos', icon: '🚫' },
                        { title: 'Restricción', desc: 'Limitar cómo usamos tus datos', icon: '⏸️' }
                      ].map((right, idx) => (
                        <div key={idx} className="flex items-start gap-4 bg-white/5 p-5 rounded-xl hover:bg-white/10 transition-colors">
                          <span className="text-3xl shrink-0">{right.icon}</span>
                          <div>
                            <h4 className="text-[#25d1ab] font-bold text-lg mb-1">{right.title}</h4>
                            <p className="text-white/70">{right.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-4 mt-6">
                      <p className="text-[#25d1ab] font-semibold">📧 Ejercer tus derechos</p>
                      <p className="text-white/90 mt-2">
                        Para ejercer cualquiera de estos derechos, contáctanos en <span className="font-semibold">privacy@ridetaxi.com</span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 7: Cookies */}
                <section data-section="cookies" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Cookies y tecnologías similares</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el uso de la plataforma y personalizar contenido.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      {[
                        { type: 'Esenciales', desc: 'Necesarias para el funcionamiento', required: true },
                        { type: 'Funcionales', desc: 'Mejoran tu experiencia', required: false },
                        { type: 'Analíticas', desc: 'Nos ayudan a mejorar', required: false }
                      ].map((cookie, idx) => (
                        <div key={idx} className="bg-[#25d1ab]/5 rounded-xl p-5 border border-[#25d1ab]/10">
                          <h4 className="text-[#25d1ab] font-bold mb-2">{cookie.type}</h4>
                          <p className="text-sm text-white/70 mb-3">{cookie.desc}</p>
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            cookie.required ? 'bg-[#25d1ab]/20 text-[#25d1ab]' : 'bg-white/10 text-white/70'
                          }`}>
                            {cookie.required ? 'Obligatorias' : 'Opcionales'}
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6">
                      Puedes gestionar tus preferencias de cookies en la configuración de tu navegador. Para más información, consulta nuestra{' '}
                      <Link href="/legal/cookies" className="text-[#25d1ab] hover:underline font-semibold">Política de Cookies</Link>.
                    </p>
                  </div>
                </section>

                {/* Section 8: Menores */}
                <section data-section="menores" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Privacidad de menores</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      RideTaxi no está dirigido a menores de 18 años. No recopilamos intencionalmente información personal de niños sin el consentimiento verificable de los padres.
                    </p>
                    <p>
                      Si descubrimos que hemos recopilado información de un menor sin consentimiento, eliminaremos esa información de nuestros servidores inmediatamente.
                    </p>
                    <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-4 mt-6">
                      <p className="text-[#25d1ab] font-semibold">👨‍👩‍👧 Padres y tutores</p>
                      <p className="text-white/90 mt-2">
                        Si crees que tu hijo nos ha proporcionado información personal, contáctanos inmediatamente en <span className="font-semibold">privacy@ridetaxi.com</span>
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 9: Cambios */}
                <section data-section="cambios" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Cambios a esta política</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Podemos actualizar esta Política de Privacidad periódicamente para reflejar cambios en nuestras prácticas o por razones legales.
                    </p>
                    <p>
                      Te notificaremos sobre cambios significativos mediante:
                    </p>
                    <ul className="space-y-3 ml-4">
                      {[
                        'Correo electrónico a tu dirección registrada',
                        'Notificación destacada en la aplicación',
                        'Aviso en nuestro sitio web',
                        'Notificación push (si está habilitada)'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-[#25d1ab] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      El uso continuado de RideTaxi después de los cambios constituye tu aceptación de la política actualizada.
                    </p>
                  </div>
                </section>

                {/* Section 10: Contacto */}
                <section data-section="contacto" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Contacto</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Para preguntas sobre esta Política de Privacidad o el manejo de tus datos personales:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      {[
                        { icon: '✉️', label: 'Email de privacidad', value: 'privacy@ridetaxi.com' },
                        { icon: '📧', label: 'Email general', value: 'info@ridetaxi.com' },
                        { icon: '📱', label: 'Teléfono', value: '+1 (555) 123-4567' },
                        { icon: '📍', label: 'Dirección postal', value: 'RideTaxi LLC, Miami, FL 33101' }
                      ].map((contact, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-[#25d1ab]/10 p-4 rounded-xl">
                          <span className="text-2xl">{contact.icon}</span>
                          <div>
                            <p className="text-[#25d1ab] font-semibold text-sm">{contact.label}</p>
                            <p className="text-white text-sm">{contact.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-4 mt-6">
                      <p className="text-[#25d1ab] font-semibold">⚡ Respuesta rápida</p>
                      <p className="text-white/90 mt-2">
                        Respondemos todas las consultas de privacidad en un plazo máximo de 48 horas.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Final CTA */}
              <div className="mt-16 bg-gradient-to-br from-[#25d1ab] to-[#25d1ab]/80 rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    ¿Tienes preguntas sobre tu privacidad?
                  </h3>
                  <p className="text-white/90 mb-6 max-w-xl mx-auto">
                    Nuestro equipo de privacidad está listo para ayudarte con cualquier duda o solicitud.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:privacy@ridetaxi.com"
                      className="inline-flex items-center justify-center gap-2 bg-[#010028] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#010028]/90 transition-all duration-300 transform hover:scale-105"
                    >
                      Contactar privacidad
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                    <Link
                      href="/"
                      className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                    >
                      Ir a inicio
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.05); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

