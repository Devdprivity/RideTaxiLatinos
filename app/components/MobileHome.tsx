'use client';

import Image from 'next/image';

export default function MobileHome() {
  const whyChoose = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Seguridad',
      items: ['Verificados', 'GPS en vivo', 'Soporte 24/7']
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Transparencia',
      items: ['Sin cargos ocultos', 'Precio exacto', 'Pagos seguros']
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Rapidez',
      items: ['Inmediato', 'Cobertura amplia', 'Disponible 24/7']
    }
  ];

  return (
    <div className="lg:hidden h-screen bg-[#010028] flex flex-col overflow-hidden">
      {/* Logo centrado arriba */}
      <div className="pt-3 pb-2 flex justify-center">
        <Image
          src="/img/LogoRide.svg"
          alt="RideTaxi Logo"
          width={120}
          height={36}
          priority
          className="h-8 w-auto"
        />
      </div>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col px-4 pb-4 overflow-y-auto">
        {/* Título y descripción */}
        <div className="text-center mb-3">
          <h1 className="text-2xl font-bold text-white leading-tight">
            Tu viaje seguro
            <span className="text-[#25d1ab]"> al mejor precio</span>
          </h1>
          <p className="text-white/70 text-xs mt-1">
            La app de transporte para la comunidad latina
          </p>
        </div>

        {/* Imagen del personaje */}
        <div className="flex items-center justify-center mb-4">
          <div className="relative w-[160px] h-[160px]">
            <Image
              src="/img/avatarSectio/Botonweb.png"
              alt="RideTaxi"
              fill
              priority
              sizes="160px"
              className="object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* ¿Por qué elegir RideTaxi? */}
        <div className="mb-3">
          <h2 className="text-center text-white font-bold text-base mb-1">
            ¿Por qué elegir RideTaxi?
          </h2>
          <p className="text-center text-white/60 text-[10px] mb-2 leading-tight">
            Experiencia moderna, segura y transparente
          </p>

          {/* 3 tarjetas compactas */}
          <div className="grid grid-cols-3 gap-2">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-2 border border-[#25d1ab]/20"
              >
                <div className="flex justify-center mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-[#25d1ab]/20 flex items-center justify-center text-[#25d1ab]">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs text-center mb-1.5">
                  {item.title}
                </h3>
                <ul className="space-y-1">
                  {item.items.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-1">
                      <svg className="w-3 h-3 text-[#25d1ab] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/70 text-[9px] leading-tight">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ¿Cómo funciona? */}
        <div className="mt-4 bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-[#25d1ab]/20">
          <h2 className="text-white font-bold text-sm mb-2 text-center">
            ¿Cómo funciona?
          </h2>
          <p className="text-white/80 text-[10px] leading-relaxed text-center mb-3">
            No necesitas descargar apps. Entra a la web, cotiza tu servicio y coordina por WhatsApp: nosotros asignamos el conductor, te recoge en el origen y te lleva al destino.
          </p>
          
          {/* Pasos visuales */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#25d1ab]/20 flex items-center justify-center border-2 border-[#25d1ab] mb-1">
                <span className="text-[#25d1ab] font-bold text-xs">1</span>
              </div>
              <span className="text-white/70 text-[8px] text-center">Web</span>
            </div>
            <svg className="w-3 h-3 text-[#25d1ab]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#25d1ab]/20 flex items-center justify-center border-2 border-[#25d1ab] mb-1">
                <span className="text-[#25d1ab] font-bold text-xs">2</span>
              </div>
              <span className="text-white/70 text-[8px] text-center">WhatsApp</span>
            </div>
            <svg className="w-3 h-3 text-[#25d1ab]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#25d1ab]/20 flex items-center justify-center border-2 border-[#25d1ab] mb-1">
                <span className="text-[#25d1ab] font-bold text-xs">3</span>
              </div>
              <span className="text-white/70 text-[8px] text-center">Viaje</span>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        <div className="mt-3">
          <h2 className="text-white font-bold text-sm mb-2 text-center">
            Lo que dicen nuestros usuarios
          </h2>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-[#25d1ab]/20">
              <div className="flex items-center gap-1 mb-1.5">
                <div className="w-6 h-6 rounded-full bg-[#25d1ab]/20 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">MC</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[10px] font-semibold truncate">María C.</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-[9px] leading-tight">
                "Excelente servicio, siempre puntuales y precios justos."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-[#25d1ab]/20">
              <div className="flex items-center gap-1 mb-1.5">
                <div className="w-6 h-6 rounded-full bg-[#25d1ab]/20 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">JR</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[10px] font-semibold truncate">Juan R.</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-[9px] leading-tight">
                "Me siento seguro viajando con conductores verificados."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-[#25d1ab]/20">
              <div className="flex items-center gap-1 mb-1.5">
                <div className="w-6 h-6 rounded-full bg-[#25d1ab]/20 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">AL</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[10px] font-semibold truncate">Ana L.</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-[9px] leading-tight">
                "App fácil de usar, perfecto para nuestra comunidad."
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-[#25d1ab]/20">
              <div className="flex items-center gap-1 mb-1.5">
                <div className="w-6 h-6 rounded-full bg-[#25d1ab]/20 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">CM</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[10px] font-semibold truncate">Carlos M.</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-2.5 h-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-[9px] leading-tight">
                "Respuesta rápida, llegaron en menos de 5 minutos."
              </p>
            </div>
          </div>
        </div>

        {/* Badge de confianza */}
        <div className="flex items-center justify-center gap-3 pt-3">
          <div className="flex items-center gap-1 text-white/70 text-[10px]">
            <svg className="w-3.5 h-3.5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Verificado</span>
          </div>
          <div className="flex items-center gap-1 text-white/70 text-[10px]">
            <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">4.9 estrellas</span>
          </div>
          <div className="flex items-center gap-1 text-white/70 text-[10px]">
            <svg className="w-3.5 h-3.5 text-[#25d1ab]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">+10k viajes</span>
          </div>
        </div>
      </div>
    </div>
  );
}
