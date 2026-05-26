'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Qué incluye el hosting?',
    answer:
      'Nuestro hosting incluye servidor web optimizado, SSL gratis, respaldos automáticos, CDN global y protección contra DDoS.',
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

function FaqItem({ question, answer, isOpen, onToggle }: {
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
        <span
          style={{
            color: '#111827',
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: 1.45,
          }}
        >
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

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      style={{ backgroundColor: '#393E46', position: 'relative', overflow: 'hidden' }}
      className="w-full py-20 md:py-32"
    >
      {/* Smile watermark */}
      <div
        className="absolute top-10 left-10 opacity-10 pointer-events-none"
        aria-hidden="true"
      >
        <img src="/smile.svg" alt="" className="w-32 h-32 md:w-48 md:h-48" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <h2
          style={{ color: '#FFFFFF' }}
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
        >
          Preguntas Frecuentes
        </h2>
        <p
          style={{ color: '#D1D5DB' }}
          className="text-center mb-12 font-light"
        >
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
          <p style={{ color: '#D1D5DB' }} className="mb-6 font-light">
            ¿Aún tienes preguntas? Nuestro equipo está listo para ayudarte
          </p>
          <button
            style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}
            className="px-8 py-4 font-semibold rounded hover:opacity-90 transition"
          >
            Contactar a Soporte
          </button>
        </div>
      </div>
    </section>
  );
}
