import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Prensa - RideTaxi',
  description: 'Información de prensa y contacto para medios.',
};

export default function Prensa() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-navy to-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Sala de Prensa
              </h1>
              <p className="text-xl text-gray-300">
                Recursos e información para medios de comunicación
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-navy text-center mb-12">
                Últimos comunicados
              </h2>

              <div className="space-y-6 mb-16">
                {[
                  { title: 'RideTaxi alcanza 5 millones de viajes completados', date: '15 Dic 2024' },
                  { title: 'RideTaxi anuncia expansión a 10 nuevas ciudades', date: '10 Dic 2024' },
                  { title: 'Nueva alianza estratégica con empresas de tecnología', date: '5 Dic 2024' },
                  { title: 'RideTaxi implementa nuevas medidas de seguridad', date: '1 Dic 2024' }
                ].map((press, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-navy mb-2">{press.title}</h3>
                        <p className="text-gray-600">{press.date}</p>
                      </div>
                      <button className="mt-4 md:mt-0 px-6 py-2 bg-turquoise text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                        Leer comunicado
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-turquoise bg-opacity-10 rounded-2xl p-8 border-2 border-turquoise">
                  <h3 className="text-2xl font-bold text-navy mb-4">Datos de la empresa</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Fundación:</strong> 2020</p>
                    <p><strong>Sede:</strong> Ciudad de México, México</p>
                    <p><strong>Ciudades:</strong> 30+ en 6 países</p>
                    <p><strong>Conductores:</strong> 50,000+</p>
                    <p><strong>Viajes completados:</strong> 5+ millones</p>
                  </div>
                </div>

                <div className="bg-navy bg-opacity-5 rounded-2xl p-8 border-2 border-navy">
                  <h3 className="text-2xl font-bold text-navy mb-4">Contacto de prensa</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      prensa@ridetaxi.com
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      +52 55 1234 5678
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-navy mb-6 text-center">
                  Kit de prensa
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: 'Logos', desc: 'Logos en diferentes formatos' },
                    { name: 'Fotos', desc: 'Galería de imágenes oficiales' },
                    { name: 'Fact Sheet', desc: 'Datos y estadísticas' }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 text-center">
                      <div className="w-16 h-16 bg-turquoise bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-navy mb-2">{item.name}</h4>
                      <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                      <button className="text-turquoise hover:underline font-semibold">
                        Descargar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-navy mb-6">
                ¿Consultas de medios?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Nuestro equipo de comunicaciones está listo para ayudarte
              </p>
              <button className="px-10 py-4 bg-turquoise text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
                Contactar equipo de prensa
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
