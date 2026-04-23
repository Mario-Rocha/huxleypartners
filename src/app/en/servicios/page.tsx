"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import FlipCard from "@/components/FlipCard";

const services = [
  {
    slug: "corporate-governance",
    image: "/images/services/corporativo.jpg",
    title: "Corporate & Governance",
    description:
      "We advise multinational corporations, business groups, and investment funds on the structuring, operation, and governance of their entities in Mexico, ensuring regulatory compliance, corporate efficiency, and alignment with international standards.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    details: [
      "Incorporation and structuring of Mexican entities",
      "Corporate secretarial and corporate compliance",
      "Corporate governance and shareholder rights protection",
      "Drafting and updating bylaws and shareholder agreements",
      "Powers of attorney and legal representation",
      "Corporate audits and regularization processes",
    ],
  },
  {
    slug: "mergers-acquisitions",
    image: "/images/services/fusiones.jpg",
    title: "Mergers & Acquisitions",
    description:
      "We advise domestic and international clients on complex merger, acquisition, and corporate reorganization transactions in Mexico and cross-border operations. Our advisory integrates legal, financial, and strategic analysis.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
    details: [
      "Mergers and acquisitions (buy-side and sell-side)",
      "Strategic investments and divestitures",
      "Corporate and corporate restructuring",
      "Joint ventures and strategic alliances",
      "Legal and regulatory due diligence processes",
      "Negotiation, structuring, and closing of transactions",
    ],
  },
  {
    slug: "corporate-governance-advisory",
    image: "/images/services/gobierno-corporativo.jpg",
    title: "Corporate Governance",
    description:
      "Design and implementation of governance structures, compliance policies, compliance programs, and best practices that strengthen business decision-making.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    details: [
      "Design of governance structures",
      "Compliance policies and compliance programs",
      "Best practices programs",
      "Shareholder and investor rights protection",
    ],
  },
  {
    slug: "foreign-investment-nearshoring",
    image: "/images/services/nearshoring.jpg",
    title: "Foreign Investment & Nearshoring",
    description:
      "We accompany foreign investors and multinational corporations in their establishment, expansion, and relocation of operations in Mexico, particularly in nearshoring contexts and long-term strategic projects.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
    details: [
      "Legal structuring of foreign investments",
      "Incorporation of subsidiaries, branches, and representative offices",
      "Joint ventures and strategic partnerships",
      "Advisory in restricted or highly regulated sectors",
      "Procedures before SRE, CNIE, and RNIE",
      "Ongoing compliance with foreign investment regulations",
      "Incentives and investment schemes",
    ],
  },
  {
    slug: "labor",
    image: "/images/services/laboral.jpg",
    title: "Labor",
    description:
      "We advise multinational corporations on the comprehensive management of their labor relations in Mexico, with a preventive approach oriented toward operational continuity and mitigation of labor contingencies.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    details: [
      "Individual and collective employment contracts",
      "Labor audits and regulatory compliance",
      "Prevention and management of labor disputes",
      "Representation before labor courts",
      "NOM-035 and NOM-037 compliance",
      "REPSE consulting and outsourcing schemes",
    ],
  },
  {
    slug: "finance",
    image: "/images/services/financiero.jpg",
    title: "Finance",
    description:
      "We advise domestic and international clients on financial projects that support strategic investment, growth, or restructuring decisions in Mexico.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    details: [
      "Legal financial analysis",
      "Investment structuring and planning",
      "Capital and debt optimization",
      "Financial restructuring",
      "Local and international financing",
      "Corporate, real estate, and credit audits",
    ],
  },
  {
    slug: "commercial",
    image: "/images/services/mercantil.jpg",
    title: "Commercial",
    description:
      "We advise our clients on complex commercial relationships with a preventive approach that reduces risks and avoids future litigation, without losing the capacity to react when disputes arise.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    details: [
      "Drafting, negotiation, and review of commercial contracts",
      "Commercial litigation",
      "Preventive commercial strategy",
      "Alternative dispute resolution methods (ADR)",
      "Commercial legal audits",
      "Portfolio recovery and collections",
    ],
  },
  {
    slug: "civil",
    image: "/images/services/civil.jpg",
    title: "Civil",
    description:
      "We offer comprehensive civil law advisory, combining litigation experience with preventive solutions to protect personal and patrimonial interests.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    details: [
      "Civil litigation",
      "Civil liability",
      "Civil contracts",
      "Succession advisory",
    ],
  },
  {
    slug: "regulatory-administrative",
    image: "/images/services/derecho-administrativo.jpg",
    title: "Regulatory & Administrative",
    description:
      "We advise and represent our clients before federal, state, and municipal authorities, providing solid solutions to administrative and regulatory disputes.",
    icon: "M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z",
    details: [
      "Administrative proceedings",
      "Public tenders",
      "Administrative contracts",
      "Administrative appeals",
      "Administrative litigation",
      "Regulatory and compliance audits",
    ],
  },
  {
    slug: "tax-disputes",
    image: "/images/services/fiscal.jpg",
    title: "Tax & Disputes",
    description:
      "We advise and represent our clients before tax authorities, providing strategic defense in administrative and regulatory disputes.",
    icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
    details: [
      "Tax administrative proceedings",
      "Administrative appeals",
      "Administrative litigation",
      "Tax and compliance audits",
    ],
  },
  {
    slug: "copyright",
    image: "/images/services/derecho-autor.jpg",
    title: "Copyright",
    description:
      "We advise businesses and creators on the protection, exploitation, and defense of copyright in Mexico.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    details: [
      "Copyright registration",
      "Exploitation and licensing agreements",
      "Infringement defense",
      "Intellectual property due diligence",
      "Fair use and legitimate use",
      "Specialized training",
    ],
  },
  {
    slug: "industrial-property",
    image: "/images/services/propiedad-intelectual.jpg",
    title: "Industrial Property",
    description:
      "We protect and manage our clients' industrial property assets, aligning them with their commercial and expansion strategies.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    details: [
      "Trademark registration",
      "Patents and industrial designs",
      "Licenses and franchises",
      "Domains",
      "Trade secrets",
      "Intellectual property litigation",
    ],
  },
  {
    slug: "immigration",
    image: "/images/services/migratorio.jpg",
    title: "Immigration",
    description:
      "We advise companies and foreign executives on all immigration aspects necessary to operate legally in Mexico.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    details: [
      "Visas and stays",
      "Renewals and immigration changes",
      "Employer registration and updates",
      "Naturalization",
      "Immigration regularization",
      "Appeals and proceedings before INM",
    ],
  },
  {
    slug: "family-business-wealth-management",
    image: "/images/services/industria-familiar.jpg",
    title: "Family Business & Wealth Management",
    description:
      "We advise family groups and family offices on institutionalization, succession, and asset protection processes, combining legal, corporate, and tax vision.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    details: [
      "Family corporate governance",
      "Family protocols and agreements",
      "Succession plans",
      "Asset structures",
      "Trusts",
      "Comprehensive wealth advisory",
    ],
  },
  {
    slug: "consumer-protection",
    image: "/images/services/proteccion-consumidor.jpg",
    title: "Consumer Protection",
    description:
      "We advise companies on compliance with consumer protection legislation and defense before PROFECO.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    details: [
      "Complaints and claims",
      "Conciliation proceedings",
      "Adhesion contracts",
      "Advertising and promotions",
      "Closure proceedings",
      "E-commerce",
    ],
  },
  {
    slug: "newlaw-legal-ai",
    image: "/images/services/newlaw.jpg",
    title: "NewLaw & Legal AI",
    description:
      "We advise companies and legal departments on the adoption of NewLaw solutions, automation, and Legal AI tools to optimize legal management, improve efficiency, and reduce operational risks.",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    details: [
      "Implementation of Legal Tech and Legal AI solutions",
      "Automation of legal and contractual processes",
      "Contract lifecycle management systems (CLM)",
      "Modernization of legal departments",
      "Corporate governance and digital corporate management",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80 mb-4 block">
              Practice Areas
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our services go beyond legal advice. We use an innovative and
              multidisciplinary approach with international experience to
              develop strategic solutions for the most complex needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <FlipCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  details={service.details}
                  icon={service.icon}
                  tapLabel="Click to see more"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-primary-dark mb-6">
              Need specialized legal advice?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Contact us for an initial consultation. Our team is ready to
              help you find the best solution for your case.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Contact us
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
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
