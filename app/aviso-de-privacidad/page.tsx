import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';

export const metadata = {
  title: 'Aviso de Privacidad — Axel de la Torre',
  description: 'Aviso de privacidad integral de Axel Federico de la Torre Gómez conforme a la LFPDPPP.',
};

const sections = [
  {
    id: 'datos-personales',
    title: '1. Datos Personales que Serán Recabados',
    content: (
      <>
        <p>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos las siguientes categorías de datos personales:</p>
        <ul>
          <li><strong>Datos de identificación:</strong> Nombre completo.</li>
          <li><strong>Datos de contacto:</strong> Correo electrónico, teléfono celular.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'finalidades',
    title: '2. Finalidades del Tratamiento de los Datos',
    content: (
      <>
        <p><strong>Finalidades Primarias</strong> (necesarias para el servicio solicitado):</p>
        <ul>
          <li>Responder a sus mensajes de contacto, dudas o cotizaciones.</li>
          <li>Enviar información sobre los servicios de consultoría solicitados.</li>
        </ul>
        <p><strong>Finalidades Secundarias</strong> (no necesarias para el servicio, pero que mejoran la atención):</p>
        <ul>
          <li>Enviar nuestro boletín de noticias, artículos de blog y promociones de servicios.</li>
        </ul>
        <p>
          Si usted no desea que sus datos personales sean tratados para finalidades secundarias, puede manifestarlo enviando un correo electrónico a{' '}
          <strong>axel@axeldelatorre.com</strong> con el asunto: <em>"Negativa de uso para finalidades secundarias"</em>. La negativa no será motivo para que le neguemos los servicios principales.
        </p>
      </>
    ),
  },
  {
    id: 'transferencia',
    title: '3. Transferencia de Datos Personales',
    content: (
      <p>
        Le informamos que sus datos personales <strong>no</strong> serán compartidos con terceros ajenos a la organización, salvo en los casos previstos en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares o cuando medie consentimiento expreso del titular.
      </p>
    ),
  },
  {
    id: 'derechos-arco',
    title: '4. Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)',
    content: (
      <>
        <p>
          Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (<strong>Acceso</strong>). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (<strong>Rectificación</strong>); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (<strong>Cancelación</strong>); así como oponerse al uso de sus datos personales para fines específicos (<strong>Oposición</strong>).
        </p>
        <p>Para ejercer cualquiera de los Derechos ARCO deberá:</p>
        <ol>
          <li>Enviar un correo electrónico a <strong>axel@axeldelatorre.com</strong>.</li>
          <li>Incluir su nombre completo y medio de contacto para recibir notificaciones.</li>
          <li>Adjuntar copia de identificación oficial vigente (INE o pasaporte).</li>
          <li>Describir claramente los datos y el derecho que desea ejercer.</li>
        </ol>
        <p>
          El Responsable comunicará la resolución adoptada en un plazo máximo de <strong>20 días hábiles</strong> contados desde la recepción de la solicitud. Si resulta procedente, se hará efectiva dentro de los <strong>15 días hábiles</strong> siguientes.
        </p>
      </>
    ),
  },
  {
    id: 'revocacion',
    title: '5. Revocación del Consentimiento y Limitación de Uso',
    content: (
      <p>
        Usted puede revocar el consentimiento que nos haya otorgado para el tratamiento de sus datos personales, o limitar su divulgación, enviando su solicitud por escrito a{' '}
        <strong>axel@axeldelatorre.com</strong>. Tenga en cuenta que, en algunos casos, por obligación legal podríamos requerir continuar tratando sus datos.
      </p>
    ),
  },
  {
    id: 'tecnologias-rastreo',
    title: '6. Uso de Tecnologías de Rastreo en nuestro Portal de Internet',
    content: (
      <p>
        En nuestra página de internet <strong>www.axeldelatorre.com</strong> utilizamos cookies y otras tecnologías similares a través de las cuales es posible monitorear su comportamiento como usuario de internet para brindarle un mejor servicio. Los datos que recabamos mediante estas tecnologías incluyen dirección IP, tipo de navegador y páginas visitadas. Estas tecnologías pueden deshabilitarse desde la configuración de su navegador.
      </p>
    ),
  },
  {
    id: 'cambios',
    title: '7. Cambios al Aviso de Privacidad',
    content: (
      <p>
        El presente aviso de privacidad puede sufrir modificaciones derivadas de nuevos requerimientos legales o de nuestras propias necesidades. Cualquier cambio será publicado en{' '}
        <strong>www.axeldelatorre.com/aviso-de-privacidad</strong>.
      </p>
    ),
  },
];

export default function AvisoDePrivacidad() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />

      {/* Page header */}
      <section
        style={{ backgroundColor: '#393E46' }}
        className="w-full pt-36 pb-16"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p
            style={{ color: '#00ADB4' }}
            className="text-sm font-medium tracking-wide uppercase mb-3"
          >
            Legal
          </p>
          <h1
            style={{ color: '#FFFFFF' }}
            className="text-4xl md:text-5xl font-bold leading-tight text-balance"
          >
            Aviso de Privacidad
          </h1>
          <p style={{ color: '#9CA3AF' }} className="mt-4 text-sm font-light">
            Última actualización: 25 de Mayo de 2026
          </p>
        </div>
      </section>

      {/* Responsible party intro */}
      <section style={{ backgroundColor: '#fafafa' }} className="w-full py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p style={{ color: '#374151' }} className="leading-relaxed">
            <strong>Axel Federico de la Torre Gómez</strong>, en lo sucesivo denominado como "El Responsable", es el responsable del uso, tratamiento y protección de sus datos personales, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
          </p>
        </div>
      </section>

      {/* Sections */}
      <article style={{ backgroundColor: '#fafafa' }} className="w-full pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-12">
            {sections.map((section) => (
              <section key={section.id} id={section.id}>
                <h2
                  style={{ color: '#1a1a1a' }}
                  className="text-xl font-bold mb-4 pb-2 border-b border-gray-200"
                >
                  {section.title}
                </h2>
                <div
                  style={{ color: '#374151' }}
                  className="leading-relaxed flex flex-col gap-3 text-[0.9375rem] [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-1.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:flex [&_ol]:flex-col [&_ol]:gap-1.5"
                >
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <FooterSection pageName="Aviso de Privacidad" />
    </main>
  );
}
