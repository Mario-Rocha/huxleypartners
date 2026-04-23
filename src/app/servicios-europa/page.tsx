"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { useState } from "react";

const services = [
  {
    title: "Corporate & Governance",
    label: "Corporate & Governance",
    subtitle: "Coordinación Internacional y Estructuración Corporativa",
    description:
      "Asesoramos a corporaciones multinacionales, grupos empresariales y fondos de inversión en estructuración corporativa transfronteriza, diseño de gobierno y estrategias de cumplimiento internacional en Europa y Latinoamérica.",
    details: [
      "Estructuración de entidades transfronterizas y diseño de grupo",
      "Coordinación de procesos de constitución y reestructuración con despachos locales",
      "Marcos de gobierno corporativo y acuerdos de accionistas (diseño estratégico)",
      "Alineación de estatutos y documentos de gobierno entre jurisdicciones",
      "Coordinación de cumplimiento corporativo a alto nivel",
      "Revisiones corporativas y estrategias de corporate housekeeping",
    ],
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    title: "Cross-Border M&A y Transacciones Estratégicas",
    label: "Cross-Border M&A",
    subtitle: "Estrategia y Coordinación de Transacciones",
    description:
      "Acompañamos a clientes en operaciones complejas de M&A transfronterizas y transacciones estratégicas a través de estructuración, estrategia de negociación y coordinación multijurisdiccional.",
    details: [
      "Estructuración de transacciones y estrategia de ejecución",
      "Redacción y negociación de documentos transaccionales transfronterizos",
      "Coordinación de due diligence multijurisdiccional con despachos locales",
      "Asignación de riesgo legal y mecánica de la transacción",
      "Reorganizaciones pre-venta, carve-outs y reestructuraciones de grupo",
      "Planificación de integración post-fusión (workstreams legales)",
    ],
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
  },
  {
    title: "Expansion & Structuring",
    label: "Expansion & Structuring",
    subtitle: "Soporte para Expansión Internacional",
    description:
      "Ayudamos a empresas a planificar y ejecutar su expansión internacional en Europa, el Reino Unido y Latinoamérica, proporcionando estructuración legal, coordinación regulatoria y gestión de la ejecución.",
    details: [
      "Estructuración de entrada a mercado y análisis de viabilidad",
      "Coordinación y supervisión de despachos locales",
      "Diseño de estrategia de cumplimiento normativo cross-border",
      "Estructuración de inversiones extranjeras",
      "Coordinación de constitución de filiales, sucursales u oficinas de representación",
      "Estructuración y negociación de joint ventures y alianzas",
    ],
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
  },
  {
    title: "Contratación Mercantil Internacional",
    label: "Contratación Mercantil",
    subtitle: "Estrategia de Contratos Transfronterizos",
    description:
      "Asesoramos en la estrategia, negociación y coordinación de contratos mercantiles internacionales complejos, particularmente en entornos de derecho inglés y common law.",
    details: [
      "Estrategia de contratación y soporte en negociación",
      "Redacción y coordinación de acuerdos internacionales donde sea aplicable",
      "Contratos de tecnología, SaaS, licencias y relacionados con datos",
      "Modelos de asignación de riesgos y playbooks",
      "Prevención de disputas y estrategia de reclamaciones",
    ],
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
  },
  {
    title: "Optimización de la Función Legal y de Contratos (NewLaw)",
    label: "NewLaw",
    subtitle: "Innovación Legal y Eficiencia Operativa",
    description:
      "Asesoramos a empresas y equipos legales a nivel global en operaciones legales, Legal Tech e iniciativas de Legal AI para optimizar la gestión legal y reducir el riesgo contractual.",
    details: [
      "Implementación de soluciones de Legal Tech y Legal AI",
      "Diseño y automatización de procesos legales y contractuales",
      "Sistemas CLM: selección, implementación y optimización",
      "Plataformas de Legal Entity Management y workflows de gobierno corporativo",
      "Asesoría en legal operations (personas, procesos y tecnología)",
      "Gobierno corporativo y gestión societaria digital",
    ],
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
];

export default function ServiciosEuropa() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Plataforma Internacional
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Presencia Global
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Huxley Partners asesora a clientes en múltiples jurisdicciones, ofreciendo asesoría legal
              integrada en transacciones transfronterizas, marcos regulatorios internacionales y desafíos
              complejos de gobierno corporativo a nivel global.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro — 3 feature cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatedSection delay={0}>
              <div className="group h-full flex flex-col gap-5 rounded-2xl border border-primary-dark/10 bg-surface p-8 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-dark/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary-dark group-hover:text-accent transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-primary-dark mb-3 tracking-wide">
                    Plataforma Multijurisdiccional
                  </h3>
                  <p className="text-text-light leading-relaxed text-sm">
                    Nuestra plataforma internacional está diseñada para adaptarse a las realidades del entorno
                    empresarial global, combinando un profundo conocimiento de los mercados locales con un enfoque
                    coordinado y multijurisdiccional. Esta estructura permite a nuestros clientes ejecutar
                    transacciones, desplegar capital y gestionar riesgos de manera eficiente a través de distintas
                    fronteras, sectores y entornos regulatorios.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="group h-full flex flex-col gap-5 rounded-2xl border border-primary-dark/10 bg-surface p-8 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-dark/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary-dark group-hover:text-accent transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-primary-dark mb-3 tracking-wide">
                    Capacidades Integradas
                  </h3>
                  <p className="text-text-light leading-relaxed text-sm">
                    Integramos sólidas capacidades transaccionales, experiencia regulatoria y coordinación
                    transfronteriza para apoyar asuntos legales de alta sofisticación que requieren tanto una
                    perspectiva estratégica como una ejecución precisa.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="group h-full flex flex-col gap-5 rounded-2xl border border-primary-dark/10 bg-surface p-8 shadow-sm hover:shadow-md hover:border-accent/40 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-primary-dark/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                  <svg className="w-5 h-5 text-primary-dark group-hover:text-accent transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-primary-dark mb-3 tracking-wide">
                    Soluciones Alineadas
                  </h3>
                  <p className="text-text-light leading-relaxed text-sm">
                    Aprovechando nuestra presencia internacional y nuestras relaciones estratégicas, ofrecemos
                    soluciones legales integrales alineadas con los objetivos comerciales de nuestros clientes—ya
                    sea para expandir operaciones, gestionar procesos de transformación, administrar riesgos
                    regulatorios o impulsar el crecimiento sostenible en distintos mercados.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* European divider photo */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-primary-dark/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/50 mb-2">Desks Internacionales</span>
          <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white">
            Madrid · Praga · Melbourne
          </p>
        </div>
      </div>

      {/* Services — Tab Panel */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Áreas de Práctica
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark">
                Servicios desde nuestra plataforma internacional
              </h2>
            </div>
          </AnimatedSection>

          {/* Tab buttons */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {services.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActiveTab(i)}
                  className={`px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase rounded-full transition-all duration-300 border ${
                    activeTab === i
                      ? "bg-primary-dark text-white border-primary-dark"
                      : "bg-transparent text-primary-dark/60 border-primary-dark/20 hover:border-primary-dark/50 hover:text-primary-dark"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Content panel */}
          <AnimatedSection delay={0.15}>
            <div className="bg-primary-dark rounded-xl overflow-hidden">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`transition-all duration-500 ${activeTab === i ? "block" : "hidden"}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image */}
                    <div
                      className="h-56 lg:h-auto bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${s.image}')` }}
                    >
                      <div className="absolute inset-0 bg-primary-dark/40" />
                    </div>
                    {/* Text */}
                    <div className="p-8 lg:p-10 flex flex-col gap-5">
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white mb-1">
                          {s.title}
                        </h3>
                        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-accent/80">
                          {s.subtitle}
                        </p>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {s.description}
                      </p>
                      {s.details && (
                        <ul className="space-y-2">
                          {s.details.map((d) => (
                            <li key={d} className="flex items-start gap-3 text-sm text-gray-400">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Tab indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeTab === i ? "w-8 bg-primary-dark" : "w-2 bg-primary-dark/25 hover:bg-primary-dark/50"
                }`}
                aria-label={`Servicio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-6">
              ¿Necesita asesoría legal especializada?
            </h2>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Contáctenos para una consulta inicial. Nuestro equipo está listo para
              ayudarle a encontrar la mejor solución para su caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                Contáctenos
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/ubicaciones"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 tracking-wide"
              >
                Ver Ubicaciones
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
