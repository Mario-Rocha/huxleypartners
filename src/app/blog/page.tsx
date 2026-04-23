import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Insights | Huxley Partners",
  description:
    "Artículos y análisis sobre temas legales, innovación jurídica, nearshoring en México, gobierno corporativo y más.",
};

const articles = [
  {
    slug: "nearshoring-mexico-oportunidades-legales-2026",
    title: "Nearshoring en México: Oportunidades Legales y Retos para Empresas Extranjeras en 2026",
    excerpt:
      "México se ha consolidado como destino clave de nearshoring. Conozca los aspectos legales esenciales para establecer operaciones exitosas en el mercado mexicano.",
    category: "Inversión Extranjera",
    date: "2 de abril, 2026",
    readTime: "8 min",
  },
  {
    slug: "legal-tech-transformacion-despachos-mexico",
    title: "Legal Tech y AI: Cómo la Tecnología Está Transformando los Despachos de Abogados en México",
    excerpt:
      "La adopción de herramientas de Legal AI y automatización está redefiniendo la práctica legal. Exploramos las tendencias y oportunidades para firmas mexicanas.",
    category: "NewLaw",
    date: "28 de marzo, 2026",
    readTime: "6 min",
  },
  {
    slug: "gobierno-corporativo-mejores-practicas",
    title: "Gobierno Corporativo en México: Mejores Prácticas para Empresas en Crecimiento",
    excerpt:
      "Un gobierno corporativo sólido es clave para atraer inversión y garantizar sostenibilidad. Conozca las mejores prácticas y marcos regulatorios aplicables.",
    category: "Gobierno Corporativo",
    date: "25 de marzo, 2026",
    readTime: "7 min",
  },
  {
    slug: "due-diligence-ma-mexico-guia",
    title: "Guía de Due Diligence para Operaciones de M&A en México",
    excerpt:
      "El due diligence es una etapa crítica en cualquier transacción de fusiones y adquisiciones. Presentamos los puntos clave que toda empresa debe considerar.",
    category: "M&A",
    date: "20 de marzo, 2026",
    readTime: "9 min",
  },
  {
    slug: "cumplimiento-laboral-nom-035-037",
    title: "Cumplimiento Laboral en México: NOM-035, NOM-037 y las Obligaciones del Empleador",
    excerpt:
      "Las normas oficiales mexicanas imponen obligaciones específicas a los empleadores. Analizamos los requisitos clave y estrategias de cumplimiento.",
    category: "Laboral",
    date: "15 de marzo, 2026",
    readTime: "7 min",
  },
];

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Conocimiento Legal
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Análisis, artículos y perspectivas sobre los temas legales más
              relevantes para su negocio en México.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Articles */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-12">
            {articles.map((article, i) => (
              <AnimatedSection key={article.slug} delay={i * 0.1}>
                <Link href={`/blog/${article.slug}`}>
                <article className="group border-b border-gray-100 pb-12 last:border-0 cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-xs font-semibold tracking-wide uppercase text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <span className="text-xs text-text-light">
                          {article.date}
                        </span>
                        <span className="text-xs text-text-light">
                          {article.readTime} lectura
                        </span>
                      </div>
                      <h2 className="text-xl md:text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary transition-colors leading-tight">
                        {article.title}
                      </h2>
                      <p className="text-text-light leading-relaxed mb-4">
                        {article.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors">
                        Leer artículo
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                      </span>
                    </div>
                  </div>
                </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Integration */}
      <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#0A66C2] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary-dark">Huxley Partners en LinkedIn</h3>
                <p className="text-sm text-text-light">Síguenos para las últimas actualizaciones</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-surface rounded-2xl p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <p className="text-text-light leading-relaxed mb-6">
                    Mantente al día con nuestras publicaciones, artículos y novedades del mundo legal. Compartimos análisis, tendencias y perspectivas sobre los temas más relevantes para tu negocio.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.linkedin.com/company/huxley-partners/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-semibold rounded-lg hover:bg-[#004182] transition-colors text-sm"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      Seguir en LinkedIn
                    </a>
                    <a
                      href="https://www.linkedin.com/company/huxley-partners/posts/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#0A66C2] text-[#0A66C2] font-semibold rounded-lg hover:bg-[#0A66C2]/5 transition-colors text-sm"
                    >
                      Ver publicaciones
                    </a>
                  </div>
                </div>
                <div className="w-full md:w-64 shrink-0">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl font-bold text-primary">HP</span>
                    </div>
                    <h4 className="font-bold text-primary-dark text-sm">Huxley Partners</h4>
                    <p className="text-xs text-text-light mb-3">Law Firm</p>
                    <a
                      href="https://www.linkedin.com/company/huxley-partners/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#0A66C2] hover:underline"
                    >
                      linkedin.com/company/huxley-partners
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              ¿Tiene preguntas sobre algún tema legal?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Nuestro equipo de abogados especializados está disponible para
              resolver sus dudas y acompañarle en sus decisiones de negocio.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Contáctenos
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
