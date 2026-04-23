import AnimatedSection from "@/components/AnimatedSection";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";
import Image from "next/image";

const featuredServices = [
  {
    title: "Corporativo y Societario",
    description:
      "Estructuración, operación y gobierno de entidades en México con cumplimiento regulatorio y estándares internacionales.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "M&A y Reestructuras",
    description:
      "Transacciones complejas de fusiones, adquisiciones y reorganizaciones corporativas en México y operaciones transfronterizas.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Gobierno Corporativo",
    description:
      "Estructuras de gobernanza, políticas de cumplimiento y mejores prácticas que fortalecen la toma de decisiones.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "NewLaw & Legal AI",
    description:
      "Soluciones de automatización, Legal Tech y Legal AI para optimizar la gestión legal y reducir riesgos operativos.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Laboral",
    description:
      "Gestión integral de relaciones laborales con enfoque preventivo orientado a la continuidad operativa.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Inversiones Extranjeras y Nearshoring",
    description:
      "Establecimiento, expansión y relocalización de operaciones en México en contextos de nearshoring.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/skyscraper.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/75 via-primary-dark/30 to-primary-dark/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 pb-20">
          <AnimatedSection>
            <Image
              src="/images/logos/logo-full.jpeg"
              alt="Huxley Partners Law Firm"
              width={280}
              height={120}
              className="mx-auto mb-6 sm:mb-8 rounded-lg shadow-2xl w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] h-auto"
              priority
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="font-[family-name:var(--font-display)] text-[1.6rem] sm:text-3xl md:text-[2.75rem] lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Bienvenido a{" "}
              <span className="text-white/90">Huxley Partners</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Transformamos su estrategia de negocios a través de nuestra
              experiencia internacional, innovación jurídica e integridad
              profesional.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide text-sm sm:text-base"
              >
                Conozca nuestras soluciones
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 tracking-wide text-sm sm:text-base"
              >
                Contáctenos
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Nuestra Firma
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
                Una firma legal con visión, innovación y cercanía
              </h2>
              <p className="text-text-light leading-relaxed mb-6">
                Huxley Partners es una firma legal en la que confían corporaciones
                multinacionales, inversionistas institucionales y empresas globales
                para asesorarles en sus asuntos legales más trascendentes en mercados clave.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                A través de nuestra plataforma internacional, asesoramos en la convergencia
                de transacciones, regulación y gobierno corporativo, ayudando a nuestros
                clientes a gestionar la complejidad transfronteriza y a tomar decisiones
                de alto impacto con una relevancia estratégica duradera.
              </p>
              <p className="text-text-light leading-relaxed mb-8">
                Aprovechando nuestra presencia internacional y nuestras relaciones
                estratégicas, ofrecemos soluciones legales integradas y eficientes,
                alineadas con los objetivos comerciales de nuestros clientes, ya sea
                para expandir operaciones, ejecutar transacciones transformacionales,
                gestionar riesgos regulatorios o impulsar el crecimiento de largo plazo
                en distintas jurisdicciones.
              </p>
              <Link
                href="/nuestra-firma"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
              >
                Conocer más
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

            <AnimatedSection delay={0.2}>
              <div className="relative px-6 lg:px-0">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/images/hero/nuestra-firma.jpg"
                    alt="Huxley Partners"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="hidden sm:block absolute -bottom-6 -left-6 w-24 h-24 lg:w-32 lg:h-32 bg-accent/20 rounded-2xl -z-10" />
                <div className="hidden sm:block absolute -top-6 -right-6 w-24 h-24 lg:w-32 lg:h-32 bg-primary/10 rounded-2xl -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-300 mb-4 block">
                Áreas de Práctica
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-6">
                Nuestros Servicios
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Nuestros servicios van más allá de la asesoría legal. Combinamos
                visión estratégica, experiencia internacional e innovación para
                desarrollar soluciones que respondan a las necesidades más
                complejas del mercado mexicano.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 h-full">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                    <svg
                      className="w-7 h-7 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d={service.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-12">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                Ver todos los servicios
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
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Suscríbete
            </h2>
            <p className="text-text-light mb-8 leading-relaxed">
              Suscríbete a nuestro boletín y mantente actualizado con las
              últimas novedades legales. No te preocupes, no te enviaremos
              demasiado contenido.
            </p>
            <NewsletterForm
              placeholder="Tu dirección de email"
              buttonLabel="Suscribir"
              successMessage="¡Suscrito! Te mantendremos al tanto."
            />
            <p className="text-xs text-text-light mt-4">
              Al suscribirte, aceptas recibir comunicaciones electrónicas.
              Puedes cancelar tu suscripción en cualquier momento.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
