import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Due Diligence Guide for M&A Transactions in Mexico | Huxley Partners",
  description:
    "Comprehensive guide on the due diligence process in mergers and acquisitions transactions in Mexico. Types, scope, red flags, and best practices.",
};

export default function ArticleDueDiligence() {
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
              M&A
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Due Diligence Guide for M&A Transactions in Mexico
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>March 20, 2026</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>9 min read</span>
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
                Due diligence is the investigation and verification process
                conducted by a potential buyer before completing a mergers and
                acquisitions (M&A) transaction. In Mexico, where the regulatory
                framework presents significant particularities and informality
                can generate hidden risks, rigorous due diligence is not
                optional: it is the difference between a successful acquisition
                and one that generates multimillion-dollar contingencies.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Types of due diligence
              </h2>

              <h3 className="text-xl font-bold text-primary-dark">
                Legal (corporate) due diligence
              </h3>
              <p className="text-text-light leading-relaxed">
                Corporate legal due diligence examines the corporate status of
                the target company. It includes a review of the articles of
                incorporation and their amendments, verification of the
                company&apos;s legal existence in the Registro Publico de
                Comercio, analysis of the shareholding structure and chain of
                title, review of existing powers of attorney and their scope,
                minutes of shareholder meetings and board sessions, and
                verification of compliance with corporate obligations (SAT
                filings, registrations, annual reports).
              </p>
              <p className="text-text-light leading-relaxed">
                In the Mexican context, it is particularly important to verify
                that bylaw amendments have been duly notarized before a public
                notary and registered with the Registro Publico de Comercio.
                Failure to register can create enforceability issues against
                third parties under the Ley General de Sociedades Mercantiles.
              </p>

              <h3 className="text-xl font-bold text-primary-dark">
                Labor due diligence
              </h3>
              <p className="text-text-light leading-relaxed">
                Given the protectionist nature of Mexican labor law, the labor
                review is frequently where the most significant contingencies
                are discovered. The analysis must cover individual employment
                contracts (verifying compliance with the requirements of
                Article 25 of the Ley Federal del Trabajo), collective
                bargaining agreements and union relationships, status before
                the IMSS and INFONAVIT (including potential differences in the
                integration of the contribution base salary), compliance with
                employee profit sharing (PTU), STPS inspection records, and
                compliance with NOM-035 and NOM-037.
              </p>
              <p className="text-text-light leading-relaxed">
                The 2021 outsourcing reform added an additional layer of
                complexity: it is essential to verify that all specialized
                service contracts have a valid REPSE registration and that
                providers are current on their tax and social security
                obligations, as the contracting party may be jointly and
                severally liable.
              </p>

              <h3 className="text-xl font-bold text-primary-dark">
                Tax due diligence
              </h3>
              <p className="text-text-light leading-relaxed">
                The tax review must cover at least the last five fiscal years
                (the general statute of limitations period under the Codigo
                Fiscal de la Federacion). Key points include the tax status
                before the SAT, filed tax audit reports, pending tax credits
                or disputes, compliance opinions, transfer pricing studies (for
                related-party transactions), the correct treatment of VAT and
                ISR, and the existence of applied tax benefits or incentives.
              </p>

              <h3 className="text-xl font-bold text-primary-dark">
                Environmental due diligence
              </h3>
              <p className="text-text-light leading-relaxed">
                For industrial and manufacturing companies, environmental due
                diligence is critical. Mexico has an extensive environmental
                regulatory framework administered by SEMARNAT and state
                environmental authorities. The review must include
                environmental and operating licenses, environmental impact
                assessments, hazardous waste generation registrations, annual
                operating certificates, and the potential existence of
                environmental liabilities (soil contamination, groundwater)
                that may represent extraordinary remediation costs.
              </p>

              <h3 className="text-xl font-bold text-primary-dark">
                Regulatory and competition due diligence
              </h3>
              <p className="text-text-light leading-relaxed">
                Depending on the sector and the size of the transaction, it
                may be necessary to obtain authorization from the Comision
                Federal de Competencia Economica (COFECE). The Ley Federal de
                Competencia Economica establishes mandatory notification
                thresholds based on the transaction value, the parties&apos;
                revenues, or the value of the assets involved. Closing a
                concentration without the required authorization can result in
                fines of up to 8% of the offender&apos;s revenues and the
                nullification of the transaction.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Common red flags in the Mexican market
              </h2>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Share ownership irregularities:</strong>{" "}
                    Blank-endorsed shares, outdated shareholder registries, or
                    shares transferred without the required legal formalities.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Hidden labor contingencies:</strong>{" "}
                    Under-registration of employees before the IMSS, incorrect
                    integration of the contribution base salary, unreported
                    labor lawsuits, or informal agreements with workers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Tax exposure:</strong> Use of aggressive tax
                    planning schemes, transactions with companies that issue
                    invoices for simulated operations (EFOS), or
                    inconsistencies between tax returns and accounting records.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Real estate issues:</strong> Properties without
                    properly registered deeds, undisclosed liens,
                    irregularities in land use or construction permits.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Regulatory non-compliance:</strong> Operating
                    without the required sector-specific licenses or permits,
                    or with expired permits or permits in the process of being
                    revoked.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Undisclosed litigation:</strong> Civil, commercial,
                    or administrative lawsuits that have not been reported to
                    the buyer during negotiations.
                  </span>
                </li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Typical timeline and key documents
              </h2>
              <p className="text-text-light leading-relaxed">
                A standard due diligence process in Mexico typically takes
                between 4 and 8 weeks, depending on the complexity of the
                target company. Information is typically shared through a
                virtual data room organized by subject matter. Key documents
                that the buyer should request include:
              </p>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Articles of incorporation and all notarized amendments.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Share registry book and share certificates.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Annual ISR and VAT returns for the last five fiscal years.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Material contracts in force (clients, suppliers, leases,
                    financing).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Employee files and evidence of REPSE compliance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Valid permits, licenses, and regulatory authorizations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Complete list of pending litigation and administrative
                    proceedings.
                  </span>
                </li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Considerations for cross-border transactions
              </h2>
              <p className="text-text-light leading-relaxed">
                When the buyer is a foreign company, the due diligence must
                address additional aspects: compliance with the Ley de
                Inversion Extranjera (sector restrictions), the existence of
                double taxation treaties between the jurisdictions involved,
                reporting obligations before the CNIE, implications of the Ley
                Federal para la Prevencion e Identificacion de Operaciones con
                Recursos de Procedencia Ilicita (Anti-Money Laundering Law),
                and considerations regarding foreign exchange controls and
                dividend repatriation.
              </p>
              <p className="text-text-light leading-relaxed">
                It is also essential to consider anti-corruption regulations
                applicable in the buyer&apos;s jurisdiction, such as the
                Foreign Corrupt Practices Act (FCPA) of the United States or
                the UK Bribery Act, which may have significant extraterritorial
                implications.
              </p>

              {/* Sources */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-primary-dark mb-4">
                  Sources and references
                </h3>
                <ol className="space-y-2 text-sm text-text-light leading-relaxed list-decimal list-inside">
                  <li>
                    Ley General de Sociedades Mercantiles (LGSM). Diario Oficial
                    de la Federacion. Latest reform.
                  </li>
                  <li>
                    Ley Federal del Trabajo (LFT). Articles 25, 132, and
                    outsourcing provisions.
                  </li>
                  <li>
                    Codigo Fiscal de la Federacion. Title III (Tax Authority
                    Powers).
                  </li>
                  <li>
                    Ley Federal de Competencia Economica. Articles 61-72
                    (concentrations).
                  </li>
                  <li>
                    COFECE (Comision Federal de Competencia Economica).
                    Concentration notification guide, 2024.
                  </li>
                  <li>
                    Ley de Inversion Extranjera. Articles 5-9 (reserved and
                    regulated activities).
                  </li>
                  <li>
                    Ley Federal para la Prevencion e Identificacion de
                    Operaciones con Recursos de Procedencia Ilicita (Anti-Money
                    Laundering Law).
                  </li>
                  <li>
                    SAT (Servicio de Administracion Tributaria). General Foreign
                    Trade Rules and applicable provisions.
                  </li>
                  <li>
                    SEMARNAT. Ley General del Equilibrio Ecologico y la
                    Proteccion al Ambiente and its Regulations.
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
              Planning an acquisition or merger in Mexico?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Our team of attorneys specialized in M&A conducts thorough due
              diligence processes to protect your investment and anticipate
              contingencies.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Request a proposal
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
