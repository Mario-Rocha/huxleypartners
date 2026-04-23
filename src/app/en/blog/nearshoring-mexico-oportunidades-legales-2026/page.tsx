import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Nearshoring in Mexico: Legal Opportunities and Challenges for Foreign Companies in 2026 | Huxley Partners",
  description:
    "Comprehensive analysis of the legal framework for foreign companies seeking to establish nearshoring operations in Mexico. Investment, labor, tax, and immigration requirements.",
};

export default function ArticleNearshoring() {
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
              Foreign Investment
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Nearshoring in Mexico: Legal Opportunities and Challenges for
              Foreign Companies in 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>April 2, 2026</span>
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>8 min read</span>
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
                Over the past three years, Mexico has established itself as the
                leading nearshoring destination in Latin America. The combination
                of geographic proximity to the United States, a competitive
                workforce, and a trade environment backed by the USMCA has
                attracted unprecedented investment. However, the success of any
                nearshoring operation largely depends on properly navigating the
                Mexican legal framework.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                The context: Mexico as an investment hub
              </h2>
              <p className="text-text-light leading-relaxed">
                According to data from the Secretaria de Economia, foreign
                direct investment (FDI) in Mexico reached historic levels in
                2024 and 2025, with sectors such as advanced manufacturing,
                technology, and shared services leading the capital flow. The
                Instituto Nacional de Estadistica y Geografia (INEGI) reports
                that the manufacturing industry represented approximately 17%
                of the national GDP, consolidating Mexico as the twelfth
                largest manufacturing economy in the world. States such as
                Nuevo Leon, Jalisco, Queretaro, and Guanajuato have become
                high-demand industrial corridors, while Mexico City and
                Monterrey lead in corporate services and operations centers.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Legal requirements for foreign investment
              </h2>
              <p className="text-text-light leading-relaxed">
                The Ley de Inversion Extranjera (LIE) establishes the general
                framework for foreign capital participation in economic
                activities in Mexico. While most sectors allow up to 100%
                foreign investment, there are activities exclusively reserved
                to the Mexican State (such as oil, public electricity service,
                and postal services) and activities reserved to Mexican
                nationals or companies with a foreign exclusion clause
                (passenger land transportation, gas stations, among others).
              </p>
              <p className="text-text-light leading-relaxed">
                To incorporate a Mexican company with foreign participation,
                the investor must obtain a permit from the Secretaria de
                Relaciones Exteriores (SRE) and register with the Registro
                Nacional de Inversiones Extranjeras (RNIE) before the Comision
                Nacional de Inversiones Extranjeras (CNIE). This registration
                is mandatory when foreign investment participates in the share
                capital of a Mexican company, when commercial activities are
                carried out in Mexico, or when the investment threshold
                established by law is exceeded.
              </p>
              <p className="text-text-light leading-relaxed">
                The most commonly used corporate vehicles are the Sociedad
                Anonima de Capital Variable (S.A. de C.V.) and the Sociedad de
                Responsabilidad Limitada de Capital Variable (S. de R.L. de
                C.V.). The choice depends on factors such as the number of
                partners, the desired governance structure, and tax
                implications.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Labor framework: REPSE and NOM-035
              </h2>
              <p className="text-text-light leading-relaxed">
                One of the most critical areas for foreign companies is labor
                compliance. The 2021 outsourcing reform radically transformed
                the landscape: now only the outsourcing of specialized services
                or specialized works that are not part of the corporate purpose
                or the predominant economic activity of the contracting company
                is permitted.
              </p>
              <p className="text-text-light leading-relaxed">
                Companies offering specialized services must hold the Registro
                de Prestadoras de Servicios Especializados u Obras
                Especializadas (REPSE) before the Secretaria del Trabajo y
                Prevision Social (STPS). Non-compliance can result in fines of
                up to 50,000 UMAs (approximately $5.4 million pesos in 2026)
                and joint liability for the contracting party.
              </p>
              <p className="text-text-light leading-relaxed">
                Additionally, NOM-035-STPS-2018 requires all employers to
                identify, analyze, and prevent psychosocial risk factors in the
                workplace. For workplaces with more than 50 employees, periodic
                assessments of the organizational environment and the
                implementation of documented corrective measures are required.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Tax incentives and considerations
              </h2>
              <p className="text-text-light leading-relaxed">
                Mexico offers various incentives to attract foreign investment.
                At the federal level, the maquiladora regime (IMMEX) allows the
                temporary import of raw materials and machinery without paying
                tariffs or VAT, provided that finished products are exported.
                This program has been fundamental to the growth of the export
                manufacturing sector.
              </p>
              <p className="text-text-light leading-relaxed">
                Several states offer additional incentives that may include
                payroll tax reductions, property tax discounts, workforce
                training support, and streamlined construction permits. Nuevo
                Leon, Jalisco, and Queretaro have been particularly aggressive
                in their investment attraction packages.
              </p>
              <p className="text-text-light leading-relaxed">
                However, it is essential to consider tax obligations: the
                corporate income tax (ISR) rate is 30%, and transactions
                between related parties are subject to strict transfer pricing
                rules in accordance with OECD guidelines.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Real estate and property
              </h2>
              <p className="text-text-light leading-relaxed">
                The acquisition of real estate by foreigners is subject to
                constitutional restrictions in the so-called restricted zone
                (100 km from borders and 50 km from coastlines). In these
                areas, foreigners can acquire property rights through bank
                trusts (fideicomisos) with authorized credit institutions.
                Outside the restricted zone, Mexican companies with foreign
                participation can acquire real estate directly, provided they
                include the Calvo clause in their bylaws.
              </p>
              <p className="text-text-light leading-relaxed">
                For industrial projects, industrial parks offer significant
                advantages: ready-to-operate infrastructure, simplified permits
                and licenses, and in many cases, access to pre-approved state
                incentives. The Asociacion Mexicana de Parques Industriales
                Privados (AMPIP) reports an occupancy rate exceeding 95% in the
                country&apos;s main industrial corridors.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Immigration requirements for executives and key personnel
              </h2>
              <p className="text-text-light leading-relaxed">
                Foreign executives and employees working in Mexico need a
                temporary resident visa with permission to carry out paid
                activities. The typical process involves the Mexican company
                obtaining a registration certificate as an employer before the
                Instituto Nacional de Migracion (INM) and subsequently
                processing the employment offer that will serve as the basis
                for the foreigner to apply for their visa at the corresponding
                Mexican consulate.
              </p>
              <p className="text-text-light leading-relaxed">
                For short-term business stays (meetings, inspections,
                training), a visitor visa without permission to carry out paid
                activities is generally sufficient. The USMCA also facilitates
                temporary mobility of professionals between Mexico, the United
                States, and Canada in certain occupational categories.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Recommendations for a successful market entry
              </h2>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Conduct a preliminary sector analysis to determine whether
                    there are restrictions on foreign investment in the planned
                    activity.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Choose the appropriate corporate vehicle considering the
                    group structure, tax implications in both jurisdictions,
                    and double taxation treaties.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Plan labor compliance from the outset, including the
                    hiring structure, REPSE registration if specialized
                    services will be used, and NOM-035 implementation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Evaluate available incentives at both the federal and
                    state level and negotiate them before committing the
                    investment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Engage specialized legal counsel in corporate, tax, labor,
                    and immigration law to avoid costly contingencies.
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
                    Ley de Inversion Extranjera. Diario Oficial de la
                    Federacion. Latest published reform.
                  </li>
                  <li>
                    Secretaria de Economia. Statistical Report on Foreign
                    Direct Investment Trends in Mexico, 2024-2025.
                  </li>
                  <li>
                    INEGI. Gross Domestic Product by Economic Activity.
                    Sistema de Cuentas Nacionales de Mexico.
                  </li>
                  <li>
                    NOM-035-STPS-2018. Psychosocial risk factors in the
                    workplace — Identification, analysis, and prevention. DOF.
                  </li>
                  <li>
                    Secretaria del Trabajo y Prevision Social. Registro de
                    Prestadoras de Servicios Especializados u Obras
                    Especializadas (REPSE). Operational guidelines.
                  </li>
                  <li>
                    Constitucion Politica de los Estados Unidos Mexicanos.
                    Article 27, section I (restricted zone).
                  </li>
                  <li>
                    AMPIP (Asociacion Mexicana de Parques Industriales
                    Privados). Industrial activity report, 2025.
                  </li>
                  <li>
                    Ley de Migracion and its Regulations. Instituto Nacional de
                    Migracion.
                  </li>
                  <li>
                    United States-Mexico-Canada Agreement (USMCA).
                    Chapter 16: Temporary Entry for Business Persons.
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
              Planning to establish operations in Mexico?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Our team has extensive experience advising international
              companies on their entry into the Mexican market. Contact us
              for an initial consultation.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Schedule a consultation
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
