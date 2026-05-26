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
    question: '¿El costo de $1,500 MXN incluye el costo del dominio?',
    answer:
      'Sí, incluye el costo de la renovación estándar anual de tu dominio (con terminaciones comunes como .com, .net, .com.mx, .org, entre otras), además de todas las configuraciones técnicas, la protección de privacidad y el soporte DNS ilimitado durante todo el año.',
  },
  {
    question: '¿Qué pasa si ya compré mi dominio en otro proveedor por varios años?',
    answer:
      'No hay ningún problema. Nosotros nos encargamos de transferir la administración técnica a nuestra plataforma de forma segura y transparente. Si tu dominio tiene vigencia restante, esta se sumará de forma íntegra a tu periodo de servicio con nosotros.',
  },
  {
    question: '¿Por qué mis correos corporativos se van a Spam si mi dominio es nuevo?',
    answer:
      'Los proveedores de correo (como Gmail, Outlook y Yahoo) han endurecido sus filtros para combatir el fraude. Si tu dominio no cuenta con firmas de seguridad DNS correctas (llamadas SPF, DKIM y DMARC), los servidores del destinatario interpretarán que tu correo es sospechoso. Nosotros resolvemos este problema de raíz configurando correctamente estas firmas.',
  },
  {
    question: '¿Qué sucede si decido darme de baja del servicio?',
    answer:
      'El dominio es de tu propiedad al 100%. Si en algún momento decides administrar tu dominio por tu cuenta, te entregamos las llaves de acceso y el código de transferencia de manera inmediata para que lo lleves al proveedor que prefieras, sin penalizaciones ni complicaciones.',
  },
];

const comparisonRows = [
  {
    feature: 'Monitoreo de Vencimiento',
    competitor: 'Dependes de recordar tu contraseña y ver a tiempo los correos de renovación.',
    ours: 'Automatizado. Nosotros cubrimos el costo y garantizamos que nunca expire.',
  },
  {
    feature: 'Privacidad de tus Datos',
    competitor: 'Tus datos personales (teléfono, email) son públicos. Recibes spam y llamadas de estafas.',
    ours: 'Shield Activo. Ocultamos tu información del registro público de forma permanente.',
  },
  {
    feature: 'Estatus de tus Correos',
    competitor: 'Alta probabilidad de caer en Spam debido a registros DNS de seguridad desactualizados.',
    ours: 'Entregabilidad Máxima. Configuramos y actualizamos las firmas SPF, DKIM y DMARC.',
  },
  {
    feature: 'Soporte de Conexiones',
    competitor: 'Debes aprender a modificar registros DNS complejos (A, MX, CNAME, TXT) por tu cuenta.',
    ours: '100% Incluido. Nosotros realizamos cualquier conexión con plataformas externas por ti.',
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
        <div
          style={{
            backgroundColor: '#F9FAFB',
            borderTop: '1px solid #E5E7EB',
            padding: '1.125rem 1.5rem',
          }}
        >
          <p
            style={{
              color: '#374151',
              fontSize: '0.9375rem',
              lineHeight: 1.65,
              fontWeight: 400,
              margin: 0,
            }}
          >
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function AdministracionDeDominioPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const ourColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ourColumnRef.current || !tableRef.current) return;

    gsap.fromTo(
      ourColumnRef.current,
      { boxShadow: '0 0 0px rgba(0, 173, 180, 0)' },
      {
        scrollTrigger: {
          trigger: tableRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
        boxShadow: '0 0 30px rgba(0, 173, 180, 0.35)',
        duration: 1,
      }
    );
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />

      {/* SECTION 1: Hero */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center pt-20"
        style={{ backgroundColor: '#393E46' }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            src="/plus.svg"
            alt=""
            className="absolute top-20 right-10 w-16 h-16 opacity-20"
          />
          <img
            src="/asterisk.svg"
            alt=""
            className="absolute bottom-32 left-20 w-24 h-24 opacity-15"
          />
        </div>

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-[#00ADB4] bg-[#00ADB4]/10 text-[#00ADB4] text-sm font-medium tracking-wide">
            Administración de Dominio
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
            Administramos tu dominio de forma experta: Tu nombre y tu marca protegidos de por vida en internet.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light mb-10 leading-relaxed max-w-3xl mx-auto text-pretty">
            Tu dominio (ej. tunegocio.com) es la propiedad digital más valiosa de tu empresa. No arriesgues tu marca por descuidos de renovación, correos de alerta ignorados o configuraciones de correo defectuosas que envían tus mensajes a la carpeta de Spam.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 font-semibold rounded text-lg hover:opacity-90 transition"
            style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}
          >
            Proteger mi marca hoy
          </Link>
        </div>
      </section>

      {/* SECTION 2: El Valor */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center text-balance" style={{ color: '#2b2b2b' }}>
            Si pierdes el control de tu dominio, tu negocio desaparece de internet en un segundo.
          </h2>
          <p className="text-center mb-12 font-light max-w-3xl mx-auto" style={{ color: '#717171' }}>
            Piensa en tu dominio como la dirección física oficial de tu local. De nada sirve tener las mejores oficinas o el sitio web más rápido si la dirección en el mapa está rota o si dejas de pagar el terreno y alguien más lo compra.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#E5F7F9' }}>
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2b2b2b' }}>Tu Posicionamiento en Google</h3>
              <p className="font-light" style={{ color: '#717171' }}>
                Si tu dominio expira por un descuido, aunque sea por unos días, Google eliminará tu sitio web de sus resultados de búsqueda de inmediato. Recuperar ese posicionamiento puede tomar meses de trabajo.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#E5F7F9' }}>
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2b2b2b' }}>La Entregabilidad de tus Correos</h3>
              <p className="font-light" style={{ color: '#717171' }}>
                ¿Tus correos corporativos llegan a la bandeja de Spam de tus clientes? Eso se debe a una mala configuración técnica en las DNS de tu dominio. Nosotros nos encargamos de que siempre lleguen a la bandeja de entrada.
              </p>
            </div>

            <div className="p-8 rounded-2xl" style={{ backgroundColor: '#E5F7F9' }}>
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#2b2b2b' }}>Agentes de Inteligencia Artificial</h3>
              <p className="font-light" style={{ color: '#717171' }}>
                ChatGPT, Siri y los mapas inteligentes necesitan una dirección web estable y correctamente configurada para escanear y recomendar tu negocio. Si tu dominio presenta fallas, recomendarán a tu competencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Qué incluye el servicio */}
      <section style={{ backgroundColor: '#E5F7F9' }} className="w-full py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-balance" style={{ color: '#2b2b2b' }}>
            Un escudo de seguridad y configuración experta para tu marca.
          </h2>
          <p className="text-center mb-12 font-light max-w-3xl mx-auto" style={{ color: '#717171' }}>
            Te ofrecemos una administración proactiva para que no tengas que lidiar con paneles técnicos de registro de dominios, configuraciones complejas o renovaciones manuales.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00ADB4' }}>
                  <span className="text-white text-xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#2b2b2b' }}>Renovación Anual Automatizada</h3>
                  <p className="font-light text-sm" style={{ color: '#717171' }}>
                    Nos encargamos de gestionar y cubrir el costo de renovación de tu dominio. Nunca perderás tu nombre en internet por olvidar una fecha de vencimiento.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00ADB4' }}>
                  <span className="text-white text-xl">🛡️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#2b2b2b' }}>Protección de Privacidad (Whois Privacy)</h3>
                  <p className="font-light text-sm" style={{ color: '#717171' }}>
                    Blindamos tus datos personales ocultándolos por completo del registro público mundial, eliminando llamadas de spam y correos con estafas.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00ADB4' }}>
                  <span className="text-white text-xl">⚙️</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#2b2b2b' }}>Configuración Avanzada de DNS</h3>
                  <p className="font-light text-sm" style={{ color: '#717171' }}>
                    Realizamos la configuración experta de los registros de seguridad (SPF, DKIM, DMARC) para que tus correos nunca sean marcados como sospechosos.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00ADB4' }}>
                  <span className="text-white text-xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: '#2b2b2b' }}>Interconexión Sin Complicaciones</h3>
                  <p className="font-light text-sm" style={{ color: '#717171' }}>
                    Si deseas conectar tu dominio con Google Workspace, Zoho, Shopify o cualquier plataforma externa, nosotros realizamos la conexión de forma transparente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Cuadro Comparativo */}
      <section ref={tableRef} style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-balance" style={{ color: '#2b2b2b' }}>
            Comparativa de Servicios
          </h2>

          <div className="w-full overflow-x-auto rounded-2xl">
            <table className="min-w-[600px] w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-[#00ADB4]">
                  <th className="text-left py-4 px-6 font-bold whitespace-nowrap" style={{ color: '#1a1a1a' }}>
                    Característica
                  </th>
                  <th className="text-left py-4 px-6 font-bold whitespace-nowrap" style={{ color: '#1a1a1a' }}>
                    Administrarlo Tú Mismo
                  </th>
                  <th className="py-0 px-0 font-bold w-[220px]" style={{ color: '#1a1a1a' }}>
                    <div
                      ref={ourColumnRef}
                      className="h-full px-6 py-4 text-left rounded-t-xl transition-shadow"
                      style={{ backgroundColor: '#E5F7F9', color: '#00ADB4' }}
                    >
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
                      <td className="py-4 px-6 font-semibold whitespace-nowrap" style={{ color: '#1a1a1a' }}>
                        {row.feature}
                      </td>
                      <td className="py-4 px-6" style={{ color: '#717171' }}>{row.competitor}</td>
                      <td className="py-0 px-0 w-[220px]">
                        <div
                          className={`px-6 py-4 font-bold ${isLast ? 'rounded-b-xl' : ''}`}
                          style={{ backgroundColor: '#E5F7F9', color: '#00ADB4' }}
                        >
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

      {/* SECTION 5: Inversión */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center" style={{ color: '#2b2b2b' }}>
            Inversión Transparente
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Plan Principal */}
            <div className="p-8 bg-white border-2 border-[#00ADB4] rounded-2xl shadow-lg relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-[#00ADB4] text-white text-sm font-semibold rounded-full">
                Recomendado
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-2" style={{ color: '#2b2b2b' }}>Administración de Dominio</h3>
              <p className="text-sm mb-6" style={{ color: '#717171' }}>Un único pago anual para blindar tu marca</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-bold" style={{ color: '#00ADB4' }}>$1,500</span>
                <span className="text-lg" style={{ color: '#717171' }}>MXN / año</span>
              </div>
              <p className="text-sm mb-6" style={{ color: '#717171' }}>(Equivalente a solo $125 pesos al mes)</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Costo de Renovación Anual Incluido</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Protección de Privacidad (Whois Privacy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Optimización de DNS para Correos (SPF, DKIM, DMARC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Soporte de Conexión de Servicios Externos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: '#00ADB4' }}>✓</span>
                  <span className="font-light" style={{ color: '#2b2b2b' }}>Vigilancia de DNS 24/7</span>
                </li>
              </ul>
              <button className="w-full py-4 font-semibold rounded hover:opacity-90 transition" style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}>
                Asegurar mi Dominio
              </button>
            </div>

            {/* Otros Servicios */}
            <div className="flex flex-col gap-5">
              <h3 className="text-xl font-bold" style={{ color: '#717171' }}>Otros Servicios</h3>

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

          <p className="mt-8 text-center text-sm font-light" style={{ color: '#717171' }}>
            Nota: Si ya tienes tu dominio comprado en plataformas como GoDaddy, Namecheap o Google Domains, nosotros nos encargamos de todo el proceso de migración o conexión técnica sin que tu sitio o correos dejen de funcionar un solo segundo.
          </p>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section style={{ backgroundColor: '#393E46' }} className="w-full py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center" style={{ color: '#FFFFFF' }}>
            Preguntas Frecuentes
          </h2>
          <p className="text-center mb-12 font-light" style={{ color: '#D1D5DB' }}>
            Resuelve tus dudas sobre nuestro servicio de administración de dominios
          </p>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA Final */}
      <section style={{ backgroundColor: '#393E46' }} className="w-full py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance" style={{ color: '#FFFFFF' }}>
            Protege tu identidad digital con el respaldo de expertos.
          </h2>
          <p className="mb-10 font-light" style={{ color: '#D1D5DB' }}>
            No dejes la dirección oficial de tu negocio a la suerte de un correo olvidado o una mala configuración. Asegura la reputación de tu marca y la llegada de tus correos hoy mismo.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 font-semibold rounded text-lg hover:opacity-90 transition"
            style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}
          >
            Asegurar mi Dominio Ahora
          </Link>
        </div>
      </section>

      <FooterSection pageName="Administración de Dominio" />
    </main>
  );
}
