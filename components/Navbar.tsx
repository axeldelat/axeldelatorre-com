'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const services = [
  { name: 'Hosting Estático Administrado', href: '/servicios/hosting-estatico-administrado' },
  { name: 'Hosting Compartido Administrado', href: '/servicios/hosting-compartido-administrado' },
  { name: 'Administración de Dominio', href: '/servicios/administracion-de-dominio' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Logo"
            className="h-8"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {/* Servicios Dropdown */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/servicios"
              className="flex items-center gap-1 text-sm font-medium text-[#1a1a1a] hover:text-[#00ADB4] transition"
            >
              Servicios
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="py-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-3 text-sm text-[#1a1a1a] hover:bg-[#E5F7F9] hover:text-[#00ADB4] transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contacto Link */}
          <Link
            href="/contacto"
            className="text-sm font-medium text-[#1a1a1a] hover:text-[#00ADB4] transition"
          >
            Contacto
          </Link>
        </div>

        <Link
          href="/contacto"
          className="px-6 py-2 bg-[#00ADB4] text-white text-sm font-semibold rounded hover:bg-[#0099a1] transition"
        >
          Contactar
        </Link>
      </div>
    </nav>
  );
}
