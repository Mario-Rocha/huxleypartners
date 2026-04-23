import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Corporate Governance in Mexico: Best Practices for Growing Companies | Huxley Partners",
  description:
    "Guide on corporate governance best practices in Mexico. Board structure, regulatory compliance, minority shareholder protection, and ESG governance.",
};

export default function ArticleGobiernoCorporativo() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-dark to-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <Link
              href="/en/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back to blog
            </Link>
            <span className="text-xs font-semibold tracking-wide uppercase text-white/80 bg-white/10 px-3 py-1 rounded-full">
              Corporate Governance
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Corporate Governance in Mexico: Best Practices for Growing
              Companies
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>March 25, 2026</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>7 min read</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-8">
              <p className="text-lg text-text leading-relaxed">
                Corporate governance is not a luxury reserved for large
                publicly traded corporations. For growing companies in Mexico,
                implementing sound corporate governance practices from early
                stages is a strategic decision that facilitates access to
                financing, protects minority shareholders, reduces operational
                risks, and builds trust among investors, clients, and business
                partners.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Regulatory framework in Mexico
              </h2>
              <p className="text-text-light leading-relaxed">
                The legal framework for corporate governance in Mexico is
                supported by several sources. The Ley General de Sociedades
                Mercantiles (LGSM) establishes the basic rules for corporate
                administration, including the structure of governing bodies,
                shareholder rights, and director responsibilities. For
                companies listed on the Bolsa Mexicana de Valores, the Ley del
                Mercado de Valores (LMV) imposes additional, stricter
                requirements.
              </p>
              <p className="text-text-light leading-relaxed">
                The Codigo de Mejores Practicas Corporativas, issued by the
                Consejo Coordinador Empresarial (CCE) and periodically updated,
                is the main reference for voluntary governance in Mexico.
                Although compliance is not mandatory for private companies,
                adopting its principles demonstrates institutional maturity and
                is frequently a requirement of institutional investors and
                private equity funds.
              </p>
              <p className="text-text-light leading-relaxed">
                At the international level, the OECD Corporate Governance
                Guidelines, to which Mexico subscribes as a member country,
                establish globally recognized standards on transparency,
                accountability, equitable treatment of shareholders, and the
                role of the board of directors.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Board of directors structure
              </h2>
              <p className="text-text-light leading-relaxed">
                An effective board of directors is the cornerstone of good
                corporate governance. For growing companies, the recommendation
                is to gradually evolve from a board composed exclusively of
                founders and family members to one that incorporates
                independent directors with complementary expertise.
              </p>
              <p className="text-text-light leading-relaxed">
                The Codigo de Mejores Practicas recommends that at least 25% of
                board members be independent. An independent director is one
                who has no employment, significant commercial, or family
                relationship with the company or its controlling shareholders.
                Their value lies in providing an objective perspective,
                challenging management decisions when necessary, and protecting
                the interests of all shareholders.
              </p>
              <p className="text-text-light leading-relaxed">
                Board committees are fundamental oversight tools. The most
                relevant for growing companies are the Audit Committee
                (financial oversight and internal controls), the Corporate
                Practices Committee (conflicts of interest, related-party
                transactions, compensation), and, with increasing frequency,
                the Risk Committee.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Compliance programs
              </h2>
              <p className="text-text-light leading-relaxed">
                A robust compliance program goes beyond having a code of ethics
                in a document that no one reads. It involves establishing clear
                policies on anti-corruption, anti-money laundering, personal
                data protection, economic competition, and conflicts of
                interest, supported by effective implementation and monitoring
                mechanisms.
              </p>
              <p className="text-text-light leading-relaxed">
                The Ley General de Responsabilidades Administrativas
                establishes that legal entities can be sanctioned for acts of
                corruption, but also provides a significant mitigating factor
                for those that demonstrate having an integrity policy that
                includes: an organization and procedures manual, a code of
                conduct, adequate internal control systems, whistleblower
                systems (ethics hotline), periodic training, and audit
                mechanisms.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Minority shareholder protection
              </h2>
              <p className="text-text-light leading-relaxed">
                Protecting minority shareholder rights is a key indicator of
                corporate governance quality. The LGSM and LMV establish
                fundamental rights: the right to information, the right to
                participate in profits, preemptive rights (preference in new
                share issuances), withdrawal rights in certain circumstances,
                and the right to appoint board members when representing at
                least 25% of the share capital.
              </p>
              <p className="text-text-light leading-relaxed">
                In practice, shareholders&apos; agreements are the most
                commonly used mechanism to regulate the relationship between
                partners and protect minorities. These agreements typically
                include tag-along clauses (co-sale rights), drag-along clauses
                (forced sale obligations), share transfer restrictions, deadlock
                resolution mechanisms, and rights of first offer.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                ESG governance
              </h2>
              <p className="text-text-light leading-relaxed">
                Environmental, social, and governance (ESG) criteria have
                moved beyond being a trend to becoming a requirement from
                investors, regulators, and consumers. In Mexico, the CNBV has
                intensified ESG disclosure requirements for issuers, and
                institutional investment funds increasingly incorporate these
                criteria into their investment decisions.
              </p>
              <p className="text-text-light leading-relaxed">
                For growing companies, integrating ESG governance does not
                necessarily mean publishing 200-page sustainability reports. It
                starts with concrete steps: establishing a basic environmental
                policy, implementing responsible labor practices (including
                NOM-035 compliance and gender equity), ensuring supply chain
                transparency, and documenting governance practices.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Corporate governance in family businesses
              </h2>
              <p className="text-text-light leading-relaxed">
                In Mexico, family businesses represent approximately 90% of
                established companies and generate more than 50% of GDP. Family
                business governance presents unique challenges: the separation
                between ownership, governance, and operations is particularly
                difficult when roles overlap.
              </p>
              <p className="text-text-light leading-relaxed">
                Best practices for family businesses include creating a family
                protocol that defines the rules for family participation in
                the business, establishing a family council as a body separate
                from the board of directors, clear policies for the hiring and
                compensation of family members, and a documented and
                communicated succession plan. Without a clear family protocol,
                family conflicts frequently become corporate conflicts that
                can destroy both the company and family relationships.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Practical steps to implement good corporate governance
              </h2>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Conduct a diagnostic assessment of the current state of
                    corporate governance and identify the most critical gaps.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Formalize the corporate bylaws and internal regulations of
                    the board of directors and its committees.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Appoint at least one independent director with relevant
                    experience in the company&apos;s industry.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Implement a compliance program with a code of conduct,
                    whistleblower hotline, and periodic training.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Execute shareholders&apos; agreements that regulate
                    governance, share transfers, and dispute resolution.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Establish formal decision-making processes with minutes,
                    records, and follow-up on resolutions.
                  </span>
                </li>
              </ul>

              {/* Sources */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-primary-dark mb-4">
                  Sources and references
                </h3>
                <ol className="space-y-2 text-sm text-text-light leading-relaxed list-decimal list-inside">
                  <li>
                    Codigo de Mejores Practicas Corporativas. Consejo
                    Coordinador Empresarial (CCE), latest edition.
                  </li>
                  <li>
                    Ley General de Sociedades Mercantiles (LGSM). Diario Oficial
                    de la Federacion. Latest reform.
                  </li>
                  <li>
                    Ley del Mercado de Valores (LMV). Diario Oficial de la
                    Federacion. Latest reform.
                  </li>
                  <li>
                    OECD. G20/OECD Principles of Corporate Governance, 2023
                    edition.
                  </li>
                  <li>
                    CNBV (Comision Nacional Bancaria y de Valores). General
                    provisions applicable to securities issuers.
                  </li>
                  <li>
                    Ley General de Responsabilidades Administrativas. Article
                    25 (integrity policy).
                  </li>
                  <li>
                    INEGI. Economic Censuses — Family business participation in
                    the Mexican economy.
                  </li>
                  <li>
                    International Finance Corporation (IFC). Corporate
                    Governance Manual for Family Businesses.
                  </li>
                </ol>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark mb-4">
              Need to strengthen your company&apos;s corporate governance?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              We advise companies on implementing corporate governance
              practices tailored to their growth stage and specific needs.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Request advisory services
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
