import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Firm | Huxley Partners",
  description:
    "Learn about Huxley Partners: a Mexico-based law firm advising multinational corporations, institutional investors and global enterprises on their most strategic legal matters.",
};

export default function OurFirm() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Who We Are
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Our Firm
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A legal firm with vision, innovation, and proximity.
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
                Huxley Partners is a law firm trusted by multinational corporations,
                institutional investors, and global enterprises to advise on their
                most consequential legal matters across key markets.
              </p>
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                Through our international platform, we advise at the convergence of
                transactions, regulation, and governance, helping clients navigate
                cross-border complexity and make high-impact decisions with enduring
                strategic significance.
              </p>
              <p className="text-text-light leading-relaxed text-lg">
                Leveraging our international footprint and strategic relationships,
                we deliver seamless legal solutions aligned with our clients&apos;
                commercial objectives—whether expanding operations, executing
                transformational transactions, managing regulatory risk, or pursuing
                long-term growth across jurisdictions.
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
                What Drives Us
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-8">
                Business-First, Not Just Legal
              </h2>
              <p className="text-text-light leading-relaxed mb-6 text-lg">
                We do not view legal advice as an isolated exercise. Our role is
                to serve as a strategic partner to our clients, supporting the
                achievement of their business objectives, the strategic
                management of risk, and informed decision making throughout the
                full lifecycle of an investment, transaction, or operation.
              </p>
              <p className="text-text-light leading-relaxed text-lg">
                Whether advising on international expansion initiatives,
                corporate governance structuring, mergers and acquisitions,
                regulatory exposure, or the ongoing operation of complex
                businesses, our analysis is grounded in a practical
                understanding of how organizations operate across diverse legal,
                regulatory, and commercial environments. We focus on integrating
                legal strategy seamlessly within a global business context,
                ensuring alignment between execution, commercial priorities, and
                long-term objectives.
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
                Our Values
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                We are guided by three fundamental principles
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Integrity",
                description:
                  "Our clients value discretion, judgment, and reliability, especially when outcomes are critical and visibility is high.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Innovation",
                description:
                  "Through our NewLaw and Legal AI practice, we support our clients in modernizing their legal operations, corporate governance frameworks, and contract management.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
              },
              {
                title: "Long-term Commitment",
                description:
                  "We build relationships, not transactions. Many of our client relationships span multiple projects, years, and investment cycles.",
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
                Our Model
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Lean, Senior, and Highly Engaged
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-text-light leading-relaxed text-lg text-center max-w-3xl mx-auto mb-16">
              Our model prioritizes partner-level attention, efficiency, and
              accountability.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Direct partner involvement",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
              },
              {
                title: "Constant strategic oversight",
                icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
              },
              {
                title: "Clear and timely communication",
                icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
              },
              {
                title: "Efficient execution without unnecessary layers",
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
              &ldquo;We believe the law should not only respond, but
              transform.&rdquo;
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
