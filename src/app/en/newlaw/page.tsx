"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const methodology = [
  {
    label: "Automation",
    title: "Identification of areas with high automation potential",
    description:
      "We analyze our clients' legal processes to identify those that can benefit from automation, significantly reducing time and operational costs.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
  },
  {
    label: "Legal Analytics",
    title: "Legal Analytics",
    description:
      "We use data analysis tools to identify patterns, predict outcomes, and make informed, evidence-based decisions, strengthening legal strategy with data intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    label: "Ethics & Safety",
    title: "Design of ethical and safe use protocols",
    description:
      "We develop governance frameworks for the responsible use of legal technology, ensuring regulatory compliance and data protection in every implementation.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
  },
  {
    label: "Digital Collaboration",
    title: "Secure digital collaboration",
    description:
      "We implement platforms and collaboration tools that facilitate teamwork and client communication in a secure and efficient manner.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
  },
  {
    label: "Tech Monitoring",
    title: "Constant technology monitoring",
    description:
      "We continuously monitor legal technology trends to select the most suitable tools and stay at the forefront of the sector.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
  },
  {
    label: "Training",
    title: "Continuous training",
    description:
      "We invest in the ongoing training of our team in the latest technologies and legal methodologies to always deliver the best service to our clients.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
];

export default function NewLawEN() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Legal Innovation
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              NewLaw &amp; Legal AI
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We drive a legal practice that evolves with digital transformation,
              integrating cutting-edge technology with strategic thinking.
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
              &ldquo;Our proposal is not just to adopt tools; it is to put innovation at the service of legal value.&rdquo;
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
                Strategic Approach
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark">
                Our methodology combines:
              </h2>
            </div>
          </AnimatedSection>

          {/* Pills — row 1: first 4, row 2: last 2 */}
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
                aria-label={`Step ${i + 1}`}
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
              &ldquo;The legal technology we use does not seek to replace human judgment, but to enhance it.&rdquo;
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-12">
              <Link
                href="/en/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                Discover how we can help you
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
