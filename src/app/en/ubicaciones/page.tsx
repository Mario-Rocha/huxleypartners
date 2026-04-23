import AnimatedSection from "@/components/AnimatedSection";
import GlobeMap from "@/components/GlobeMap";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations | Huxley Partners",
  description:
    "Huxley Partners has offices in Mexico City and Monterrey, and international desks in Madrid, Prague and Melbourne. Global presence with local reach.",
};

export default function UbicacionesEN() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              International Presence
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Our Locations
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              With physical offices and international desks across multiple jurisdictions, Huxley
              Partners delivers strategic legal advice supported by a global perspective and a deep
              understanding of local legal and regulatory environments.
            </p>
            <p className="text-base text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4">
              Our structure is designed to support complex, cross-border matters, combining strong
              local execution with coordinated, multi-jurisdictional capabilities.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* World Map — 3D Globe — full viewport height minus navbar */}
      <section className="bg-primary-dark relative overflow-hidden h-[calc(100vh-80px)] max-[900px]:h-auto max-[900px]:overflow-visible">
        <GlobeMap lang="en" />
      </section>

      {/* Our Offices + International Reach */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Our Offices
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark mb-6">
                A global vision.
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                Huxley Partners has offices in Mexico City and Monterrey, from which we lead the execution
                of complex legal matters, both domestic and international.
              </p>
              <p className="text-text-light leading-relaxed">
                These offices form the operational core of the firm and serve as coordination hubs for
                cross-border mandates, integrating teams, specialties, and legal strategies according to
                each client&apos;s needs.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                International Reach
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark mb-6">
                Global Presence, Local Reach
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                Through its international platform, Huxley Partners maintains desks in strategic jurisdictions,
                including Spain, the Czech Republic, and Australia, enabling support for clients on matters
                with international components and facilitating legal coordination in multi-jurisdictional
                operations.
              </p>
              <p className="text-text-light leading-relaxed">
                Our international presence is not merely geographical, but functional and strategic. We work
                in a coordinated manner across jurisdictions with our network to deliver comprehensive advice
                that transcends borders and aligns with our clients&apos; commercial objectives.
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
                  Whether advising on European investment into the Americas, international expansion
                  initiatives, or complex multi-jurisdictional transactions, we have the structure,
                  experience, and capabilities to support each stage of the process.
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
                  Our network of offices and international desks enables us to coordinate teams, align
                  regulatory strategies, and ensure consistent legal execution, in accordance with the
                  highest professional standards in every jurisdiction involved.
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
              Do you have a cross-border legal matter?
            </h2>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Our international team is ready to assist you. Contact us for an initial consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/contacto"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors tracking-wide"
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/en/servicios-europa"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors tracking-wide"
              >
                View Global Presence
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
