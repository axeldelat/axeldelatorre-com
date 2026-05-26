'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

gsap.registerPlugin(ScrollTrigger);

const servicios = [
  {
    title: 'Hosting Estatico Administrado',
    description:
      'Velocidad ultrarapida con CDN global, proteccion DDoS enterprise y respaldo tecnologico de Vercel y Cloudflare. Ideal para sitios estaticos de alto rendimiento.',
    href: '/servicios/hosting-estatico-administrado',
    price: '$6,000 MXN / ano',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Hosting Compartido Administrado',
    description:
      'Hosting ecologico con GreenGeeks, ideal para WordPress y aplicaciones dinamicas. Incluye migracion gratuita y soporte tecnico especializado.',
    href: '/servicios/hosting-compartido-administrado',
    price: '$6,000 MXN / ano',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Administracion de Dominio',
    description:
      'Renovacion, gestion DNS y privacidad Whois de tu dominio sin que tengas que preocuparte por nada. Tu marca protegida.',
    href: '/servicios/administracion-de-dominio',
    price: '$1,500 MXN / ano',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
  },
];

const valores = [
  {
    title: 'Experiencia Comprobada',
    description: 'Mas de 10 anos ayudando a empresas a establecer y optimizar su presencia digital con resultados medibles.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Soporte Dedicado',
    description: 'Atencion personalizada y respuesta rapida. No eres un ticket, eres un socio en tu transformacion digital.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Tecnologia de Punta',
    description: 'Utilizamos las mejores herramientas y plataformas del mercado: Vercel, Cloudflare, GreenGeeks y mas.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Sin Complicaciones',
    description: 'Nos encargamos de todo lo tecnico para que tu te enfoques en lo que mejor sabes hacer: tu negocio.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const serviciosRef = useRef<HTMLDivElement>(null);
  const valoresRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('.hero-animate');
      gsap.fromTo(
        elements,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2 }
      );
    }

    // Servicios cards animation
    if (serviciosRef.current) {
      const cards = serviciosRef.current.querySelectorAll('.servicio-card');
      gsap.fromTo(
        cards,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: serviciosRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        }
      );
    }

    // Valores animation
    if (valoresRef.current) {
      const items = valoresRef.current.querySelectorAll('.valor-item');
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: valoresRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
    }

    // CTA animation
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const whatsappNumber = '529841056131';
  const whatsappMessage = encodeURIComponent('Hola Axel, vi tu pagina de Inicio, y me interesa conocer mas detalles de tu servicio.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section
        style={{ backgroundColor: '#393E46' }}
        className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
      >
        {/* Decorative elements */}
        <img
          src="/plus.svg"
          alt=""
          className="absolute top-32 left-10 w-20 h-20 opacity-20 pointer-events-none animate-pulse"
        />
        <img
          src="/asterisk.svg"
          alt=""
          className="absolute bottom-32 right-16 w-24 h-24 opacity-15 pointer-events-none"
        />
        <img
          src="/ampersand.svg"
          alt=""
          className="absolute top-1/2 right-10 w-16 h-16 opacity-10 pointer-events-none"
        />

        <div ref={heroRef} className="relative z-10 max-w-4xl px-6 text-center">
          <div className="hero-animate inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-[#00ADB4] bg-[#00ADB4]/10 text-[#00ADB4] text-sm font-medium tracking-wide">
            Consultoria en Tecnologia
          </div>
          <h1 className="hero-animate text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Tu Presencia Digital,<br />
            <span style={{ color: '#00ADB4' }}>Administrada por Expertos</span>
          </h1>
          <p className="hero-animate text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Transformacion Digital, Ecommerce e Inteligencia Artificial. Nos encargamos de la infraestructura tecnica para que tu negocio brille en internet.
          </p>
          <div className="hero-animate flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-block px-8 py-4 font-semibold rounded hover:opacity-90 transition text-lg"
              style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}
            >
              Comenzar Ahora
            </Link>
            <Link
              href="/servicios"
              className="inline-block px-8 py-4 font-semibold rounded border-2 border-white/30 text-white hover:bg-white/10 transition text-lg"
            >
              Ver Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS SECTION */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#2b2b2b' }}>
              Nuestros Servicios
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto" style={{ color: '#717171' }}>
              Soluciones integrales de hosting y administracion digital para tu negocio
            </p>
          </div>

          <div ref={serviciosRef} className="grid md:grid-cols-3 gap-8">
            {servicios.map((servicio) => (
              <Link
                key={servicio.href}
                href={servicio.href}
                className="servicio-card group p-8 rounded-2xl border border-gray-200 hover:border-[#00ADB4] hover:shadow-xl transition-all duration-300"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: '#E5F7F9', color: '#00ADB4' }}
                >
                  {servicio.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#2b2b2b' }}>
                  {servicio.title}
                </h3>
                <p className="text-sm font-light mb-4 leading-relaxed" style={{ color: '#717171' }}>
                  {servicio.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold" style={{ color: '#00ADB4' }}>
                    {servicio.price}
                  </span>
                  <span className="text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: '#00ADB4' }}>
                    Ver mas &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE ELEGIRNOS SECTION */}
      <section style={{ backgroundColor: '#393E46' }} className="w-full py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Por Que Elegirnos
            </h2>
            <p className="text-lg font-light max-w-2xl mx-auto text-gray-300">
              Mas que un proveedor, somos tu socio tecnologico
            </p>
          </div>

          <div ref={valoresRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div
                key={index}
                className="valor-item p-6 rounded-2xl border border-white/10 hover:border-[#00ADB4]/50 transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}
                >
                  {valor.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">
                  {valor.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-gray-400">
                  {valor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div
            ref={ctaRef}
            className="text-center p-10 md:p-16 rounded-3xl"
            style={{ backgroundColor: '#E5F7F9' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#2b2b2b' }}>
              Listo para Transformar tu Presencia Digital?
            </h2>
            <p className="text-lg font-light mb-8 max-w-xl mx-auto" style={{ color: '#717171' }}>
              Agenda una llamada sin compromiso y platiquemos sobre como podemos ayudarte a alcanzar tus objetivos digitales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-block px-8 py-4 font-semibold rounded hover:opacity-90 transition text-lg"
                style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}
              >
                Contactar Ahora
              </Link>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold rounded hover:opacity-90 transition text-lg"
                style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <FooterSection pageName="Inicio" />
    </main>
  );
}
