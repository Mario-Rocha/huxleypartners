"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const methodology = [
  {
    label: "Automatización",
    title: "Identificación de áreas con alto potencial de automatización",
    description:
      "Analizamos los procesos legales de nuestros clientes para identificar aquellos que pueden beneficiarse de la automatización, reduciendo tiempos y costos operativos de manera significativa.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
  },
  {
    label: "Legal Analytics",
    title: "Legal Analytics",
    description:
      "Utilizamos herramientas de análisis de datos para identificar patrones, predecir resultados y tomar decisiones informadas basadas en evidencia, fortaleciendo la estrategia legal con inteligencia de datos.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    label: "Ética y Seguridad",
    title: "Diseño de protocolos de uso ético y seguro",
    description:
      "Desarrollamos marcos de gobernanza para el uso responsable de la tecnología legal, asegurando el cumplimiento normativo y la protección de datos en cada implementación.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    label: "Colaboración Digital",
    title: "Colaboración digital segura",
    description:
      "Implementamos plataformas y herramientas de colaboración que facilitan el trabajo en equipo y la comunicación con nuestros clientes de forma segura y eficiente.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    label: "Vigilancia Tech",
    title: "Vigilancia tecnológica constante",
    description:
      "Monitoreamos continuamente las tendencias en tecnología legal para seleccionar las herramientas más adecuadas y mantenernos a la vanguardia del sector.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    label: "Capacitación",
    title: "Capacitación continua",
    description:
      "Invertimos en la formación permanente de nuestro equipo en las últimas tecnologías y metodologías legales para ofrecer siempre el mejor servicio a nuestros clientes.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
];

export default function NewLaw() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Innovación Jurídica
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              NewLaw &amp; Legal AI
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Impulsamos una práctica legal que evoluciona al ritmo de la transformación digital,
              integrando tecnología de vanguardia con pensamiento estratégico.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Dream Big — full-width image + quote below */}
      <section className="bg-white">
        <AnimatedSection>
          <div className="w-full bg-[#111]">
            <Image
              src="/images/dividers/dream-big.jpg"
              alt="Dream Big"
              width={1080}
              height={719}
              className="w-full h-auto block"
              priority
            />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-16 text-center">
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl text-primary-dark italic leading-relaxed text-balance">
              &ldquo;Nuestra propuesta no es solo adoptar herramientas; es poner la innovación al servicio del valor legal.&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Methodology — Tab Panel */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Enfoque Estratégico
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark">
                Nuestra metodología combina:
              </h2>
            </div>
          </AnimatedSection>

          {/* Pills — fila 1: primeros 4, fila 2: últimos 2 */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-col items-center gap-2 mb-8">
              <div className="flex flex-wrap gap-2 justify-center">
                {methodology.slice(0, 4).map((m, i) => (
                  <button
                    key={m.label}
                    onClick={() => setActiveTab(i)}
                    className={`px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase rounded-full transition-all duration-300 border ${
                      activeTab === i
                        ? "bg-primary-dark text-white border-primary-dark"
                        : "bg-transparent text-primary-dark/60 border-primary-dark/20 hover:border-primary-dark/50 hover:text-primary-dark"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-2 justify-center">
                {methodology.slice(4).map((m, i) => (
                  <button
                    key={m.label}
                    onClick={() => setActiveTab(i + 4)}
                    className={`px-4 py-2 text-xs font-semibold tracking-[0.12em] uppercase rounded-full transition-all duration-300 border ${
                      activeTab === i + 4
                        ? "bg-primary-dark text-white border-primary-dark"
                        : "bg-transparent text-primary-dark/60 border-primary-dark/20 hover:border-primary-dark/50 hover:text-primary-dark"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Content panel */}
          <AnimatedSection delay={0.15}>
            <div className="bg-primary-dark rounded-xl overflow-hidden">
              {methodology.map((m, i) => (
                <div
                  key={m.label}
                  className={`transition-all duration-500 ${activeTab === i ? "block" : "hidden"}`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div
                      className="h-56 lg:h-auto bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${m.image}')` }}
                    >
                      <div className="absolute inset-0 bg-primary-dark/40" />
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col gap-5">
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                        {m.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {methodology.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeTab === i ? "w-8 bg-primary-dark" : "w-2 bg-primary-dark/25 hover:bg-primary-dark/50"
                }`}
                aria-label={`Paso ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote + CTA */}
      <section className="py-24 lg:py-32 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-display)] text-2xl md:text-4xl font-bold text-white italic leading-relaxed">
              &ldquo;La tecnología legal que usamos no busca reemplazar el criterio humano, sino potenciarlo.&rdquo;
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-12">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                Descubra cómo podemos ayudarle
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
