'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const smileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pulsing dot animation
    gsap.to(dotRef.current, {
      duration: 1.5,
      scale: 1.3,
      opacity: 0.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Smile watermark rotation
    gsap.to(smileRef.current, {
      duration: 8,
      rotation: 360,
      repeat: -1,
      ease: 'none',
    });

    // Premium plan highlight on scroll
    const premiumCard = sectionRef.current?.querySelector('[data-premium="true"]');
    if (premiumCard) {
      gsap.from(premiumCard, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
        opacity: 0.7,
        y: 20,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="precios"
      className="relative w-full py-20 md:py-32 bg-[#fafafa] overflow-hidden"
    >
      {/* Smile watermark */}
      <div
        ref={smileRef}
        className="absolute bottom-0 right-0 opacity-5 pointer-events-none w-64 h-64"
      >
        <img src="/smile.svg" alt="" className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-16 text-center">
          Planes de Hosting
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Basic Plan */}
          <div className="p-8 bg-white border-2 border-gray-200 rounded-lg">
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Plan Básico</h3>
            <p className="text-[#717171] font-light mb-6">Para proyectos pequeños</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#1a1a1a]">$3,000</span>
              <span className="text-[#717171] font-light ml-2">MXN/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-2 h-2 bg-[#00ADB4] rounded-full"></span>
                Hasta 50 GB almacenamiento
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-2 h-2 bg-[#00ADB4] rounded-full"></span>
                Ancho de banda ilimitado
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-2 h-2 bg-[#00ADB4] rounded-full"></span>
                Certificado SSL gratis
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-2 h-2 bg-[#00ADB4] rounded-full"></span>
                Soporte por email
              </li>
            </ul>
            <button className="w-full py-3 bg-gray-100 text-[#1a1a1a] font-semibold rounded hover:bg-gray-200 transition">
              Contratar
            </button>
          </div>

          {/* Premium Plan */}
          <div
            data-premium="true"
            className="p-8 bg-white rounded-lg border-2 border-[#00ADB4] shadow-lg relative"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00ADB4] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Recomendado
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Hosting Estático Administrado</h3>
            <p className="text-[#717171] font-light mb-6">Para empresas y proyectos críticos</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#00ADB4]">$6,000</span>
              <span className="text-[#717171] font-light ml-2">MXN/mes</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-[#1a1a1a]">
                <div ref={dotRef} className="w-2 h-2 bg-[#00ADB4] rounded-full mt-1.5 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold">Monitoreo 24/7</span>
                  <p className="text-sm text-[#717171] font-light">Vigilancia continua</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-2 h-2 bg-[#00ADB4] rounded-full"></span>
                Almacenamiento ilimitado
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-2 h-2 bg-[#00ADB4] rounded-full"></span>
                CDN global optimizado
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-2 h-2 bg-[#00ADB4] rounded-full"></span>
                Soporte prioritario 24/7
              </li>
              <li className="flex items-center gap-3 text-[#1a1a1a]">
                <span className="w-2 h-2 bg-[#00ADB4] rounded-full"></span>
                Certificados SSL avanzados
              </li>
            </ul>
            <button className="w-full py-3 bg-[#00ADB4] text-white font-semibold rounded hover:bg-[#0099a1] transition">
              Contratar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
