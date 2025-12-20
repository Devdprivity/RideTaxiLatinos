'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function MobileTarifas() {
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
      note: 'Mínimo 2 millas aunque recorras menos',
      color: 'turquoise',
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
      note: 'Hasta 4 millas incluidas. +$2.00 por milla adicional',
      color: 'orange',
    },
  ];

  return (
    <div className="lg:hidden min-h-screen bg-navy flex flex-col pb-20">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-navy/95 backdrop-blur-lg border-b border-white/10">
        <div className="flex items-center justify-between px-4 py-3">
          <Link 
            href="/"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Atrás</span>
          </Link>
          
          <Image
            src="/img/LogoRide.svg"
            alt="RideTaxi Logo"
            width={100}
            height={28}
            priority
            className="h-7 w-auto"
          />
          
          <div className="w-16" />
        </div>
      </div>

      {/* Título */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-xl font-bold text-white">Nuestras Tarifas</h1>
        <p className="text-white/60 text-sm mt-1">Precios transparentes sin sorpresas</p>
      </div>

      {/* Lista de servicios */}
      <div className="flex-1 px-4 py-4 space-y-4">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
          >
            {/* Header del servicio */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="text-3xl">{service.icon}</div>
                <div>
                  <h3 className="text-white font-semibold">{service.title}</h3>
                  <p className="text-white/50 text-xs">{service.description}</p>
                </div>
              </div>
            </div>

            {/* Precios */}
            <div className="p-4 space-y-3">
              {service.pricing.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white/70 text-sm">{item.label}</span>
                  <span className="text-turquoise font-bold text-lg">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Nota */}
            <div className="px-4 pb-4">
              <div className="bg-turquoise/10 rounded-lg px-3 py-2">
                <p className="text-turquoise text-xs flex items-center gap-2">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  {service.note}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ejemplo de cálculo */}
      <div className="px-4 pb-4">
        <div className="bg-gradient-to-r from-turquoise/20 to-turquoise/5 rounded-2xl p-4 border border-turquoise/30">
          <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            Ejemplo de cálculo
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-white/70">
              <span>Viaje de 3 millas:</span>
              <span className="text-white">$3.00 + (3 × $2.00) = <strong className="text-turquoise">$9.00</strong></span>
            </div>
            <div className="flex justify-between text-white/70">
              <span>Viaje de 6 millas:</span>
              <span className="text-white">$3.00 + (6 × $2.00) = <strong className="text-turquoise">$15.00</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4">
        <Link
          href="/pasajeros/solicitar-viaje"
          className="block w-full py-3.5 bg-turquoise text-white rounded-2xl font-semibold text-center shadow-lg shadow-turquoise/30 active:scale-[0.98] transition-transform"
        >
          Calcular mi tarifa
        </Link>
      </div>

      {/* Trust badges */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-1.5 text-white/50">
            <svg className="w-4 h-4 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs">Sin cargos ocultos</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/50">
            <svg className="w-4 h-4 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs">Precio garantizado</span>
          </div>
        </div>
      </div>
    </div>
  );
}
