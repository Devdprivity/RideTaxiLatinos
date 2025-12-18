'use client';

import Image from 'next/image';
import Link from 'next/link';
import PriceCalculator from './PriceCalculator';

export default function MobileRideRequest() {
  return (
    <div className="lg:hidden min-h-screen bg-navy flex flex-col pb-20">
      {/* Header con logo y botón atrás */}
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
          
          <div className="w-16" /> {/* Spacer para centrar el logo */}
        </div>
      </div>

      {/* Título de la sección */}
      <div className="px-4 pt-4 pb-2">
        <h1 className="text-xl font-bold text-white">Solicitar viaje</h1>
        <p className="text-white/60 text-sm mt-1">Calcula tu tarifa y pide tu servicio</p>
      </div>

      {/* Contenido principal - PriceCalculator */}
      <div className="flex-1 px-4 py-4">
        <PriceCalculator />
      </div>

      {/* Info adicional */}
      <div className="px-4 pb-4">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-turquoise/20 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">¿Cómo funciona?</h3>
              <p className="text-white/60 text-xs mt-1 leading-relaxed">
                Ingresa tu origen y destino, calcula el precio y confirma tu pedido por WhatsApp. Un conductor te contactará en minutos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges */}
      <div className="px-4 pb-6">
        <div className="flex items-center justify-center gap-6">
          <div className="flex items-center gap-1.5 text-white/50">
            <svg className="w-4 h-4 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs">Seguro</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/50">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-xs">4.9 ★</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/50">
            <svg className="w-4 h-4 text-turquoise" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span className="text-xs">Rápido</span>
          </div>
        </div>
      </div>
    </div>
  );
}
