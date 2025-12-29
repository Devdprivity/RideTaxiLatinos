'use client';

import { useState, useEffect } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function TerminosServicio() {
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
    { id: 'aceptacion', title: 'Aceptación de términos' },
    { id: 'servicios', title: 'Descripción de servicios' },
    { id: 'registro', title: 'Registro y cuenta' },
    { id: 'uso', title: 'Uso del servicio' },
    { id: 'tarifas', title: 'Tarifas y pagos' },
    { id: 'responsabilidad', title: 'Responsabilidad' },
    { id: 'propiedad', title: 'Propiedad intelectual' },
    { id: 'suspension', title: 'Suspensión y terminación' },
    { id: 'modificaciones', title: 'Modificaciones' },
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
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-white font-semibold text-sm">Última actualización: Diciembre 2024</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Términos de Servicio
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Lee cuidadosamente estos términos antes de usar Ride Latinos Service LLC. Al acceder a nuestros servicios, aceptas cumplir con estos términos y condiciones.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 max-w-2xl mx-auto">
              {[
                { value: '10', label: 'Secciones' },
                { value: '5 min', label: 'Lectura' },
                { value: '100%', label: 'Transparencia' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform transition-all duration-500 hover:scale-105"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80 mt-1">{stat.label}</div>
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
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
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
                {/* Section 1 */}
                <section data-section="aceptacion" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Aceptación de términos</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Al acceder y utilizar la plataforma Ride Latinos Service LLC (&quot;el Servicio&quot;), ya sea como pasajero o conductor, usted acepta estar legalmente vinculado por estos Términos de Servicio (&quot;Términos&quot;). Si no está de acuerdo con estos términos, no debe utilizar nuestro servicio.
                    </p>
                    <p>
                      Estos términos constituyen un acuerdo legal entre usted y Ride Latinos Service LLC. Al registrarse, confirma que ha leído, comprendido y aceptado estos términos en su totalidad.
                    </p>
                    <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-4 mt-6">
                      <p className="text-[#25d1ab] font-semibold">📌 Importante:</p>
                      <p className="text-white/90 mt-2">
                        El uso continuado del servicio implica la aceptación de cualquier modificación a estos términos.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 2 */}
                <section data-section="servicios" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Descripción de servicios</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Ride Latinos Service LLC es una plataforma tecnológica que conecta a pasajeros con conductores independientes para facilitar el transporte privado. No somos una empresa de transporte tradicional, sino un intermediario tecnológico.
                    </p>
                    <p className="font-semibold text-white">Nuestros servicios incluyen:</p>
                    <ul className="space-y-3 ml-4">
                      {[
                        'Conexión entre pasajeros y conductores verificados',
                        'Sistema de cotización y cálculo de tarifas transparente',
                        'Procesamiento de pagos seguro y confiable',
                        'Soporte en español para la comunidad latina',
                        'Sistema de calificaciones y retroalimentación',
                        'Seguimiento de viajes en tiempo real'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-[#25d1ab] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Section 3 */}
                <section data-section="registro" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Registro y cuenta</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Para utilizar Ride Latinos Service LLC, debe crear una cuenta proporcionando información precisa y completa. Usted es responsable de mantener la confidencialidad de su cuenta y contraseña.
                    </p>
                    <p className="font-semibold text-white">Requisitos de registro:</p>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      {[
                        { icon: '👤', text: 'Ser mayor de 18 años' },
                        { icon: '📱', text: 'Número de teléfono válido' },
                        { icon: '✉️', text: 'Dirección de correo electrónico' },
                        { icon: '💳', text: 'Método de pago válido' }
                      ].map((req, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                          <span className="text-2xl">{req.icon}</span>
                          <span className="text-white">{req.text}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6">
                      Usted se compromete a notificarnos inmediatamente sobre cualquier uso no autorizado de su cuenta. Ride Latinos Service LLC no será responsable de pérdidas derivadas del uso no autorizado de su cuenta.
                    </p>
                  </div>
                </section>

                {/* Section 4 */}
                <section data-section="uso" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Uso del servicio</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p className="font-semibold text-white">Usted se compromete a:</p>
                    <ul className="space-y-3 ml-4">
                      {[
                        'Utilizar el servicio solo para fines legales',
                        'Proporcionar información veraz y actualizada',
                        'Tratar con respeto a conductores y otros usuarios',
                        'No compartir su cuenta con terceros',
                        'No intentar manipular el sistema de tarifas o calificaciones',
                        'Cumplir con todas las leyes y regulaciones aplicables'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-[#25d1ab] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[#25d1ab]/10 border-l-4 border-[#25d1ab] rounded-r-xl p-4 mt-6">
                      <p className="text-[#25d1ab] font-semibold">⚠️ Prohibido:</p>
                      <p className="text-white/90 mt-2">
                        Está estrictamente prohibido usar el servicio para actividades ilegales, acoso, fraude o cualquier comportamiento que viole estos términos.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 5 */}
                <section data-section="tarifas" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">5</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Tarifas y pagos</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Las tarifas se calculan en base a distancia, tiempo y demanda. Siempre verá el precio estimado antes de confirmar su viaje. Al aceptar un viaje, autoriza el cargo a su método de pago.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4 mt-6">
                      {[
                        { title: 'Tarifa base', desc: 'Cargo inicial por servicio' },
                        { title: 'Por distancia', desc: 'Cargo por kilómetro' },
                        { title: 'Por tiempo', desc: 'Cargo por minuto' }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#25d1ab]/10 rounded-xl p-4 text-center">
                          <h4 className="text-[#25d1ab] font-bold mb-2">{item.title}</h4>
                          <p className="text-sm text-white/70">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6">
                      Los precios pueden variar según condiciones de tráfico, clima, demanda y eventos especiales. Nos reservamos el derecho de modificar las tarifas, notificando con anticipación cuando sea posible.
                    </p>
                    <p>
                      Todas las transacciones se procesan de forma segura. Ride Latinos Service LLC no almacena información completa de su tarjeta de crédito.
                    </p>
                  </div>
                </section>

                {/* Section 6 */}
                <section data-section="responsabilidad" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">6</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Limitación de responsabilidad</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Ride Latinos Service LLC actúa como intermediario tecnológico entre pasajeros y conductores independientes. Los conductores son contratistas independientes, no empleados de Ride Latinos Service LLC.
                    </p>
                    <p className="font-semibold text-white">Nuestra responsabilidad se limita a:</p>
                    <ul className="space-y-3 ml-4">
                      {[
                        'Proporcionar una plataforma tecnológica funcional',
                        'Verificar la información básica de conductores',
                        'Procesar pagos de forma segura',
                        'Ofrecer soporte al cliente'
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
                      <p className="text-[#25d1ab] font-semibold">⚖️ Importante:</p>
                      <p className="text-white/90 mt-2">
                        Ride Latinos Service LLC no es responsable de daños, lesiones o pérdidas que ocurran durante el viaje. Los conductores mantienen su seguro y responsabilidad individual.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Section 7 */}
                <section data-section="propiedad" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">7</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Propiedad intelectual</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Todos los derechos de propiedad intelectual relacionados con la plataforma Ride Latinos Service LLC, incluyendo pero no limitado a logos, marcas, diseño, código fuente y contenido, son propiedad exclusiva de Ride Latinos Service LLC.
                    </p>
                    <p>
                      Usted recibe una licencia limitada, no exclusiva e intransferible para usar la plataforma únicamente para fines personales. No puede copiar, modificar, distribuir o crear trabajos derivados de nuestro contenido sin autorización expresa.
                    </p>
                  </div>
                </section>

                {/* Section 8 */}
                <section data-section="suspension" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">8</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Suspensión y terminación</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Nos reservamos el derecho de suspender o terminar su cuenta en cualquier momento si:
                    </p>
                    <ul className="space-y-3 ml-4">
                      {[
                        'Viola estos términos de servicio',
                        'Proporciona información falsa o fraudulenta',
                        'Participa en actividades ilegales',
                        'Presenta un comportamiento abusivo o peligroso',
                        'No paga por los servicios utilizados',
                        'Recibe múltiples calificaciones negativas'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 text-[#25d1ab] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6">
                      Usted puede cancelar su cuenta en cualquier momento desde la configuración de su perfil. La terminación no afecta obligaciones de pago pendientes.
                    </p>
                  </div>
                </section>

                {/* Section 9 */}
                <section data-section="modificaciones" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">9</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Modificaciones a los términos</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Ride Latinos Service LLC se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigor inmediatamente después de su publicación en la plataforma.
                    </p>
                    <p>
                      Le notificaremos sobre cambios significativos a través de correo electrónico o notificaciones en la aplicación. El uso continuado del servicio después de las modificaciones constituye su aceptación de los nuevos términos.
                    </p>
                    <p>
                      Es su responsabilidad revisar periódicamente estos términos. Le recomendamos verificar esta página regularmente para mantenerse informado.
                    </p>
                  </div>
                </section>

                {/* Section 10 */}
                <section data-section="contacto" className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#25d1ab]/20 transform transition-all duration-500 hover:border-[#25d1ab]/40">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#25d1ab] flex items-center justify-center shrink-0">
                      <span className="text-white font-bold text-xl">10</span>
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Información de contacto</h2>
                      <div className="h-1 w-20 bg-[#25d1ab] rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Si tiene preguntas sobre estos Términos de Servicio, puede contactarnos a través de:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      {[
                        { icon: '✉️', label: 'Email', value: 'legal@ridetaxi.com' },
                        { icon: '📱', label: 'Teléfono', value: '+1 (555) 123-4567' },
                        { icon: '💬', label: 'WhatsApp', value: '+1 (555) 123-4567' },
                        { icon: '📍', label: 'Dirección', value: 'Miami, FL 33101' }
                      ].map((contact, idx) => (
                        <div key={idx} className="flex items-center gap-3 bg-[#25d1ab]/10 p-4 rounded-xl">
                          <span className="text-2xl">{contact.icon}</span>
                          <div>
                            <p className="text-[#25d1ab] font-semibold text-sm">{contact.label}</p>
                            <p className="text-white">{contact.value}</p>
                          </div>
                        </div>
                      ))}
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
                    ¿Listo para comenzar?
                  </h3>
                  <p className="text-white/90 mb-6 max-w-xl mx-auto">
                    Acepta nuestros términos y únete a miles de usuarios que confían en Ride Latinos Service LLC para sus viajes diarios.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-[#010028] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#010028]/90 transition-all duration-300 transform hover:scale-105"
                  >
                    Ir a inicio
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

