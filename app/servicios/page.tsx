'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Hosting Estático Administrado',
    description:
      'Hosting ultrarrápido con CDN global, protección DDoS enterprise y respaldo tecnológico de Vercel y Cloudflare. Ideal para sitios estáticos de alto rendimiento.',
    href: '/servicios/hosting-estatico-administrado',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Hosting Compartido Administrado',
    description:
      'Hosting ecológico con GreenGeeks, ideal para WordPress y aplicaciones dinámicas. Incluye migración gratuita y soporte técnico especializado.',
    href: '/servicios/hosting-compartido-administrado',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
];

export default function ServiciosPage() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 1,
        },
        opacity: 0,
        y: 40,
        duration: 0.6,
      });
    });
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#393E46]">
      <Navbar />

      {/* Hero */}
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24 bg-[#393E46]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-[#00ADB4] bg-[#00ADB4]/10 text-[#00ADB4] text-sm font-medium tracking-wide">
            Nuestros Servicios
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Soluciones de Hosting Premium
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            Descubre nuestras opciones de hosting administrado, diseñadas para potenciar tu presencia digital con tecnología de vanguardia.
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <section className="w-full py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group block"
              >
                <div
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className="h-full p-8 bg-[#E5F7F9] rounded-2xl border border-transparent hover:border-[#00ADB4] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#00ADB4]/10 text-[#00ADB4] rounded-xl group-hover:bg-[#00ADB4] group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h2 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#00ADB4] transition-colors">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-[#717171] font-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[#00ADB4] font-medium text-sm">
                    Ver detalles
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection pageName="Servicios" />
    </main>
  );
}
