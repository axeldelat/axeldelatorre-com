'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ampersandRef = useRef<HTMLDivElement>(null);
  const asteriskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Ampersand animation
    gsap.from(ampersandRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
      opacity: 0,
      scale: 0.8,
    });

    // Asterisk background rotation
    gsap.to(asteriskRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      rotation: 360,
      opacity: 0.3,
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tecnologia"
      className="relative w-full py-20 md:py-32 bg-[#393E46] overflow-hidden"
    >
      {/* Background asterisk */}
      <div
        ref={asteriskRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
      >
        <img src="/asterisk.svg" alt="" className="w-64 h-64 md:w-96 md:h-96" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          Respaldo Tecnológico Premium
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Vercel */}
          <div className="text-center flex-1">
            <div className="mb-6 p-6 bg-white rounded-lg inline-block">
              <p className="font-bold text-[#393E46] text-lg">Vercel</p>
            </div>
            <p className="text-gray-300 font-light">
              Infraestructura global con edge computing y CDN ultrarrápido
            </p>
          </div>

          {/* Ampersand connector */}
          <div
            ref={ampersandRef}
            className="flex-shrink-0 opacity-60 md:opacity-100"
          >
            <img src="/ampersand.svg" alt="&" className="w-16 h-16 md:w-24 md:h-24" />
          </div>

          {/* Cloudflare */}
          <div className="text-center flex-1">
            <div className="mb-6 p-6 bg-white rounded-lg inline-block">
              <p className="font-bold text-[#393E46] text-lg">Cloudflare</p>
            </div>
            <p className="text-gray-300 font-light">
              Protección DDoS, caché inteligente y seguridad de nivel empresarial
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 font-light text-sm">
            Combinamos lo mejor de ambas plataformas para ofrecerte rendimiento y seguridad incomparables
          </p>
        </div>
      </div>
    </section>
  );
}
