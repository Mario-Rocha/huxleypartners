import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Labor Compliance in Mexico: NOM-035, NOM-037, and Employer Obligations | Huxley Partners",
  description:
    "Analysis of Mexican official standards NOM-035 and NOM-037, the outsourcing reform, REPSE registration, and key labor obligations for employers.",
};

export default function ArticleCumplimientoLaboral() {
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
              Labor Law
            </span>
            <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Labor Compliance in Mexico: NOM-035, NOM-037, and Employer
              Obligations
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <span>March 15, 2026</span>
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
                Labor compliance in Mexico has become considerably more complex
                in recent years. The enactment of NOM-035 on psychosocial
                risks, NOM-037 on remote work, the 2021 outsourcing reform,
                and successive amendments to the Ley Federal del Trabajo have
                created a regulatory environment that demands specialized
                attention. For employers, lack of awareness of these
                obligations not only generates legal risks but can also result
                in significant fines and reputational damage.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                NOM-035-STPS-2018: Psychosocial risk in the workplace
              </h2>
              <p className="text-text-light leading-relaxed">
                NOM-035, published in the Diario Oficial de la Federacion on
                October 23, 2018, and fully mandatory in all its phases since
                October 2020, establishes the elements for identifying,
                analyzing, and preventing psychosocial risk factors, as well as
                promoting a favorable organizational environment in the
                workplace.
              </p>
              <p className="text-text-light leading-relaxed">
                The psychosocial risk factors this standard seeks to prevent
                include workplace conditions that generate stress (excessive
                workloads, lack of control over work, extended working hours),
                work-family interference, negative leadership, toxic labor
                relationships, and workplace violence in any of its forms.
              </p>
              <p className="text-text-light leading-relaxed">
                Employer obligations vary according to the size of the
                workplace. The standard distinguishes three levels:
              </p>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>
                      Workplaces with up to 15 workers:
                    </strong>{" "}
                    Must establish a psychosocial risk prevention policy, adopt
                    preventive measures, identify workers who have been subject
                    to severe traumatic events, and disseminate information
                    about the prevention policy.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>
                      Workplaces with 16 to 50 workers:
                    </strong>{" "}
                    In addition to the above, must apply questionnaires to
                    identify and analyze psychosocial risk factors.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>
                      Workplaces with more than 50 workers:
                    </strong>{" "}
                    Must also conduct organizational environment assessments,
                    implement documented control measures and actions, and
                    provide medical examinations and psychological evaluations
                    for workers exposed to workplace violence or psychosocial
                    risk factors.
                  </span>
                </li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                NOM-037-STPS-2023: Remote work
              </h2>
              <p className="text-text-light leading-relaxed">
                NOM-037, published in June 2023, regulates safety and health
                conditions for remote work. It applies to all workplaces that
                have workers under the remote work modality, understood as
                those who perform more than 40% of their working time at a
                location other than the employer&apos;s workplace.
              </p>
              <p className="text-text-light leading-relaxed">
                The employer&apos;s main obligations under NOM-037 include:
              </p>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Maintaining an updated list of remote workers that includes
                    name, gender, marital status, activities performed, job
                    profile, address where remote work is performed, and the
                    company name of the workplace.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Establishing and documenting a remote work policy that
                    defines communication mechanisms, schedule duration,
                    supervision methods, and mechanisms for the right to
                    disconnect.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Providing the necessary work tools (computer equipment,
                    ergonomic chairs, printers if required) or establishing
                    financial compensation for the use of the worker&apos;s
                    own resources.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Covering a proportional share of costs arising from remote
                    work, including telecommunications and electricity
                    services.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    Verifying safety and health conditions at the remote work
                    location through a conditions verification checklist that
                    the worker themselves or a committee can validate.
                  </span>
                </li>
              </ul>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Outsourcing reform and REPSE
              </h2>
              <p className="text-text-light leading-relaxed">
                The outsourcing reform of April 2021 was one of the most
                significant labor modifications in decades. The reform
                prohibited personnel outsourcing (placing one&apos;s own
                workers at the disposal of a third party) and only allows the
                outsourcing of specialized services or specialized works that
                are not part of the corporate purpose or the predominant
                economic activity of the beneficiary company.
              </p>
              <p className="text-text-light leading-relaxed">
                Companies offering specialized services must obtain the
                Registro de Prestadoras de Servicios Especializados u Obras
                Especializadas (REPSE) before the Secretaria del Trabajo y
                Prevision Social. This registration must be renewed every three
                years. Additionally, contracting companies must permanently
                verify that their providers have a valid REPSE and are current
                on their tax and social security obligations.
              </p>
              <p className="text-text-light leading-relaxed">
                The consequences of non-compliance are severe. Any individual
                or legal entity that outsources personnel in violation of the
                law can be sanctioned with fines of 2,000 to 50,000 times the
                Unidad de Medida y Actualizacion (UMA). Furthermore, the
                contracting company becomes jointly and severally liable for
                the labor and social security obligations of the
                non-compliant provider&apos;s workers.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Sanctions and inspections
              </h2>
              <p className="text-text-light leading-relaxed">
                The STPS has broad inspection powers to verify compliance with
                labor standards. Inspections can be ordinary (scheduled) or
                extraordinary (triggered by complaints, accidents, or imminent
                risk conditions). During an inspection, inspectors may request
                documentation demonstrating compliance with NOM-035, NOM-037,
                employment contracts, payroll receipts, REPSE registrations,
                and any other applicable labor obligations.
              </p>
              <p className="text-text-light leading-relaxed">
                Fines for non-compliance with Mexican official standards on
                labor matters range from 250 to 5,000 UMAs per affected
                worker. In severe cases, such as violations of outsourcing
                provisions, fines can reach 50,000 UMAs. Additionally, the
                IMSS can impose constitutive capital assessments (retroactive
                charges with adjustments and surcharges) when it detects
                irregularities in worker enrollment or contributions.
              </p>

              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-primary-dark">
                Practical steps for compliance
              </h2>
              <ul className="space-y-3 text-text-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Internal labor audit:</strong> Conduct a
                    comprehensive diagnostic of the current compliance status,
                    identifying gaps in contracts, policies, records, and
                    documentation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>NOM-035 implementation:</strong> Apply the
                    questionnaires from Reference Guide II and III (according
                    to the workplace size), analyze the results, document
                    corrective measures, and follow up on them.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Remote work policy:</strong> If the company has
                    remote workers, formalize the policy in accordance with
                    NOM-037, update individual contracts, and establish
                    condition verification mechanisms.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Provider review:</strong> Verify that all
                    specialized service contracts have a valid REPSE and
                    establish a periodic process for monitoring provider
                    compliance.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Ongoing training:</strong> Train the human
                    resources department and operational managers on current
                    labor obligations and inspection procedures.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2.5 shrink-0" />
                  <span>
                    <strong>Documentation:</strong> Maintain organized and
                    accessible records of all compliance documents, as they
                    will be required in the event of an inspection.
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
                    NOM-035-STPS-2018. Psychosocial risk factors in the
                    workplace — Identification, analysis, and prevention. DOF,
                    October 23, 2018.
                  </li>
                  <li>
                    NOM-037-STPS-2023. Remote work — Safety and health
                    conditions in the workplace. DOF, June 8, 2023.
                  </li>
                  <li>
                    Decree amending, adding, and repealing various provisions
                    of the Ley Federal del Trabajo (outsourcing reform). DOF,
                    April 23, 2021.
                  </li>
                  <li>
                    Secretaria del Trabajo y Prevision Social (STPS).
                    Guidelines for the Registro de Prestadoras de Servicios
                    Especializados u Obras Especializadas (REPSE).
                  </li>
                  <li>
                    Ley Federal del Trabajo. Articles 12-15, 25, 47, 48, 132,
                    and 330-A through 330-K (remote work).
                  </li>
                  <li>
                    IMSS (Instituto Mexicano del Seguro Social). Ley del Seguro
                    Social — Provisions on enrollment, contributions, and
                    constitutive capital assessments.
                  </li>
                  <li>
                    STPS. Reglamento General de Inspeccion del Trabajo y
                    Aplicacion de Sanciones.
                  </li>
                  <li>
                    International Labour Organization (ILO). Guide on
                    psychosocial risks in the workplace — Latin American
                    perspective, 2024.
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
              Need a labor compliance audit?
            </h2>
            <p className="text-text-light mb-8 text-lg leading-relaxed">
              Our labor team helps you identify risks, implement applicable
              standards, and prepare for STPS inspections with confidence.
            </p>
            <Link
              href="/en/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 tracking-wide"
            >
              Request an audit
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
