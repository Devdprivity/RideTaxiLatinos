import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import MobileTarifas from '@/app/components/MobileTarifas';

export const metadata = {
  title: 'Tarifas - RideTaxi',
  description: 'Conoce nuestras tarifas transparentes y competitivas. Sin cargos ocultos.',
};

export default function Tarifas() {
  const services = [
    {
      id: 'passenger',
      icon: '🚗',
      title: 'Transporte de Pasajeros',
      description: 'Viajes seguros a cualquier destino',
      pricing: [
        { label: 'Tarifa base', value: '$3.00' },
        { label: 'Por milla', value: '$2.00' },
        { label: 'Mínimo', value: '$7.00' },
      ],
      note: 'Calculamos segun la distancia en millas',
    },
    {
      id: 'food',
      icon: '🍔',
      title: 'Delivery de Comida',
      description: 'Tu comida favorita a domicilio',
      pricing: [
        { label: 'Lista para recoger', value: '$11.00' },
        { label: 'Pedir y esperar', value: '$15.00' },
      ],
      note: 'Más de 4 millas: +$2.00 por milla adicional',
    },
  ];

  const additionalInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Tarifas dinámicas',
      description: 'Durante horas pico o alta demanda, las tarifas pueden incrementarse temporalmente. Siempre verás el precio exacto antes de confirmar tu viaje.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Tiempo de espera',
      description: 'Los primeros 3 minutos de espera son gratuitos. Después, se cobra $0.25 por minuto adicional.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      title: 'Cancelaciones',
      description: 'Cancela gratis en los primeros 2 minutos. Después, se aplica un cargo de $3.00 por cancelación.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Métodos de pago',
      description: 'Aceptamos efectivo, tarjetas de crédito/débito, y pagos digitales. Todas las transacciones son seguras.',
    },
  ];

  return (
    <>
      {/* Vista Mobile - Tipo App */}
      <MobileTarifas />

      {/* Vista Desktop */}
      <div className="hidden lg:block min-h-screen bg-white">
        <Header />

        <main>
          {/* Hero Section - Premium Design */}
          <section className="relative bg-navy overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '32px 32px'
              }}></div>
            </div>
            
            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-turquoise rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-turquoise rounded-full mix-blend-multiply filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8 border border-white/20">
                <svg className="w-5 h-5 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Precios garantizados</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                Tarifas
                <span className="block text-turquoise">transparentes</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                Sin sorpresas, sin cargos ocultos. Conoce exactamente cuánto pagarás antes de iniciar tu viaje.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 pt-12 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-turquoise mb-1">0%</div>
                  <div className="text-sm text-white/60">Cargos ocultos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-turquoise mb-1">24/7</div>
                  <div className="text-sm text-white/60">Mismas tarifas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-turquoise mb-1">100%</div>
                  <div className="text-sm text-white/60">Transparencia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* Services Cards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Nuestros Servicios
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Precios transparentes y tarifas fijas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="relative group rounded-3xl p-8 transition-all duration-500 hover:scale-[1.02] bg-white text-navy shadow-xl hover:shadow-2xl border border-gray-100"
                >
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-4 transition-transform duration-300 group-hover:scale-110 inline-block">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-navy">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>

                  {/* Pricing Details */}
                  <div className="space-y-4 mb-6">
                    {service.pricing.map((item, i) => (
                      <div key={i} className="flex justify-between items-center pb-4 border-b border-gray-100">
                        <span className="text-gray-500">{item.label}</span>
                        <span className="text-2xl font-bold text-turquoise">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <div className="mb-6">
                    <div className="bg-turquoise/10 rounded-lg px-4 py-3 border border-turquoise/20">
                      <p className="text-turquoise text-sm flex items-center gap-2">
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        {service.note}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/pasajeros/solicitar-viaje"
                    className="block w-full py-4 bg-navy text-white rounded-2xl font-semibold text-center transition-all duration-300 hover:bg-navy/90 hover:shadow-lg hover:shadow-navy/30"
                  >
                    Calcular tarifa
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Information - Card Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                  Todo lo que necesitas saber
                </h2>
                <p className="text-gray-600 text-lg">
                  Información importante sobre nuestras tarifas y políticas
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {additionalInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-turquoise/30"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-turquoise to-turquoise/70 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-turquoise/20">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-turquoise transition-colors">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Design */}
        <section className="relative py-24 bg-navy overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-turquoise rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-turquoise/20 text-white px-4 py-2 rounded-full mb-8">
                <svg className="w-5 h-5 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium">Calculadora de tarifas</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Quieres estimar
                <span className="text-turquoise"> tu tarifa</span>?
              </h2>
              <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto">
                Usa nuestra calculadora inteligente o solicita un viaje para ver el precio exacto al instante
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/pasajeros/solicitar-viaje"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-turquoise text-white rounded-full text-lg font-semibold hover:bg-turquoise/90 transition-all duration-300 shadow-xl shadow-turquoise/30 hover:shadow-2xl hover:shadow-turquoise/40 hover:scale-105"
                >
                  <span>Calcular tarifa</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/pasajeros/solicitar-viaje"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Solicitar viaje
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-white/10">
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Precio garantizado</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Sin cargos ocultos</span>
                </div>
                <div className="flex items-center gap-2 text-white/60">
                  <svg className="w-5 h-5 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm">4.9 estrellas</span>
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
