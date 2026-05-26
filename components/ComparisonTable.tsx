'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ComparisonTable() {
  const sectionRef = useRef<HTMLElement>(null);
  const ourColumnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ourColumnRef.current || !sectionRef.current) return;

    gsap.fromTo(
      ourColumnRef.current,
      { boxShadow: '0 0 0px rgba(0, 173, 180, 0)' },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
        boxShadow: '0 0 30px rgba(0, 173, 180, 0.35)',
        duration: 1,
      }
    );
  }, []);

  const rows = [
    { feature: 'Velocidad de Carga', competitors: 'Promedio', ours: 'Ultrarrápida (<100ms)' },
    { feature: 'Seguridad DDoS', competitors: 'Básica', ours: 'Enterprise Level' },
    { feature: 'Cobertura Global', competitors: 'Limitada', ours: 'Más de 200 países' },
    { feature: 'Soporte 24/7', competitors: 'Email', ours: 'Chat + Phone' },
    { feature: 'Uptime Garantizado', competitors: '99.5%', ours: '99.99%' },
  ];

  return (
    <section ref={sectionRef} className="w-full py-20 md:py-32 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12 text-center text-balance">
          Comparativa de Servicios
        </h2>

        {/* Scroll wrapper gives horizontal scroll on small screens */}
        <div className="w-full overflow-x-auto rounded-2xl">
          {/* min-w keeps the table legible; it scrolls inside the wrapper */}
          <table className="min-w-[600px] w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-[#00ADB4]">
                <th className="text-left py-4 px-6 font-bold text-[#1a1a1a] whitespace-nowrap">
                  Característica
                </th>
                <th className="text-left py-4 px-6 font-bold text-[#1a1a1a] whitespace-nowrap">
                  Competencia
                </th>
                <th className="py-0 px-0 font-bold text-[#1a1a1a] w-[220px]">
                  {/* Highlighted column header sits inside the animated wrapper */}
                  <div
                    ref={ourColumnRef}
                    className="h-full px-6 py-4 text-left rounded-t-xl bg-[#E5F7F9] text-[#00ADB4] transition-shadow"
                  >
                    Nuestro Servicio
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => {
                const isLast = index === rows.length - 1;
                return (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-white transition-colors"
                  >
                    <td className="py-4 px-6 text-[#1a1a1a] font-semibold whitespace-nowrap">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-[#717171]">{row.competitors}</td>
                    <td className="py-0 px-0 w-[220px]">
                      <div
                        className={`px-6 py-4 bg-[#E5F7F9] text-[#00ADB4] font-bold ${isLast ? 'rounded-b-xl' : ''}`}
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
  );
}
