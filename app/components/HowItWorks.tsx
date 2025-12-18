export default function HowItWorks() {
  // TODO: Reemplaza el número por el WhatsApp real del negocio (con código de país).
  const WHATSAPP_URL =
    'https://wa.me/XXXXXXXXXXX?text=Hola%20RideTaxi%2C%20quiero%20cotizar%20un%20viaje.';

  const steps = [
    {
      number: "01",
      title: "Cotiza en la web",
      description: "Entra a nuestra web, selecciona el servicio y cotiza tu ruta en segundos (sin descargar apps).",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m-6 4h6m-6 4h3M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Escríbenos por WhatsApp",
      description: "Envía el origen y destino por WhatsApp. Confirmamos detalles y coordinamos el servicio contigo.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h8m-8 4h5m8-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Asignamos tu conductor",
      description: "Te asignamos un conductor disponible y te enviamos la información necesaria para el retiro.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 21a6 6 0 0112 0" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l1.5 1.5L15 9" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Te recogemos y te llevamos",
      description: "El conductor llega al punto de origen y te lleva al destino. Servicio cómodo y seguro.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 13l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13h14v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-5z" />
        </svg>
      )
    }
  ];

  return (
    <section id="como-funciona" className="relative overflow-hidden pt-8 md:pt-10 pb-20 bg-[#010028]">
      {/* Background Pattern (match Stats) */}
      <div className="absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #25d1ab 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Orbs (match Stats) */}
      <div className="absolute -top-24 left-1/4 w-[520px] h-[520px] bg-[#25d1ab] rounded-full blur-3xl opacity-10 animate-blob" />
      <div className="absolute -bottom-24 right-1/4 w-[520px] h-[520px] bg-[#25d1ab] rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/25 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            No necesitas descargar apps. Entra a la web, cotiza tu servicio y coordina por WhatsApp:
            nosotros asignamos el conductor, te recoge en el origen y te lleva al destino.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-linear-to-r from-turquoise to-transparent"></div>
              )}

              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-turquoise/40 transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
                {/* Step number */}
                <div className="text-6xl font-bold text-turquoise opacity-30 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-turquoise/20 rounded-2xl flex items-center justify-center text-turquoise mb-6">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="bg-turquoise/10 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-turquoise rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{'<5 min'}</div>
                <div className="text-sm text-white/80">Tiempo de respuesta promedio</div>
              </div>
            </div>
          </div>

          <div className="bg-turquoise/10 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-turquoise rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">WhatsApp</div>
                <div className="text-sm text-white/80">Atención directa y rápida</div>
              </div>
            </div>
          </div>

          <div className="bg-turquoise/10 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-turquoise rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">Seguro</div>
                <div className="text-sm text-white/80">Conductores verificados</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#cotiza"
              className="px-10 py-4 bg-turquoise text-white rounded-full text-lg font-semibold hover:bg-turquoise/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Cotiza en la web
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-4 bg-white/10 text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
