"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import FlipCard from "@/components/FlipCard";

const services = [
  {
    slug: "corporativo-societario",
    image: "/images/services/corporativo.jpg",
    title: "Corporativo y Societario",
    description:
      "Asesoramos a corporaciones multinacionales, grupos empresariales y fondos de inversión en la estructuración, operación y gobierno de sus entidades en México, garantizando cumplimiento regulatorio, eficiencia corporativa y alineación con estándares internacionales.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    details: [
      "Constitución y estructuración de entidades mexicanas",
      "Secretaría corporativa y cumplimiento societario",
      "Gobierno corporativo y protección de derechos de accionistas",
      "Redacción y actualización de estatutos y acuerdos de socios",
      "Designación de poderes y representaciones legales",
      "Auditorías corporativas y procesos de regularización",
    ],
  },
  {
    slug: "ma-reestructuras",
    image: "/images/services/fusiones.jpg",
    title: "M&A y Reestructuras",
    description:
      "Asesoramos a clientes nacionales e internacionales en transacciones complejas de fusiones, adquisiciones y reorganizaciones corporativas en México y en operaciones transfronterizas. Nuestra asesoría integra análisis legal, financiero y estratégico.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    details: [
      "Fusiones y adquisiciones (buy-side y sell-side)",
      "Inversiones estratégicas y desinversiones",
      "Reestructuras corporativas y societarias",
      "Joint ventures y alianzas estratégicas",
      "Procesos de due diligence legal y regulatorio",
      "Negociación, estructuración y cierre de operaciones",
    ],
  },
  {
    slug: "gobierno-corporativo",
    image: "/images/services/gobierno-corporativo.jpg",
    title: "Gobierno Corporativo",
    description:
      "Diseño e implementación de estructuras de gobernanza, políticas de cumplimiento, programas de compliance y mejores prácticas que fortalecen la toma de decisiones empresariales.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    details: [
      "Diseño de estructuras de gobernanza",
      "Políticas de cumplimiento y compliance",
      "Programas de mejores prácticas",
      "Protección de derechos de accionistas e inversionistas",
    ],
  },
  {
    slug: "inversiones-extranjeras-nearshoring",
    image: "/images/services/nearshoring.jpg",
    title: "Inversiones Extranjeras y Nearshoring",
    description:
      "Acompañamos a inversionistas extranjeros y corporaciones multinacionales en su establecimiento, expansión y relocalización de operaciones en México, particularmente en contextos de nearshoring y proyectos estratégicos de largo plazo.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    details: [
      "Estructuración legal de inversiones extranjeras",
      "Constitución de subsidiarias, sucursales y oficinas de representación",
      "Joint ventures y asociaciones estratégicas",
      "Asesoría en sectores restringidos o altamente regulados",
      "Trámites ante SRE, CNIE y RNIE",
      "Cumplimiento continuo del régimen de inversión extranjera",
      "Incentivos y esquemas de inversión",
    ],
  },
  {
    slug: "laboral",
    image: "/images/services/laboral.jpg",
    title: "Laboral",
    description:
      "Asesoramos a corporaciones multinacionales en la gestión integral de sus relaciones laborales en México, con un enfoque preventivo orientado a la continuidad operativa y la mitigación de contingencias laborales.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    details: [
      "Contratación individual y colectiva",
      "Auditorías laborales y cumplimiento normativo",
      "Prevención y manejo de conflictos laborales",
      "Representación ante tribunales laborales",
      "Cumplimiento NOM-035 y NOM-037",
      "Consultoría en REPSE y esquemas de subcontratación",
    ],
  },
  {
    slug: "financiero",
    image: "/images/services/financiero.jpg",
    title: "Financiero",
    description:
      "Asesoramos a clientes nacionales e internacionales en proyectos financieros que respaldan decisiones estratégicas de inversión, crecimiento o reestructuración en México.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    details: [
      "Análisis financiero legal",
      "Estructuración y planeación de inversiones",
      "Optimización de capital y deuda",
      "Reestructuración financiera",
      "Financiamientos locales e internacionales",
      "Auditorías corporativas, inmobiliarias y crediticias",
    ],
  },
  {
    slug: "mercantil",
    image: "/images/services/mercantil.jpg",
    title: "Mercantil",
    description:
      "Asesoramos a nuestros clientes en relaciones comerciales complejas con un enfoque preventivo que reduzca riesgos y evite litigios futuros, sin perder capacidad de reacción cuando surgen controversias.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    details: [
      "Elaboración, negociación y revisión de contratos mercantiles",
      "Litigios mercantiles",
      "Estrategia comercial preventiva",
      "Métodos alternativos de resolución de disputas (ADR)",
      "Auditorías legales mercantiles",
      "Recuperación de cartera y cobranza",
    ],
  },
  {
    slug: "civil",
    image: "/images/services/civil.jpg",
    title: "Civil",
    description:
      "Ofrecemos asesoría integral en materia civil, combinando experiencia contenciosa con soluciones preventivas para proteger intereses personales y patrimoniales.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    details: [
      "Litigio civil",
      "Responsabilidad civil",
      "Contratos civiles",
      "Asesoría sucesoria",
    ],
  },
  {
    slug: "derecho-administrativo",
    image: "/images/services/derecho-administrativo.jpg",
    title: "Derecho Administrativo",
    description:
      "Asesoramos y representamos a nuestros clientes frente a autoridades federales, estatales y municipales, brindando soluciones sólidas ante controversias administrativas y regulatorias.",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    details: [
      "Procedimientos administrativos",
      "Licitaciones públicas",
      "Contratos administrativos",
      "Recursos administrativos",
      "Juicios contenciosos administrativos",
      "Auditorías regulatorias y de cumplimiento",
    ],
  },
  {
    slug: "fiscal-controversias",
    image: "/images/services/fiscal.jpg",
    title: "Fiscal y Controversias",
    description:
      "Asesoramos y representamos a nuestros clientes frente a autoridades fiscales, brindando defensa estratégica en controversias administrativas y regulatorias.",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
    details: [
      "Procedimientos administrativos fiscales",
      "Recursos administrativos",
      "Juicios contenciosos administrativos",
      "Auditorías fiscales y de cumplimiento",
    ],
  },
  {
    slug: "derecho-de-autor",
    image: "/images/services/derecho-autor.jpg",
    title: "Derecho de Autor",
    description:
      "Asesoramos a empresas y creadores en la protección, explotación y defensa de derechos de autor en México.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    details: [
      "Registro de derechos de autor",
      "Contratos de explotación y licenciamiento",
      "Defensa por infracción",
      "Due diligence en propiedad intelectual",
      "Fair use y uso legítimo",
      "Capacitación especializada",
    ],
  },
  {
    slug: "propiedad-industrial",
    image: "/images/services/propiedad-intelectual.jpg",
    title: "Propiedad Industrial",
    description:
      "Protegemos y gestionamos los activos de propiedad industrial de nuestros clientes, alineándolos con sus estrategias comerciales y de expansión.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    details: [
      "Registro de marcas",
      "Patentes y diseños industriales",
      "Licencias y franquicias",
      "Dominios",
      "Secretos industriales",
      "Litigios de propiedad intelectual",
    ],
  },
  {
    slug: "migratorio",
    image: "/images/services/migratorio.jpg",
    title: "Migratorio",
    description:
      "Asesoramos a empresas y ejecutivos extranjeros en todos los aspectos migratorios necesarios para operar legalmente en México.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    details: [
      "Visas y estancias",
      "Renovaciones y cambios migratorios",
      "Inscripción y actualización de empleadores",
      "Naturalización",
      "Regularización migratoria",
      "Recursos y procedimientos ante INM",
    ],
  },
  {
    slug: "industria-familiar-wealth-management",
    image: "/images/services/industria-familiar.jpg",
    title: "Industria Familiar y Wealth Management",
    description:
      "Asesoramos a grupos familiares y family offices en procesos de institucionalización, sucesión y protección patrimonial, combinando visión legal, corporativa y fiscal.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    details: [
      "Gobierno corporativo familiar",
      "Protocolos y acuerdos familiares",
      "Planes de sucesión",
      "Estructuras patrimoniales",
      "Fideicomisos",
      "Asesoría patrimonial integral",
    ],
  },
  {
    slug: "proteccion-al-consumidor",
    image: "/images/services/proteccion-consumidor.jpg",
    title: "Protección al Consumidor",
    description:
      "Asesoramos a empresas en el cumplimiento de la legislación de protección al consumidor y defensa ante PROFECO.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    details: [
      "Quejas y denuncias",
      "Procedimientos conciliatorios",
      "Contratos de adhesión",
      "Publicidad y promociones",
      "Procedimientos de clausura",
      "Comercio electrónico",
    ],
  },
  {
    slug: "newlaw-legal-ai",
    image: "/images/services/newlaw.jpg",
    title: "NewLaw y Legal AI",
    description:
      "Asesoramos a empresas y departamentos legales en la adopción de soluciones NewLaw, automatización y herramientas de Legal AI para optimizar la gestión legal, mejorar eficiencia y reducir riesgos operativos.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    details: [
      "Implementación de soluciones Legal Tech y Legal AI",
      "Automatización de procesos legales y contractuales",
      "Sistemas de gestión contractual (CLM)",
      "Modernización de departamentos legales",
      "Gobierno corporativo y gestión societaria digital",
    ],
  },
];

export default function Servicios() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Áreas de Práctica
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Nuestros servicios van más allá de la asesoría legal. Utilizamos
              un enfoque innovador y multidisciplinario con experiencia
              internacional para desarrollar soluciones estratégicas ante las
              necesidades más complejas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <FlipCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  details={service.details}
                  icon={service.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              ¿Necesita asesoría legal especializada?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Contáctenos para una consulta inicial. Nuestro equipo está listo
              para ayudarle a encontrar la mejor solución para su caso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Contáctenos
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
