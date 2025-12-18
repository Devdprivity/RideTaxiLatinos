import Link from 'next/link';

export default function CitiesPreview() {
  return (
    <section className="py-28 bg-[#25D1AB]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Disponibles en Estados Unidos
          </h2>
          <p className="text-lg text-white/80">
            Comenzamos en una ciudad clave. Muy pronto, en muchas más.
          </p>
        </div>

        {/* City Card */}
        <div className="flex justify-center mb-16">
          <article
            className="
              bg-[#010028]
              rounded-3xl
              p-10
              max-w-md
              w-full
              shadow-xl
              border border-white/10
              transition
              duration-300
              hover:-translate-y-1
            "
          >
            <h3 className="text-3xl font-semibold text-white mb-3">
              Tampa, Florida
            </h3>

            <p className="text-white/75 text-base leading-relaxed mb-6">
              Nuestra primera ciudad en Estados Unidos. Operación activa con
              conductores verificados y soporte local.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10">
              <span className="text-sm font-medium text-white">
                Próximamente en más ciudades
              </span>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/pasajeros/ciudades"
            className="
              inline-flex
              items-center
              justify-center
              px-10
              py-4
              rounded-full
              bg-white
              text-[#010028]
              text-lg
              font-semibold
              shadow-lg
              transition
              hover:scale-[1.03]
            "
          >
            Ver expansión de ciudades
          </Link>
        </div>
      </div>
    </section>
  );
}
