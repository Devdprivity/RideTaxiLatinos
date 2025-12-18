'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Cómo solicito un taxi?',
      answer:
        'Muy fácil. Escríbenos por WhatsApp, dinos tu ubicación y destino. Un operador te asignará un taxi disponible y te confirmará el precio antes de iniciar el viaje.'
    },
    {
      question: '¿Necesito descargar alguna app?',
      answer:
        'No. No necesitas descargar nada. Usamos WhatsApp, la aplicación que ya usas todos los días, para que pedir un taxi sea rápido y sencillo.'
    },
    {
      question: '¿Cómo se calcula el precio?',
      answer:
        'El precio se calcula según la distancia y el trayecto. Siempre te informamos el costo antes de confirmar el servicio. Sin tarifas ocultas ni sorpresas.'
    },
    {
      question: '¿Es un servicio seguro?',
      answer:
        'Sí. Trabajamos con conductores verificados, taxis identificados y atención humana. Además, puedes compartir tu viaje con un familiar o amigo.'
    },
    {
      question: '¿En qué idioma atienden?',
      answer:
        'Atendemos 100% en español. Somos un servicio pensado para la comunidad latina y personas hispanohablantes.'
    },
    {
      question: '¿Puedo pagar en efectivo?',
      answer:
        'Sí. Aceptamos pago en efectivo y otros métodos según disponibilidad en tu ciudad. El operador te lo indicará antes del viaje.'
    }
  ];

  return (
    <section className="py-28 bg-[#25D1AB]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-white/80">
            Somos una línea de taxis para latinos, simple y confiable
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#010028] rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-base md:text-lg font-semibold text-white pr-6">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-white transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-white/75 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-white/80 mb-6">
            ¿Tienes otra pregunta o quieres pedir un taxi ahora?
          </p>
          <Link
            href="/contacto"
            className="
              inline-flex
              items-center
              justify-center
              px-10
              py-4
              rounded-full
              bg-white
              text-[#010028]
              font-semibold
              text-lg
              shadow-lg
              transition
              hover:scale-[1.03]
            "
          >
            Escríbenos por WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
