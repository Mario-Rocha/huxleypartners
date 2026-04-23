import AnimatedSection from "@/components/AnimatedSection";
import GlobeMap from "@/components/GlobeMap";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ubicaciones | Huxley Partners",
  description:
    "Huxley Partners cuenta con oficinas en Ciudad de México y Monterrey, y desks internacionales en Madrid, Praga y Melbourne. Presencia global con alcance local.",
};

export default function Ubicaciones() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Presencia Internacional
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestras Ubicaciones
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Con oficinas y desks internacionales en distintas jurisdicciones, Huxley Partners ofrece
              asesoría legal estratégica con una perspectiva global y un profundo entendimiento de los
              entornos locales en los que operan nuestros clientes.
            </p>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4">
              Nuestra estructura está diseñada para acompañar operaciones complejas y transfronterizas,
              combinando capacidad de ejecución local con coordinación multijurisdiccional.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* World Map — 3D Globe — full viewport height minus navbar */}
      <section className="bg-primary-dark relative overflow-hidden h-[calc(100vh-80px)] max-[900px]:h-auto max-[900px]:overflow-visible">
        <GlobeMap lang="es" />
      </section>

      {/* Nuestras Oficinas + Alcance Internacional */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Nuestras Oficinas
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark mb-6">
                Una visión global.
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                Huxley Partners cuenta con oficinas en Ciudad de México y Monterrey, desde donde se lidera
                la ejecución de asuntos legales complejos, tanto nacionales como internacionales.
              </p>
              <p className="text-text-light leading-relaxed">
                Estas oficinas constituyen el núcleo operativo de la firma y funcionan como centros de
                coordinación para mandatos transfronterizos, integrando equipos, especialidades y estrategias
                legales en función de las necesidades de cada cliente.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Alcance Internacional
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark mb-6">
                Presencia Global, Alcance Local
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                A través de su plataforma internacional, Huxley Partners mantiene desks en jurisdicciones
                estratégicas, incluyendo España, la República Checa y Australia, que permiten apoyar a
                clientes en asuntos con componentes internacionales y facilitar la coordinación legal en
                operaciones multijurisdiccionales.
              </p>
              <p className="text-text-light leading-relaxed">
                Nuestra presencia internacional no es únicamente geográfica, sino funcional y estratégica.
                Trabajamos de manera coordinada entre jurisdicciones con nuestra red para ofrecer una
                asesoría integral que trasciende fronteras y se alinea con los objetivos comerciales de
                nuestros clientes.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Extended text — premium two-card layout */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedSection delay={0}>
              <div className="h-full bg-primary-dark rounded-lg p-8 flex flex-col gap-5 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-blue-400 to-transparent" />
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed text-base flex-1">
                  Ya sea una inversión europea en América Latina, una expansión internacional, o una
                  transacción compleja que involucra múltiples marcos regulatorios, contamos con la estructura,
                  el conocimiento y las capacidades necesarias para acompañar cada etapa del proceso.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="h-full bg-primary-dark rounded-lg p-8 flex flex-col gap-5 border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-blue-400 to-transparent" />
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-300 leading-relaxed text-base flex-1">
                  Nuestra red de oficinas y desks nos permite coordinar equipos, alinear estrategias
                  regulatorias y garantizar una ejecución legal consistente, bajo los más altos estándares
                  profesionales en cada jurisdicción involucrada.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white mb-6">
              ¿Tiene un asunto legal transfronterizo?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Nuestro equipo internacional está listo para ayudarle. Contáctenos para una consulta inicial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors tracking-wide"
              >
                Contáctanos
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/servicios-europa"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors tracking-wide"
              >
                Ver Presencia Global
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
