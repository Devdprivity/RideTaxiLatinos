import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import PriceCalculator from '@/app/components/PriceCalculator';
import MobileRideRequest from '@/app/components/MobileRideRequest';

export const metadata = {
  title: 'Solicitar Viaje - RideTaxi',
  description: 'Solicita tu viaje con RideTaxi. Rápido, seguro y confiable.',
};

export default function SolicitarViaje() {
  return (
    <>
      {/* Vista Mobile - Tipo App */}
      <MobileRideRequest />

      {/* Vista Desktop */}
      <div className="hidden lg:block min-h-screen">
        <Header />

        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-navy to-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Solicita tu viaje en segundos
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  La forma más rápida y segura de llegar a tu destino
                </p>
              </div>
            </div>
          </section>

          {/* Calculador de Precio */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-xl mx-auto">
                <PriceCalculator />
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-navy text-center mb-12">
                ¿Por qué solicitar con RideTaxi?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Respuesta rápida</h3>
                  <p className="text-gray-600">Conductores disponibles en menos de 5 minutos</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">100% seguro</h3>
                  <p className="text-gray-600">Conductores verificados y seguimiento GPS</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-turquoise rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Precios justos</h3>
                  <p className="text-gray-600">Sin sorpresas, conoce el precio antes de viajar</p>
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
