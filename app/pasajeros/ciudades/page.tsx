import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CitiesPreview from '@/app/components/CitiesPreview';

export const metadata = {
  title: 'Ciudades - RideTaxi',
  description: 'RideTaxi está disponible en las principales ciudades de Latinoamérica.',
};

export default function Ciudades() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy to-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Donde estés, estamos contigo
              </h1>
              <p className="text-xl text-gray-300">
                RideTaxi está presente en más de 30 ciudades de Latinoamérica
              </p>
            </div>
          </div>
        </section>

        {/* Cities Preview */}
        <section>
          <CitiesPreview />
        </section>

        {/* Expansion */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-turquoise to-navy rounded-2xl p-12 text-center text-white">
                <h2 className="text-4xl font-bold mb-4">
                  ¿Tu ciudad no está en la lista?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Estamos expandiéndonos rápidamente. Regístrate para recibir notificaciones cuando lleguemos a tu ciudad.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white"
                  />
                  <button className="px-8 py-3 bg-white text-navy rounded-lg font-semibold hover:bg-gray-100 transition-all">
                    Notificarme
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
