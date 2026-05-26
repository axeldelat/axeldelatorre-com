'use client';

import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <div className="w-full min-h-screen bg-[#393E46] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Bienvenido
          </h1>
          <p className="text-xl text-gray-300">
            Explora nuestros servicios de hosting premium
          </p>
        </div>
      </div>
      <FooterSection pageName="Inicio" />
    </main>
  );
}
