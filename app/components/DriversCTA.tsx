import Link from 'next/link';

export default function DriversCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-turquoise via-turquoise to-navy rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Content */}
            <div className="p-12 lg:p-16 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Conduce y gana con RideTaxi
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Únete a más de 50,000 conductores que ya generan ingresos con horarios flexibles. Tú decides cuándo y dónde trabajar.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Gana $15-25 por hora en promedio</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Retiros semanales de tus ganancias</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Soporte 24/7 en español</span>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg">Seguro incluido mientras conduces</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/conductores/registro"
                  className="px-8 py-4 bg-white text-turquoise rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg text-center"
                >
                  Registrarme como conductor
                </Link>
                <Link
                  href="/conductores/requisitos"
                  className="px-8 py-4 bg-white bg-opacity-20 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-opacity-30 transition-all text-center"
                >
                  Ver requisitos
                </Link>
              </div>
            </div>

            {/* Right side - Stats/Visual */}
            <div className="bg-navy bg-opacity-20 p-12 lg:p-16 flex flex-col justify-center">
              <div className="space-y-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                  <div className="text-5xl font-bold text-white mb-2">$600+</div>
                  <div className="text-white opacity-90">por semana (tiempo completo)</div>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <div className="text-white opacity-90">de tus propinas</div>
                </div>

                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20">
                  <div className="text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white opacity-90">Soporte disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
