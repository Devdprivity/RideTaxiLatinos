import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Blog - RideTaxi',
  description: 'Noticias, consejos y actualizaciones de RideTaxi.',
};

export default function Blog() {
  const articles = [
    {
      title: '5 consejos para conductores: Maximiza tus ganancias',
      category: 'Conductores',
      date: '15 Dic 2024',
      image: '📊',
      excerpt: 'Descubre estrategias probadas para aumentar tus ingresos como conductor de RideTaxi.'
    },
    {
      title: 'Nuevas medidas de seguridad implementadas',
      category: 'Seguridad',
      date: '10 Dic 2024',
      image: '🛡️',
      excerpt: 'Conoce las últimas actualizaciones en seguridad para pasajeros y conductores.'
    },
    {
      title: 'RideTaxi llega a 5 nuevas ciudades',
      category: 'Expansión',
      date: '5 Dic 2024',
      image: '🌎',
      excerpt: 'Expandimos nuestra cobertura a nuevas ciudades de Latinoamérica.'
    },
    {
      title: 'Guía completa de tarifas 2025',
      category: 'Pasajeros',
      date: '1 Dic 2024',
      image: '💰',
      excerpt: 'Todo lo que necesitas saber sobre nuestro sistema de tarifas actualizado.'
    },
    {
      title: 'Historias de conductores: Conoce a María',
      category: 'Comunidad',
      date: '28 Nov 2024',
      image: '⭐',
      excerpt: 'La inspiradora historia de una conductora que transformó su vida con RideTaxi.'
    },
    {
      title: 'Tecnología al servicio del transporte',
      category: 'Tecnología',
      date: '20 Nov 2024',
      image: '🚀',
      excerpt: 'Cómo usamos IA y machine learning para mejorar tu experiencia.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-navy to-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Blog de RideTaxi
              </h1>
              <p className="text-xl text-gray-300">
                Noticias, consejos y actualizaciones de nuestra comunidad
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-4 mb-12 justify-center">
                {['Todos', 'Conductores', 'Pasajeros', 'Seguridad', 'Tecnología', 'Comunidad'].map((cat, index) => (
                  <button
                    key={index}
                    className={`px-6 py-2 rounded-full font-semibold transition-all ${
                      index === 0
                        ? 'bg-turquoise text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                    <div className="bg-gradient-to-br from-turquoise to-navy p-12 flex items-center justify-center">
                      <div className="text-8xl">{article.image}</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-turquoise bg-opacity-10 text-turquoise rounded-full text-sm font-semibold">
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500">{article.date}</span>
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>
                      <button className="text-turquoise font-semibold hover:underline">
                        Leer más →
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button className="px-10 py-4 bg-turquoise text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">
                  Cargar más artículos
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-navy mb-6">
                Suscríbete a nuestro newsletter
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Recibe las últimas noticias y consejos directamente en tu email
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-turquoise focus:border-transparent"
                />
                <button className="px-8 py-3 bg-turquoise text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
