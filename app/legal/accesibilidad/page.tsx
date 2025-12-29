'use client';

import { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function Accesibilidad() {
  const [isVisible, setIsVisible] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  const increaseFontSize = () => {
    if (fontSize < 150) {
      setFontSize(fontSize + 10);
      document.documentElement.style.fontSize = `${fontSize + 10}%`;
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 80) {
      setFontSize(fontSize - 10);
      document.documentElement.style.fontSize = `${fontSize - 10}%`;
    }
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = '100%';
  };

  const toggleContrast = () => {
    setHighContrast(!highContrast);
    document.body.classList.toggle('high-contrast');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#010028]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#25d1ab] pt-24 pb-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse-slower" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-white font-semibold text-sm">Transporte inclusivo para todos</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Compromiso con la Accesibilidad
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              En Ride Latinos Service LLC creemos que el transporte debe ser accesible para todos. Trabajamos constantemente para eliminar barreras y ofrecer una experiencia inclusiva.
            </p>

            {/* Accessibility stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
              {[
                { icon: '♿', label: 'Vehículos accesibles' },
                { icon: '🦮', label: 'Mascotas de servicio' },
                { icon: '🌐', label: 'Soporte multilingüe' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 transform transition-all duration-500 hover:scale-105"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-sm text-white font-semibold">{stat.label}</div>
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

      {/* Accessibility Toolbar */}
      <div className="sticky top-20 z-40 bg-[#010028]/95 backdrop-blur-sm border-b border-[#25d1ab]/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-white/70 text-sm font-semibold">Tamaño de texto:</span>
              <div className="flex gap-2">
                <button
                  onClick={decreaseFontSize}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-all"
                  aria-label="Disminuir tamaño de texto"
                >
                  A-
                </button>
                <button
                  onClick={resetFontSize}
                  className="px-4 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all"
                  aria-label="Restablecer tamaño de texto"
                >
                  Reset
                </button>
                <button
                  onClick={increaseFontSize}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-all"
                  aria-label="Aumentar tamaño de texto"
                >
                  A+
                </button>
              </div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <button
              onClick={toggleContrast}
              className={`px-6 h-10 rounded-lg font-semibold text-sm transition-all ${
                highContrast 
                  ? 'bg-[#25d1ab] text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
              aria-label="Activar alto contraste"
            >
              {highContrast ? '✓ ' : ''}Alto contraste
            </button>
            <span className="text-white/50 text-sm">Actual: {fontSize}%</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#010028]">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          {/* Nuestro compromiso */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#25d1ab]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Nuestro compromiso</h2>
              <div className="h-1 w-24 bg-[#25d1ab] rounded-full mb-8" />
              
              <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                <p>
                  Ride Latinos Service LLC se compromete a garantizar la accesibilidad digital para personas con discapacidades. Mejoramos continuamente la experiencia del usuario para todos y aplicamos los estándares de accesibilidad relevantes.
                </p>
                <p>
                  Trabajamos para cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 nivel AA y la Sección 508 de la Ley de Rehabilitación.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[
                  { level: 'WCAG 2.1', status: 'Nivel AA', color: '#25d1ab' },
                  { level: 'Sección 508', status: 'Cumplimiento', color: '#25d1ab' },
                  { level: 'ADA', status: 'Compatible', color: '#25d1ab' }
                ].map((standard, idx) => (
                  <div key={idx} className="bg-[#010028]/50 rounded-2xl p-6 text-center border border-[#25d1ab]/10">
                    <div className="w-12 h-12 rounded-full bg-[#25d1ab]/20 flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-[#25d1ab]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-white font-bold text-lg mb-1">{standard.level}</h4>
                    <p className="text-[#25d1ab] text-sm font-semibold">{standard.status}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Características de accesibilidad */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Características de accesibilidad</h2>
              <div className="h-1 w-24 bg-[#25d1ab] rounded-full mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: '🎯',
                  title: 'Navegación por teclado',
                  desc: 'Todas las funciones son accesibles mediante teclado sin necesidad de ratón.',
                  features: ['Tab para navegar', 'Enter para activar', 'Esc para cerrar', 'Atajos personalizables']
                },
                {
                  icon: '📢',
                  title: 'Lectores de pantalla',
                  desc: 'Compatible con NVDA, JAWS, VoiceOver y TalkBack.',
                  features: ['Texto alternativo', 'Roles ARIA', 'Etiquetas descriptivas', 'Avisos en vivo']
                },
                {
                  icon: '🎨',
                  title: 'Contraste y colores',
                  desc: 'Cumplimos con ratios de contraste mínimos (4.5:1) para legibilidad.',
                  features: ['Modo alto contraste', 'Colores accesibles', 'Sin dependencia de color', 'Modo oscuro/claro']
                },
                {
                  icon: '📱',
                  title: 'Diseño responsivo',
                  desc: 'Adaptable a cualquier tamaño de pantalla y orientación.',
                  features: ['Zoom hasta 200%', 'Layout flexible', 'Táctil optimizado', 'Tamaño de toque 44px+']
                },
                {
                  icon: '⏱️',
                  title: 'Tiempo flexible',
                  desc: 'Sin límites de tiempo arbitrarios para completar acciones.',
                  features: ['Sin timeouts cortos', 'Avisos previos', 'Extensión de sesión', 'Pausar animaciones']
                },
                {
                  icon: '🔊',
                  title: 'Multimedia accesible',
                  desc: 'Subtítulos, transcripciones y descripciones de audio.',
                  features: ['Subtítulos opcionales', 'Transcripciones', 'Control de volumen', 'Sin autoplay']
                },
                {
                  icon: '📝',
                  title: 'Formularios claros',
                  desc: 'Etiquetas claras, errores descriptivos y ayuda contextual.',
                  features: ['Labels asociados', 'Errores específicos', 'Ayuda inline', 'Validación clara']
                },
                {
                  icon: '🌍',
                  title: 'Idioma y contenido',
                  desc: 'Lenguaje claro, simple y en múltiples idiomas.',
                  features: ['Español e inglés', 'Lenguaje sencillo', 'Definiciones', 'Abreviaturas explicadas']
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#25d1ab]/20 hover:border-[#25d1ab]/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="text-5xl">{feature.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/70 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                  <div className="ml-16">
                    <ul className="space-y-2">
                      {feature.features.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center gap-2 text-white/60 text-sm">
                          <svg className="w-4 h-4 text-[#25d1ab] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Vehículos accesibles */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#25d1ab] to-[#25d1ab]/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vehículos accesibles</h2>
                <div className="h-1 w-24 bg-white rounded-full mb-8" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: '♿ Sillas de ruedas',
                      desc: 'Vehículos adaptados con rampas y espacios seguros para sillas de ruedas.',
                      features: ['Rampas certificadas', 'Sistema de anclaje', 'Espacio amplio', 'Conductores capacitados']
                    },
                    {
                      title: '🦮 Animales de servicio',
                      desc: 'Todos los vehículos aceptan perros guía y animales de asistencia sin cargo extra.',
                      features: ['Sin cargo adicional', 'Todos los vehículos', 'Entrenamiento conductores', 'Política clara']
                    },
                    {
                      title: '🗣️ Asistencia auditiva',
                      desc: 'Comunicación por texto y notificaciones visuales en la app.',
                      features: ['Chat en app', 'Avisos visuales', 'Vibración', 'Instrucciones escritas']
                    },
                    {
                      title: '👁️ Asistencia visual',
                      desc: 'App con lector de pantalla y conductores capacitados para asistir.',
                      features: ['VoiceOver/TalkBack', 'Audio descriptivo', 'Asistencia conductor', 'Ubicación precisa']
                    }
                  ].map((service, idx) => (
                    <div key={idx} className="bg-[#010028] rounded-2xl p-6">
                      <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                      <p className="text-white/80 mb-4 leading-relaxed">{service.desc}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-white/70 text-sm">
                            <svg className="w-4 h-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tecnologías asistivas compatibles */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#25d1ab]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tecnologías asistivas compatibles</h2>
              <div className="h-1 w-24 bg-[#25d1ab] rounded-full mb-8" />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'JAWS', platform: 'Windows', icon: '🪟' },
                  { name: 'NVDA', platform: 'Windows', icon: '🪟' },
                  { name: 'VoiceOver', platform: 'iOS/macOS', icon: '🍎' },
                  { name: 'TalkBack', platform: 'Android', icon: '🤖' },
                  { name: 'Dragon', platform: 'Voz', icon: '🎤' },
                  { name: 'ZoomText', platform: 'Ampliación', icon: '🔍' },
                  { name: 'Switch Control', platform: 'Interruptores', icon: '🎮' },
                  { name: 'Eye Tracking', platform: 'Seguimiento', icon: '👁️' }
                ].map((tech, idx) => (
                  <div key={idx} className="bg-[#010028]/50 rounded-2xl p-6 text-center hover:bg-[#010028]/70 transition-all">
                    <div className="text-4xl mb-3">{tech.icon}</div>
                    <h4 className="text-white font-bold mb-1">{tech.name}</h4>
                    <p className="text-white/60 text-sm">{tech.platform}</p>
                  </div>
                ))}
              </div>

              <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-6 mt-8">
                <p className="text-[#25d1ab] font-semibold mb-2">💡 ¿Usas otra tecnología?</p>
                <p className="text-white/80">
                  Si utilizas una tecnología asistiva que no funciona correctamente con Ride Latinos Service LLC, por favor contáctanos para que podamos mejorar la compatibilidad.
                </p>
              </div>
            </div>
          </section>

          {/* Mejora continua */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#25d1ab]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Mejora continua</h2>
              <div className="h-1 w-24 bg-[#25d1ab] rounded-full mb-8" />
              
              <div className="space-y-6">
                <p className="text-white/80 text-lg leading-relaxed">
                  Reconocemos que la accesibilidad es un esfuerzo continuo y estamos comprometidos a mejorar constantemente:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: '🔍',
                      title: 'Auditorías regulares',
                      desc: 'Realizamos auditorías de accesibilidad trimestrales con expertos externos.'
                    },
                    {
                      icon: '👥',
                      title: 'Pruebas con usuarios',
                      desc: 'Trabajamos con personas con discapacidades para probar nuestros servicios.'
                    },
                    {
                      icon: '📚',
                      title: 'Capacitación continua',
                      desc: 'Nuestro equipo recibe formación regular en accesibilidad y diseño inclusivo.'
                    },
                    {
                      icon: '🔄',
                      title: 'Actualizaciones frecuentes',
                      desc: 'Implementamos mejoras de accesibilidad en cada actualización de la plataforma.'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-[#010028]/30 rounded-xl p-5">
                      <span className="text-4xl shrink-0">{item.icon}</span>
                      <div>
                        <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                        <p className="text-white/70">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Reportar problemas */}
          <section className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-[#25d1ab]/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reportar problemas de accesibilidad</h2>
              <div className="h-1 w-24 bg-[#25d1ab] rounded-full mb-8" />
              
              <div className="space-y-6 text-white/80 leading-relaxed">
                <p className="text-lg">
                  Si encuentras alguna barrera de accesibilidad en nuestra plataforma, por favor háznoslo saber. Tu feedback nos ayuda a mejorar:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      method: 'Email',
                      contact: 'accesibilidad@ridetaxi.com',
                      icon: '✉️',
                      desc: 'Respuesta en 24-48 horas'
                    },
                    {
                      method: 'Teléfono',
                      contact: '+1 (555) 123-4567',
                      icon: '📱',
                      desc: 'Lun-Vie 9am-6pm'
                    },
                    {
                      method: 'Formulario',
                      contact: 'En la app o web',
                      icon: '📝',
                      desc: 'Accesible con lector'
                    }
                  ].map((method, idx) => (
                    <div key={idx} className="bg-[#25d1ab]/10 rounded-2xl p-6 text-center">
                      <div className="text-4xl mb-3">{method.icon}</div>
                      <h4 className="text-[#25d1ab] font-bold text-lg mb-2">{method.method}</h4>
                      <p className="text-white font-semibold mb-2">{method.contact}</p>
                      <p className="text-white/60 text-sm">{method.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-6">
                  <p className="text-[#25d1ab] font-semibold mb-2">🙏 Agradecemos tu ayuda</p>
                  <p className="text-white/90">
                    Cada reporte nos ayuda a construir un servicio más inclusivo. Investigamos todos los problemas reportados y te mantendremos informado sobre las soluciones.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Alternativas de contacto */}
          <section>
            <div className="bg-gradient-to-br from-[#25d1ab] to-[#25d1ab]/80 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿Necesitas asistencia?
                </h3>
                <p className="text-white/90 mb-6 max-w-xl mx-auto">
                  Nuestro equipo de accesibilidad está disponible para ayudarte con cualquier pregunta o problema que encuentres.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:accesibilidad@ridetaxi.com"
                    className="inline-flex items-center justify-center gap-2 bg-[#010028] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#010028]/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Contactar equipo de accesibilidad
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <Link
                    href="/pasajeros/ayuda"
                    className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300"
                  >
                    Ver centro de ayuda
                  </Link>
                </div>
                <p className="text-white/80 text-sm mt-6">
                  Última actualización de esta declaración: Diciembre 18, 2024
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 7s ease-in-out infinite;
        }

        .high-contrast {
          filter: contrast(1.5);
        }
      `}</style>
    </div>
  );
}

