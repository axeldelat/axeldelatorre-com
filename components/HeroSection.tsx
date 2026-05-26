'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const plusRef = useRef<HTMLDivElement>(null);
  const asteriskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();

    // Hero title animation on load
    tl.from('h1', { duration: 0.8, opacity: 0, y: 30, ease: 'power2.out' }, 0)
      .from('p', { duration: 0.8, opacity: 0, y: 30, ease: 'power2.out' }, 0.1)
      .from('button', { duration: 0.8, opacity: 0, y: 30, ease: 'power2.out' }, 0.2);

    // Floating decorative elements
    gsap.to(plusRef.current, {
      duration: 6,
      y: -30,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(asteriskRef.current, {
      duration: 8,
      y: 30,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full h-screen bg-[#393E46] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background floating SVGs */}
      <div
        ref={plusRef}
        className="absolute top-20 right-10 md:top-1/4 md:right-1/4 opacity-20 pointer-events-none"
      >
        <img src="/plus.svg" alt="" className="w-20 h-20 md:w-32 md:h-32" />
      </div>
      <div
        ref={asteriskRef}
        className="absolute bottom-20 left-10 md:bottom-1/4 md:left-1/3 opacity-20 pointer-events-none"
      >
        <img src="/asterisk.svg" alt="" className="w-20 h-20 md:w-32 md:h-32" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 text-center">
        <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-[#00ADB4] bg-[#00ADB4]/10 text-[#00ADB4] text-sm font-medium tracking-wide">
          Hosting Estático Administrado
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Tu Presencia Digital
          <br />
          <span className="text-[#00ADB4]">Premium</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-2xl mx-auto">
          Hosting estático de alta calidad con respaldo tecnológico de Vercel y Cloudflare
        </p>
        <button className="px-8 py-4 bg-[#00ADB4] text-white font-semibold rounded hover:bg-[#0099a1] transition text-lg">
          Comenzar Ahora
        </button>
      </div>
    </section>
  );
}
