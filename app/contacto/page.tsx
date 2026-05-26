'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

gsap.registerPlugin(ScrollTrigger);

const servicios = [
  { value: 'hosting-estatico', label: 'Hosting Estático Administrado' },
  { value: 'hosting-compartido', label: 'Hosting Compartido Administrado' },
  { value: 'dominio', label: 'Administración de Dominio' },
  { value: 'otro', label: 'Otro / No estoy seguro' },
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
      );
    }

    // Form card animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
          },
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por ahora solo logueamos, luego agregamos SMTP o API
    console.log('[v0] Form submitted:', formData);
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
  };

  const whatsappNumber = '529841056131';
  const whatsappMessage = encodeURIComponent('Hola Axel, vi tu página Contacto, y me interesa conocer más detalles de tu servicio.');
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        style={{ backgroundColor: '#393E46' }}
        className="relative w-full min-h-[60vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
      >
        {/* Decorative elements */}
        <img
          src="/plus.svg"
          alt=""
          className="absolute top-20 left-10 w-16 h-16 opacity-20 pointer-events-none"
        />
        <img
          src="/asterisk.svg"
          alt=""
          className="absolute bottom-20 right-16 w-20 h-20 opacity-15 pointer-events-none"
        />

        <div ref={heroRef} className="relative z-10 max-w-3xl px-6 text-center">
          <div className="inline-flex items-center mb-6 px-4 py-1.5 rounded-full border border-[#00ADB4] bg-[#00ADB4]/10 text-[#00ADB4] text-sm font-medium tracking-wide">
            Contacto
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hablemos de tu Proyecto
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Estamos aquí para ayudarte a llevar tu presencia digital al siguiente nivel. Escríbenos y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div
              ref={formRef}
              className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#2b2b2b' }}>
                Envíanos un Mensaje
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2" style={{ color: '#2b2b2b' }}>
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00ADB4] focus:ring-2 focus:ring-[#00ADB4]/20 outline-none transition"
                    style={{ color: '#2b2b2b' }}
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="correo" className="block text-sm font-medium mb-2" style={{ color: '#2b2b2b' }}>
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    required
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00ADB4] focus:ring-2 focus:ring-[#00ADB4]/20 outline-none transition"
                    style={{ color: '#2b2b2b' }}
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium mb-2" style={{ color: '#2b2b2b' }}>
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00ADB4] focus:ring-2 focus:ring-[#00ADB4]/20 outline-none transition"
                    style={{ color: '#2b2b2b' }}
                    placeholder="+52 984 123 4567"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-sm font-medium mb-2" style={{ color: '#2b2b2b' }}>
                    Servicio de Interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00ADB4] focus:ring-2 focus:ring-[#00ADB4]/20 outline-none transition bg-white"
                    style={{ color: '#2b2b2b' }}
                  >
                    <option value="">Selecciona un servicio</option>
                    {servicios.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium mb-2" style={{ color: '#2b2b2b' }}>
                    Mensaje (opcional)
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#00ADB4] focus:ring-2 focus:ring-[#00ADB4]/20 outline-none transition resize-none"
                    style={{ color: '#2b2b2b' }}
                    placeholder="Cuéntanos más sobre tu proyecto o dudas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 font-semibold rounded-lg hover:opacity-90 transition"
                  style={{ backgroundColor: '#00ADB4', color: '#FFFFFF' }}
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            {/* WhatsApp and Info */}
            <div className="space-y-8">
              <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#2b2b2b' }}>
                  Prefiere WhatsApp?
                </h3>
                <p className="text-sm font-light mb-6" style={{ color: '#717171' }}>
                  Escríbenos directamente por WhatsApp y te responderemos de inmediato. Es la forma más rápida de ponernos en contacto.
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full py-4 font-semibold rounded-lg hover:opacity-90 transition"
                  style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Escribir por WhatsApp
                </a>
              </div>

              <div className="p-8 bg-[#E5F7F9] rounded-2xl">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#2b2b2b' }}>
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00ADB4' }}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#2b2b2b' }}>Ubicación</p>
                      <p className="text-sm font-light" style={{ color: '#717171' }}>
                        Playa del Carmen, México
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00ADB4' }}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: '#2b2b2b' }}>Horario de Atención</p>
                      <p className="text-sm font-light" style={{ color: '#717171' }}>
                        Lunes a Viernes: 9:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection pageName="Contacto" />
    </main>
  );
}
