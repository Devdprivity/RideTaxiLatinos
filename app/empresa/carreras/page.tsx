import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Carreras - RideTaxi',
  description: 'Únete al equipo de RideTaxi y ayúdanos a transformar el transporte.',
};

export default function Carreras() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-navy to-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Únete a nuestro equipo
              </h1>
              <p className="text-xl text-gray-300">
                Ayúdanos a transformar el transporte en Latinoamérica
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-navy text-center mb-12">
                Por qué trabajar en RideTaxi
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  { title: 'Impacto real', desc: 'Tu trabajo mejora la vida de millones de personas', icon: '🌟' },
                  { title: 'Crecimiento', desc: 'Oportunidades de desarrollo profesional', icon: '📈' },
                  { title: 'Innovación', desc: 'Trabaja con tecnología de punta', icon: '💡' },
                  { title: 'Equipo diverso', desc: 'Colabora con talento de toda Latinoamérica', icon: '🌎' },
                  { title: 'Flexibilidad', desc: 'Opciones de trabajo remoto e híbrido', icon: '🏠' },
                  { title: 'Beneficios', desc: 'Paquete competitivo de compensación', icon: '✨' }
                ].map((benefit, index) => (
                  <div key={index} className="text-center p-6">
                    <div className="text-5xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-navy text-center mb-12">
                Posiciones abiertas
              </h2>

              <div className="space-y-6">
                {[
                  { title: 'Ingeniero de Software Senior', dept: 'Ingeniería', location: 'Remote', type: 'Tiempo completo' },
                  { title: 'Product Manager', dept: 'Producto', location: 'Ciudad de México', type: 'Tiempo completo' },
                  { title: 'Diseñador UX/UI', dept: 'Diseño', location: 'Remote', type: 'Tiempo completo' },
                  { title: 'Gerente de Marketing', dept: 'Marketing', location: 'Bogotá', type: 'Tiempo completo' },
                  { title: 'Analista de Datos', dept: 'Data', location: 'Buenos Aires', type: 'Tiempo completo' },
                  { title: 'Especialista en Soporte', dept: 'Operaciones', location: 'Remote', type: 'Medio tiempo' }
                ].map((job, index) => (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold text-navy mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            {job.dept}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <button className="px-8 py-3 bg-turquoise text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                        Aplicar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-navy mb-6">
                ¿No ves la posición ideal?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Siempre estamos buscando talento excepcional. Envíanos tu CV
              </p>
              <button className="px-10 py-4 bg-turquoise text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
                Aplicación espontánea
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
