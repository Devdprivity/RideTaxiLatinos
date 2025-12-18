'use client';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useEffect, useState } from 'react';

export default function Requisitos() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

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

  const requirements = {
    conductor: [
      { id: 'c1', text: 'Tener al menos 21 años de edad', icon: '🎂' },
      { id: 'c2', text: 'Licencia de conducir vigente (mínimo 2 años de antigüedad)', icon: '📋' },
      { id: 'c3', text: 'Historial de manejo limpio (sin infracciones graves)', icon: '✅' },
      { id: 'c4', text: 'Antecedentes penales limpios', icon: '🛡️' },
      { id: 'c5', text: 'Residencia legal en el país', icon: '🏠' },
      { id: 'c6', text: 'Número de seguro social o identificación fiscal', icon: '🔢' }
    ],
    vehiculo: [
      { id: 'v1', text: 'Año del vehículo 2015 o más reciente', icon: '📅' },
      { id: 'v2', text: '4 puertas y mínimo 5 asientos', icon: '🚗' },
      { id: 'v3', text: 'Buen estado mecánico y estético', icon: '⚙️' },
      { id: 'v4', text: 'Seguro vigente a todo riesgo', icon: '🛡️' },
      { id: 'v5', text: 'Placa de circulación vigente', icon: '🔖' },
      { id: 'v6', text: 'Verificación vehicular al día', icon: '✔️' },
      { id: 'v7', text: 'Aire acondicionado funcional', icon: '❄️' }
    ],
    documentos: [
      { id: 'd1', text: 'Identificación oficial vigente (INE/DNI/Cédula)', icon: '🪪' },
      { id: 'd2', text: 'Licencia de conducir vigente', icon: '🚦' },
      { id: 'd3', text: 'Tarjeta de circulación del vehículo', icon: '📄' },
      { id: 'd4', text: 'Póliza de seguro vigente', icon: '📋' },
      { id: 'd5', text: 'Comprobante de domicilio reciente', icon: '🏡' },
      { id: 'd6', text: 'Fotografía reciente', icon: '📸' },
      { id: 'd7', text: 'Datos bancarios para depósitos', icon: '🏦' }
    ]
  };

  const additionalInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Verificación de antecedentes',
      description: 'Todos los conductores pasan por una exhaustiva verificación de antecedentes penales y de manejo. Este proceso toma entre 1-3 días hábiles y es requisito indispensable para activar tu cuenta.',
      time: '1-3 días'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Inspección del vehículo',
      description: 'Tu vehículo debe pasar una inspección inicial que verifica el estado mecánico, estético y de seguridad. Posteriormente, se requieren inspecciones anuales para mantener tu cuenta activa.',
      time: 'Inicial + Anual'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Capacitación obligatoria',
      description: 'Antes de empezar a conducir, deberás completar un curso online gratuito sobre seguridad, servicio al cliente y uso de la app. El curso toma aproximadamente 2 horas y puedes hacerlo a tu ritmo.',
      time: '~2 horas'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Requisitos pueden variar',
      description: 'Los requisitos específicos pueden variar ligeramente según la ciudad o región. Durante el proceso de registro, se te informará de cualquier requisito adicional que aplique en tu área.',
      time: 'Variable'
    }
  ];

  const toggleCheck = (id: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(id)) {
      newChecked.delete(id);
    } else {
      newChecked.add(id);
    }
    setCheckedItems(newChecked);
  };

  const getProgress = () => {
    const total = requirements.conductor.length + requirements.vehiculo.length + requirements.documentos.length;
    return Math.round((checkedItems.size / total) * 100);
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

        @keyframes checkmark {
          0% {
            transform: scale(0) rotate(45deg);
          }
          50% {
            transform: scale(1.2) rotate(45deg);
          }
          100% {
            transform: scale(1) rotate(45deg);
          }
        }

        @keyframes progress-fill {
          from {
            width: 0%;
          }
          to {
            width: var(--progress-width);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-checkmark {
          animation: checkmark 0.3s ease-out forwards;
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
                {/* Icono principal */}
                <div className="inline-flex mb-8">
                  <div className="relative">
                    <div className="w-20 h-20 bg-[#25d1ab] rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-20 h-20 bg-[#25d1ab] rounded-full blur-xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-gray-100 to-[#25d1ab] bg-clip-text text-transparent leading-tight">
                  Requisitos para conductores
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-10 font-light leading-relaxed">
                  Estos son los requisitos mínimos para unirte a RideTaxi como conductor
                </p>

                {/* Progress bar */}
                {checkedItems.size > 0 && (
                  <div className="max-w-md mx-auto glass-effect rounded-full p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-white">Tu progreso</span>
                      <span className="text-sm font-bold text-[#25d1ab]">{getProgress()}%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-[#25d1ab] rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${getProgress()}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Requirements Sections */}
          <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto space-y-12">
                {/* Conductor Requirements */}
                <div 
                  className="observe-me group"
                  onMouseEnter={() => setActiveSection(0)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${activeSection === 0 ? 'border-[#25d1ab]' : 'border-gray-100'}`}>
                    {/* Header */}
                    <div className="p-8 md:p-12 bg-gradient-to-r from-[#25d1ab] to-[#25d1ab]/80 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{ 
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                      </div>

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-black text-white">Requisitos del conductor</h2>
                            <p className="text-white/80 text-sm mt-1">{requirements.conductor.length} requisitos esenciales</p>
                          </div>
                        </div>
                        <div className="hidden md:block text-6xl font-black text-white/20">01</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {requirements.conductor.map((req, index) => (
                          <div 
                            key={req.id}
                            onClick={() => toggleCheck(req.id)}
                            className={`group/item flex items-start bg-gray-50 hover:bg-[#25d1ab]/5 rounded-2xl p-5 cursor-pointer transition-all duration-300 border-2 ${checkedItems.has(req.id) ? 'border-[#25d1ab] bg-[#25d1ab]/5' : 'border-transparent'}`}
                          >
                            <div className="relative shrink-0 mr-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${checkedItems.has(req.id) ? 'bg-[#25d1ab]' : 'bg-white border-2 border-gray-200 group-hover/item:border-[#25d1ab]'}`}>
                                {checkedItems.has(req.id) ? (
                                  <svg className="w-6 h-6 text-white animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  <span className="text-xl">{req.icon}</span>
                                )}
                              </div>
                            </div>
                            <div className="flex-1 pt-1">
                              <span className={`text-base font-medium transition-colors ${checkedItems.has(req.id) ? 'text-[#010028]' : 'text-gray-700 group-hover/item:text-[#010028]'}`}>
                                {req.text}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vehicle Requirements */}
                <div 
                  className="observe-me group"
                  onMouseEnter={() => setActiveSection(1)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${activeSection === 1 ? 'border-[#25d1ab]' : 'border-gray-100'}`}>
                    {/* Header */}
                    <div className="p-8 md:p-12 bg-gradient-to-r from-[#25d1ab] to-[#25d1ab]/80 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{ 
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                      </div>

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-black text-white">Requisitos del vehículo</h2>
                            <p className="text-white/80 text-sm mt-1">{requirements.vehiculo.length} estándares de calidad</p>
                          </div>
                        </div>
                        <div className="hidden md:block text-6xl font-black text-white/20">02</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {requirements.vehiculo.map((req, index) => (
                          <div 
                            key={req.id}
                            onClick={() => toggleCheck(req.id)}
                            className={`group/item flex items-start bg-gray-50 hover:bg-[#25d1ab]/5 rounded-2xl p-5 cursor-pointer transition-all duration-300 border-2 ${checkedItems.has(req.id) ? 'border-[#25d1ab] bg-[#25d1ab]/5' : 'border-transparent'}`}
                          >
                            <div className="relative shrink-0 mr-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${checkedItems.has(req.id) ? 'bg-[#25d1ab]' : 'bg-white border-2 border-gray-200 group-hover/item:border-[#25d1ab]'}`}>
                                {checkedItems.has(req.id) ? (
                                  <svg className="w-6 h-6 text-white animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  <span className="text-xl">{req.icon}</span>
                                )}
                              </div>
                            </div>
                            <div className="flex-1 pt-1">
                              <span className={`text-base font-medium transition-colors ${checkedItems.has(req.id) ? 'text-[#010028]' : 'text-gray-700 group-hover/item:text-[#010028]'}`}>
                                {req.text}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Documents Requirements */}
                <div 
                  className="observe-me group"
                  onMouseEnter={() => setActiveSection(2)}
                  onMouseLeave={() => setActiveSection(null)}
                >
                  <div className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 ${activeSection === 2 ? 'border-[#25d1ab]' : 'border-gray-100'}`}>
                    {/* Header */}
                    <div className="p-8 md:p-12 bg-gradient-to-r from-[#25d1ab] to-[#25d1ab]/80 relative overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{ 
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
                        }}></div>
                      </div>

                      <div className="relative flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <h2 className="text-3xl md:text-4xl font-black text-white">Documentación requerida</h2>
                            <p className="text-white/80 text-sm mt-1">{requirements.documentos.length} documentos necesarios</p>
                          </div>
                        </div>
                        <div className="hidden md:block text-6xl font-black text-white/20">03</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {requirements.documentos.map((doc, index) => (
                          <div 
                            key={doc.id}
                            onClick={() => toggleCheck(doc.id)}
                            className={`group/item flex items-start bg-gray-50 hover:bg-[#25d1ab]/5 rounded-2xl p-5 cursor-pointer transition-all duration-300 border-2 ${checkedItems.has(doc.id) ? 'border-[#25d1ab] bg-[#25d1ab]/5' : 'border-transparent'}`}
                          >
                            <div className="relative shrink-0 mr-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${checkedItems.has(doc.id) ? 'bg-[#25d1ab]' : 'bg-white border-2 border-gray-200 group-hover/item:border-[#25d1ab]'}`}>
                                {checkedItems.has(doc.id) ? (
                                  <svg className="w-6 h-6 text-white animate-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : (
                                  <span className="text-xl">{doc.icon}</span>
                                )}
                              </div>
                            </div>
                            <div className="flex-1 pt-1">
                              <span className={`text-base font-medium transition-colors ${checkedItems.has(doc.id) ? 'text-[#010028]' : 'text-gray-700 group-hover/item:text-[#010028]'}`}>
                                {doc.text}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Info */}
          <section className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16 observe-me">
                  <h2 className="text-4xl md:text-5xl font-black text-[#010028] mb-4">
                    Información <span className="text-[#25d1ab]">adicional</span>
                  </h2>
                  <p className="text-xl text-gray-600">
                    Lo que necesitas saber sobre el proceso
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {additionalInfo.map((info, index) => (
                    <div
                      key={index}
                      className="observe-me group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="h-full bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-gray-100 hover:border-[#25d1ab]/30 p-8 transform hover:-translate-y-2">
                        <div className="flex items-start space-x-4 mb-4">
                          <div className="shrink-0 w-14 h-14 bg-[#25d1ab]/10 rounded-2xl flex items-center justify-center text-[#25d1ab] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            {info.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-[#010028] mb-2 group-hover:text-[#25d1ab] transition-colors">
                              {info.title}
                            </h3>
                            <div className="inline-flex items-center space-x-2 bg-[#25d1ab]/10 rounded-full px-3 py-1">
                              <svg className="w-4 h-4 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm font-semibold text-[#25d1ab]">{info.time}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed pl-[72px]">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32 bg-gradient-to-br from-[#010028] via-[#010033] to-[#25d1ab] text-white relative overflow-hidden">
            {/* Patrón de fondo */}
            <div className="absolute inset-0 opacity-10">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-24 h-24 bg-white rounded-3xl blur-2xl opacity-50 animate-pulse"></div>
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
                  ¿Cumples con los requisitos?
                </h2>
                
                <p className="text-xl md:text-2xl mb-10 text-white font-light leading-relaxed max-w-2xl mx-auto">
                  Únete a miles de conductores que ya generan ingresos con RideTaxi
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                  <button className="group px-10 py-5 bg-white text-[#010028] rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center justify-center space-x-2">
                    <span>Registrarme ahora</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button className="px-10 py-5 bg-white/20 backdrop-blur-sm border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white/30 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105">
                    Contactar soporte
                  </button>
                </div>

                {/* Stats */}
                <div className="pt-8 border-t border-white/30">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">100%</div>
                      <div className="text-sm text-white/80">Verificado</div>
                    </div>
                    <div className="text-center border-l border-r border-white/30">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">24/7</div>
                      <div className="text-sm text-white/80">Soporte</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-black text-white mb-2">10min</div>
                      <div className="text-sm text-white/80">Registro</div>
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
