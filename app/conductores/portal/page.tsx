import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export const metadata = {
  title: 'Portal de Conductores - RideTaxi',
  description: 'Accede al portal de conductores de RideTaxi.',
};

export default function PortalConductores() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <section className="bg-gradient-to-br from-navy to-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Portal de Conductores
              </h1>
              <p className="text-xl text-gray-300">
                Gestiona tu cuenta, revisa tus ganancias y más
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-200">
                <h2 className="text-3xl font-bold text-navy mb-8 text-center">
                  Iniciar sesión
                </h2>

                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico o teléfono
                    </label>
                    <input
                      type="text"
                      placeholder="correo@ejemplo.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-turquoise focus:border-transparent"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded text-turquoise focus:ring-turquoise" />
                      <span className="ml-2 text-sm text-gray-600">Recordarme</span>
                    </label>
                    <a href="#" className="text-sm text-turquoise hover:underline">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-turquoise text-white py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg"
                  >
                    Iniciar sesión
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <p className="text-gray-600 mb-4">¿Aún no eres conductor?</p>
                  <button className="px-8 py-3 bg-navy text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                    Registrarme como conductor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy text-center mb-12">
              Características del portal
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: '📊', title: 'Panel de ganancias', desc: 'Revisa tus ingresos diarios, semanales y mensuales' },
                { icon: '🗺️', title: 'Historial de viajes', desc: 'Consulta todos tus viajes realizados' },
                { icon: '⭐', title: 'Calificaciones', desc: 'Ve tu calificación y comentarios de pasajeros' },
                { icon: '💰', title: 'Retiros', desc: 'Solicita retiros instantáneos de tus ganancias' },
                { icon: '🎁', title: 'Bonos y promociones', desc: 'Consulta bonos disponibles y tu progreso' },
                { icon: '📄', title: 'Documentos', desc: 'Actualiza y gestiona tu documentación' }
              ].map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-navy mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
