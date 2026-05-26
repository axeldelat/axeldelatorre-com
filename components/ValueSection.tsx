'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ValueSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
      });
    });
  }, []);

  const cards = [
    {
      title: 'Google Rankings',
      description: 'Mejora tu posicionamiento SEO con hosting ultrarrápido y optimizado para motores de búsqueda',
      icon: '🔍',
    },
    {
      title: 'IA Agents Ready',
      description: 'Compatible con agentes de IA para automatizar tareas y mejorar la experiencia del usuario',
      icon: '🤖',
    },
    {
      title: 'Social Media Ready',
      description: 'Perfectamente integrado con redes sociales para maximizar tu alcance y engagement',
      icon: '📱',
    },
  ];

  return (
    <section ref={sectionRef} id="valor" className="w-full py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12 text-center">
          El Valor de tu Presencia Digital
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="p-8 bg-[#E5F7F9] rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{card.title}</h3>
              <p className="text-[#717171] font-light leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
