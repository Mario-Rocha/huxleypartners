import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Firma | Huxley Partners",
  description:
    "Conoce a Huxley Partners: una firma de abogados mexicana que asesora a corporaciones multinacionales, inversionistas institucionales y empresas globales en sus asuntos legales más estratégicos.",
};

export default function NuestraFirma() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Quiénes Somos
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Nuestra Firma
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Una firma legal con visión, innovación y cercanía.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Firm Description: Text LEFT + Live Work Create RIGHT */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                Huxley Partners es una firma legal en la que confían corporaciones
                multinacionales, inversionistas institucionales y empresas globales
                para asesorarles en sus asuntos legales más trascendentes en mercados clave.
              </p>
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                A través de nuestra plataforma internacional, asesoramos en la convergencia
                de transacciones, regulación y gobierno corporativo, ayudando a nuestros
                clientes a gestionar la complejidad transfronteriza y a tomar decisiones
                de alto impacto con una relevancia estratégica duradera.
              </p>
              <p className="text-text-light leading-relaxed text-lg">
                Aprovechando nuestra presencia internacional y nuestras relaciones
                estratégicas, ofrecemos soluciones legales integradas y eficientes,
                alineadas con los objetivos comerciales de nuestros clientes, ya sea
                para expandir operaciones, ejecutar transacciones transformacionales,
                gestionar riesgos regulatorios o impulsar el crecimiento de largo plazo
                en distintas jurisdicciones.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[16/9] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dividers/live-work-create.jpg"
                  alt="Live, Work, Create"
                  fill
                  className="object-cover object-right"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy: Text LEFT + Do Something Great RIGHT */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Lo que nos mueve
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-8">
                Enfoque en el negocio, no solo en lo legal
              </h2>
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                No concebimos la asesoría legal como un ejercicio aislado.
                Nuestro rol es acompañar a nuestros clientes en la consecución
                de sus objetivos de negocio, la gestión estratégica del riesgo y
                la toma de decisiones informadas a lo largo de todo el ciclo de
                una inversión, transacción u operación.
              </p>
              <p className="text-text-light leading-relaxed text-lg">
                Ya sea en procesos de expansión internacional, estructuración de
                gobierno corporativo, fusiones y adquisiciones, exposición
                regulatoria o en la operación cotidiana de negocios complejos,
                nuestro análisis se basa en una comprensión práctica de cómo
                operan las organizaciones en entornos jurídicos, regulatorios y
                comerciales diversos, y de cómo integrar la estrategia legal
                dentro de un contexto empresarial global.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dividers/do-something-great.jpg"
                  alt="Do Something Great"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Nuestros Valores
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Nos guiamos por tres principios fundamentales
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Integridad",
                description:
                  "Nuestros clientes valoran la discreción, el criterio y la confiabilidad, especialmente cuando los resultados son críticos y la visibilidad es alta.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Innovación",
                description:
                  "A través de nuestra práctica de NewLaw y Legal AI, apoyamos a nuestros clientes en la modernización de sus operaciones legales, esquemas de gobierno corporativo y gestión contractual.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Compromiso de largo plazo",
                description:
                  "Construimos relaciones, no transacciones. Muchas de nuestras relaciones con clientes se extienden a lo largo de múltiples proyectos, años y ciclos de inversión.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
            ].map((principle, i) => (
              <AnimatedSection key={principle.title} delay={i * 0.15}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={principle.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-4">
                    {principle.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-8">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Nuestro Modelo
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Un modelo ágil, senior y altamente involucrado
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-text-light leading-relaxed text-lg text-center max-w-3xl mx-auto mb-16">
              Nuestro modelo privilegia la atención a nivel socio, la eficiencia
              y la rendición de cuentas.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Participación directa de socios",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              },
              {
                title: "Supervisión estratégica constante",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
              {
                title: "Comunicación clara y oportuna",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
              },
              {
                title: "Ejecución eficiente sin capas innecesarias",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15}>
                <div className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-primary/20">
                  <span className="text-5xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mt-2 group-hover:bg-primary/20 transition-colors duration-500">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-primary-dark leading-snug">
                    {item.title}
                  </h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="py-24 lg:py-32 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white italic leading-relaxed">
              &ldquo;Creemos que el derecho no solo debe responder, sino
              transformar.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
