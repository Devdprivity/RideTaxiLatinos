'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function MobileAyuda() {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  const quickActions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Problema con viaje',
      href: '#viajes'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      label: 'Pagos',
      href: '#pagos'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      label: 'Seguridad',
      href: '#seguridad'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      label: 'Mi cuenta',
      href: '#cuenta'
    },
  ];

  const faqs = [
    {
      id: 'solicitar',
      question: '¿Cómo solicito un taxi?',
      answer: 'Escríbenos por WhatsApp, dinos tu ubicación y destino. Un operador te asignará un taxi y te confirmará el precio antes de iniciar.'
    },
    {
      id: 'app',
      question: '¿Necesito descargar alguna app?',
      answer: 'No. Usamos WhatsApp, la aplicación que ya usas todos los días. No necesitas descargar nada extra.'
    },
    {
      id: 'precio',
      question: '¿Cómo se calcula el precio?',
      answer: 'Según la distancia del trayecto. Siempre te informamos el costo antes de confirmar. Sin tarifas ocultas.'
    },
    {
      id: 'seguro',
      question: '¿Es un servicio seguro?',
      answer: 'Sí. Conductores verificados, taxis identificados y atención humana. Puedes compartir tu viaje con familiares.'
    },
    {
      id: 'idioma',
      question: '¿En qué idioma atienden?',
      answer: '100% en español. Somos un servicio pensado para la comunidad latina y hispanohablantes.'
    },
    {
      id: 'pago',
      question: '¿Puedo pagar en efectivo?',
      answer: 'Sí. Aceptamos efectivo y otros métodos según disponibilidad. El operador te lo indicará antes del viaje.'
    },
  ];

  const contactOptions = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      label: 'WhatsApp',
      subtitle: 'Respuesta rápida',
      href: 'https://wa.me/19415578000?text=Hola,%20necesito%20ayuda%20con%20RideTaxi',
      color: 'bg-green-500'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      subtitle: 'En 24 horas',
      href: 'mailto:ayuda@ridetaxi.com',
      color: 'bg-blue-500'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Llamar',
      subtitle: '24/7',
      href: 'tel:+56933101623',
      color: 'bg-purple-500'
    },
  ];

  return (
    <div className="lg:hidden min-h-screen bg-navy pb-20">
      {/* Header */}
      <div className="bg-gradient-to-b from-navy via-navy to-transparent pt-12 pb-6 px-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-turquoise/20 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-turquoise" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Centro de Ayuda</h1>
            <p className="text-white/60 text-sm">¿En qué podemos ayudarte?</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-5 mb-6">
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-xl border border-white/10 active:scale-95 transition-transform"
            >
              <div className="text-turquoise">
                {action.icon}
              </div>
              <span className="text-white/80 text-[10px] text-center leading-tight">{action.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Options */}
      <div className="px-5 mb-6">
        <h2 className="text-white font-semibold mb-3 text-sm">Contáctanos</h2>
        <div className="flex gap-3">
          {contactOptions.map((option, index) => (
            <a
              key={index}
              href={option.href}
              target={option.href.startsWith('https') ? '_blank' : undefined}
              rel={option.href.startsWith('https') ? 'noopener noreferrer' : undefined}
              className="flex-1 flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 active:scale-95 transition-transform"
            >
              <div className={`w-10 h-10 ${option.color} rounded-full flex items-center justify-center text-white`}>
                {option.icon}
              </div>
              <div className="text-center">
                <span className="text-white text-xs font-medium block">{option.label}</span>
                <span className="text-white/50 text-[10px]">{option.subtitle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="px-5">
        <h2 className="text-white font-semibold mb-3 text-sm">Preguntas Frecuentes</h2>
        <div className="space-y-2">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <span className="text-white text-sm font-medium pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-turquoise transition-transform flex-shrink-0 ${
                    expandedFaq === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedFaq === faq.id && (
                <div className="px-4 pb-4 pt-0">
                  <p className="text-white/70 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badge */}
      <div className="px-5 mt-6 mb-4">
        <div className="flex items-center justify-center gap-2 text-white/40 text-xs">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span>Soporte 24/7 para tu tranquilidad</span>
        </div>
      </div>
    </div>
  );
}
