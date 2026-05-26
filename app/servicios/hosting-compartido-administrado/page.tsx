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
    question: '¿Qué significa que el hosting sea "Ecológico"?',
    answer:
      'Significa que los centros de datos donde vive tu página web están optimizados para no dañar el planeta. GreenGeeks compra tres veces la energía que consume en créditos de energía limpia certificada, haciendo que tu presencia digital sea sustentable y amigable con el medio ambiente.',
  },
  {
    question: '¿Tengo que hacer algo si mi página actual ya está en otro hosting?',
    answer:
      'Para nada. Nosotros nos encargamos de realizar la migración completa de tu WordPress actual y tus bases de datos hacia nuestros servidores seguros de GreenGeeks, de forma transparente y sin que tu sitio deje de funcionar un solo segundo.',
  },
  {
    question: '¿Qué pasa si un plugin se actualiza y rompe el diseño de mi página?',
    answer:
      'Esa es la gran ventaja de la administración. Como nosotros hacemos las actualizaciones de forma controlada y frecuente, si algo falla, nuestro equipo lo detecta de inmediato y lo soluciona usando los respaldos del sistema. Tú nunca verás tu página caída o rota.',
  },
];

const comparisonRows = [
  {
    feature: 'Tu Tranquilidad',
    competitor: 'Tienes que actualizar tú mismo los plugins y si la página se rompe, nadie te ayuda.',
    ours: 'Total. Nosotros actualizamos y vigilamos que tu WordPress funcione perfectamente.',
  },
  {
    feature: 'Copias de Seguridad',
    competitor: 'Manuales o te cobran tarifas extras por restaurar un respaldo antiguo.',
    ours: 'Respaldos frecuentes automáticos incluidos en tu plan.',
  },
  {
    feature: 'Impacto Ambiental',
    competitor: 'Servidores tradicionales que generan una gran huella de carbono.',
    ours: 'Sustentable. Infraestructura GreenGeeks con energía 300% limpia.',
  },
  {
    feature: 'Soporte Técnico',
    competitor: 'Tickets eternos en inglés con respuestas automatizadas que no resuelven.',
    ours: 'Soporte directo por WhatsApp y totalmente en tu idioma.',
  },
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

export default function HostingCompartidoAdministrado() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const valueCardsRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);

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
      <section style={{ backgroundColor: '#393E46' }} className="relative w-full min-h-screen flex items-center justify-center pt-20">
        <div className="absolute top-20 right-10 opacity-10 pointer-events-none" aria-hidden="true">
          <img src="/asterisk.svg" alt="" className="w-24 h-24 md:w-32 md:h-32" />
        </div>
        <div className="absolute bottom-20 left-10 opacity-10 pointer-events-none" aria-hidden="true">
          <img src="/plus.svg" alt="" className="w-20 h-20 md:w-28 md:h-28" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-4xl px-6 text-center">
          <div className="hero-animate inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-[#00ADB4] bg-[#00ADB4]/10 text-[#00ADB4] text-sm font-medium tracking-wide">
            Hosting Compartido Administrado
          </div>
          <h1 className="hero-animate text-4xl md:text-6xl font-bold mb-6 leading-tight text-balance" style={{ color: '#FFFFFF' }}>
            El hosting ecológico para tu WordPress: Estabilidad absoluta y cero preocupaciones
          </h1>
          <p className="hero-animate text-lg md:text-xl font-light mb-8 max-w-3xl mx-auto text-pretty" style={{ color: '#D1D5DB' }}>
            No te quites el sueño pensando en actualizaciones técnicas, vulnerabilidades o caídas del servidor. Alojamos y administramos tu sitio web en la plataforma líder en energía sustentable.
          </p>
          <Link href="/contacto" className="hero-animate inline-block px-8 py-4 font-semibold rounded hover:opacity-90 transition text-lg" style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}>
            Dejar mi sitio en manos expertas
          </Link>
        </div>
      </section>

      {/* SECTION 2: El Valor de tu Presencia Digital */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-balance" style={{ color: '#2b2b2b' }}>
            Si tu página web no está en línea, tu negocio simplemente no existe en internet.
          </h2>
          <p className="text-lg font-light text-center mb-12 max-w-3xl mx-auto" style={{ color: '#2b2b2b' }}>
            Tu sitio web desarrollado en WordPress es el corazón digital de tu marca. Es la fuente de verdad oficial que consultan tus clientes y la base de donde provienen tus ventas.
          </p>

          <div ref={valueCardsRef} className="grid md:grid-cols-3 gap-6">
            <div className="value-card p-6 rounded-2xl" style={{ backgroundColor: '#E5F7F9' }}>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2b2b2b' }}>Google y Motores de Búsqueda</h3>
              <p className="font-light" style={{ color: '#2b2b2b' }}>
                Si el buscador intenta rastrear tu menú, servicios o productos y tu hosting está caído, te penalizará ocultando tu negocio de los resultados.
              </p>
            </div>
            <div className="value-card p-6 rounded-2xl" style={{ backgroundColor: '#E5F7F9' }}>
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2b2b2b' }}>Agentes de IA y Mapas</h3>
              <p className="font-light" style={{ color: '#2b2b2b' }}>
                Herramientas como ChatGPT y los mapas inteligentes escanean tu web en milisegundos. Si tu servidor es inestable, recomendarán a tu competencia.
              </p>
            </div>
            <div className="value-card p-6 rounded-2xl" style={{ backgroundColor: '#E5F7F9' }}>
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2b2b2b' }}>Tus Campañas y Redes Sociales</h3>
              <p className="font-light" style={{ color: '#2b2b2b' }}>
                Cada enlace en tu biografía de Instagram o catálogo enviado por WhatsApp depende de que tu hosting responda. Garantizamos que tu puerta digital esté siempre abierta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: La Solución Técnica - GreenGeeks */}
      <section style={{ backgroundColor: '#E5F7F9' }} className="w-full py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none" aria-hidden="true">
          <img src="/asterisk.svg" alt="" className="w-32 h-32 animate-spin-slow" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ color: '#2b2b2b' }}>
            Infraestructura de clase mundial que cuida el planeta
          </h2>
          <p className="text-lg font-light text-center mb-12 max-w-3xl mx-auto" style={{ color: '#2b2b2b' }}>
            Alojar tu sitio web con nosotros significa estabilidad total respaldada por GreenGeeks, el proveedor líder de la industria en hosting ecológico.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white shadow-sm">
              <div className="text-5xl mb-4" style={{ color: '#00ADB4' }}>🌱</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2b2b2b' }}>300% Energía Limpia</h3>
              <p className="font-light leading-relaxed" style={{ color: '#2b2b2b' }}>
                Los servidores tradicionales consumen cantidades masivas de electricidad y contaminan. Nuestro hosting devuelve a la red eléctrica 3 veces el equivalente de la energía que consume en forma de energía eólica limpia. Tu negocio tendrá una huella de carbono negativa.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-white shadow-sm">
              <div className="text-5xl mb-4" style={{ color: '#00ADB4' }}>⚙️</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#2b2b2b' }}>Entorno cPanel Administrado</h3>
              <p className="font-light leading-relaxed" style={{ color: '#2b2b2b' }}>
                Utilizamos la arquitectura de paneles de control más robusta, segura y estándar del mercado, pero tú no tendrás que aprender a usarla. Nosotros gestionamos los recursos internos para que tu WordPress corra de manera fluida y sin interrupciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Compromiso "Worry-Free" */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center" style={{ color: '#2b2b2b' }}>
            Nosotros nos encargamos de la tecnología. Tú, de tu negocio.
          </h2>
          <p className="text-lg font-light text-center mb-12 max-w-3xl mx-auto" style={{ color: '#2b2b2b' }}>
            A diferencia de los hostings económicos donde te abandonan con un panel complejo y sin soporte, nuestro servicio incluye administración técnica proactiva.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔄</span>
                <h3 className="text-xl font-bold" style={{ color: '#2b2b2b' }}>Actualizaciones Constantes y Seguras</h3>
              </div>
              <p className="font-light" style={{ color: '#2b2b2b' }}>
                Mantener actualizados el núcleo de tu WordPress, tus temas y tus plugins de forma segura evita fallos de diseño y bloquea vulnerabilidades del sistema.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-gray-200 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💾</span>
                <h3 className="text-xl font-bold" style={{ color: '#2b2b2b' }}>Respaldos Frecuentes Automatizados</h3>
              </div>
              <p className="font-light" style={{ color: '#2b2b2b' }}>
                Hacemos copias de seguridad periódicas de toda tu información y bases de datos. Si cometes un error editando tu sitio, podemos restaurar tu página al instante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Cuadro Comparativo */}
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
                  <th className="text-left py-4 px-6 font-bold whitespace-nowrap" style={{ color: '#2b2b2b' }}>Hosting Común</th>
                  <th className="py-0 px-0 font-bold w-[220px]" style={{ color: '#2b2b2b' }}>
                    <div className="our-column h-full px-6 py-4 text-left rounded-t-xl bg-[#E5F7F9] text-[#00ADB4] transition-shadow">
                      Nuestro Hosting
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
                      <td className="py-4 px-6" style={{ color: '#717171' }}>
                        <span className="text-red-500 mr-2">✗</span>{row.competitor}
                      </td>
                      <td className="py-0 px-0 w-[220px]">
                        <div className={`px-6 py-4 bg-[#E5F7F9] text-[#00ADB4] font-bold ${isLast ? 'rounded-b-xl' : ''}`}>
                          <span className="mr-2">✓</span>{row.ours}
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

      {/* SECTION 6: Inversión Transparente */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#2b2b2b' }}>
            Inversión Transparente
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plan Principal */}
            <div className="p-8 rounded-2xl bg-white border-2 border-[#00ADB4] shadow-lg relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-[#00ADB4] text-white text-sm font-semibold rounded-full">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-2" style={{ color: '#2b2b2b' }}>Plan Anual WordPress Administrado</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold" style={{ color: '#00ADB4' }}>$6,000</span>
                <span className="text-lg" style={{ color: '#717171' }}>MXN / año</span>
              </div>
              <p className="text-sm mb-6" style={{ color: '#717171' }}>Equivalente a solo $500 pesos al mes</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Alojamiento Ecológico Premium en GreenGeeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Gestión cPanel de Recursos y Monitoreo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Actualizaciones de Plugins y Temas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Copias de Seguridad Frecuentes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Certificado SSL Gratis</span>
                </li>
              </ul>
              <button className="w-full py-4 font-semibold rounded hover:opacity-90 transition" style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}>
                Contratar Plan Anual
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

              {/* Card: Hosting Estático Administrado */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#00ADB4] hover:shadow-md transition-all group">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-lg font-bold leading-tight" style={{ color: '#2b2b2b' }}>Hosting Estático Administrado</h4>
                  <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E5F7F9' }}>
                    <svg className="w-5 h-5" fill="none" stroke="#00ADB4" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm font-light mb-4" style={{ color: '#717171' }}>
                  Velocidad ultrarrápida, CDN global y protección DDoS enterprise con respaldo de Vercel y Cloudflare.
                </p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold" style={{ color: '#2b2b2b' }}>$6,000</span>
                  <span className="text-sm" style={{ color: '#717171' }}>MXN / año</span>
                </div>
                <a href="/servicios/hosting-estatico-administrado" className="inline-flex items-center gap-1 text-sm font-semibold group-hover:underline" style={{ color: '#00ADB4' }}>
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

      {/* SECTION 7: FAQ */}
      <section id="faq" style={{ backgroundColor: '#393E46', position: 'relative', overflow: 'hidden' }} className="w-full py-20 md:py-32">
        <div className="absolute top-10 left-10 opacity-10 pointer-events-none" aria-hidden="true">
          <img src="/smile.svg" alt="" className="w-32 h-32 md:w-48 md:h-48" />
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: '#FFFFFF' }}>
            Preguntas Frecuentes
          </h2>
          <p className="text-center mb-12 font-light" style={{ color: '#D1D5DB' }}>
            Resuelve tus dudas sobre nuestro servicio de hosting compartido administrado
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
        </div>
      </section>

      {/* SECTION 8: CTA de Cierre */}
      <section style={{ backgroundColor: '#393E46' }} className="w-full py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
            Todo el poder de un servidor experto, cero fricción para ti.
          </h2>
          <p className="text-lg font-light mb-8 max-w-2xl mx-auto" style={{ color: '#D1D5DB' }}>
            Obtén la estabilidad que tu marca necesita y la tranquilidad de saber que tu sitio web está bien cuidado y es amable con el planeta, sin necesidad de conocimientos técnicos de tu parte.
          </p>
          <Link href="/contacto" className="inline-block px-10 py-5 font-semibold rounded hover:opacity-90 transition text-lg" style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}>
            Mudar mi WordPress al Hosting Administrado
          </Link>
        </div>
      </section>

      <FooterSection pageName="Hosting Compartido Administrado" />
    </main>
  );
}
