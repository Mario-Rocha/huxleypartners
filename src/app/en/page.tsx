import AnimatedSection from "@/components/AnimatedSection";
import NewsletterForm from "@/components/NewsletterForm";
import Link from "next/link";
import Image from "next/image";

const featuredServices = [
  {
    title: "Corporate & Governance",
    description:
      "Structuring, operation, and governance of entities in Mexico with regulatory compliance and international standards.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Complex merger, acquisition, and corporate reorganization transactions in Mexico and cross-border operations.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    title: "Corporate Governance",
    description:
      "Governance structures, compliance policies, and best practices that strengthen business decision-making.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "NewLaw & Legal AI",
    description:
      "Automation solutions, Legal Tech, and Legal AI to optimize legal management and reduce operational risks.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Labor",
    description:
      "Comprehensive labor relations management with a preventive approach oriented toward operational continuity.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    title: "Foreign Investment & Nearshoring",
    description:
      "Establishment, expansion, and relocation of operations in Mexico in nearshoring contexts.",
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

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <AnimatedSection>
            <Image
              src="/images/logos/logo-full.jpeg"
              alt="Huxley Partners Law Firm"
              width={320}
              height={140}
              className="mx-auto mb-8 rounded-lg shadow-2xl w-[180px] sm:w-[240px] md:w-[300px] lg:w-[320px] h-auto"
              priority
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <h1 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Welcome to{" "}
              <span className="text-gray-300">Huxley Partners</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-10">
              We transform your business strategy through our international
              experience, legal innovation, and professional integrity.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en/servicios"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                Discover our solutions
              </Link>
              <Link
                href="/en/contacto"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 tracking-wide"
              >
                Contact us
              </Link>
            </div>
          </AnimatedSection>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Our Firm
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-6 leading-tight">
                A legal firm with vision, innovation, and proximity
              </h2>
              <p className="text-text-light leading-relaxed mb-6">
                Huxley Partners is a law firm trusted by multinational corporations,
                institutional investors, and global enterprises to advise on their
                most consequential legal matters across key markets.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                Through our international platform, we advise at the convergence of
                transactions, regulation, and governance, helping clients navigate
                cross-border complexity and make high-impact decisions with enduring
                strategic significance.
              </p>
              <p className="text-text-light leading-relaxed mb-8">
                Leveraging our international footprint and strategic relationships,
                we deliver seamless legal solutions aligned with our clients&apos;
                commercial objectives—whether expanding operations, executing
                transformational transactions, managing regulatory risk, or pursuing
                long-term growth across jurisdictions.
              </p>
              <Link
                href="/en/nuestra-firma"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
              >
                Learn more
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
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
                Practice Areas
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Our services go beyond legal advice. We combine strategic
                vision, international experience, and innovation to develop
                solutions that address the most complex needs of the Mexican
                market.
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
                href="/en/servicios"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 tracking-wide"
              >
                View all services
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
              Subscribe
            </h2>
            <p className="text-text-light mb-8 leading-relaxed">
              Subscribe to our newsletter and stay updated with the latest
              legal developments. Don&apos;t worry, we won&apos;t send you too
              much content.
            </p>
            <NewsletterForm
              placeholder="Your email address"
              buttonLabel="Subscribe"
              successMessage="Subscribed! We'll keep you updated."
            />
            <p className="text-xs text-text-light mt-4">
              By subscribing, you agree to receive electronic communications.
              You can unsubscribe at any time.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
