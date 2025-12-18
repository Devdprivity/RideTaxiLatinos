'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Testimonials() {
  const cardsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15
      }
    );
  }, []);

  const testimonials = [
    {
      name: 'María González',
      role: 'Pasajera frecuente',
      rating: 5,
      text:
        'RideTaxi cambió completamente mi forma de moverme. Sé cuánto pago, me siento segura y siempre llego a tiempo.'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Conductor desde 2022',
      rating: 5,
      text:
        'Ingresos estables, horarios flexibles y soporte real. Es una plataforma pensada para conductores.'
    },
    {
      name: 'Ana Martínez',
      role: 'Estudiante',
      rating: 5,
      text:
        'Tarifas claras, viajes seguros y seguimiento en tiempo real. Exactamente lo que necesito.'
    },
    {
      name: 'Jorge Silva',
      role: 'Profesional',
      rating: 5,
      text:
        'Uso RideTaxi todos los días. Funciona, es simple y confiable. No necesito nada más.'
    }
  ];

  return (
    <section className="py-28 bg-[#25D1AB]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#010028] mb-6 tracking-tight">
            Opiniones reales de nuestros usuarios
          </h2>
          <p className="text-lg text-[#0F1A4F]/80">
            Miles de pasajeros y conductores confían en RideTaxi cada día
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <article
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, {
                  y: -8,
                  duration: 0.3,
                  ease: 'power2.out'
                })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, {
                  y: 0,
                  duration: 0.3,
                  ease: 'power2.out'
                })
              }
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-md
                border border-[#010028]/10
                will-change-transform
              "
            >
              {/* Header */}
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-[#010028]">
                  {t.name}
                </h4>
                <p className="text-sm text-[#0F1A4F]/70">{t.role}</p>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, idx) => (
                  <svg
                    key={idx}
                    className="w-5 h-5 text-[#010028]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#0F1A4F] leading-relaxed text-base">
                “{t.text}”
              </p>
            </article>
          ))}
        </div>

        {/* Trust badge */}
        <div className="mt-20 flex justify-center">
          <div className="bg-[#010028] px-8 py-4 rounded-full shadow-xl">
            <span className="text-white font-semibold tracking-wide">
              4.8 / 5 · Más de 50.000 reseñas verificadas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
