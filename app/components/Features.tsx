export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Seguridad primero",
      description: "Conductores verificados con antecedentes limpios. Comparte tu viaje en tiempo real con familiares y amigos.",
      highlights: ["Verificación de identidad", "Seguimiento GPS en vivo", "Soporte 24/7"]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Precios transparentes",
      description: "Sin sorpresas. Conoce el costo de tu viaje antes de solicitarlo. Precios justos y competitivos.",
      highlights: ["Sin tarifas ocultas", "Estimación precisa", "Múltiples métodos de pago"]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Llegamos rápido",
      description: "Conductores cerca de ti en todo momento. Tiempo de espera promedio de menos de 5 minutos.",
      highlights: ["Respuesta inmediata", "Cobertura amplia", "Disponibilidad 24/7"]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      title: "Calidad garantizada",
      description: "Vehículos en excelente estado. Conductores profesionales con altas calificaciones de usuarios.",
      highlights: ["Autos limpios", "Conductores amables", "Sistema de calificación"]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "Habla tu idioma",
      description: "Servicio en español e inglés. Conductores que entienden tu cultura y necesidades.",
      highlights: ["Atención bilingüe", "Comunidad latina", "Servicio personalizado"]
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: "Gana con nosotros",
      description: "Conviértete en conductor y obtén ingresos flexibles. Sin horarios fijos, tú decides cuándo trabajar.",
      highlights: ["Ingresos inmediatos", "Horarios flexibles", "Bonos y promociones"]
    }
  ];

  return (
    <section
      id="servicios"
      className="relative py-20 bg-linear-to-b from-white via-white to-gray-50 overflow-hidden"
    >
      {/* Subtle background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-turquoise/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-navy/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="relative text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-turquoise/10 px-4 py-2 text-turquoise text-sm font-semibold">
            <span className="h-2 w-2 rounded-full bg-turquoise" />
            Beneficios de RideTaxi
          </div>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-navy tracking-tight">
            ¿Por qué elegir RideTaxi?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 leading-relaxed">
            Una experiencia moderna, segura y transparente. Diseñada para moverte rápido y con tranquilidad.
          </p>
        </div>

        {/* Features Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Accent */}
              <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-linear-to-r from-turquoise/0 via-turquoise/10 to-turquoise/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center text-turquoise bg-turquoise/10 mb-6 group-hover:bg-turquoise group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-navy mb-3 tracking-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2">
                {feature.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg
                      className="w-5 h-5 text-turquoise mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="/pasajeros/solicitar-viaje"
              className="px-8 py-4 bg-turquoise text-white rounded-full text-lg font-semibold hover:bg-turquoise/90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-turquoise/50"
            >
              Empezar ahora
            </a>
            <a
              href="/conductores/registro"
              className="px-8 py-4 bg-navy text-white rounded-full text-lg font-semibold hover:bg-navy/90 transition-all shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-navy/40"
            >
              Quiero ser conductor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
