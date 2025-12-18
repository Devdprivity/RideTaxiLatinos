'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  const headerClassName = isHome
    ? 'absolute top-0 inset-x-0 bg-transparent z-50'
    : 'relative bg-white shadow-sm z-50';

  const navLinkClassName = isHome
    ? 'text-white/90 hover:text-turquoise transition-colors'
    : 'text-navy hover:text-turquoise transition-colors';

  const secondaryLinkClassName = isHome
    ? 'px-6 py-2 text-white/90 hover:text-turquoise transition-colors'
    : 'px-6 py-2 text-navy hover:text-turquoise transition-colors';

  const mobileMenuButtonClassName = isHome ? 'md:hidden p-2 text-white' : 'md:hidden p-2 text-navy';

  return (
    <header className={headerClassName}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/img/logoRide.svg"
              alt="RideTaxi"
              width={160}
              height={40}
              priority={isHome}
              className="h-15 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/pasajeros/solicitar-viaje" className={navLinkClassName}>
              Solicitar viaje
            </Link>
            <Link href="/pasajeros/tarifas" className={navLinkClassName}>
              Tarifas
            </Link>
            <Link href="/conductores/registro" className={navLinkClassName}>
              Ser conductor
            </Link>
            <Link href="/empresa/business" className={navLinkClassName}>
              Empresas
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/conductores/portal" className={secondaryLinkClassName}>
              Iniciar sesión
            </Link>
            <Link href="/pasajeros/solicitar-viaje" className="px-6 py-2 bg-turquoise text-white rounded-full hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg">
              Solicitar viaje
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={mobileMenuButtonClassName}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={
              isHome
                ? 'md:hidden mt-4 p-4 space-y-4 rounded-2xl bg-white/95 backdrop-blur shadow-xl'
                : 'md:hidden mt-4 pb-4 space-y-4'
            }
          >
            <Link href="/pasajeros/solicitar-viaje" className="block text-navy hover:text-turquoise transition-colors py-2">
              Solicitar viaje
            </Link>
            <Link href="/pasajeros/tarifas" className="block text-navy hover:text-turquoise transition-colors py-2">
              Tarifas
            </Link>
            <Link href="/conductores/registro" className="block text-navy hover:text-turquoise transition-colors py-2">
              Ser conductor
            </Link>
            <Link href="/empresa/business" className="block text-navy hover:text-turquoise transition-colors py-2">
              Empresas
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
              <Link href="/conductores/portal" className="px-6 py-2 text-navy border border-navy rounded-full hover:bg-navy hover:text-white transition-all text-center">
                Iniciar sesión
              </Link>
              <Link href="/pasajeros/solicitar-viaje" className="px-6 py-2 bg-turquoise text-white rounded-full hover:bg-opacity-90 transition-all text-center">
                Solicitar viaje
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
