'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: '¿Qué incluye el hosting estático administrado?',
    answer:
      'Nuestro hosting incluye servidor web optimizado, SSL gratis, respaldos automáticos, CDN global con más de 200 puntos de presencia y protección contra DDoS de nivel empresarial.',
  },
  {
    question: '¿Cómo migro mi sitio actual?',
    answer:
      'Ofrecemos migración gratuita de tu sitio actual. Nuestro equipo técnico se encargará de todo el proceso sin tiempo de inactividad.',
  },
  {
    question: '¿Qué soporte ofrecen?',
    answer:
      'Disponemos de soporte 24/7 por chat, email y teléfono. El plan Premium incluye un gestor dedicado para atender tus necesidades.',
  },
  {
    question: '¿Hay contrato de largo plazo?',
    answer:
      'No, puedes cancelar tu suscripción en cualquier momento. No hay penalizaciones ni compromisos de tiempo mínimo.',
  },
  {
    question: '¿Es compatible con frameworks modernos?',
    answer:
      'Sí, nuestro hosting es completamente compatible con Next.js, React, Vue, Svelte y cualquier framework JavaScript moderno.',
  },
];

const comparisonRows = [
  { feature: 'Velocidad de Carga', competitor: 'Promedio', ours: 'Ultrarrápida (<100ms)' },
  { feature: 'Seguridad DDoS', competitor: 'Básica', ours: 'Enterprise Level' },
  { feature: 'Cobertura Global', competitor: 'Limitada', ours: 'Más de 200 países' },
  { feature: 'Soporte 24/7', competitor: 'Email', ours: 'Chat + Phone' },
  { feature: 'Uptime Garantizado', competitor: '99.5%', ours: '99.99%' },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          padding: '1.25rem 1.5rem',
          backgroundColor: '#FFFFFF',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ color: '#111827', fontSize: '1rem', fontWeight: 600, lineHeight: 1.45 }}>
          {question}
        </span>
        <span
          aria-hidden="true"
          style={{
            color: '#00ADB4',
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1,
            flexShrink: 0,
            userSelect: 'none',
            transition: 'transform 0.25s ease',
            display: 'inline-block',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
          }}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div style={{ backgroundColor: '#F9FAFB', borderTop: '1px solid #E5E7EB', padding: '1.125rem 1.5rem' }}>
          <p style={{ color: '#374151', fontSize: '0.9375rem', lineHeight: 1.65, fontWeight: 400, margin: 0 }}>
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function HostingEstaticoAdministrado() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const valueCardsRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const plusRef = useRef<HTMLDivElement>(null);
  const asteriskRef = useRef<HTMLDivElement>(null);
  const ampersandRef = useRef<HTMLDivElement>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

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

    // Floating decorative elements
    if (plusRef.current) {
      gsap.to(plusRef.current, {
        duration: 6,
        y: -30,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    if (asteriskRef.current) {
      gsap.to(asteriskRef.current, {
        duration: 8,
        y: 30,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    // Value cards stagger animation
    if (valueCardsRef.current) {
      const cards = valueCardsRef.current.querySelectorAll('.value-card');
      gsap.fromTo(
        cards,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: valueCardsRef.current,
            start: 'top 80%',
          },
        }
      );
    }

    // Ampersand animation
    if (ampersandRef.current) {
      gsap.from(ampersandRef.current, {
        scrollTrigger: {
          trigger: ampersandRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
        opacity: 0,
        scale: 0.8,
      });
    }

    // Comparison table highlight
    if (comparisonRef.current) {
      const ourColumn = comparisonRef.current.querySelector('.our-column');
      if (ourColumn) {
        gsap.fromTo(
          ourColumn,
          { boxShadow: '0 0 0px rgba(0, 173, 180, 0)' },
          {
            boxShadow: '0 0 30px rgba(0, 173, 180, 0.35)',
            scrollTrigger: {
              trigger: comparisonRef.current,
              start: 'top center',
              end: 'center center',
              scrub: 1,
            },
          }
        );
      }
    }

    ScrollTrigger.refresh();
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />

      {/* SECTION 1: Hero */}
      <section style={{ backgroundColor: '#393E46' }} className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div ref={plusRef} className="absolute top-20 right-10 md:top-1/4 md:right-1/4 opacity-20 pointer-events-none">
          <img src="/plus.svg" alt="" className="w-20 h-20 md:w-32 md:h-32" />
        </div>
        <div ref={asteriskRef} className="absolute bottom-20 left-10 md:bottom-1/4 md:left-1/3 opacity-20 pointer-events-none">
          <img src="/asterisk.svg" alt="" className="w-20 h-20 md:w-32 md:h-32" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-4xl px-6 text-center">
          <div className="hero-animate inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-[#00ADB4] bg-[#00ADB4]/10 text-[#00ADB4] text-sm font-medium tracking-wide">
            Hosting Estático Administrado
          </div>
          <h1 className="hero-animate text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance" style={{ color: '#FFFFFF' }}>
            Tu Presencia Digital
            <br />
            <span style={{ color: '#00ADB4' }}>Premium</span>
          </h1>
          <p className="hero-animate text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto text-pretty" style={{ color: '#D1D5DB' }}>
            Hosting estático de alta calidad con respaldo tecnológico de Vercel y Cloudflare
          </p>
          <Link href="/contacto" className="hero-animate inline-block px-8 py-4 font-semibold rounded hover:opacity-90 transition text-lg" style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}>
            Comenzar Ahora
          </Link>
        </div>
      </section>

      {/* SECTION 2: El Valor de tu Presencia Digital */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance" style={{ color: '#2b2b2b' }}>
            El Valor de tu Presencia Digital
          </h2>

          <div ref={valueCardsRef} className="grid md:grid-cols-3 gap-6">
            <div className="value-card p-6 rounded-2xl" style={{ backgroundColor: '#E5F7F9' }}>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2b2b2b' }}>Google Rankings</h3>
              <p className="font-light" style={{ color: '#2b2b2b' }}>
                Mejora tu posicionamiento SEO con hosting ultrarrápido y optimizado para motores de búsqueda
              </p>
            </div>
            <div className="value-card p-6 rounded-2xl" style={{ backgroundColor: '#E5F7F9' }}>
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2b2b2b' }}>IA Agents Ready</h3>
              <p className="font-light" style={{ color: '#2b2b2b' }}>
                Compatible con agentes de IA para automatizar tareas y mejorar la experiencia del usuario
              </p>
            </div>
            <div className="value-card p-6 rounded-2xl" style={{ backgroundColor: '#E5F7F9' }}>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2b2b2b' }}>Social Media Ready</h3>
              <p className="font-light" style={{ color: '#2b2b2b' }}>
                Perfectamente integrado con redes sociales para maximizar tu alcance y engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Respaldo Tecnológico Premium */}
      <section style={{ backgroundColor: '#393E46' }} className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <img src="/asterisk.svg" alt="" className="w-64 h-64 md:w-96 md:h-96" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: '#FFFFFF' }}>
            Respaldo Tecnológico Premium
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Vercel */}
            <div className="text-center flex-1">
              <div className="mb-6 p-6 bg-white rounded-lg inline-block">
                <p className="font-bold text-lg" style={{ color: '#393E46' }}>Vercel</p>
              </div>
              <p className="font-light" style={{ color: '#D1D5DB' }}>
                Infraestructura global con edge computing y CDN ultrarrápido
              </p>
            </div>

            {/* Ampersand connector */}
            <div ref={ampersandRef} className="flex-shrink-0 opacity-60 md:opacity-100">
              <img src="/ampersand.svg" alt="&" className="w-16 h-16 md:w-24 md:h-24" />
            </div>

            {/* Cloudflare */}
            <div className="text-center flex-1">
              <div className="mb-6 p-6 bg-white rounded-lg inline-block">
                <p className="font-bold text-lg" style={{ color: '#393E46' }}>Cloudflare</p>
              </div>
              <p className="font-light" style={{ color: '#D1D5DB' }}>
                Protección DDoS, caché inteligente y seguridad de nivel empresarial
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="font-light text-sm" style={{ color: '#9CA3AF' }}>
              Combinamos lo mejor de ambas plataformas para ofrecerte rendimiento y seguridad incomparables
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Cuadro Comparativo */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance" style={{ color: '#2b2b2b' }}>
            Comparativa de Servicios
          </h2>

          <div ref={comparisonRef} className="w-full overflow-x-auto rounded-2xl">
            <table className="min-w-[600px] w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#00ADB4]">
                  <th className="text-left py-4 px-6 font-bold whitespace-nowrap" style={{ color: '#2b2b2b' }}>Característica</th>
                  <th className="text-left py-4 px-6 font-bold whitespace-nowrap" style={{ color: '#2b2b2b' }}>Competencia</th>
                  <th className="py-0 px-0 font-bold w-[220px]" style={{ color: '#2b2b2b' }}>
                    <div className="our-column h-full px-6 py-4 text-left rounded-t-xl bg-[#E5F7F9] text-[#00ADB4] transition-shadow">
                      Nuestro Servicio
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => {
                  const isLast = index === comparisonRows.length - 1;
                  return (
                    <tr key={index} className="border-b border-gray-200 hover:bg-white transition-colors">
                      <td className="py-4 px-6 font-semibold whitespace-nowrap" style={{ color: '#2b2b2b' }}>{row.feature}</td>
                      <td className="py-4 px-6" style={{ color: '#717171' }}>{row.competitor}</td>
                      <td className="py-0 px-0 w-[220px]">
                        <div className={`px-6 py-4 bg-[#E5F7F9] text-[#00ADB4] font-bold ${isLast ? 'rounded-b-xl' : ''}`}>
                          {row.ours}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: Planes de Hosting */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#2b2b2b' }}>
            Planes de Hosting
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plan Principal */}
            <div className="p-8 bg-white border-2 border-[#00ADB4] rounded-2xl shadow-lg relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-[#00ADB4] text-white text-sm font-semibold rounded-full">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-2" style={{ color: '#2b2b2b' }}>Plan Anual WordPress Administrado</h3>
              <p className="text-sm mb-6" style={{ color: '#717171' }}>Un único pago anual con los estándares técnicos más altos</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold" style={{ color: '#00ADB4' }}>$6,000</span>
                <span className="text-lg" style={{ color: '#717171' }}>MXN / año</span>
              </div>
              <p className="text-sm mb-6" style={{ color: '#717171' }}>(Equivalente a solo $500 pesos al mes)</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Alojamiento en Vercel Pro: Velocidad e infraestructura de última generación</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Protección con Cloudflare: Monitoreo y bloqueo automático contra ataques y amenazas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Certificado de Seguridad SSL Gratis: El candado de seguridad (https://) activo de forma permanente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Soporte y Monitoreo Técnico 24/7: Aseguramos que tu base de operaciones en internet esté siempre activa</span>
                </li>
              </ul>
              <button className="w-full py-4 font-semibold rounded hover:opacity-90 transition" style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}>
                Contratar Ahora
              </button>
            </div>

            {/* Otros Servicios */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-bold" style={{ color: '#717171' }}>Otros Servicios</h3>

              {/* Card: Administración de Dominio */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#00ADB4] hover:shadow-md transition-all group">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-lg font-bold leading-tight" style={{ color: '#2b2b2b' }}>Administración de Dominio</h4>
                  <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E5F7F9' }}>
                    <svg className="w-5 h-5" fill="none" stroke="#00ADB4" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-light mb-4" style={{ color: '#717171' }}>
                  Renovación, gestión DNS y privacidad Whois de tu dominio sin que tengas que preocuparte por nada.
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#2b2b2b' }}>$1,500</span>
                  <span className="text-sm" style={{ color: '#717171' }}>MXN / año</span>
                </div>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold group-hover:underline" style={{ color: '#00ADB4' }}>
                  Ver detalles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Card: Hosting Compartido Administrado */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#00ADB4] hover:shadow-md transition-all group">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-lg font-bold leading-tight" style={{ color: '#2b2b2b' }}>Hosting Compartido Administrado</h4>
                  <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E5F7F9' }}>
                    <svg className="w-5 h-5" fill="none" stroke="#00ADB4" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-light mb-4" style={{ color: '#717171' }}>
                  Hosting ecológico con GreenGeeks, ideal para WordPress y aplicaciones dinámicas con soporte especializado.
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#2b2b2b' }}>$6,000</span>
                  <span className="text-sm" style={{ color: '#717171' }}>MXN / año</span>
                </div>
                <a href="/servicios/hosting-compartido-administrado" className="inline-flex items-center gap-1 text-sm font-semibold group-hover:underline" style={{ color: '#00ADB4' }}>
                  Ver detalles
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section style={{ backgroundColor: '#393E46' }} className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 pointer-events-none" aria-hidden="true">
          <img src="/smile.svg" alt="" className="w-32 h-32 md:w-48 md:h-48" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: '#FFFFFF' }}>
            Preguntas Frecuentes
          </h2>
          <p className="text-center mb-12 font-light" style={{ color: '#D1D5DB' }}>
            Resuelve tus dudas sobre nuestro servicio de hosting premium
          </p>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="mb-6 font-light" style={{ color: '#D1D5DB' }}>
              ¿Aún tienes preguntas? Nuestro equipo está listo para ayudarte
            </p>
            <Link href="/contacto" className="px-8 py-4 font-semibold rounded hover:opacity-90 transition inline-block" style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}>
              Me interesa migrar mi website
            </Link>
          </div>
        </div>
      </section>

      <FooterSection pageName="Hosting Estático Administrado" />
    </main>
  );
}
