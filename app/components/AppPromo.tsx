export default function AppPromo() {
  // TODO: Reemplaza el número por el WhatsApp real del negocio (con código de país).
  const WHATSAPP_URL =
    'https://wa.me/XXXXXXXXXXX?text=Hola%20RideTaxi%2C%20quiero%20cotizar%20un%20viaje.';

  return (
    <section className="relative overflow-hidden py-20 bg-[#010028] text-white">
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

      {/* Gradient Orbs */}
      <div className="absolute -top-24 right-1/4 w-[520px] h-[520px] bg-[#25d1ab] rounded-full blur-3xl opacity-10 animate-blob" />
      <div className="absolute -bottom-24 left-1/4 w-[520px] h-[520px] bg-[#25d1ab] rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black/25 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Web + WhatsApp preview */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl shadow-black/25 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                  <span className="h-3 w-3 rounded-full bg-white/20" />
                </div>
                <div className="text-xs text-white/60">rideta… / cotizador</div>
                <div className="h-8 w-8 rounded-xl bg-turquoise/15 grid place-items-center">
                  <svg className="h-4 w-4 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-turquoise grid place-items-center">
                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m-6 4h6m-6 4h3M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white">Cotiza en la web</div>
                        <div className="text-xs text-white/70 truncate">Origen → Destino → Precio estimado</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-turquoise text-white p-5 shadow-xl shadow-black/20">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-2xl bg-white/15 grid place-items-center">
                        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h8m-8 4h5m8-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white">WhatsApp directo</div>
                        <div className="text-xs text-white/90 truncate">Atención humana + asignación rápida</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-white/10 grid place-items-center shrink-0">
                      <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l2-5a2 2 0 012-1h10a2 2 0 012 1l2 5" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13h14v5a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1H8v1a1 1 0 01-1 1H6a1 1 0 01-1-1v-5z" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-white">Sin apps, sin terceros</div>
                      <div className="mt-1 text-sm text-white/70 leading-relaxed">
                        Desde tu mismo teléfono: cotizas aquí y terminas de coordinar por WhatsApp. Nosotros gestionamos la asignación del conductor.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-white mb-6">
              <span className="h-2 w-2 rounded-full bg-turquoise" />
              <span className="text-xs font-semibold uppercase tracking-wider">Rápido y práctico</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
              Cotiza en la web. Coordina por WhatsApp.
            </h2>
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
              Somos una línea de taxi manejada por personas. Sin descargar aplicaciones ni depender de terceros:
              entras, cotizas y nos escribes. Nosotros asignamos el conductor y listo.
            </p>

            <div className="space-y-5 mb-10">
              {[
                {
                  title: 'Cotiza tu ruta',
                  desc: 'Selecciona servicio, origen y destino. Ves un estimado al instante.',
                },
                {
                  title: 'Confirma por WhatsApp',
                  desc: 'Escribes desde tu teléfono y coordinamos detalles contigo.',
                },
                {
                  title: 'Asignación y recogida',
                  desc: 'Asignamos conductor y te recoge en el origen para llevarte al destino.',
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-turquoise rounded-2xl grid place-items-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{item.title}</div>
                    <div className="text-white/70 leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cotiza"
                className="inline-flex items-center justify-center gap-2 bg-turquoise text-white px-7 py-4 rounded-2xl font-semibold hover:bg-turquoise/90 transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02]"
              >
                Cotizar ahora
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-7 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                WhatsApp
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 7v14h14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
