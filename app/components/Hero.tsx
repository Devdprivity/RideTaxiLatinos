import PriceCalculator from './PriceCalculator';
import Image from 'next/image';

export default function Hero() {
  const SHOW_APP_DOWNLOAD = false;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-navy via-navy to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-turquoise rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-turquoise rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-turquoise rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Cotizador - Lado Izquierdo */}
          <div id="cotiza" className="order-2 lg:order-1 scroll-mt-24">
            <PriceCalculator />
          </div>

          {/* Contenido Principal - Lado Derecho */}
          <div className="order-1 lg:order-2">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
              {/* Texto */}
              <div className="flex-1 text-center lg:text-left">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-turquoise/20 text-white px-4 py-2 rounded-full mb-8">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium">Servicio confiable para la comunidad latina</span>
                </div>

                {/* Main heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                  Tu ciudad al alcance
                  <span className="block text-turquoise mt-2">de una Solicitud</span>
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/90 mb-12 max-w-xl mx-auto lg:mx-0">
                  Viajes seguros, conductores verificados y precios transparentes.
                  La mejor forma de moverte por la ciudad.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                  <button className="group px-8 py-4 bg-turquoise text-white rounded-[25px] text-sm font-semibold hover:bg-turquoise/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                    <span>Solicitar ahora</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                  <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-[25px] text-sm font-semibold hover:bg-white/20 transition-all border border-white/20">
                    Quieres ser conductor?
                  </button>
                </div>

                {/* App Download */}
                {SHOW_APP_DOWNLOAD && (
                  <div className="flex flex-col items-center lg:items-start space-y-4">
                    <p className="text-gray-400 text-sm">Descarga nuestra app</p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                      <button className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs">Descárgalo en</div>
                          <div className="text-sm font-semibold">App Store</div>
                        </div>
                      </button>
                      <button className="flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                        </svg>
                        <div className="text-left">
                          <div className="text-xs">Consíguelo en</div>
                          <div className="text-sm font-semibold">Google Play</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Personaje (lado del texto) */}
              <div className="w-full max-w-[420px] lg:max-w-[460px]">
                <div className="relative mx-auto lg:mx-0 h-[360px] sm:h-[440px] lg:h-[560px]">
                  <Image
                    src="/img/avatarSectio/Botonweb.png"
                    alt="RideTaxi"
                    fill
                    priority
                    sizes="(min-width: 1024px) 460px, (min-width: 640px) 420px, 90vw"
                    className="relative z-10 object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
